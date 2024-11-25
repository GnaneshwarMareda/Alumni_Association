const express = require("express");
const router = express.Router();

const loginRouter = require("./login");
const registerRouter = require("./register");
const alumniRouter = require("./alumni");
const postJobRouter = require("./careers");

router.use("/register", registerRouter);
router.use("/login", loginRouter);
router.use("/alumni", alumniRouter);
// router.use("/student", studentProfileRouter);
router.use("/careers", postJobRouter);

module.exports = router;
