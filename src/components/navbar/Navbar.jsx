import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assests/donelogo.png";
import karanprofile from '../assests/karan.jpeg'; // Default profile image

const Navbar = ({ onSignupClick, user, handleLogout }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <div className="navbar-container">

        {/* Ticker */}
        <div className="ticker-container">
          <div className="ticker">
            <p>This website is under development   |   We're building something amazing – Coming soon!</p>
          </div>
        </div>

        {/* Hamburger Icon for mobile */}
        <div className="hamburger" onClick={toggleSidebar}>
          ☰
        </div>

        {/* Sidebar for mobile */}
        <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
          <ul>
            <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
            <li><Link to="/aboutus" onClick={toggleSidebar}>About Us</Link></li>
            <li><Link to="/leaderboard" onClick={toggleSidebar}>Leaderboard</Link></li>
            <li><Link to="/booking" onClick={toggleSidebar}>Booking</Link></li>
            <li><Link to="/market" onClick={toggleSidebar}>Market Place</Link></li>
            <li><Link to="/contact" onClick={toggleSidebar}>Contact Us</Link></li>
            {user ? (
              <>
                <li><Link to="/profile" onClick={toggleSidebar}>Profile</Link></li>
                <li><Link to="/friends" onClick={toggleSidebar}>Friends</Link></li>
                <li><Link to="/notifications" onClick={toggleSidebar}>Notifications</Link></li>
                <li><Link to="/help" onClick={toggleSidebar}>Help Center</Link></li>
                <li><Link to="/settings" onClick={toggleSidebar}>Settings</Link></li>
                <li onClick={() => { handleLogout(); toggleSidebar(); }}>Logout</li>
              </>
            ) : (
              <li onClick={() => { onSignupClick(); toggleSidebar(); }}>Signup/Login</li>
            )}
          </ul>
        </div>

        {/* Overlay when sidebar is open */}
        {sidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}

        {/* Desktop Navbar */}
        <nav className="navbar">
          <img src={logo} alt="logo" />
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
            <li><Link to="/leaderboard">Leaderboard</Link></li>
            <li><Link to="/gamemode">Booking</Link></li>
            <li><Link to="/market">Market Place</Link></li>

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
              <li>
                <span className="signup-login" onClick={onSignupClick}>Signup/Login</span>
              </li>
            )}
          </ul>
        </nav>

      </div>
    </>
  );
};

export default Navbar;
