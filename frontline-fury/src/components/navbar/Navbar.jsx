import React from 'react';
import './Navbar.css';
import logo from '../assests/Capture.PNG'

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt='logo' width={300}/>
            <ul>
            
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#leaderboard">Leaderboard</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#wavier">Wavier</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#signup/login">Signup/Login</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;