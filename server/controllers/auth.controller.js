import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import generateToken from "../utils/generateToken.js";
import errorHandler from "../middleware/errorHandler.js";

export const signUp = async (req, res, next) => {
  const { fullname, username, password, confirmPassword, gender } = req.body;

  if (!fullname || !username || !password || !confirmPassword || !gender) {
    return next(errorHandler(400, "All fields are required"));
  }

  if (password && password.length < 6) {
    return next(
      errorHandler(400, "password must be greater than 6 characters")
    );
  }
  if (password !== confirmPassword) {
    return next(errorHandler(400, "password does not match"));
  }

  const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
  const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

  try {
    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: "user already exists" });
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = await User.create({
      fullname,
      username,
      password: hashedPassword,
      gender,
      profilePicture: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      generateToken(newUser._id, res);
    }

    return res.status(201).json({
      fullname: newUser.fullname,
      username: newUser.username,
      gender: newUser.gender,
      profilePicture: newUser.profilePicture,
    });
  } catch (error) {
    next(error);
  }
};

export const signIn = async (req, res) => {
  const { username, password } = req.body;
};

export const signOut = (req, res) => {};
