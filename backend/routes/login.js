const express = require("express");
const router = express.Router();

const { verifyPassword } = require("../utils/passwordHashing");
const { generateJwtToken } = require("../utils/generateJwtToken");

router.post("/user", async (req, res) => {
  try {
    const { userId, password, role } = req.body;

    const user = null;
    if (role === "alumni") user = await Alumni.findOne({ userId });
    else if (role === "student") user = await Student.findOne({ userId });

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

// router.post("/alumni", async (req, res) => {
//   try {
//     const { userId, password, role } = req.body;

//     const user = await Alumni.findOne({ userId });

//     if (!user) {
//       res.status(400).json({ message: "Invalid Login." });
//       return;
//     }

//     const isValidPassword = await verifyPassword(password, user.password);
//     if (isValidPassword) {
//       const jwtToken = generateJwtToken(userId, role);
//       return res.status(201).json({ jwtToken });
//     }

//     res.status(400).json({ messag: "Invalid credentials" });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

module.exports = router;
