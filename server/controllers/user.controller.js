import errorHandler from "../middleware/errorHandler.js";
import User from "../models/user.model.js";

export const getAllUsers = async (req, res, next) => {
  try {
    const { id: loggedInUserId } = req.user;
    const users = await User.find({ _id: { $ne: loggedInUserId } }).select(
      "-password"
    ); //$ne is used because it will return all users except loggedInUser because we dont want to allow users to chat with user himself
    if (!users) return next(errorHandler(404, "No users found!"));
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
