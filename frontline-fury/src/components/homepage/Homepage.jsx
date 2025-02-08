import React, { useState } from 'react';

import './Homepage.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import captureTheFlagImg from '../assests/captureflag.jpg';
import spikeRushImg from '../assests/spikerush.jpg';
import battleRoyalImg from '../assests/battleroyale.jpg';
import ff from '../assests/ff.png';


import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';














const Homepage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: false,
  };


  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [selectedQuestion, setSelectedQuestion] = useState(0);




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


  const faqData = [
    {
      question: "What is the objective of the airsoft arena?",
      answer: "Our airsoft arena provides a realistic tactical experience, promoting team-based strategy and sportsmanship."
    },
    {
      question: "What equipment do I need?",
      answer: "We provide all necessary equipment, including airsoft guns, protective gear, and pellets. You can also bring your own gear if it meets safety standards."
    },
    {
      question: "Is airsoft safe?",
      answer: "Yes! We enforce strict safety rules, provide protective gear, and have trained referees monitoring all games."
    },
    {
      question: "Do I need prior experience to play?",
      answer: "No experience is needed! We offer beginner-friendly game modes and provide a quick training session before you start."
    },
    {
      question: "How do I book a session?",
      answer: "You can book a session through our website or contact us directly for reservations and group bookings."
    }
  ];



  const steps = [
    { number: "1", title: "Choose Game Mode", description: "Pick from Capture The Flag, Battle Royale, or more!" },
    { number: "2", title: "Select Date & Time", description: "Book a slot that suits you!" },
    { number: "3", title: "Choose The Slot", description: "Choose a slot that suits you!" },
    { number: "4", title: "Confirm Your Booking", description: "Pay, Confirm  & start the action!" },
  ];


  const pricingPlans = [
    { name: "Per Player", price: "₹1000", benefits: ["1 Hour Gameplay", "Basic Equipment", "Standard Arena"] },
    { name: "Team Entry", price: "₹4000", benefits: ["3 Hours Gameplay", "Advanced Equipment", "Priority Booking"] },
    { name: "Shooting Range", price: "₹500", benefits: ["Unlimited Access", "Exclusive Events", "Private Matches"] },
    { name: "Private Events", price: "₹15000", benefits: ["Unlimited Access", "Exclusive Events", "Private Matches"] },
    { name: "VIP Membership", price: "₹7000", benefits: ["Unlimited Access", "Exclusive Events", "Private Matches"] },
  ];


  const testimonials = [
    {
      name: "Nandini Kishore",
      image: battleRoyalImg,
      quote: "Amazing experience! The best airsoft arena I've ever been to."
    },
    {
      name: "Karan Singh Negi",
      image: spikeRushImg,
      quote: "Incredible game modes and friendly staff. Highly recommended!"
    },
    {
      name: "Tarun Guleria",
      image: captureTheFlagImg,
      quote: "Had a blast with my friends. Can't wait to come back!"
    },
    {
      name: "Jatin Agarwal",
      image: captureTheFlagImg,
      quote: "Had a blast with my friends. Can't wait to come back!"
    }
  ];










  return (
    <div>

      <Navbar />

      <div className="home-container">
        {/* Banner Section */}
        <div className="home-banner">
          <h1>Welcome to India's First Premier Airsoft Arena</h1>
          <p>Where Gaming Meets Action!</p>
          <button className="home-banner-button">Get Started</button>

        </div>


        <div data-aos="fade-up">
          {/* About Frontline Fury Section */}
          <div className="about-section">
            <div className="about-image">
              <img src={ff} alt="About Frontline Fury" />
            </div>
            <div className="about-content">
              <h2> Frontline Fury</h2>
              <p>
                Frontline Fury is India’s premier airsoft arena designed for players who crave thrilling and realistic combat experiences.
                Our mission is to bring tactical gameplay, teamwork, and sportsmanship to the forefront of modern recreational activities.
              </p>
              <p>
                Whether you're a beginner or a pro, our state-of-the-art facility provides the perfect battleground for adrenaline-fueled action.
                Get ready to engage in immersive game modes like Capture the Flag, Battle Royale, and more!
              </p>
              <button className="learn-more-button">Learn More</button>
            </div>

          </div>
        </div>






        <div data-aos="fade-up">

          <div className="how-it-works-section">
            <h2>How It Works</h2>
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


        <div className="cta-section">
          <h2>Ready for Action?</h2>
          <p>Book your session now and experience the thrill!</p>
          <button>Book Now</button>
          <p>📞 Call: +91 639664369 | 📩 Email: info@frontlinefury.com</p>
        </div>




        {/* Game Modes Section */}
        <div className="game-mode" id="features">
          <h2>Game Modes</h2>
          <div className="game-mode-container">
            {gamemodeData.map((gamemode, index) => (
              <div className="game-mode-card" key={index}>
                <div className="game-mode-image">
                  <img src={gamemode.image} alt={gamemode.title} />
                </div>
                <div className="game-mode-content">
                  <h3>{gamemode.title}</h3>
                  <p>{gamemode.description}</p>
                </div>
                <button className="book-now-button">Book Now</button>
              </div>
            ))}
          </div>
        </div>






        {/* Carousel Section */}
        <div className="homepage-carousel">
          <Slider {...settings}>
            {carouselData.map((slide, index) => (
              <div key={index} className="relative w-full h-screen">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-screen object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white text-center p-6">
                  <h1 className="text-4xl md:text-6xl font-bold">
                    {slide.title}
                  </h1>
                  <p className="mt-4 text-lg md:text-2xl">
                    {slide.description}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>









        <div className="pricing-section">
          <h2>Pricing</h2>
          <div className="pricing-container">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="pricing-card">
                <h3>{plan.name}</h3>
                <h3>{plan.price}</h3>
                <ul>
                  {plan.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
                <button>Get Started</button>
              </div>
            ))}
          </div>
        </div>















        <div className="testimonial-section">
          <h2>What Our Players Say</h2>
          <div className="testimonial-container">
            <div className="testimonial-slider">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.quote}</p>
                </div>
              ))}
              {/* Duplicate for seamless scrolling */}
              {testimonials.map((testimonial, index) => (
                <div key={index + testimonials.length} className="testimonial-card">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.quote}</p>
                </div>
              ))}
            </div>
          </div>
        </div>



        <div className="faq-container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-layout">

            <div className="faq-right">
              <h3>Articles in this section</h3>
              <ul>
                {faqData.map((item, index) => (
                  <li
                    key={index}
                    className={index === selectedQuestion ? "active" : ""}
                    onClick={() => setSelectedQuestion(index)}
                  >
                    {item.question}
                  </li>
                ))}
              </ul>
            </div>
            <div className="faq-left">
              <h1>{faqData[selectedQuestion].question}</h1>
              <ul>
                {faqData[selectedQuestion].answer.split("\n").map((line, idx) => (
                  <li key={idx}>{line.trim()}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>













      </div>
      <Footer/>
    </div>
  );
};

export default Homepage;



