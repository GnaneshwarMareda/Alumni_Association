const Alumni = require("../models/alumni");
const axios = require("axios");

const getAlumniData = async (req, res) => {
  try {
    // const { fieldOfStudy, graduationYear, userId, name } = req.query;

    const data = await Alumni.find();
    //console.log(data);
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
  const { graduationYear, company, fieldOfStudy } = req.body;

  try {
    // Send input to ML service
    const response = await axios.post("http://localhost:8001/predict", {
      graduationYear,
      company,
      fieldOfStudy,
    });

    const ids = response.data.similar_alumni_ids;
    //console.log("ML response:", ids);

    if (!ids || !Array.isArray(ids)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid ML response" });
    }

    // Fetch matching alumni profiles
    const similarAlumni = await Alumni.find({ _id: { $in: ids } });

    res.json({ success: true, data: similarAlumni });
  } catch (err) {
    console.error("Error fetching similar alumni:", err.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getAlumniProfile = async (req, res) => {
  try {
    const { id } = req.params;
    //console.log(id);

    if (!id) {
      return res.status(400).json({ message: "UserId is required." });
    }

    const alumniProfile = await Alumni.findOne({ _id: id });

    if (!alumniProfile) {
      return res.status(404).json({ message: "Alumni not found." });
    }

    return res.status(200).json({
      message: "Alumni data retrieved successfully.",
      data: alumniProfile,
    });
  } catch (error) {
    //console.error("Error fetching student profile:", error);
    return res
      .status(500)
      .json({ message: "An error occurred while retrieving  data." });
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
