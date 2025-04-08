import React from "react";
import "./InvoiceModal.css";

const InvoiceModal = ({ isOpen, onClose, paymentDetails }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="invoice-container">
          <h2>Payment Success!</h2>
          <div className="invoice-details">
            <h3>Invoice</h3>
            <div className="invoice-row">
              <span>Date:</span>
              <span>{new Date().toLocaleDateString()}</span>
            </div>
            <div className="invoice-row">
              <span>Amount Paid:</span>
              <span>${(paymentDetails.amount / 100).toFixed(2)}</span>
            </div>
            <div className="invoice-row">
              <span>Payment Status:</span>
              <span className="status-success">Paid</span>
            </div>
            <div className="invoice-row">
              <span>Transaction ID:</span>
              <span>{paymentDetails.id}</span>
            </div>
          </div>
          <button className="close-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceModal;
