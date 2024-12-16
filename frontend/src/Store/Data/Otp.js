import URL from "../Url";

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

    const response = fetch(url, options);

    const status = (await response).status;
    return { status };
  } catch (error) {
    return { status: 400, message: error.message };
  }
};

export default sendOtp;

module.exports = {
  sendOtp,
};
