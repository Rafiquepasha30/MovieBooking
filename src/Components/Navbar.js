import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Perform the search action here
    console.log('Search Term:', searchTerm);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Movie Booking</div>
      <form className="navbar-search" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search for Movies"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit" >Search</button>
      </form>
      <div className="navbar-right">
         <Link to="/register" className="sign-in">Sign In</Link>
      </div>
    </nav>
  );
};

export default Navbar;
