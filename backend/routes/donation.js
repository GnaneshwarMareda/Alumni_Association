const express = require("express");
const router = express.Router();

const { proceedPayment } = require("../controllers/donation");
const { verifyStudentToken } = require("../middlewares/verifyToken");

router.post("/create-payment-intent", verifyStudentToken, proceedPayment);

module.exports = router;
