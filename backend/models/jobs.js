const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: false },
  jobType: { type: String, required: true }, // e.g., "Internship" or "Full-time"
  jobLink: { type: String, required: true },
  postedBy: { type: String, required: true, default: "Anonymous" },
  posterProfile: { type: String, default: "https://via.placeholder.com/50" },
  postedAt: { type: Date, default: Date.now() },
  likes: { type: Number, default: 0 },
  status: { type: String },
});

const Jobs = mongoose.model("jobs", jobSchema);
module.exports = Jobs;
