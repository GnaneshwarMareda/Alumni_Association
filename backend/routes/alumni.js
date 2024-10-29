const express = require("express");
const { getAlumniData } = require("../controllers/alumniData");
const { updateAlumniProfile } = require("../controllers/alumniProfile");
const router = express.Router();

router.get("/", getAlumniData);
router.put("/", updateAlumniProfile);

module.exports = router;
