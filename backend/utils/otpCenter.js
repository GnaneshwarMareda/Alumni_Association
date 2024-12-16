const nodemailer = require("nodemailer");
const otpStore = new Map();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "rockygame41@gmail.com",
    pass: "GSM8314#",
  },
});

const generateOTP = async (req, res) => {
  try {
    const universityEmail = req.body;
    if (!universityEmail) {
      return res.status(400).json({ message: "University Email is required." });
    }

    const email = universityEmail.toLowerCase().trim();
    let otp = Math.floor(1000 + Math.random() * 9000).toString();
    otpStore.set(email, otp);

    const mailOptions = {
      from: "rockygame41@gmail.com",
      to: email,
      subject: "Approve sign-in to RGUKT_Alumni",
      text: `Your OTP for sign-in to RGUKT_Alumni is: ${otp}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "OTP sent successfully!!" });
  } catch (error) {
    res.status(500).json({ message: "Error sending OTP" });
  }
};

const verifyOTP = async (req, res) => {
  try {
    const { universityEmail, otp } = req.body;

    if (!universityEmail || !otp) {
      return res
        .status(400)
        .json({ message: "Domain mail and OTP are required." });
    }

    const storedOTP = otpStore.get(universityEmail);

    if (!storedOTP) {
      return res.status(400).json({ message: "Invalid OTP." });
    }

    if (storedOTP !== otp) {
      return res.status(400).json({ message: "Invalid OTP." });
    }

    otpStore.delete(userId);

    res.status(200).json({ message: "OTP verified successfully!!." });
    next();
  } catch (error) {
    res.status(500).json({ message: "Error verifying OTP" });
  }
};

module.exports = { generateOTP, verifyOTP };
