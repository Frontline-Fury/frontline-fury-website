import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-branding">
                    <h3>Frontline Fury</h3>
                    <p>&copy; 2025 Frontline Fury. All rights reserved.</p>
                </div>


                <div className="footer-title">

                    <div className="quick-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="/about">Home</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/events">Events</a></li>
                            <li><a href="/pricing">Pricing</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                        </ul>
                    </div>



                    <div className="footer-contact">
                        <h4>Follow Us</h4>

                        <div className="social-icons">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        </div>
                    </div>

                    <div className="footer-contact">
                        <h4>Contact Us</h4>
                        <p>Email: info@frontlinefury.com</p>
                        <p>Phone: +91 6396464369</p>
                        <p>Location: Dehradun, Uttarakhand, India</p>


                    </div>





                </div>
            </div>
            <div className="map1-section">

                <iframe
                    src="https://www.google.com/maps/embed?https://maps.app.goo.gl/c4Sm1bgs9hZgSA7s8"
                    width="100%"
                    height="400"
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>

        </footer>
    );
};

export default Footer;
