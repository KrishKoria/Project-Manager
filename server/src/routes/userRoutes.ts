import { Router } from "express";
import {
  createUser,
  getUserByCognitoId,
  getUsers,
} from "../controllers/userController";

const router = Router();

router.get("/", getUsers);
router.post("/", createUser);
router.get("/:cognitoId", getUserByCognitoId);
export default router;
