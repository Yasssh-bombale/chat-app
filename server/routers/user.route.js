import express from "express";
import isAuthenticated from "../middleware/auth.middleware.js";
import { getAllUsers } from "../controllers/user.controller.js";
const router = express.Router();

router.get("/getallusers", isAuthenticated, getAllUsers);

export default router;
