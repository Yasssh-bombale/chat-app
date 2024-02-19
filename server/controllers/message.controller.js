import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMsg = async (req, res, next) => {
  const { id: senderId } = req.user;
  const { id: recieverId } = req.params;
  const { message } = req.body;
  try {
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, recieverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, recieverId],
      });
    }
    const newMessage = await Message.create({
      senderId,
      recieverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    await conversation.save();
    return res.status(201).json(newMessage);
  } catch (error) {
    next(error);
  }
};
