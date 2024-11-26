const Jobs = require("../models/jobs.js");

const getJobs = async (req, res) => {
  try {
    const jobs = await Jobs.find({});
    res.status(200).json({ message: "Job posted successfully!", data: jobs });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const postJob = async (req, res) => {
  try {
    const { title, company, location, jobType } = req.body;
    const newJob = await Jobs.create({
      title,
      company,
      location,
      jobType,
      jobLink,
    });
    res.status(201).json({ message: "Job posted successfully!" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateJob = async (req, res) => {
  try {
    const { id, reactionType } = req.body;
    if (reactionType === "like") {
      const updatedJob = await Jobs.findByIdAndUpdate(id, {
        $inc: { likes: 1 },
      });
    } else if (reactionType === "dislike") {
      const updatedJob = await Jobs.findByIdAndUpdate(id, {
        $inc: { dislikes: 1 },
      });
    } else {
      return res.status(400).json({ message: "Invalid reaction type." });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { getJobs, postJob, updateJob };
