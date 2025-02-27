import mongoose from "mongoose";

export default async function connectDB() {
  mongoose.connect(process.env.DB_CONNECTION);

  return mongoose.connection;
}
