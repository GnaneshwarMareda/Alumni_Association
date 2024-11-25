const Jobs = require("../models/jobs.js");

const postJob = (req, res) => {
  try {
    const { title, company, location, jobType } = req.body;
    const postedBy = "Anonymous";
    const postedAt = Date.now();

    const newJob = Jobs.create({
      title,
      company,
      location,
      jobType,
      postedBy,
      postedAt,
    });
    res.status(201).json({ message: "Job posted successfully!" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { postJob };
