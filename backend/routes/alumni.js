const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/verifyToken");

const {
  getAlumniData,
  getAlumniProfile,
  updateAlumniProfile,
  getAlumniSimilarMatches,
} = require("../controllers/alumni");

// Alumni routes
router.get("/directory", getAlumniData);
router.get("/profile/:id", getAlumniProfile);
router.put("/profile/:id", updateAlumniProfile);
router.get("/similar-matches", getAlumniSimilarMatches);

module.exports = router;
