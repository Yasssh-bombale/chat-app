import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
  const { fullname, username, password, confirmPassword, gender } = req.body;

  if (!fullname || !username || !password || !confirmPassword || !gender) {
    return res.status(400).json({
      success: false,
      message: "all fields are required",
    });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ error: "password not match" });
  }

  if (password && password.length < 6) {
    return res
      .status(400)
      .json({ error: "password must be greater than 6 characters" });
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
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      res.status(201).cookie("token", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true, //protected from xss attacks cross site scripting attacks;
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "developement", //production purpose;
      });
    }

    return res.status(201).json({
      fullname: newUser.fullname,
      username: newUser.username,
      gender: newUser.gender,
      profilePicture: newUser.profilePicture,
    });
  } catch (error) {
    console.log(error);
  }
};

export const signIn = (req, res) => {};

export const signOut = (req, res) => {};
