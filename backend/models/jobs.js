const jobSchema = new mongoose.Schema({
  title: String,
  company: String,
  skillsRequired: { type: Array, required: false },
  location: String,
  jobType: String, // e.g., "Internship" or "Full-time"
  postedBy: String,
  postedAt: { type: Date, default: Date.now },
});

const Jobs = mongoose.model("jobs", jobSchema);
module.exports = Jobs;
