import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    {/* Branding Section */}
                    <div className="footer-branding">
                        <h3 className="footer-logo">Frontline <span>Fury</span></h3>
                        <p className="footer-description">Your premier destination for gaming excellence and community events.</p>
                        <div className="social-icons">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <FaFacebook className="social-icon" />
                            </a>
                            <a href="https://instagram.com/thefrontlinefury" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <FaInstagram className="social-icon" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <FaTwitter className="social-icon" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FaLinkedin className="social-icon" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h4 className="section-title">Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/aboutus" >About Us</Link></li>
                            <li><Link to="/leaderboard">Leaderboard</Link></li>
                            <li><Link to="/gamemode">Booking</Link></li>
                            <li><Link to="/market">Market Place</Link></li>
                            
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-section">
                        <h4 className="section-title">Contact Us</h4>
                        <ul className="contact-info">
                            <li>
                                <FaEnvelope className="contact-icon" />
                                <span>thefrontlinefury@gmail.com</span>
                            </li>
                            <li>
                                <FaPhone className="contact-icon" />
                                <span>+91 6396464369</span>
                            </li>
                            <li>
                                <FaMapMarkerAlt className="contact-icon" />
                                <span>Dehradun, Uttarakhand, India</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Frontline Fury. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;