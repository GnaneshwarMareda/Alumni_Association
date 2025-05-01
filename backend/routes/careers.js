const express = require("express");
const router = express.Router();
const {
  verifyAlumniToken,
  verifyStudentToken,
} = require("../middlewares/verifyToken");

const {
  postJob,
  updateJob,
  getVerifiedJobs,
  getUnVerifiedJobs,
  updateJobStatus,
} = require("../controllers/jobs");

router.get("/jobs/admin", getUnVerifiedJobs);
router.get("/jobs/students", verifyStudentToken, getVerifiedJobs);
router.put("/jobs/admin", updateJobStatus);
router.post("/jobs/postjob", postJob);
router.post("/jobs/react", updateJob);

module.exports = router;
