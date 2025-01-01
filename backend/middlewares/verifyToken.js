const jwt = require("jsonwebtoken");

const verifyAlumniToken = async (req, res, next) => {
  const authorization = req.headers["authorization"];
  if (!authorization) {
    return res.status(400).send("Authorization Error");
  }

  const jwtToken = authorization.split(" ")[1];

  if (!jwtToken) return res.status(400).send("Authentication Error");
  try {
    const payload = jwt.verify(jwtToken, "Gnane");
    const { userId, role } = payload;
    if (role !== "alumni") return;
    req.userId = userId;
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid token." });
  }
};

const verifyStudentToken = async (req, res, next) => {
  const authorization = req.headers["authorization"];
  if (!authorization) {
    return res.status(400).send("Authorization Error");
  }

  const jwtToken = authorization.split(" ")[1];

  if (!jwtToken) return res.status(400).send("Authentication Error");
  try {
    const payload = jwt.verify(jwtToken, "Gnane");
    const { userId, role } = payload;
    if (role !== "student") {
      return res.status(400).send("Authorization Error");
    }
    req.userId = userId;
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid token." });
  }
};

const verifyAdminToken = async (req, res, next) => {
  const authorization = req.headers["authorization"];
  if (!authorization) {
    return res.status(400).send("Authorization Error");
  }

  const jwtToken = authorization.split(" ")[1];

  if (!jwtToken) return res.status(400).send("Authentication Error");
  try {
    const payload = jwt.verify(jwtToken, "Gnane");
    const { userId, role } = payload;
    if (role !== "student") {
      return res.status(400).send("Authorization Error");
    }
    req.userId = userId;
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid token." });
  }
};

module.exports = {
  verifyAlumniToken,
  verifyStudentToken,
};
