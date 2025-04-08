import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "../Components/PaymentForm";
import "./Donation.css";
import { useState } from "react";
import InvoiceModal from "../Components/InvoiceModal";

const stripePromise = loadStripe(
  "pk_test_51R7Zjs04Vn5FFRhRXGtafT4TUYewlFMXzAmzqkFNwcH8zf3DbPXdsxAdQ2zxYXX1rIWEmGkG4LzvUFZWlasBaaKx00oZLz9OJP"
);

function Donation() {
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [error, setError] = useState(null);
  const amount = 5000;
  const options = {
    mode: "payment",
    amount: amount,
    currency: "usd",
  };

  const handlePaymentSuccess = (details) => {
    setPaymentDetails(details);
    setShowInvoiceModal(true);
  };

  return (
    <div className="app-container">
      <Elements stripe={stripePromise} options={options}>
        <PaymentForm onPaymentSuccess={handlePaymentSuccess} amount={amount} />
      </Elements>
      <InvoiceModal
        isOpen={showInvoiceModal}
        onClose={() => setShowInvoiceModal(false)}
        paymentDetails={paymentDetails}
      />
    </div>
  );
}

export default Donation;
