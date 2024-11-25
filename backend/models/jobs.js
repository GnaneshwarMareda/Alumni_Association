const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  jobType: { type: String, required: true }, // e.g., "Internship" or "Full-time"
  postedBy: { type: String, required: true },
  postedAt: { type: Date, default: Date.now() },
});

const Jobs = mongoose.model("jobs", jobSchema);
module.exports = Jobs;
