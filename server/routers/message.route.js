import express from "express";
import { getMsg, sendMsg } from "../controllers/message.controller.js";
import isAuthenticated from "../middleware/auth.middleware.js";
const router = express.Router();

router.get("/:id", isAuthenticated, getMsg);
router.post("/send/:id", isAuthenticated, sendMsg);
export default router;
