import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assests/capture.jpeg";
import karanprofile from '../assests/karan.jpeg';

const Navbar = ({ onSignupClick, user }) => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" width={300} />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
        <li><Link to="/leaderboard">Leaderboard</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/waiver">Waiver</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li onClick={!user && onSignupClick}>
          {user ? (
            <img 
              src={karanprofile}   // Profile image from user object
              alt="Profile"
              className="profile-image"  // Class to apply circular style
            />
          ) : (
            "Signup/Login"
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
