const express = require("express");
const { verifyPassword } = require("../utils/passwordHashing");
const router = express.Router();

router.post("/student", async (req, res) => {
  try {
    const { userId, password, role } = req.body;

    const user = await Student.findOne({ userId });

    if (!user) {
      res.status(400).json({ message: "Invalid Login." });
      return;
    }

    const isValidPassword = await verifyPassword(password, user.password);
    if (isValidPassword) {
      const jwtToken = generateJwtToken(userId, role);
      return res.status(201).json({ jwtToken });
    }

    res.status(400).json({ message: "Invalid credentials" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/alumni", async (req, res) => {
  try {
    const { userId, password, role } = req.body;

    const user = await Alumni.findOne({ userId });

    if (!user) {
      res.status(400).json({ message: "Invalid Login." });
      return;
    }

    const isValidPassword = await verifyPassword(password, user.password);
    if (isValidPassword) {
      const jwtToken = generateJwtToken(userId, role);
      return res.status(201).json({ jwtToken });
    }

    res.status(400).json({ messag: "Invalid credentials" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
