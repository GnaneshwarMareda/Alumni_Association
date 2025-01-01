const express = require("express");
const router = express.Router();
const {
  verifyAlumniToken,
  verifyStudentToken,
} = require("../middlewares/verifyToken");

const {
  getAlumniData,
  getAlumniProfile,
  updateAlumniProfile,
  getAlumniSimilarMatches,
} = require("../controllers/alumni");

// Alumni routes
router.get("/directory", verifyStudentToken, getAlumniData);
router.get("/profile/:id", verifyAlumniToken, getAlumniProfile);
router.put("/profile/:id", verifyAlumniToken, updateAlumniProfile);
router.get("/similar-matches", verifyStudentToken, getAlumniSimilarMatches);

module.exports = router;
