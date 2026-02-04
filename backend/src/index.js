const express = require("express");
const pool = require("./db/db");
const authRoutes = require("./routes/authRoutes")
const taskRoutes = require("./routes/taskRoutes")
const app = express();
app.use(express.json()); 
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/tasks",taskRoutes);
app.get("/health", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ status: "OK", time: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
