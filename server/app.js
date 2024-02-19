import express from "express";
import dotenv from "dotenv";
import userRouter from "./routers/user.route.js";
import authRouter from "./routers/auth.route.js";
export const app = express();
dotenv.config({
  path: ".env",
});

app.use(express.json()); //accepting json payloads;
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
