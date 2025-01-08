const { Student, Admin, Alumni } = require("../models");

const express = require("express");
const router = express.Router();

const { verifyPassword } = require("../utils/passwordHashing");
const generateJwtToken = require("../utils/generateJwtToken");

router.post("/user", async (req, res) => {
  try {
    const { userId, password, role } = req.body;
    console.log(userId, password, role);

    let user = null;

    if (role === "student") user = await Student.findOne({ Id: userId });
    else if (role === "admin") user = await Admin.findOne({ Id: userId });
    else if (role === "alumni") user = await Alumni.findOne({ Id: userId });
    else return res.status(400).json({ message: "No matching role found.." });

    if (!user) {
      res.status(400).json({ message: "Invalid Login." });
      return;
    }

    const isValidPassword = await verifyPassword(password, user.password);

    if (isValidPassword) {
      const jwtToken = generateJwtToken(userId, role);
      return res.status(201).json({ message: "Login Succesfull!", jwtToken });
    }

    res.status(400).json({ message: "Invalid credentials" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
