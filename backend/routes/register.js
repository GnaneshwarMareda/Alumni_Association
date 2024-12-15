const Student = require("../models/students.js");
const Alumni = require("../models/alumni.js");

const express = require("express");
const router = express.Router();

const bcrypt = require("bcrypt");
const generateJwtToken = require("../utils/generateJwtToken");

router.post("/user", async (req, res) => {
  try {
    const { userId, name, password, email, domain_email, role } = req.body;
    const isStudent = await Student.findOne({ userId });
    const isAlumni = await Alumni.findOne({ userId });

    if (isStudent || isAlumni) {
      return res.status(300).json({ message: "User Already Exists." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    if (role === "student") {
      const newUser = new Student({
        userId,
        name,
        password: hashedPassword,
        email,
        domain_email,
      });
      await newUser.save();
    } else if (role === "alumni") {
      const newUser = new Alumni({
        userId,
        name,
        password,
        email,
        domain_email,
      });
      await newUser.save();
    }

    // Generate JWT token
    const token = generateJwtToken(userId, role);

    res.status(201).json({ message: "User created successfully", jwtToken });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// router.post("/alumni", async (req, res) => {
//   try {
//     const { userId, name, password, email, domain_email } = req.body;
//     const existingUserId = await Alumni.findOne({ userId });

//     if (existingUserId) {
//       return res.status(300).json({ message: "User Already Exists." });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Generate JWT token
//     const token = generateJwtToken(userId, user.role);

//     res.status(201).json({ message: "User created successfully", token });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

module.exports = router;
