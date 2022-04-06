import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navBar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/productdetails">Product Details</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
}

export default Navbar;
