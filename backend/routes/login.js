const express = require("express");
const router = express.Router();

router.post("/student", async (req, res) => {
  res.json({ message: "Logged in.." });
});

router.post("/alumni", async (req, res) => {
  res.json({ message: "Logged in..." });
});

module.exports = router;
