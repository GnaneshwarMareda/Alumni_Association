const express = require("express");
const { getAlumniData } = require("../controllers/alumniData");
const {
  updateAlumniProfile,
  getAlumniProfile,
} = require("../controllers/alumniProfile");
const router = express.Router();

router.get("/", getAlumniData);
router.get("/profile", getAlumniProfile);
router.put("/", updateAlumniProfile);

module.exports = router;
