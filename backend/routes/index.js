const express = require("express");
const router = express.Router();

const registerRouter = require("./register");
const loginRouter = require("./login");
const profileRouter = require("./profile");
const adminRouter = require("./admin");
const alumniRouter = require("./alumni");
const studentRouter = require("./student");
const careersRouter = require("./careers");
const eventRouter = require("./events");
const successStoriesRouter = require("./successStories");
const donationRouter = require("./donation");
const networkHubRouter = require("./networkHub");

router.use("/register", registerRouter);
router.use("/login", loginRouter);
router.use("/profile", profileRouter);

router.use("/admin", adminRouter);
router.use("/alumni", alumniRouter);
router.use("/student", studentRouter);

router.use("/careers", careersRouter);

router.use("/events", eventRouter);

router.use("/success-stories", successStoriesRouter);

router.use("/donation", donationRouter);

router.use("/networkhub", networkHubRouter);

module.exports = router;
