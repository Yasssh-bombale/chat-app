import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRouter from "./routers/user.route.js";
import authRouter from "./routers/auth.route.js";
import messageRouter from "./routers/message.route.js";
export const app = express();
dotenv.config({
  path: ".env",
});

app.use(express.json()); //accepting json payloads;
app.use(cookieParser());
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/message", messageRouter);

// custom errorHandling;
app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal server error";
  return res.status(statusCode).json({
    success: false,
    message,
  });
});
