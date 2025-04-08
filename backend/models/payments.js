const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  amount: { type: Number, required: true },
  reason: { type: String, required: true },
  message: { type: String, required: false },
});

const Payment = mongoose.model("payment", paymentSchema);
module.exports = Payment;
