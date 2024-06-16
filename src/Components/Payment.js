import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Payment.css';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedSeats, selectedTime, totalAmount } = location.state || {};

  if (!selectedSeats || !selectedTime || !totalAmount) {
    return <div>Error: Missing booking details</div>;
  }

  const handlePayNow = () => {
    // Simulate payment process here
    // After successful payment, navigate to the confirmation page
    navigate('/confirmation', {
      state: {
        selectedSeats,
        selectedTime,
        totalAmount,
      },
    });
  };

  return (
    <div className="payment-page">
      <h2>Payment Page</h2>
      <div className="booking-details">
        <h3>Booking Details</h3>
        <p><strong>Selected Seats:</strong> {selectedSeats.join(', ')}</p>
        <p><strong>Showtime:</strong> {selectedTime}</p>
        <p><strong>Total Amount:</strong> ${totalAmount}</p>
      </div>
      <button onClick={handlePayNow} className="pay-now-button">Pay Now</button>
    </div>
  );
};

export default Payment;
