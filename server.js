const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { routeController } = require("./Router");

require("dotenv").config();
const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json({ limit: "10mb" }));

app.post("/test", async (request, response) => {
  return response.json("Working ....");
});

app.get("/test", async (request, response) => {
  return response.json("Working ...");
});

app.use(routeController);

app.listen(process.env.PORT, async () => {
  try {
    await mongoose.connect("mongodb+srv://shubham:1234@cluster0.x7bb92q.mongodb.net/E-commerce");
    console.log(`server is running on  ${process.env.PORT}`);
  } catch (error) {
    console.log("server error", error);
  }
});
