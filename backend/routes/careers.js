const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/verifyToken");

const { postJob } = require("../controllers/postJob");

router.post("/postjob", postJob);

module.exports = router;
