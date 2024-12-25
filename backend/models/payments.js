const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  purpose: { type: String, required: true },
  amount: { type: Number, required: false },
});

const Payment = mongoose.model("payment", paymentSchema);
module.exports = Payment;
