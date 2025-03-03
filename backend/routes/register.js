const Student = require("../models/students.js");

const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const generateJwtToken = require("../utils/generateJwtToken");
const { generateOTP } = require("../utils/otpCenter.js");
const { verifyOTP } = require("../utils/otpCenter.js");

router.post("/generate-otp", generateOTP);

router.post("/user", verifyOTP, async (req, res) => {
  try {
    console.log(req.body);
    const { userDetails } = req.body;
    const {
      universityEmail,
      userId,
      password,
      firstName,
      lastName,
      personalEmail,
      mobile,
      yearOfStudy,
      graduationYear,
      fieldOfStudy,
    } = userDetails;

    // Log the received password
    console.log("Password received:", password);

    if (!password) {
      return res.status(400).json({ message: "Password is required" });
    }

    const name = `${firstName} ${lastName}`;

    // Check if user already exists in the database
    const isExistingUser = await Student.findOne({ Id: userId });

    if (isExistingUser) {
      return res.status(300).json({ message: "User Already Exists." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new Student({
      Id: userId,
      password: hashedPassword,
      name,
      personalEmail,
      universityEmail,
      mobile,
      yearOfStudy,
      graduationYear,
      fieldOfStudy,
    });

    await newUser.save();

    // Generate JWT token
    const jwtToken = generateJwtToken(userId, "student");

    res.status(201).json({ message: "User created successfully", jwtToken });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
