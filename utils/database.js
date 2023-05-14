import mongoose from "mongoose";
let isConnected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("Already connected to MongoDB");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "blog_db",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
export default connectDB;
