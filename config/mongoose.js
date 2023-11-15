import mongoose from "mongoose";
import "dotenv/config";

export const connectToMongo = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://katuechanca:NHjSQKZ3LXUzQ8Is@fullstack.vizt9gs.mongodb.net/"
    );
    console.log("Successfully connected to Mongo");
  } catch (err) {
    console.log("Failed to connect Mongo with error: " + err);
  }
};
