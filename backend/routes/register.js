const Student = require("../models/students.js");
const Alumni = require("../models/alumni.js");

const express = require("express");
const router = express.Router();

const bcrypt = require("bcrypt");
const generateJwtToken = require("../utils/generateJwtToken");

router.post("/user", async (req, res) => {
  try {
    const {
      userId,
      password,
      role,
      firstName,
      lastName,
      personalEmail,
      universityEmail,
      mobile,
      graduationYear,
      fieldOfStudy,
    } = req.body;
    const name = firstName + " " + lastName;

    // Check if user already exists in the database
    const isStudent = await Student.findOne({ userId });
    const isAlumni = await Alumni.findOne({ userId });

    if (isStudent || isAlumni) {
      return res.status(300).json({ message: "User Already Exists." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    if (role === "student") {
      const newUser = new Student({
        Id: userId,
        password: hashedPassword,
        role,
        name,
        personalEmail,
        universityEmail,
        mobile,
        graduationYear,
        fieldOfStudy,
      });
      await newUser.save();
    } else if (role === "alumni") {
      const newUser = new Alumni({
        Id: userId,
        password: hashedPassword,
        role,
        name,
        personalEmail,
        universityEmail,
        mobile,
        graduationYear,
        fieldOfStudy,
      });
      await newUser.save();
    }

    // Generate JWT token
    const jwtToken = generateJwtToken(userId, role);

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
