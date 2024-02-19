import express from "express";
import { sendMsg } from "../controllers/message.controller.js";
import isAuthenticated from "../middleware/auth.middleware.js";
const router = express.Router();

router.post("/send/:id", isAuthenticated, sendMsg);

export default router;
