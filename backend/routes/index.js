const express = require("express");
const router = express.Router();

const registerRouter = require("./register");
const loginRouter = require("./login");
const adminRouter = require("./admin");
const alumniRouter = require("./alumni");
const studentRouter = require("./student");
const careersRouter = require("./careers");
const eventRouter = require("./events");
const successStoriesRouter = require("./successStories");
const donationRouter = require("./donation");

router.use("/register", registerRouter);
router.use("/login", loginRouter);

//router.use("/admin", adminRouter);
router.use("/alumni", alumniRouter);
router.use("/student", studentRouter);

router.use("/careers", careersRouter);

router.use("/events", eventRouter);

router.use("/success-stories", successStoriesRouter);

router.use("/admin", adminRouter);

router.use("/donation", donationRouter);

module.exports = router;
