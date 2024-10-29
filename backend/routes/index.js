const express = require("express");
const router = express.Router();
const loginRouter = require("./login");
const registerRouter = require("./register");
const alumniRouter = require("./alumni");

router.use("/login", loginRouter);
router.use("/register", registerRouter);
router.use("/alumni-data", alumniRouter);

module.exports = router;
