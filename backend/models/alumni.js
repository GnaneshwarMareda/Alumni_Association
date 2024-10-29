const mongoose = require("mongoose");

const alumniSchema = new mongoose.Schema({
  studentId: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  address: { type: String, required: false },
  interests: { type: Array, required: false },
  jobRole: { type: String, requried: false },
  company: { type: String, required: false },
  jobLocation: { type: String, required: false },
});

const Alumni = mongoose.model("alumni", alumniSchema);

module.exports = Alumni;
