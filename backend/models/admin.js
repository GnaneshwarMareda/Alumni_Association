const mongoose = require("mongoose");
const adminSchema = new mongoose.Schema({
  Id: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
});

const Admin = mongoose.model("admin", adminSchema);

module.exports = Admin;
