const pool = require("../db/db");
const AppError = require("../errors/AppError");




exports.getTasks = async (req, res, next) => {
  try {
    let result;

    if (req.user.role === "admin") {
      result = await pool.query("SELECT * FROM tasks");
    } else {
      result = await pool.query(
        "SELECT * FROM tasks WHERE user_id = $1",
        [req.user.userId]
      );
    }

    res.json(result.rows);
  } catch (err) {
    next(err);
  }
};

exports.createTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    if (!title) {
      throw new AppError("Title is required", 400);
    }

    await pool.query(
      "INSERT INTO tasks (title, description, user_id) VALUES ($1, $2, $3)",
      [title, description, req.user.userId]
    );

    res.status(201).json({ message: "Task created" });
  } catch (err) {
    next(err);
  }
};

exports.updateTask = async (req,res,next)=>{
    try {
        const taskId = req.params.id;
        const {title, description} = req.body;
        if (!title) {
            throw new AppError("Title is required", 400);
          }
        const taskResult = await pool.query("SELECT * FROM tasks WHERE id = $1",[taskId])

        if(taskResult.rows.length===0){
            throw new AppError("Task not found",400);
        }

        const task = taskResult.rows[0];

        if (req.user.role !== "admin" && task.user_id !== req.user.userId) {
            throw new AppError("Not authorized to update this task", 403);
          }
          
          await pool.query(
            "UPDATE tasks SET title = $1, description = $2 WHERE id = $3",
            [title || task.title, description || task.description, taskId]
          );

          res.json({message:"Task Updated SuccesFully"})

    } catch (error) {
        next(error);
    }
}
exports.deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    await pool.query(
      "DELETE FROM tasks WHERE id = $1 AND user_id = $2",
      [id, req.user.userId]
    );

    res.json({ message: "Task deleted" });
  } catch (err) {
    next(err);
  }
};
