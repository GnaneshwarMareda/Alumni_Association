const Alumni = require("../models/alumni");

const getAlumniData = async (req, res) => {
  try {
    const { branch, graduationYear, userId, name } = req.query;

    const filter = {};
    if (branch) filter.branch = branch;
    if (graduationYear) filter.graduationYear = graduationYear;
    if (userId) filter.userId = userId;
    if (name) filter.name = new RegExp(name, "i");

    const data = await Alumni.find(filter);

    console.log(data);
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

module.exports = { getAlumniData };
