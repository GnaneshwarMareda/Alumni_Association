const express = require("express");
const router = express.Router();

const registerRouter = require("./register");
const loginRouter = require("./login");
const adminRouter = require("./admin");
const alumniRouter = require("./alumni");
const studentProfileRouter = require("./student");
const postJobRouter = require("./careers");
const eventRouter = require("./events");
const successStoriesRouter = require("./successStories");

router.use("/register", registerRouter);
router.use("/login", loginRouter);

//router.use("/admin", adminRouter);
router.use("/alumni", alumniRouter);
//router.use("/student", studentProfileRouter);

router.use("/careers", postJobRouter);

router.use("/events", eventRouter);

router.use("/success-stories", successStoriesRouter);

module.exports = router;
