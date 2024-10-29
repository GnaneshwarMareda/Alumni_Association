const express = require("express");
const router = express.Router();

router.post("/student", async (req, res) => {
  try {
    const { userId, name, password, email, domain_email } = req.body;
    const existingUserId = await Student.findOne({ userId });

    if (existingUserId) {
      return res.status(300).json({ message: "User Already Exists." });
    }
    const newUser = new Student({
      userId,
      name,
      password,
      email,
      domain_email,
    });
    await newUser.save();
    res.status(200).json({ message: "Registration Successful" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/alumni", async (req, res) => {
  try {
    const { userId, name, password, email, domain_email } = req.body;
    const existingUserId = await Alumni.findOne({ userId });

    if (existingUserId) {
      return res.status(300).json({ message: "User Already Exists." });
    }
    const newUser = new Alumni({
      userId,
      name,
      password,
      email,
      domain_email,
    });
    await newUser.save();
    res.status(200).json({ message: "Registration Successful" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
