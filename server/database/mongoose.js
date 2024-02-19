import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "chat-app",
    });
    console.log(`connected to MongoDB`);
  } catch (error) {
    console.log(`ERROR:while connecting to MongoDB`, error);
  }
};

export default connectToMongoDB;
