import express from "express";
import dotenv from "dotenv";
import userRouter from "./routers/user.route.js";
import authRouter from "./routers/auth.route.js";
import cookieParser from "cookie-parser";
export const app = express();
dotenv.config({
  path: ".env",
});

app.use(express.json()); //accepting json payloads;
app.use(cookieParser());
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

// custom errorHandling;
app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal server error";
  return res.status(statusCode).json({
    success: false,
    message,
  });
});
