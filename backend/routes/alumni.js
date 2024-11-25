const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/verifyToken");

const { getAlumniData } = require("../controllers/alumniData");
const {
  updateAlumniProfile,
  getAlumniProfile,
} = require("../controllers/alumniProfile");

router.get("/", getAlumniData);
router.get("/profile", getAlumniProfile);
router.put("/", updateAlumniProfile);

module.exports = router;
