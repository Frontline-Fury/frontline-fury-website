import React, { useEffect, useState } from 'react';
import './Homepage.css';
import captureTheFlagImg from '../assests/captureflag.jpg';
import spikeRushImg from '../assests/spikerush.jpg';
import battleRoyalImg from '../assests/battleroyale.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assests/fonts/fonts.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import bgvideo from '../assests/bgvid.mp4';
import { useNavigate } from 'react-router-dom';
import nandiniimg from '../assests/nandini.jpeg';
import karanimg from '../assests/karan.jpeg';
import tarunimg from '../assests/tarun.jpeg';
import divyanshimg from '../assests/divyansh.jpeg';
import ExitIntentPopup from '../exitpopup/ExitIntentPopup';
import post2 from '../assests/post2.png'
import post11 from '../assests/post11.jpg'
import post3 from '../assests/post3.jpg'
import post4 from '../assests/post4.jpg'

import airsoftIntroImg from '../assests/post4.jpg'; // Add this image



const Homepage = () => {
  const navigate = useNavigate();
  const [showExitPopup, setShowExitPopup] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const handleMouseLeave = (e) => {
      if (e.clientY <= 0) {
        setShowExitPopup(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };

  const gamemodeData = [
    {
      title: 'Capture The Flag',
      description: 'Battle for dominance in Capture the Flag! Strategize, outmaneuver opponents, and secure the enemy’s flag while defending your own to claim victory.',
      image: captureTheFlagImg,
    },
    {
      title: 'Spike Rush',
      description: 'One team plants the objective, while the other fights to defuse it. Plan your tactics, hold your ground, and secure victory.',
      image: spikeRushImg,
    },
    {
      title: 'Battle Royal',
      description: 'Every player for themselves! Eliminate opponents, survive the chaos, and be the last one standing to claim victory.',
      image: battleRoyalImg,
    },
  ];

  const carouselData = [
    {
      title: "Experience the Ultimate Battle!",
      description: "Get ready for adrenaline-pumping airsoft action in a realistic battleground.",
      image: captureTheFlagImg,
    },
    {
      title: "Game Modes & Events",
      description: "Team Deathmatch, Capture the Flag, VIP Escort, and more exciting challenges await you!",
      image: spikeRushImg,
    },
    {
      title: "Top Shooters & Leaderboard",
      description: "Compete with the best and rise to the top of the leaderboard!",
      image: battleRoyalImg,
    },
  ];

  const steps = [
    { number: "1", title: "Choose Game Mode", description: "Pick from Capture The Flag, Battle Royale, or more!" },
    { number: "2", title: "Select Date & Time", description: "Book a slot that suits you!" },
    { number: "3", title: "Choose The Slot", description: "Choose a slot that suits you!" },
    { number: "4", title: "Confirm Your Booking", description: "Pay, Confirm  & start the action!" },
  ];

  const testimonials = [
    {
      name: "Nandini ",
      image: nandiniimg,
      quote: "Amazing experience! The best airsoft arena I've ever been to."
    },
    {
      name: "Karan Singh Negi",
      image: karanimg,
      quote: "Incredible game modes and friendly staff. Highly recommended!"
    },
    {
      name: "Tarun Guleria",
      image: tarunimg,
      quote: "Had a blast with my friends. Can't wait to come back!"
    },
    {
      name: "Divyansh Negi",
      image: divyanshimg,
      quote: "Had a blast with my friends. Can't wait to come back!"
    }
  ];











  const [popupShown, setPopupShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY < 10 && !popupShown) {
        setShowExitPopup(true);
        setPopupShown(true); // Show only once
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [popupShown]);




  return (
    <div>
      {showExitPopup && <ExitIntentPopup onClose={() => setShowExitPopup(false)} />}


      <div className="home-banner">
        <video src={bgvideo} autoPlay loop muted />
        <div className="home-banner-content">
          <h1>Welcome to India's First Premier Airsoft Arena</h1>
          <p>Where Gaming Meets Action!</p>
          <button className="home-banner-button" onClick={() => navigate('/gamemode')}>Book Now</button>
        </div>
      </div>





      <div data-aos="fade-up">
        <div className="about-us-section">
          <div className="about-us-container">
            {/* Left side with company name and tagline */}
            <div className="about-us-left">
              <h2>FRONTLINE FURY</h2>

            </div>

            {/* Right side with description and button */}
            <div className="about-us-right">
              <p className="about-text">
                Frontline Fury is India's premier airsoft arena, offering an unparalleled combat experience
                with state-of-the-art equipment and immersive game modes. Our mission is to bring
                tactical gaming to life, creating adrenaline-pumping battles in a safe and controlled
                environment. Whether you're a seasoned player or new to airsoft, we provide the
                ultimate battlefield for you to test your skills and strategy.
              </p>
              <button className="learn-more-button" onClick={() => navigate('/aboutus')}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>



{/* ====== WHAT IS AIRSOFT? ====== */}
<section className="airsoft-intro">
  <div className="container">
    <div className="section-header" data-aos="fade-up">
      <h2><span className="highlight-red">AIRSOFT</span> - REALISTIC COMBAT SPORT</h2>
      <p>India’s Most Thrilling Tactical Experience</p>
    </div>

    <div className="content-grid">
      {/* Left Side - Text */}
      <div className="text-content" data-aos="fade-right">
        <p className="lead-text">
          Imagine <strong>realistic military combat</strong> with <strong>replica guns</strong>, 
          <strong> teamwork</strong>, and <strong>heart-pounding action</strong>—but with 
          <strong> 100% safe plastic BBs</strong>. That’s Airsoft!
        </p>

        <div className="comparison-box">
          <h4>🚀 Airsoft vs Paintball:</h4>
          <ul>
            <li>
              <strong>🔫 Realism:</strong> Airsoft guns mimic real firearms (weight, recoil, magazines). 
              Paintball feels like a game.
            </li>
            <li>
              <strong>🎯 Precision:</strong> Airsoft BBs fly straighter (100+ feet range). Paintballs 
              arc and splatter.
            </li>
            <li>
              <strong>💂 Military Simulation:</strong> Airsoft focuses on tactics like 
              <strong> flanking</strong>, <strong>cover fire</strong>, and <strong>missions</strong>. 
              Paintball is more casual.
            </li>
          </ul>
        </div>

        <div className="cta-box">
          <button className="cta-button">
            🎥 WATCH AIRSOFT IN ACTION
          </button>
          <button className="secondary-button">
            📖 COMPLETE BEGINNER’S GUIDE
          </button>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="image-content" data-aos="fade-left">
        <div className="image-wrapper">
          <img 
            src={airsoftIntroImg} 
            alt="Airsoft match in India - Teamwork & tactics" 
          />
          <div className="floating-badge">
            <div className="badge-icon">🔫</div>
            <span>6mm PLASTIC BBs | NO REAL BULLETS</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ====== WHY FRONTLINE FURY? ====== */}
<section className="features-section dark-bg">
  <div className="container">
    <div className="section-header" data-aos="fade-up">
      <h2>WHY <span className="highlight-red">FRONTLINE FURY</span>?</h2>
      <p>India’s #1 Professional Airsoft Arena</p>
    </div>

    <div className="features-grid">
      {[
        {
          icon: '🎯',
          title: 'AUTHENTIC COMBAT GEAR',
          desc: 'Use <strong>Tokyo Marui, G&G, Specna Arms</strong> replicas—the same brands used by pros worldwide.'
        },
        {
          icon: '🏰',
          title: 'IMMERSIVE ARENAS',
          desc: 'Urban warfare, jungle ops, and CQB (Close Quarters Battle) zones—no two games feel alike!'
        },
        {
          icon: '🛡️',
          title: 'MILITARY-GRADE SAFETY',
          desc: '<strong>Full-face masks</strong>, certified marshals, and strict FPS limits for 100% safe gameplay.'
        },
        {
          icon: '🏆',
          title: 'TOURNAMENTS & EVENTS',
          desc: 'Compete in <strong>ranked matches</strong>, corporate team-building, and zombie survival nights!'
        }
      ].map((item, index) => (
        <div key={index} className="feature-card" data-aos="fade-up" data-aos-delay={index * 100}>
          <div className="feature-icon">{item.icon}</div>
          <h3>{item.title}</h3>
          <p dangerouslySetInnerHTML={{ __html: item.desc }} />
          {index === 3 && (
            <button className="mini-button">VIEW EVENT CALENDAR →</button>
          )}
        </div>
      ))}
    </div>
  </div>
</section>




















      <div data-aos="fade-up">
        <div className="game-modess" id="features">
          <h2>GAME MODES</h2>
          <div className="game-modess-container">
            {gamemodeData.map((gamemode, index) => (
              <div className="game-modess-card" key={index}>
                <div className="game-modess-image">
                  <img src={gamemode.image} alt={gamemode.title} />
                </div>
                <div className="game-modess-content">
                  <h3>{gamemode.title}</h3>
                  <p>{gamemode.description}</p>
                </div>
                <button className="book-now-button">Book Now</button>
              </div>
            ))}
          </div>
        </div>
      </div>



      <div data-aos="fade-up">
        <div className="how-it-works-section">
          <h2>HOW IT WORKS</h2>
          <div className="steps-container">
            {steps.map((step, index) => (
              <div key={index} className="step-card">
                <h3>{step.number}</h3>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>






      <div className="new-carousel">
        <Slider {...settings}>
          {carouselData.map((slide, index) => (
            <div key={index} className="carousel-slide">
              <img src={slide.image} alt={slide.title} className="carousel-image" />
              <div className="overlay">
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>



      <div data-aos="fade-up" className="instagram-promo-section">
        <div className="instagram-container">
          {/* Instagram Preview */}
          <div className="instagram-preview">
            <div className="instagram-header">
              <div className="instagram-profile">
                <div className="instagram-avatar"></div>
                <span>frontline.fury</span>
              </div>
              <button className="follow-button" onClick={() => window.open('https://instagram.com/frontline.fury')}>
                Follow
              </button>
            </div>

            <div className="instagram-post-grid">
              {[
                { img: post2, link: "https://www.instagram.com/p/DJHsoQvC63o/" },
                { img: post11, link: "https://www.instagram.com/p/CxamplePost2/" },
                { img: post3, link: "https://www.instagram.com/p/CxamplePost3/" },
                { img: post11, link: "https://www.instagram.com/p/CxamplePost2/" },
                { img: post3, link: "https://www.instagram.com/p/CxamplePost3/" },
                { img: post4, link: "https://www.instagram.com/p/CxamplePost4/" }

              ].map((post, index) => (
                <div key={index} className="instagram-post">
                  <img
                    src={post.img}
                    alt={`Instagram Post ${index + 1}`}
                    onClick={() => window.open(post.link)}
                  />
                  <div className="post-overlay">
                    <span>👀 View Post</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Early Bird Offer */}
          <div className="early-bird-offer">
            <h3>Exclusive Early Bird Offers!</h3>
            <p>Follow us on Instagram and get:</p>
            <ul className="offer-list">
              <li>✅ 15% off your first booking</li>
              <li>✅ Access to members-only events</li>
              <li>✅ Chance to win free game passes</li>
              <li>✅ Early access to new game modes</li>
            </ul>

            <div className="offer-code">
              <p>Use code at checkout:</p>
              <div className="code-box">FOLLOW15</div>
            </div>

            <button
              className="cta-button"
              onClick={() => window.open('https://instagram.com/frontline.fury')}
            >
              Follow Now & Claim Offer
            </button>

            <div className="social-proof">
              <div className="followers-count">
                <strong>2,500+</strong> players already following
              </div>
            </div>
          </div>
        </div>
      </div>





      <div data-aos="fade-up">
        <div className="testimonial-section">
          <h2>WHAT OUR PLAYERS SAY</h2>
          <div className="testimonial-container">
            {/* First row - right to left */}
            <div className="testimonial-slider slider-1">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div key={`slider1-${index}`} className="testimonial-card">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.quote}</p>
                </div>
              ))}
            </div>

            {/* Second row - left to right */}
            <div className="testimonial-slider slider-2">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div key={`slider2-${index}`} className="testimonial-card">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.quote}</p>
                </div>
              ))}
            </div>

            {/* Third row - right to left */}
            <div className="testimonial-slider slider-3">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div key={`slider3-${index}`} className="testimonial-card">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.quote}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>









      {/* <div data-aos="fade-up" className="feedback-section">
  <h2>💬 We Value Your Feedback</h2>
  <p>Let us know what you think about your experience or what we can improve.</p>
  <form className="feedback-form" onSubmit={(e) => e.preventDefault()}>
    <textarea
      placeholder="Type your feedback here..."
      rows="5"
      className="feedback-textarea"
      required
    />
    <button type="submit" className="submit-feedback-button">Submit Feedback</button>
  </form>
</div> */}










      <div data-aos="fade-up" className="feedback-container">
        <div className="feedback-header">
          <h2>“We value your opinion! Please share your thoughts below.”</h2>
          <p>Help us improve your combat experience</p>
          <div className="pulse-line"></div>
        </div>

        <form className="tactical-feedback-form">
          {/* Rating Section */}
          <div className="form-section">
            <label>How's your experience so far?</label>
            <div className="tactical-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <React.Fragment key={star}>
                  <input type="radio" id={`tactical-star-${star}`} name="rating" value={star} />
                  <label htmlFor={`tactical-star-${star}`} className="tactical-star">
                    <div className="star-base"></div>
                    <div className="star-fill"></div>
                  </label>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Feedback Section */}
          <div className="form-section">
            <label htmlFor="custom-request">Share your thoughts on this idea?</label>
            <div className="input-container">
              <input
                type="text"
                id="custom-request"
                placeholder="Your Thoughts"
              />
              <div className="input-decoration"></div>
            </div>
          </div>

          {/* Visits Dropdown */}
          <div className="form-section">
            <label htmlFor="game-modess">How Frequent will you visit?</label>
            <div className="custom-select">
              <select id="game-modess" className="tactical-select">
                <option value="">Select preferred visit</option>
                <option value="zombie">Once  a month</option>
                <option value="sniper">Twice  a month</option>
                <option value="stealth">Thrice  a month</option>
                <option value="ctf">More than thrice</option>
                <option value="other">Other (specify below)</option>
              </select>
              <div className="select-arrow"></div>
            </div>
          </div>


          {/* Game Mode Dropdown */}
          <div className="form-section">
            <label htmlFor="game-modess">REQUEST NEW GAME MODES</label>
            <div className="custom-select">
              <select id="game-modess" className="tactical-select">
                <option value="">Select preferred mode</option>
                <option value="zombie">Zombie Survival</option>
                <option value="sniper">Sniper Elimination</option>
                <option value="stealth">Stealth Missions</option>
                <option value="ctf">CTF Variations</option>
                <option value="other">Other (specify below)</option>
              </select>
              <div className="select-arrow"></div>
            </div>
          </div>

          {/* Arena Dropdown */}
          <div className="form-section">
            <label htmlFor="arena-upgrade">REQUEST ARENA UPGRADES</label>
            <div className="custom-select">
              <select id="arena-upgrade" className="tactical-select">
                <option value="">Select upgrade type</option>
                <option value="obstacles">More Obstacles/Cover</option>
                <option value="lighting">Lighting Effects</option>
                <option value="theming">Themed Areas</option>
                <option value="safety">Safety Improvements</option>
                <option value="other">Other (specify below)</option>
              </select>
              <div className="select-arrow"></div>
            </div>
          </div>

          {/* Custom Suggestion */}
          <div className="form-section">
            <label htmlFor="custom-request">SPECIAL REQUEST</label>
            <div className="input-container">
              <input
                type="text"
                id="custom-request"
                placeholder="Your custom suggestion..."
              />
              <div className="input-decoration"></div>
            </div>
          </div>

          <button type="submit" className="tactical-submit">
            <span>TRANSMIT REPORT</span>
            <div className="radio-wave"></div>
          </button>
        </form>
      </div>







    </div>
  );
};

export default Homepage;
