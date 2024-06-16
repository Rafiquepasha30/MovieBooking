import React from 'react';
import './Banner.css';
import Banner1 from '../assets/banner2.png'

const Banner = () => {
  return (
    <div className="banner">
      <img src={Banner1} alt="Summer Scape" />
    </div>
  );
};

export default Banner;
