const express = require("express");
const router = express.Router();
const { Student, Alumni } = require("../models");

router.put("/promote-students", async (req, res) => {
  console.log(req.body);
  try {
    const { year } = req.body;
    const formattedYear = parseInt(year);
    if (formattedYear === 4) {
      const finalYearStudents = await Student.find({
        yearOfStudy: formattedYear,
      });

      if (finalYearStudents.length === 0) {
        return res
          .status(404)
          .json({ message: "No final-year students found to promote." });
      }

      // Insert final-year students into Alumni collection
      const alumniInsertResult = await Alumni.insertMany(finalYearStudents);

      if (!alumniInsertResult || alumniInsertResult.length === 0) {
        return res
          .status(500)
          .json({ message: "Failed to migrate students to Alumni." });
      }

      // Delete final-year students from Student collection
      await Student.deleteMany({ yearOfStudy: formattedYear });

      return res.status(200).json({
        message: `${finalYearStudents.length} final-year students promoted to Alumni.`,
      });
    } else {
      // Promote other students
      const result = await Student.updateMany(
        { yearOfStudy: year },
        {
          $set: {
            yearOfStudy: formattedYear + 1,
          },
        }
      );

      if (result.modifiedCount === 0) {
        return res.status(404).json({
          message: "No students found to promote for the provided year.",
        });
      }

      return res.status(200).json({
        message: `${result.modifiedCount} students promoted successfully.`,
      });
    }
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

module.exports = router;
