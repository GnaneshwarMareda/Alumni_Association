const express = require("express");
const cors = require("cors");
const connectMongoDB = require("./connection");

const router = require("./routes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.get("/", async (req, res) => {
  res.status(200).json({ message: "Hello World!.." });
});

const MongoURL = "mongodb://localhost:27017/";

const startServer = () => {
  connectMongoDB(MongoURL);
  app.listen(8000, () => console.log("Server Running on port NO: 8000"));
};

startServer();
