import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assests/donelogo.png";
import karanprofile from '../assests/karan.jpeg';

const Navbar = ({ onSignupClick, user, handleLogout }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="navbar-container">
      {/* Ticker */}
      <div className="ticker-container">
        <div className="ticker">
          <p>This website is under development | We're building something amazing – Coming soon!</p>
        </div>
      </div>

      {/* Desktop Navbar */}
      <nav className="navbar">
        <img src={logo} alt="logo" className="logo-white" />

        {/* Hamburger Icon for mobile */}
        <button
          className={`hamburger ${sidebarOpen ? "active" : ""}`}
          onClick={toggleSidebar}
          aria-label="Menu"
        >
          <span className="hamburger-icon"></span>
        </button>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/aboutus">About Us</Link></li>
          <li><Link to="/leaderboard">Leaderboard</Link></li>
          <li><Link to="/gamemode">Booking</Link></li>
          <li><Link to="/market">Market Place</Link></li>

          {/* CONDITIONAL: Signup/Login OR Profile Image */}
          <li className="nav-profile">
            {user ? (
              <div
                className={`profile-container ${dropdownOpen ? "show" : ""}`}
                onClick={toggleDropdown}
              >
                <img
                  src={user.profileImage || karanprofile}
                  alt="Profile"
                  className="profile-image"
                />
                <ul className="dropdown-menu">
                  <li><Link to="/profile">Profile</Link></li>
                  <li><Link to="/friends">Friends</Link></li>
                  <li><Link to="/notifications">Notifications</Link></li>
                  <li><Link to="/help">Help Center</Link></li>
                  <li><Link to="/settings">Settings</Link></li>
                  <li onClick={handleLogout}>Logout</li>
                </ul>
              </div>
            ) : (
              <Link onClick={onSignupClick} className="signup-login-link">Signup/Login</Link>
            )}
          </li>

        </ul>
      </nav>

      {/* Sidebar for mobile */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        {user && (
          <div className="sidebar-header">
            <img
              src={user.profileImage || karanprofile}
              alt="Profile"
              className="sidebar-profile-img"
            />
            <div className="sidebar-profile-name">{user.name || "User"}</div>
          </div>
        )}

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
              <li className="logout-btn" onClick={() => { handleLogout(); toggleSidebar(); }}>Logout</li>
            </>
          ) : (
            <li onClick={() => { onSignupClick(); toggleSidebar(); }}>
              <Link>Signup/Login</Link>
            </li>
          )}
        </ul>
      </div>

      {/* Overlay when sidebar is open */}
      {sidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </div>
  );
};

export default Navbar;
