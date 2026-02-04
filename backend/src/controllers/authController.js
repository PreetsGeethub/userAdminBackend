const pool = require("../db/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config()
const AppError = require("../errors/AppError")
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 1. Basic validation
    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // 2. Check if user already exists
    const userExists = await pool.query(
      "SELECT id FROM users WHERE email = $1",
      [email]
    );

    if (userExists.rows.length > 0) {
      return res.status(409).json({ error: "Email already registered" });
    }

    // 3. Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4. Insert user
    await pool.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)",
      [name, email, hashedPassword]
    );

    // 5. Success response
    res.status(201).json({ message: "User registered successfully" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};


exports.login = async(req,res,next)=>{
    try {
        const {email,password} = req.body;

        if(!email || !password){
            throw new AppError("Name or Email is Required",404);
        }


        //finding user
        const result = await pool.query(
            "SELECT id,password,role from users WHERE email = $1",[email]
        );

        if(result.rows.length===0){
            throw new AppError("Invalid credentials", 401);
        }

        //comparing the passwords
        const user = result.rows[0];
        const isMatch = await bcrypt.compare(password,user.password);

        if(!isMatch){
            throw new AppError("Invalid credentials", 401);
        }

         // Generate JWT
    const token = jwt.sign(
        { userId: user.id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
  
      // Send token
      res.json({ token });
    } catch (error) {
       next(error);
    }
}
;