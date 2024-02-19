import User from "../models/user.model.js";
import errorHandler from "./errorHandler.js";
import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return next(errorHandler(403, "Unauthorized request"));
    }

    jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
      if (error) return next(errorHandler(403, "Unauthorized request"));

      req.user = user;

      next();
    });
  } catch (error) {
    next(error);
  }
};

export default isAuthenticated;
