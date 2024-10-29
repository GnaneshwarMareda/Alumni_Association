const Alumni = require("../models/alumni");

const getAlumniProfile = async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ message: "UserId is required." });
    }

    const alumniProfile = await Alumni.findOne({ userId });

    if (!studentData) {
      return res.status(404).json({ message: "Student not found." });
    }

    return res.status(200).json({
      message: "Student data retrieved successfully.",
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

module.exports = { getAlumniProfile, updateAlumniProfile };
