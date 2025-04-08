import { useState } from "react";
import Cookie from "js-cookie";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./PaymentForm.css";

const PaymentForm = ({ onPaymentSuccess, amount: defaultAmount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [amount, setAmount] = useState(defaultAmount || 1000); // default to $10.00
  const [reason, setReason] = useState("Infrastructure Development");
  const [message, setMessage] = useState("");
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

    if (!stripe || !elements) return;

    setProcessing(true);

    try {
      const response = await fetch(
        "http://localhost:8000/donation/create-payment-intent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${Cookie.get("jwtToken")}`,
          },
          body: JSON.stringify({ amount, reason, message }),
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
          amount,
          id: result.paymentIntent.id,
          reason,
          message,
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
        <div>
          <h2>Complete Your Donation</h2>
          <img
            src="https://img.freepik.com/free-vector/pensioners-financial-literacy-finance-education-savings-management-investment-awareness-consultant-explaining-finance-system-basics-elderly-people-vector-isolated-concept-metaphor-illustration_335657-2824.jpg"
            alt="Alumni Donation"
          />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Amount (in USD)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(parseInt(e.target.value))}
              placeholder="Enter amount in cents"
              required
            />
          </div>

          <div className="form-group">
            <label>Support Area</label>
            <select value={reason} onChange={(e) => setReason(e.target.value)}>
              <option>Infrastructure Development</option>
              <option>Scholarship Fund</option>
              <option>Event Sponsorship</option>
            </select>
          </div>

          <div className="form-group">
            <label>Optional Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write a note or message "
              rows={3}
            />
          </div>

          <div className="form-row">
            <label className="font-bold">Card Details</label>
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
              "Donate Now"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
