import React from "react";
import "./Aboutus.css";

import nandiniImg from '../assests/nandini.jpeg';
import karanImg from '../assests/karan.jpeg';
import tarunImg from '../assests/tarun.jpeg';
import divyanshImg from '../assests/divyansh.jpeg';
import techImage1 from '../assests/spikerush.jpg';
import techImage2 from '../assests/spikerush.jpg';
import techImage3 from '../assests/spikerush.jpg';
import techImage4 from '../assests/spikerush.jpg';

const techFeatures = [
  {
    img: techImage1,
    title: "AI-Based Projectile Detection",
    description: "Our patented AI algorithms detect BB impacts in real-time, providing instant and precise hit registration for fair gameplay."
  },
  {
    img: techImage2,
    title: "Sensor-Integrated Tactical Vests",
    description: "Custom-built vests embedded with sensors monitor player health, hits, and provide feedback for immersive combat simulations."
  },
  {
    img: techImage3,
    title: "Dynamic Real-Time Mapping & Health Meter",
    description: "Advanced mapping technology tracks player positions and health status live, enabling strategic gameplay and in-match adjustments."
  },
  {
    img: techImage4,
    title: "AI-Controlled Game Environments",
    description: "Our environments react dynamically through AI control — from autonomous turrets to adaptive challenges enhancing realism."
  }
];

const teamMembers = [
  {
    img: nandiniImg,
    name: "Nandini",
    role: "COO & Founder"
  },
  {
    img: karanImg,
    name: "Karan",
    role: "CEO & Founder"
  },
  {
    img: tarunImg,
    name: "Tarun Guleria",
    role: "CTO & Founder"
  },
  {
    img: divyanshImg,
    name: "Divyansh Negi",
    role: "Core Team"
  },
  {
    img: null,
    name: "Shruti Sharma",
    role: "Intern"
  }
];

const pricingPlans = [
  {
    title: "Single Entry",
    price: "₹699",
    features: ["Single game session", "Standard Game Modes", "1-hour playtime"]
  },
  {
    title: "Team Entry",
    price: "₹1799",
    features: ["Minimum 3 stack", "Standard Game Modes", "1-hour playtime"],
    popular: true
  },
  {
    title: "Group Entry",
    price: "₹5000",
    features: ["Minimum 10 stack", "Customised Game Modes", "1-hour playtime"]
  }
];

const membershipPlans = [
  {
    title: "Silver",
    price: "₹1999 / month",
    features: [
      "5 games per month",
      "10% discount on gear rental",
      "Member-only game nights"
    ]
  },
  {
    title: "Gold",
    price: "₹2999 / month",
    features: [
      "10 games per month",
      "20% discount on gear rental",
      "Free entry to events"
    ],
    popular: true
  },
  {
    title: "Platinum",
    price: "₹4999 / month",
    features: [
      "Unlimited games",
      "Free premium gear rental",
      "VIP lounge access"
    ]
  }
];

const Aboutus = () => {
  const [showMemberships, setShowMemberships] = React.useState(false);

  return (
    <div className="aboutus-container">
      {/* Header */}
      <section className="aboutus-header">
        <h1>Welcome to Frontline Fury</h1>
        <p>Where Gaming Meets Action — Powered by Cutting-Edge Technology</p>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="section-header">
          <h2>OUR JOURNEY</h2>
          <div className="divider"></div>
        </div>
        <div className="story-content">
          <div className="story-text">
            <p>
              Founded in 2025, Frontline Fury was born from a passion for tactical gaming and 
              innovation. We set out to create India's most immersive combat experience by 
              combining military simulation with advanced gaming technology.
            </p>
            <p>
              What started as a small team of enthusiasts has grown into a premier destination 
              for gamers seeking authentic, tech-driven combat experiences.
            </p>
          </div>
          <div className="milestones">
            <div className="milestone">
              <h3>10,000+</h3>
              <p>Players Served</p>
            </div>
            <div className="milestone">
              <h3>15+</h3>
              <p>Patented Technologies</p>
            </div>
            <div className="milestone">
              <h3>5</h3>
              <p>Arena Locations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="tech-section">
        <div className="section-header">
          <h2>OUR TECHNOLOGIES</h2>
          <div className="divider"></div>
        </div> 
        <div className="tech-features-container">
          {techFeatures.map((feature, index) => (
            <div key={index} className="tech-feature">
              <img src={feature.img} alt={feature.title} />
              <div className="tech-feature-text">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="section-header">
          <h2>MEET THE TEAM</h2>
          <div className="divider"></div>
        </div>
        <div className="founding-members">
          {teamMembers.map((member, idx) => (
            <div className="founding-team-member" key={idx}>
              <div className="member-image-container">
                {member.img ? (
                  <img src={member.img} alt={member.name} />
                ) : (
                  <div className="initials-placeholder">
                    {member.name
                      .split(' ')
                      .map(word => word[0])
                      .join('')
                      .toUpperCase()}
                  </div>
                )}
                <div className="aboutus-member-info">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="section-header">
          <h2>GAME PLANS</h2>
          <div className="divider"></div>
        </div>
        
        <div className="pricing-tabs">
          <button 
            className={`tab-button ${!showMemberships ? 'active' : ''}`}
            onClick={() => setShowMemberships(false)}
          >
            Single Sessions
          </button>
          <button 
            className={`tab-button ${showMemberships ? 'active' : ''}`}
            onClick={() => setShowMemberships(true)}
          >
            Memberships
          </button>
        </div>
        
        <div className="pricing-cards">
          {!showMemberships ? (
            pricingPlans.map((plan, i) => (
              <div
                key={i}
                className={`pricing-card ${plan.popular ? "popular" : ""}`}
              >
                <h3>{plan.title}</h3>
                <p className="price">{plan.price}</p>
                <ul>
                  {plan.features.map((feature, idx) => (
                    <li key={idx}> {feature}</li>
                  ))}
                </ul>
                <button className="book-button">Book Now</button>
              </div>
            ))
          ) : (
            membershipPlans.map((plan, i) => (
              <div
                key={i}
                className={`pricing-card ${plan.popular ? "popular" : ""}`}
              >
                <h3>{plan.title}</h3>
                <p className="price">{plan.price}</p>
                <ul>
                  {plan.features.map((feature, idx) => (
                    <li key={idx}> {feature}</li>
                  ))}
                </ul>
                <button className="book-button">Join Now</button>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
