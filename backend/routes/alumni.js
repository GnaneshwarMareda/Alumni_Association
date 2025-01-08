const express = require("express");
const router = express.Router();
const {
  verifyAlumniToken,
  verifyStudentToken,
  verifyAlumniAdminStudent,
} = require("../middlewares/verifyToken");

const {
  getAlumniData,
  getAlumniProfile,
  updateAlumniProfile,
  getAlumniSimilarMatches,
} = require("../controllers/alumni");

// Alumni routes
router.get("/directory", verifyAlumniAdminStudent, getAlumniData);
router.get("/profile/:id", verifyAlumniToken, getAlumniProfile);
router.put("/profile/:id", verifyAlumniToken, updateAlumniProfile);
router.get(
  "/similar-matches",
  verifyAlumniAdminStudent,
  getAlumniSimilarMatches
);

module.exports = router;
