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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.1118568360152!2d78.07713567535924!3d30.396702974748123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d7d84f30dc9f%3A0x49b471322f958310!2sHyatt%20Regency%20Dehradun%20Resort%20and%20Spa!5e1!3m2!1sen!2sin!4v1738876333430!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    allowFullScreen
                    loading="lazy"
                    title="sdsdsd"
                ></iframe>

            </div>

        </footer>
    );
};

export default Footer;
