const mongoose = require("mongoose");

const alumniSchema = new mongoose.Schema({
  Id: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  personalEmail: { type: String, required: true },
  mobile: { type: String, required: true },
  graduationYear: { type: String, required: true },
  fieldOfStudy: { type: String, required: true },
  address: String,
  degree: String,
  jobRole: String,
  company: String,
  location: String,
  interests: [String],
  profilePicture: String,

  // Networking
  connections: [{ type: String }],
  pendingRequests: [{ type: String }],
  sentRequests: [{ type: String }],
});

module.exports = mongoose.model("Alumni", alumniSchema);
