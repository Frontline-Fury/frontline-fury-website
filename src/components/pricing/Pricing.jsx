import React from "react";
import "./Pricing.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Pricing = () => {
  return (
    <>
      <Navbar />
      <div className="pricing-page-container">

        {/* Pricing Plans Section */}
        <h2 className="pricing-page-title">Game Pricing</h2>
        <div className="pricing-page-cards">
          <div className="pricing-page-card">
            <h3>Basic Entry</h3>
            <p className="price">₹499</p>
            <ul>
              <li>✔ Single game session</li>
              <li>✔ Standard gear rental</li>
              <li>✔ 1-hour playtime</li>
            </ul>
            <button className="pricing-page-button">Book Now</button>
          </div>

          <div className="pricing-page-card popular">
            <h3>Standard Entry</h3>
            <p className="price">₹999</p>
            <ul>
              <li>✔ Two game sessions</li>
              <li>✔ Advanced gear rental</li>
              <li>✔ 2-hour playtime</li>
            </ul>
            <button className="pricing-page-button">Book Now</button>
          </div>

          <div className="pricing-page-card">
            <h3>Elite Entry</h3>
            <p className="price">₹1499</p>
            <ul>
              <li>✔ Unlimited game sessions</li>
              <li>✔ Premium gear rental</li>
              <li>✔ All-day access</li>
            </ul>
            <button className="pricing-page-button">Book Now</button>
          </div>
        </div>

        {/* Membership Plans Section */}
        <h2 className="pricing-page-title">Exclusive Memberships</h2>
        <div className="membership-cards">
          <div className="pricing-page-card">
            <h3>Silver Membership</h3>
            <p className="price">₹1999 / month</p>
            <ul>
              <li>✔ 5 games per month</li>
              <li>✔ 10% discount on gear rental</li>
              <li>✔ Member-only game nights</li>
            </ul>
            <button className="pricing-page-button">Join Now</button>
          </div>

          <div className="pricing-page-card popular">
            <h3>Gold Membership</h3>
            <p className="price">₹2999 / month</p>
            <ul>
              <li>✔ 10 games per month</li>
              <li>✔ 20% discount on gear rental</li>
              <li>✔ Free entry to events</li>
            </ul>
            <button className="pricing-page-button">Join Now</button>
          </div>

          <div className="pricing-page-card">
            <h3>Platinum Membership</h3>
            <p className="price">₹4999 / month</p>
            <ul>
              <li>✔ Unlimited games</li>
              <li>✔ Free premium gear rental</li>
              <li>✔ VIP lounge access</li>
            </ul>
            <button className="pricing-page-button">Join Now</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Pricing;
