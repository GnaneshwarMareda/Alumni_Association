const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  date: { type: date, required: true },
  purpose: { type: String, required: true },
  amount: { type: Number, required: false },
});

const Payment = mongoose.model("Payment", paymentSchema);
module.exports = Payment;
