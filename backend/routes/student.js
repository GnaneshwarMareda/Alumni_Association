const {
  getStudentProfile,
  updateStudentProfile,
} = require("../controllers/studentProfile");

const express = requrie("express");
const router = express.Router();

router.get("/", getStudentData);
router.get("/", getStudentProfile);
router.put("/", updateStudentProfile);

module.exports = router;
