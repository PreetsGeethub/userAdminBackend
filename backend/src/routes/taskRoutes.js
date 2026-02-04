const express = require("express");
const auth = require("../middlewares/authMiddleware");
const {
  getTasks,
  createTask,
  deleteTask,
  updateTask
} = require("../controllers/taskController");

const router = express.Router();

router.use(auth);

router.get("/", getTasks);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
