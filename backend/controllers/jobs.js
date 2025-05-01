const Jobs = require("../models/jobs.js");

//Retrieve allJobs
const getVerifiedJobs = async (req, res) => {
  try {
    const jobs = await Jobs.find({ status: "VERIFIED" });
    //console.log(jobs);
    res
      .status(200)
      .json({ message: "Jobs retrieved successfully!", jobs: jobs });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getUnVerifiedJobs = async (req, res) => {
  try {
    const jobs = await Jobs.find({ status: "PENDING" });
    //console.log(jobs);
    res
      .status(200)
      .json({ message: "Jobs retrieved successfully!", jobs: jobs });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateJobStatus = async (req, res) => {
  try {
    const { id, status } = req.body;
    // console.log(req.body);
    await Jobs.updateOne(
      { _id: id },
      {
        $set: {
          status,
        },
      }
    );
    return res.status(200).json({ message: "Successfully changed" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

//Post a new Job
const postJob = async (req, res) => {
  try {
    const { title, company, location, jobType, jobLink } = req.body;
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

//Update Job Reactions (like/dislike)
const updateJob = async (req, res) => {
  try {
    const { id, action } = req.body;

    const job = await Jobs.findById(id);
    if (!job) return res.status(404).json({ message: "Job not found." });

    if (action === "like") {
      job.likes += 1;
    } else if (action === "unlike" && job.likes > 0) {
      job.likes -= 1;
    } else {
      return res.status(400).json({ message: "Invalid action." });
    }

    await job.save();
    res.status(200).json({ message: "Reaction updated", job });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getVerifiedJobs,
  getUnVerifiedJobs,
  postJob,
  updateJob,
  updateJobStatus,
};
