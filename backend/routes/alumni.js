const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/verifyToken");

const {
  getAlumniData,
  getAlumniProfile,
  updateAlumniProfile,
} = require("../controllers/alumni");

// Alumni routes
router.get("/directory", getAlumniData);
router.get("/profile/:id", getAlumniProfile);
router.put("/profile/:id", updateAlumniProfile);

module.exports = router;
