const mongoose = require("mongoose");

const alumniSchema = new mongoose.Schema({
  studentId: { type: String, required: true },
  name: { type: String, required: true },
  degree: { type: String, required: false },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  interests: { type: Array, required: false },
  graduationYear: { type: String, required: true },
  fieldOfStudy: { type: String, required: true },
  jobRole: { type: String, requried: false },
  company: { type: String, required: false },
  location: { type: String, required: false },
  successStories: { type: Array, required: false },
});

const Alumni = mongoose.model("alumni", alumniSchema);

module.exports = Alumni;
