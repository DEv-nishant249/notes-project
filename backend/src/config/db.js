import mongoose from "mongoose";
import path from 'path'
let current = path.resolve()
export const connectDB = async () => {
  try {
    console.log(current)
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MONGODB CONNECTED SUCCESSFULLY!");
  } catch (error) {
    console.error("Error connecting to MONGODB", error);
    process.exit(1); // exit with failure
  }
};
