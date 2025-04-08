import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./PaymentForm.css";

const PaymentForm = ({ onPaymentSuccess, amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4",
        },
        padding: "10px",
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);

    try {
      const response = await fetch(
        "http://localhost:8000/donation/create-payment-intent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: amount,
          }),
        }
      );

      const { clientSecret } = await response.json();

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (result.error) {
        setError(result.error.message);
      } else {
        setError(null);
        onPaymentSuccess({
          amount: amount,
          id: result.paymentIntent.id,
        });
      }
    } catch (err) {
      setError("An error occurred while processing your payment.");
    }

    setProcessing(false);
  };

  return (
    <div className="payment-form-container">
      <div className="payment-form-card">
        <h2>Complete Your Payment</h2>
        <div className="price-display">
          <span>Total Amount:</span>
          <span className="price">${amount / 100}.00</span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label>Card Details</label>
            <div className="card-element-container">
              <CardElement options={cardStyle} />
            </div>
          </div>

          {error && <div className="error-message">{error}</div>}

          <button
            className="payment-button"
            type="submit"
            disabled={!stripe || processing}
          >
            {processing ? (
              <span className="spinner">Processing...</span>
            ) : (
              "Pay Now"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
