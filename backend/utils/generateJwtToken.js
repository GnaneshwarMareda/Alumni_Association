const jwt = require("jsonwebtoken");
const generateJwtToken = (userId, role, name) => {
  const payload = {
    userId,
    role,
    name,
  };
  const jwtToken = jwt.sign(payload, "Gnane");
  return jwtToken;
};

module.exports = generateJwtToken;
