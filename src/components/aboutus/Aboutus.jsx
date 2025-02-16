import React from "react";
import Navbar from "../navbar/Navbar";
import "./Aboutus.css";
import Footer from "../footer/Footer";
import nandiniimg from '../assests/nandini.jpeg';
import karanimg from '../assests/karan.jpeg';
import tarunimg from '../assests/tarun.jpeg';

const Aboutus = () => {
  return (
    <>
      <Navbar />
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
          </div>
        </section>
        
 
      </div>
      <Footer/>
    </>
  );
};

export default Aboutus;
