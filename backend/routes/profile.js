const express = require("express");
const router = express.Router();
const Alumni = require("../models/alumni");
const Student = require("../models/students");

// GET Profile
router.get("/:role/:id", async (req, res) => {
  try {
    const { role, id } = req.params;
    const Model = role === "alumni" ? Alumni : Student;
    const data = await Model.findOne({ Id: id }).lean();
    if (!data)
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// UPDATE Profile
router.put("/:role/:id", async (req, res) => {
  try {
    const { role, id } = req.params;
    const Model = role === "alumni" ? Alumni : Student;
    const updated = await Model.findOneAndUpdate({ Id: id }, req.body, {
      new: true,
    });
    if (!updated)
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    res.json({ success: true, message: "Profile updated" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
