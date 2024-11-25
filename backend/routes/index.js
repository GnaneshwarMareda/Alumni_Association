const express = require("express");
const router = express.Router();
const loginRouter = require("./login");
const registerRouter = require("./register");
const alumniRouter = require("./alumni");

router.use("/register", registerRouter);
router.use("/login", loginRouter);
router.use("/alumni", alumniRouter);
// router.use("/student", studentProfileRouter);

module.exports = router;
