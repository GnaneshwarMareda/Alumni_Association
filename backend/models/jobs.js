const jobSchema = new mongoose.Schema({
  title: String,
  description: String,
  skillsRequired: [String],
  jobType: String, // e.g., "Internship" or "Full-time"
  location: String,
  applicationDeadline: Date,
  postedBy: String,
  postedAt: { type: Date, default: Date.now },
});

const Jobs = mongoose.model("jobs", Jobs);
module.exports = Payment;
