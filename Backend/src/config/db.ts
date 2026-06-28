import config from "./config.js";
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const mongoUri = config.MONGO_URI;
    if (!mongoUri) {
      throw new Error("MONGO_URI is not defined");
    }
    await mongoose.connect(mongoUri);
    console.log("Connect to DB");
  } catch (error) {
    console.error("Connection Failed:", error);
    process.exit(1);
  }
};
