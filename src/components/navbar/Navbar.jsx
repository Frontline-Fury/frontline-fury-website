import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assests/capture.jpeg";
import karanprofile from '../assests/karan.jpeg'; // Default profile image

const Navbar = ({ onSignupClick, user, handleLogout }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

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

      {user ? (
        <div className="profile-container">
          <img
            src={user.profileImage || karanprofile}
            alt="Profile"
            className="profile-image"
            onClick={toggleDropdown}
          />
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/friends">Friends</Link></li>
              <li><Link to="/notifications">Notifications</Link></li>
              <li><Link to="/help">Help Center</Link></li>
              <li><Link to="/settings">Settings</Link></li>
              <li onClick={handleLogout}>Logout</li>
            </ul>
          )}
        </div>
      ) : (
        <li onClick={onSignupClick}>Signup/Login</li>
      )}
    </ul>
  </nav>
  );
};

export default Navbar;
