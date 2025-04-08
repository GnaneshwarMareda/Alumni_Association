require("dotenv").config();
const stripe = require("stripe")(
  "sk_test_51RBfHlPD2Ph6rou7DoxNPks6dxQyEQ7NHZc7rpJ4aiXUXuT9rgBT4u981EairwHxYIWMYEQvrOoJ2gF3buN6IT7000XkG9OCpN"
);
//sk_test_51R7Zjs04Vn5FFRhRb1AvrZQQwt54p9kc37pxmtPgA0Xwp7jfHjD3yvnFaaXQ8UUbPyKDMiiQu2CeKR94SDsU74sb00wdzeu7UN // Swapnith's key
const Payment = require("../models/payments");

const proceedPayment = async (req, res) => {
  try {
    const { amount, reason, message } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    res.json({
      clientSecret: paymentIntent.client_secret,
      success: true,
      message: "Payment processed successfully",
    });

    //Save payment details to the database
    const payment = new Payment({
      date: new Date(),
      amount,
      reason,
      message,
    });
    await payment.save();
  } catch (error) {
    console.error("Payment error:", error);
    res.status(500).json({
      error: error.message || "An error occurred during payment processing",
      success: false,
    });
  }
};

module.exports = { proceedPayment };
