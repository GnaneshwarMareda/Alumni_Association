const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.get("/", async (req, res) => {
//   return res.status(200).json({ message: "Hello World!.." });
// });

const routes = require("./routes/index.js");
app.use("/", routes);

const connectMongoDB = require("./connection");
const MongoURL = "mongodb://localhost:27017/alumniconnect";
const startServer = () => {
  connectMongoDB(MongoURL);
  app.listen(8000, () => console.log("Server Running on port NO: 8000"));
};
startServer();
