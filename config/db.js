import mongoose from "mongoose";

// Connect to MongoDB using the URI from environment variables
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error(`MongoDB connection failed: ${error.message}`);
  }
};

export default connectDB;
