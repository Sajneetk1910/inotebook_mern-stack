const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/inotebook";
const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  }
};
module.exports = connectToMongo;
