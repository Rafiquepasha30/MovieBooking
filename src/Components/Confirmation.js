import React from 'react';
import { useLocation } from 'react-router-dom';
import './Confirmation.css';

const Confirmation = () => {
  const location = useLocation();
  const { selectedSeats, selectedTime, totalAmount } = location.state || {};

  if (!selectedSeats || !selectedTime || !totalAmount) {
    return <div>Error: Missing booking details</div>;
  }

  return (
    <div className="confirmation-page">
      <h2>Booking Confirmation</h2>
      <div className="booking-details">
        <h3>Booking Details</h3>
        <p><strong>Selected Seats:</strong> {selectedSeats.join(', ')}</p>
        <p><strong>Showtime:</strong> {selectedTime}</p>
        <p><strong>Total Amount:</strong> ${totalAmount}</p>
      </div>
    </div>
  );
};

export default Confirmation;
