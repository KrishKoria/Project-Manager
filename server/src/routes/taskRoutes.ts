import { Router } from "express";
import {
  createTask,
  getTasks,
  getTasksByUser,
  updateTaskStatus,
} from "../controllers/taskController";

const router = Router();

router.get("/", getTasks);
router.post("/", createTask);
router.patch("/:taskId/status", updateTaskStatus);
router.get("/user/:userId", getTasksByUser);
export default router;
