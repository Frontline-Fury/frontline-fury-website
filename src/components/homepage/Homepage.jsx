import React, { useEffect, useState } from 'react';
import './Homepage.css';
import captureTheFlagImg from '../assests/captureflag.jpg';
import spikeRushImg from '../assests/spikerush.jpg';
import battleRoyalImg from '../assests/battleroyale.jpg';
// import Slider from "react-slick";
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
import airsoftIntroImg from '../assests/post4.jpg';

import supabase from "../../supabaseClient";


const Homepage = () => {
  const navigate = useNavigate();
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [popupShown, setPopupShown] = useState(false);

  // Feedback form state
  const [formData, setFormData] = useState({
    rating: 0,
    thoughts: '',
    visit_frequency: '',
    game_mode_request: '',
    arena_upgrade: '',
    custom_request: ''
  });
  const [userId, setUserId] = useState(null);
  const [hasSubmittedFeedback, setHasSubmittedFeedback] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !popupShown) {
        setShowExitPopup(true);
        setPopupShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    // Fetch user and check feedback
    const fetchUserAndFeedback = async () => {
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      if (userError) {
        console.error('Error fetching user:', userError);
        return;
      }

      if (user) {
        setUserId(user.id);
        const { data, error: feedbackError } = await supabase
          .from('feedback')
          .select('*')
          .eq('user_id', user.id);

        if (feedbackError) {
          console.error('Error fetching feedback:', feedbackError);
          return;
        }

        if (data && data.length > 0) {
          setHasSubmittedFeedback(true);
        }
      }
    };

    fetchUserAndFeedback();

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [popupShown]);

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 1000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   pauseOnHover: false,
  // };

  const gamemodeData = [
    {
      title: 'Capture The Flag',
      description: 'Battle for dominance in Capture the Flag! Strategize, outmaneuver opponents, and secure the enemy\'s flag while defending your own to claim victory.',
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

  // const carouselData = [
  //   {
  //     title: "Experience the Ultimate Battle!",
  //     description: "Get ready for adrenaline-pumping airsoft action in a realistic battleground.",
  //     image: captureTheFlagImg,
  //   },
  //   {
  //     title: "Game Modes & Events",
  //     description: "Team Deathmatch, Capture the Flag, VIP Escort, and more exciting challenges await you!",
  //     image: spikeRushImg,
  //   },
  //   {
  //     title: "Top Shooters & Leaderboard",
  //     description: "Compete with the best and rise to the top of the leaderboard!",
  //     image: battleRoyalImg,
  //   },
  // ];

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
      name: "Shruti Sharma",
      image: null,
      quote: "Incredible game modes"
    },
    {
      name: "Atul Guleria",
      image: null,
      quote: "Best place for OUTINGS!"
    },
    {
      name: "Tarun Guleria",
      image: tarunimg,
      quote: "Real Guns ki feel hai boss!"
    },
    {
      name: "Sangeeta Rawat",
      image: null,
      quote: "Really loved the place"
    },
    {
      name: "Divyansh Negi",
      image: divyanshimg,
      quote: "Concept is really amazing!!"
    },
      {
      name: "Varun Sharma",
      image: null,
      quote: "Better than paintball"
    }
  ];

  // Feedback form handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRatingChange = (value) => {
    setFormData(prev => ({
      ...prev,
      rating: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId) {
      alert('Please sign in to submit feedback');
      navigate('/login');
      return;
    }

    const { error } = await supabase
      .from('feedback')
      .insert([
        {
          user_id: userId,
          rating: formData.rating,
          thoughts: formData.thoughts,
          visit_frequency: formData.visit_frequency,
          game_mode_request: formData.game_mode_request,
          arena_upgrade: formData.arena_upgrade,
          custom_request: formData.custom_request,
          submitted_at: new Date().toISOString()
        }
      ]);

    if (error) {
      console.error('Error submitting feedback:', error);
      alert('Failed to submit feedback. Please try again.');
    } else {
      alert('Feedback submitted successfully!');
      setHasSubmittedFeedback(true);
      setFormData({
        rating: 0,
        thoughts: '',
        visit_frequency: '',
        game_mode_request: '',
        arena_upgrade: '',
        custom_request: ''
      });
    }
  };

  const getInitials = (name) => {
    const names = name.split(' ');
    let initials = names[0].substring(0, 1).toUpperCase();

    if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }

    return initials;
  };

  return (
    <div>
      {showExitPopup && <ExitIntentPopup onClose={() => setShowExitPopup(false)} />}

      <div className="home-banner">
        <video src={bgvideo} autoPlay loop muted playsInline />
        <div className="home-banner-content">
          <h1>Welcome to India's First Premier Airsoft Arena</h1>
          <p>Where Gaming Meets Action!</p>
          <button className="home-banner-button" onClick={() => navigate('/gamemode')}>Book Now</button>
        </div>
      </div>

      <div data-aos="fade-up">
        <div className="about-us-section">
          <div className="about-us-container">
            <div className="about-us-left">
              <h2>FRONTLINE FURY</h2>
            </div>
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

      <section className="airsoft-intro">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2><span className="highlight-red">AIRSOFT</span> - REALISTIC COMBAT SPORT</h2>
            <p>India's Most Thrilling Tactical Experience</p>
          </div>

          <div className="content-grid">
            <div className="text-content" data-aos="fade-right">
              <p className="lead-text">
                Imagine <strong>realistic military combat</strong> with <strong>replica guns</strong>,
                <strong> teamwork</strong>, and <strong>heart-pounding action</strong>—but with
                <strong> 100% safe plastic BBs</strong>. That's Airsoft!
              </p>

              <div className="comparison-box">
                <h4>Airsoft vs Paintball:</h4>
                <ul>
                  <li>
                    <strong> Realism:</strong> Airsoft guns mimic real firearms (weight, recoil, magazines).
                    Paintball feels like a game.
                  </li>
                  <li>
                    <strong> Precision:</strong> Airsoft BBs fly straighter (100+ feet range). Paintballs
                    arc and splatter.
                  </li>
                  <li>
                    <strong> Military Simulation:</strong> Airsoft focuses on tactics like
                    <strong> flanking</strong>, <strong>cover fire</strong>, and <strong>missions</strong>.
                    Paintball is more casual.
                  </li>
                </ul>
              </div>

              <div className="cta-box">
                <button className="cta-button">
                  WATCH AIRSOFT IN ACTION
                </button>
                <button className="secondary-button">
                  COMPLETE BEGINNER'S GUIDE
                </button>
              </div>
            </div>

            <div className="image-content" data-aos="fade-left">
              <div className="image-wrapper">
                <img
                  src={airsoftIntroImg}
                  alt="Airsoft match in India - Teamwork & tactics"
                />
                <div className="floating-badge">
                  <div className="badge-icon">--</div>
                  <span>6mm PLASTIC BBs | NO REAL BULLETS --</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section dark-bg">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>WHY <span className="highlight-red">FRONTLINE FURY</span>?</h2>
            <p>India's #1 Professional Airsoft Arena</p>
          </div>

          <div className="features-grid">
            {[
              {
                icon: '',
                title: 'AUTHENTIC COMBAT GEAR',
                desc: 'Use <strong>Tokyo Marui, G&G, Specna Arms</strong> replicas—the same brands used by pros worldwide.'
              },
              {
                icon: '',
                title: 'IMMERSIVE ARENAS',
                desc: 'Urban warfare, jungle ops, and CQB (Close Quarters Battle) zones—no two games feel alike!'
              },
              {
                icon: '',
                title: 'MILITARY-GRADE SAFETY',
                desc: '<strong>Full-face masks</strong>, certified marshals, and strict FPS limits for 100% safe gameplay.'
              },
              {
                icon: '',
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
          <div className="section-header" data-aos="fade-up">
            <h2>EXPLORE OUR <span className="highlight-red">GAME MODES</span></h2>
          </div>
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
                <button className="book-now-button" onClick={() => navigate('/gamemode')}>
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div data-aos="fade-up">
        <div className="how-it-works-section">
          <div className="section-header" data-aos="fade-up">
            <h2>HOW IT <span className="highlight-red">WORKS </span></h2>
          </div>
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

      {/* <div className="new-carousel">
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
      </div> */}


      <div className="home-banner">
        <video src={bgvideo} autoPlay loop muted playsInline />



      </div>







      <div data-aos="fade-up" className="instagram-promo-section">
        <div className="instagram-container">
          <div className="instagram-preview">
            <div className="instagram-header">
              <div className="instagram-profile">
                <div className="instagram-avatar"></div>
                <span>thefrontlinefury</span>
              </div>
              <button className="follow-button" onClick={() => window.open('https://instagram.com/thefrontlinefury')}>
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
          <div className="section-header" data-aos="fade-up">
            <h2>WHAT OUR <span className="highlight-red">PLAYERS </span>SAY</h2>
          </div>
          <div className="testimonial-container">
            <div className="testimonial-slider slider-1">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div key={`slider1-${index}`} className="testimonial-card">
                  {testimonial.image ? (
                    <img src={testimonial.image} alt={testimonial.name} />
                  ) : (
                    <div className="initials-circle">
                      {getInitials(testimonial.name)}
                    </div>
                  )}
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.quote}</p>
                </div>
              ))}
            </div>

            <div className="testimonial-slider slider-2">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div key={`slider2-${index}`} className="testimonial-card">
                  {testimonial.image ? (
                    <img src={testimonial.image} alt={testimonial.name} />
                  ) : (
                    <div className="initials-circle">
                      {getInitials(testimonial.name)}
                    </div>
                  )}
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.quote}</p>
                </div>
              ))}
            </div>

            <div className="testimonial-slider slider-3">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div key={`slider3-${index}`} className="testimonial-card">
                  {testimonial.image ? (
                    <img src={testimonial.image} alt={testimonial.name} />
                  ) : (
                    <div className="initials-circle">
                      {getInitials(testimonial.name)}
                    </div>
                  )}
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.quote}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" className="feedback-container">
        <div className="feedback-header">
          <h2>"We value your opinion! Please share your thoughts below."</h2>
          <p>Help us improve your combat experience</p>
          <div className="pulse-line"></div>
        </div>

        {hasSubmittedFeedback ? (
          <div className="feedback-thank-you">
            <h3>Thank you for your feedback!</h3>
            <p>We appreciate your input and will use it to improve our services.</p>
          </div>
        ) : (
          <form className="tactical-feedback-form" onSubmit={handleSubmit}>
            <div className="form-section">
              <label>How's your experience so far?</label>
              <div className="tactical-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <React.Fragment key={star}>
                    <input
                      type="radio"
                      id={`tactical-star-${star}`}
                      name="rating"
                      value={star}
                      checked={formData.rating === star}
                      onChange={() => handleRatingChange(star)}
                    />
                    <label htmlFor={`tactical-star-${star}`} className="tactical-star">
                      <div className="star-base"></div>
                      <div className="star-fill"></div>
                    </label>
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="form-section">
              <label htmlFor="thoughts">Share your thoughts on this idea?</label>
              <div className="input-container">
                <input
                  type="text"
                  id="thoughts"
                  name="thoughts"
                  value={formData.thoughts}
                  onChange={handleChange}
                  placeholder="Your Thoughts"
                />
                <div className="input-decoration"></div>
              </div>
            </div>

            <div className="form-section">
              <label htmlFor="visit_frequency">How Frequent will you visit?</label>
              <div className="custom-select">
                <select
                  id="visit_frequency"
                  name="visit_frequency"
                  value={formData.visit_frequency}
                  onChange={handleChange}
                  className="tactical-select"
                >
                  <option value="">Select preferred visit</option>
                  <option value="Once a month">Once a month</option>
                  <option value="Twice a month">Twice a month</option>
                  <option value="Thrice a month">Thrice a month</option>
                  <option value="More than thrice">More than thrice</option>
                  <option value="Other">Other (specify below)</option>
                </select>
                <div className="select-arrow"></div>
              </div>
            </div>

            <div className="form-section">
              <label htmlFor="game_mode_request">REQUEST NEW GAME MODES</label>
              <div className="custom-select">
                <select
                  id="game_mode_request"
                  name="game_mode_request"
                  value={formData.game_mode_request}
                  onChange={handleChange}
                  className="tactical-select"
                >
                  <option value="">Select preferred mode</option>
                  <option value="Zombie Survival">Zombie Survival</option>
                  <option value="Sniper Elimination">Sniper Elimination</option>
                  <option value="Stealth Missions">Stealth Missions</option>
                  <option value="CTF Variations">CTF Variations</option>
                  <option value="Other">Other (specify below)</option>
                </select>
                <div className="select-arrow"></div>
              </div>
            </div>

            <div className="form-section">
              <label htmlFor="arena_upgrade">REQUEST ARENA UPGRADES</label>
              <div className="custom-select">
                <select
                  id="arena_upgrade"
                  name="arena_upgrade"
                  value={formData.arena_upgrade}
                  onChange={handleChange}
                  className="tactical-select"
                >
                  <option value="">Select upgrade type</option>
                  <option value="More Obstacles/Cover">More Obstacles/Cover</option>
                  <option value="Lighting Effects">Lighting Effects</option>
                  <option value="Themed Areas">Themed Areas</option>
                  <option value="Safety Improvements">Safety Improvements</option>
                  <option value="Other">Other (specify below)</option>
                </select>
                <div className="select-arrow"></div>
              </div>
            </div>

            <div className="form-section">
              <label htmlFor="custom_request">SPECIAL REQUEST</label>
              <div className="input-container">
                <input
                  type="text"
                  id="custom_request"
                  name="custom_request"
                  value={formData.custom_request}
                  onChange={handleChange}
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
        )}
      </div>
    </div>
  );
};

export default Homepage;