const nodemailer = require("nodemailer");
const otpStore = new Map();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "rockygame41@gmail.com",
    pass: "ueaa wozp ypus zggz",
    //password: "GSM8314#",

    // user: "nithinambati9@gmail.com",
    // pass: "nshv cokv qdpw pdzi",
  },
});

const generateOTP = async (req, res) => {
  try {
    const { universityEmail } = req.body;
    if (!universityEmail) {
      return res.status(400).json({ message: "University Email is required." });
    }

    const email = universityEmail.toLowerCase().trim();
    let otp = Math.floor(100000 + Math.random() * 900000).toString();
    otpStore.set(email, otp);

    // console.log(email, otp);

    const mailOptions = {
      from: "rockygame41@gmail.com",
      to: email,
      subject: "Approve sign-in to RGUKT_Alumni",
      text: `Your OTP for sign-in to RGUKT_Alumni is: ${otp}`,
    };

    const response = await transporter.sendMail(mailOptions);
    res
      .status(200)
      .json({ message: "OTP sent successfully!!", response: response });
  } catch (error) {
    res.status(500).json({ message: "Error sending OTP", error: error });
  }
};

const verifyOTP = async (req, res, next) => {
  try {
    const { userDetails } = req.body;
    const { universityEmail, otp } = userDetails;
    //console.log(universityEmail, otp);

    if (!universityEmail || !otp) {
      return res
        .status(400)
        .json({ message: "Domain mail and OTP are required." });
    }

    const storedOTP = otpStore.get(universityEmail);
    console.log(otpStore);
    console.log(storedOTP);
    //console.log(storedOTP);

    if (!storedOTP) {
      return res.status(400).json({ message: "Invalid OTP." });
    }

    if (storedOTP !== otp) {
      return res.status(400).json({ message: "Invalid OTP." });
    }

    otpStore.delete(universityEmail);
    next();
  } catch (error) {
    res.status(500).json({ message: "Error verifying OTP" });
  }
};

module.exports = { generateOTP, verifyOTP };
