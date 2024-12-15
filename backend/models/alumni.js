const mongoose = require("mongoose");

const alumniSchema = new mongoose.Schema({
  Id: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, default: "alumni", required: true },
  name: { type: String, required: true },
  personalEmail: { type: String, required: true },
  universityEmail: { type: String, required: true },
  mobile: { type: String, required: true },
  graduationYear: { type: String, required: true },
  fieldOfStudy: { type: String, required: true },

  address: { type: String, required: false },
  interests: { type: Array, required: false },
  degree: { type: String, required: false },
  interests: { type: Array, required: false },
  jobRole: { type: String, requried: false },
  company: { type: String, required: false },
  location: { type: String, required: false },
  successStories: { type: Array, required: false },
});

const Alumni = mongoose.model("alumni", alumniSchema);

module.exports = Alumni;
