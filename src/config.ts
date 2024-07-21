import mongoose from "mongoose";

const DB_URI =
  "mongodb+srv://March:W6PC1Uz3J42n7uoJ@clusterteja.emnhjbo.mongodb.net/?retryWrites=true&w=majority";

export const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error", error);
  }
};
