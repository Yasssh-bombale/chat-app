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

export const getMsg = async (req, res, next) => {
  const { id: userToChatId } = req.params;
  const { id: senderId } = req.user;

  try {
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages"); //conversation have messages[] array in which we stored only message id we dont know content of message ; the populate("messages") will return the document of that id which is an message model ;message model contains senderId and recieverId and  main message [content]
    if (!conversation) {
      return res.status(200).json([]);
    }
    const message = conversation.messages;
    return res.status(200).json(message);
  } catch (error) {
    next(error);
  }
};
