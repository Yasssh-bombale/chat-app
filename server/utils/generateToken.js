import jwt from "jsonwebtoken";

const generateToken = (userId, res) => {
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET);
  return res.status(201).cookie("token", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true, //protected from xss attacks cross site scripting attacks;
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "developement", //production purpose;
  });
};

export default generateToken;
