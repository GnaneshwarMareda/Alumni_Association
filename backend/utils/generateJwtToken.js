const jwt = require("jsonwebtoken");
const generateJwtToken = (userId, role) => {
  const payload = {
    userId,
    role,
  };
  console.log(payload);
  const jwtToken = jwt.sign(payload, "Gnane");
  return jwtToken;
};

module.exports = generateJwtToken;
