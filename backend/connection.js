const mongoose = require("mongoose");

const connectMongoDb = async (url) => {
  mongoose
    .connect(url)
    .then(() => console.log("Database Connected!"))
    .catch((err) => console.log("Error: " + err));
};

module.exports = connectMongoDb;
