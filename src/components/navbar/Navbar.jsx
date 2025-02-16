import React from 'react';
import { Link } from 'react-router-dom'; // Link import karo
import './Navbar.css';
import logo from '../assests/capture.jpeg'

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt='logo' width={300}/>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/aboutus">About Us</Link></li>
                <li><Link to="/leaderboard">Leaderboard</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/waiver">Waiver</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/signup-login">Signup/Login</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;