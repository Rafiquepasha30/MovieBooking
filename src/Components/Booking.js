
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Booking.css';

const Booking = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const handlePayment = () => {
    navigate('/payment', { state });
  };

  return (
    <div className="booking">
      <h2>Confirm Your Booking</h2>
      <p>Movie ID: {state.movieId}</p>
      <p>Selected Seats: {state.selectedSeats.join(', ')}</p>
      <button onClick={handlePayment}>Proceed to Payment</button>
    </div>
  );
};

export default Booking;
