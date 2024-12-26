import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to MongoDb");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("helo World");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
