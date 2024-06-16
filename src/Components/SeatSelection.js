import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './SeatSelection.css';

const SeatSelection = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedTime, setSelectedTime] = useState('');

  const handleSeatClick = (seat) => {
    setSelectedSeats(prevSelectedSeats => {
      if (prevSelectedSeats.includes(seat)) {
        return prevSelectedSeats.filter(s => s !== seat);
      } else {
        return [...prevSelectedSeats, seat];
      }
    });
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleProceedToBook = () => {
    if (selectedSeats.length > 0 && selectedTime) {
      const totalAmount = selectedSeats.length * 10; // Assume each ticket costs 10 units
      navigate('/payment', { state: { selectedSeats, selectedTime, totalAmount } });
    } else {
      alert('Please select seats and time');
    }
  };

  return (
    <div className="seat-selection">
      <h2>Select your seats</h2>
      <div className="seats">
        {[...Array(60).keys()].map(seat => (
          <div
            key={seat}
            className={`seat ${selectedSeats.includes(seat) ? 'selected' : ''}`}
            onClick={() => handleSeatClick(seat)}
          >
            {seat + 1}
          </div>
        ))}
      </div>
      <h2>Select showtime</h2>
      <div className="showtimes">
        {
          ['10:00 AM', '01:00 PM', '04:00 PM', '07:00 PM', '10:00 PM'].map(time => (
          <button
            key={time}
            className={`showtime ${selectedTime === time ? 'selected' : ''}`}
            onClick={() => handleTimeSelect(time)}
          >
            {time}
          </button>
        ))}
      </div>
      <button onClick={handleProceedToBook} className="proceed-to-book-button">Proceed to Book</button>
    </div>
  );
};

export default SeatSelection;
