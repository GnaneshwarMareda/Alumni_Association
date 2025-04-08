const express = require("express");
const router = express.Router();

const { proceedPayment } = require("../controllers/donation");
const { verifyAlumniToken } = require("../middlewares/verifyToken");

router.post("/create-payment-intent", verifyAlumniToken, proceedPayment);

module.exports = router;
