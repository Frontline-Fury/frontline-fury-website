import React from "react";

import "./Aboutus.css";

import nandiniimg from '../assests/nandini.jpeg';
import karanimg from '../assests/karan.jpeg';
import tarunimg from '../assests/tarun.jpeg';
import divyanshimg from '../assests/divyansh.jpeg';




const Aboutus = () => {
  

  return (
    <>
     
      <div className="aboutus-container">
        <section className="aboutus-header">
          <h1>About Us</h1>
          <p>
            Welcome to Frontline Fury, where creativity meets innovation. Our mission is to empower and inspire through technology.
          </p>
        </section>
        
        <div className="aboutus-story">
          <h2>Our Story</h2>
          <p>
            Founded in 2025, our journey began with a passion to revolutionize the tech space.
            From humble beginnings, our dedicated team has been pushing boundaries to deliver exceptional experiences.
          </p>
        </div>
        
        
        
        <section className="aboutus-team">
          <h2>Meet the Team</h2>
          <div className="team-members">
          
            <div className="team-member">
              <img src={nandiniimg} alt="nandini kishore" />
              <h3>Nandini Kishore</h3>
              <p>COO</p>
            </div>
            <div className="team-member">
              <img src={karanimg} alt="karan negi" />
              <h3>Karan Negi</h3>
              <p>CEO</p>
            </div>
            <div className="team-member">
              <img src={tarunimg} alt="tarun guleria" />
              <h3>Tarun Guleria</h3>
              <p>CTO</p>
            </div>
            <div className="team-member">
              <img src={divyanshimg} alt="Divyansh Negi" />
              <h3>Divyansh Negi</h3>
              <p>CBDO</p>
            </div>
           
           
          </div>
        </section>


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
        
 
      </div>
   
    </>
  );
};

export default Aboutus;
