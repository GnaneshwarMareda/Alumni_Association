const Alumni = require("../models/alumni");

const getAlumniData = async (req, res) => {
  try {
    const { fieldOfStudy, graduationYear, userId, name } = req.query;

    const data = await Alumni.find();
    return res
      .status(200)
      .json({ message: "Data retrieved successfully.", data });
  } catch (error) {
    console.error("Error fetching data:", error);
    return res
      .status(500)
      .json({ message: "An error occurred while retrieving data." });
  }
};

const getAlumniSimilarMatches = async (req, res) => {
  try {
    const { fieldOfStudy, graduationYear, company } = req.query;

    const filter = [];
    if (fieldOfStudy) filter.push({ fieldOfStudy });
    if (graduationYear) filter.push({ graduationYear });
    if (company) filter.push({ company });

    const query = filter.length > 0 ? { $or: filter } : {};

    const data = await Alumni.find(query);

    return res
      .status(200)
      .json({ message: "Data retrieved successfully", data });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getAlumniProfile = async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ message: "UserId is required." });
    }

    const alumniProfile = await Alumni.findOne({ userId });

    if (!alumniProfile) {
      return res.status(404).json({ message: "Alumni not found." });
    }

    return res.status(200).json({
      message: "Alumni data retrieved successfully.",
      data: alumniProfile,
    });
  } catch (error) {
    console.error("Error fetching student profile:", error);
    return res
      .status(500)
      .json({ message: "An error occurred while retrieving student data." });
  }
};

const updateAlumniProfile = async (req, res) => {
  try {
    const { userId, jobRole, jobLocation } = req.body;

    if (!userId) {
      return res.status(400).json({ message: "UserId is required." });
    }

    const updateData = {};
    if (jobRole) updateData.jobRole = jobRole;
    if (jobLocation) updateData.jobLocation = jobLocation;

    const result = await Alumni.updateOne({ userId }, { $set: updateData });

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "Alumni not found." });
    }

    return res
      .status(200)
      .json({ message: "Job details updated successfully." });
  } catch (error) {
    console.error("Error updating job details:", error);
    return res
      .status(500)
      .json({ message: "An error occurred while updating job details." });
  }
};

module.exports = {
  getAlumniData,
  getAlumniProfile,
  updateAlumniProfile,
  getAlumniSimilarMatches,
};
