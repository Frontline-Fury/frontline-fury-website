import React  from "react";
import "./Pricing.css";


const Pricing = () => {
  
  return (
    <>
      
      <div className="pricing-page-container">

        {/* Pricing Plans Section */}
        <h2 className="pricing-page-title">Game Pricing</h2>
        <div className="pricing-page-cards">
          <div className="pricing-page-card">
            <h3>Single Entry</h3>
            <p className="price">₹699</p>
            <ul>
              <li>✔ Single game session</li>
              <li>✔ Standard Game Modes</li>
              <li>✔ 1-hour playtime</li>
            </ul>
            <button className="pricing-page-button">Book Now</button>
          </div>

          <div className="pricing-page-card popular">
            <h3>Team Entry</h3>
            <p className="price">₹1799</p>
            <ul>
              <li>✔ Minimum 3 stack</li>
              <li>✔ Standard Game Modes</li>
              <li>✔ 1-hour playtime</li>
            </ul>
            <button className="pricing-page-button">Book Now</button>
          </div>

          <div className="pricing-page-card">
            <h3>Group Entry</h3>
            <p className="price">₹5000</p>
            <ul>
              <li>✔ Minimum 10 stack</li>
              <li>✔ Customised Game Modes</li>
              <li>✔ 1-hour playtime</li>
            </ul>
            <button className="pricing-page-button">Book Now</button>
          </div>
        </div>

        {/* Membership Plans Section */}
        <h2 className="pricing-page-title"> Memberships</h2>
        <div className="membership-cards">
          <div className="pricing-page-card">
            <h3>Silver </h3>
            <p className="price">₹1999 / month</p>
            <ul>
              <li>✔ 5 games per month</li>
              <li>✔ 10% discount on gear rental</li>
              <li>✔ Member-only game nights</li>
            </ul>
            <button className="pricing-page-button">Join Now</button>
          </div>

          <div className="pricing-page-card popular">
            <h3>Gold </h3>
            <p className="price">₹2999 / month</p>
            <ul>
              <li>✔ 10 games per month</li>
              <li>✔ 20% discount on gear rental</li>
              <li>✔ Free entry to events</li>
            </ul>
            <button className="pricing-page-button">Join Now</button>
          </div>

          <div className="pricing-page-card">
            <h3>Platinum </h3>
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
  
    </>
  );
};

export default Pricing;
