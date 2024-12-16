const URL = require("../Url");

const sendOtp = async (userDetails) => {
  try {
    const url = `${URL}/register/generate-otp`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    };

    const response = await fetch(url, options);
    const status = response.status;
    return { status };
  } catch (error) {
    return { status: 400, message: error.message };
  }
};

module.exports = sendOtp;
