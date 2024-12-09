const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/verifyToken");

const { getJobs, postJob, updateJob } = require("../controllers/jobs");

router.get("/jobs", getJobs);
router.post("/jobs/postjob", postJob);
router.patch("/jobs:id", updateJob);

module.exports = router;
