const express = require("express");
const router = express.Router();

const { verifyStudentToken } = require("../middlewares/verifyToken");

const {
  getStudentProfile,
  updateStudentProfile,
} = require("../controllers/students");

//router.get("/", getStudentData);
router.get("/", verifyStudentToken, getStudentProfile);
router.put("/", verifyStudentToken, updateStudentProfile);

module.exports = router;
