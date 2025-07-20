import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './CombinedGamePage.css';
import spikeRushImg from '../assests/spikerush.jpg';
import battleRoyalImg from '../assests/battleroyale.jpg';
import captureTheFlagImg from '../assests/captureflag.jpg';

// Game data
const listings = [
  {
    slug: 'spike-rush',
    image: spikeRushImg,
    title: 'Spike Rush',
    description: 'Fast-paced mode where the spike appears randomly. First to 4 rounds wins!',
    difficulty: 'Intermediate',
    team: '4v4 / 5v5',
    tagline: 'Lightning fast action',
    video: 'https://example.com/game-video.mp4',
    rules: [
      "Random spike spawn locations",
      "First to win 4 rounds",
      "Shorter round timer",
      "All players get random weapons"
    ],
    testimonials: [
      {
        name: "Alex Johnson",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
        text: "The most intense battle experience! Every match feels unique.",
        playtime: 142,
        date: "2 weeks ago"
      },
      {
        name: "Samanta Lee",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 4,
        text: "Love the random spike mechanic. Makes for exciting gameplay!",
        playtime: 87,
        date: "1 month ago"
      }
    ],
    rating: 4.7,
  },

   {
    slug: 'battleroale',
    image: battleRoyalImg,
    title: 'Battle Royale',
    description: 'Fast-paced mode where the spike appears randomly. First to 4 rounds wins!',
    difficulty: 'Intermediate',
    team: '4v4 / 5v5',
    tagline: 'Lightning fast action',
    video: 'https://example.com/game-video.mp4',
    rules: [
      "Random spike spawn locations",
      "First to win 4 rounds",
      "Shorter round timer",
      "All players get random weapons"
    ],
    testimonials: [
      {
        name: "Alex Johnson",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
        text: "The most intense battle experience! Every match feels unique.",
        playtime: 142,
        date: "2 weeks ago"
      },
      {
        name: "Samanta Lee",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 4,
        text: "Love the random spike mechanic. Makes for exciting gameplay!",
        playtime: 87,
        date: "1 month ago"
      }
    ],
    rating: 4.7,
  },

   {
    slug: 'capturetheflag',
    image: captureTheFlagImg,
    title: 'Capture The Flag',
    description: 'Fast-paced mode where the spike appears randomly. First to 4 rounds wins!',
    difficulty: 'Intermediate',
    team: '4v4 / 5v5',
    tagline: 'Lightning fast action',
    video: 'https://example.com/game-video.mp4',
    rules: [
      "Random spike spawn locations",
      "First to win 4 rounds",
      "Shorter round timer",
      "All players get random weapons"
    ],
    testimonials: [
      {
        name: "Alex Johnson",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
        text: "The most intense battle experience! Every match feels unique.",
        playtime: 142,
        date: "2 weeks ago"
      },
      {
        name: "Samanta Lee",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 4,
        text: "Love the random spike mechanic. Makes for exciting gameplay!",
        playtime: 87,
        date: "1 month ago"
      }
    ],
    rating: 4.7,
  },

   {
    slug: 'battleroyale',
    image: battleRoyalImg,
    title: 'Battle Royale',
    description: 'Fast-paced mode where the spike appears randomly. First to 4 rounds wins!',
    difficulty: 'Intermediate',
    team: '4v4 / 5v5',
    tagline: 'Lightning fast action',
    video: 'https://example.com/game-video.mp4',
    rules: [
      "Random spike spawn locations",
      "First to win 4 rounds",
      "Shorter round timer",
      "All players get random weapons"
    ],
    testimonials: [
      {
        name: "Alex Johnson",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
        text: "The most intense battle experience! Every match feels unique.",
        playtime: 142,
        date: "2 weeks ago"
      },
      {
        name: "Samanta Lee",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 4,
        text: "Love the random spike mechanic. Makes for exciting gameplay!",
        playtime: 87,
        date: "1 month ago"
      }
    ],
    rating: 4.7,
  },

   {
    slug: 'capturetheflag',
    image: captureTheFlagImg,
    title: 'Capture The Flag',
    description: 'Fast-paced mode where the spike appears randomly. First to 4 rounds wins!',
    difficulty: 'Intermediate',
    team: '4v4 / 5v5',
    tagline: 'Lightning fast action',
    video: 'https://example.com/game-video.mp4',
    rules: [
      "Random spike spawn locations",
      "First to win 4 rounds",
      "Shorter round timer",
      "All players get random weapons"
    ],
    testimonials: [
      {
        name: "Alex Johnson",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
        text: "The most intense battle experience! Every match feels unique.",
        playtime: 142,
        date: "2 weeks ago"
      },
      {
        name: "Samanta Lee",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 4,
        text: "Love the random spike mechanic. Makes for exciting gameplay!",
        playtime: 87,
        date: "1 month ago"
      }
    ],
    rating: 4.7,
  },




  // ... (other game modes)
];

const CombinedGamePage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  // If slug exists, show detail view
  if (slug) {
    const game = listings.find((g) => g.slug === slug);

    if (!game) {
      return <div className="container">Game mode not found.</div>;
    }

    return (
      <div className="game-detail-container">
        {/* Back button to return to listing */}
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Back to All Modes
        </button>

        {/* Photo Collage Section */}
        <div className="collage-grid">
          <div className="collage-large">
            <img src={game.image} alt="Main Game" />
            <div className="image-overlay">
              <span className="game-title">{game.title}</span>
              <span className="game-rating">★ {game.rating}</span>
            </div>
          </div>
          <div className="collage-small collage-small-1">
            <img src={game.image} alt="Gameplay 1" />
          </div>
          <div className="collage-small collage-small-2">
            <img src={game.image} alt="Gameplay 2" />
          </div>
          <div className="collage-small collage-small-3">
            <img src={game.image} alt="Gameplay 3" />
          </div>
          <div className="collage-small collage-small-4">
            <img src={game.image} alt="Gameplay 4" />
          </div>
        </div>

        {/* Game Info Section */}
        <div className="game-info-section">
          <div className="game-meta">
            <span className={`difficulty-badge ${game.difficulty.toLowerCase()}`}>
              {game.difficulty}
            </span>
            <span className="team-size">{game.team}</span>
          </div>
          
          <h2 className="game-description-title">About This Mode</h2>
          <p className="game-description">{game.description}</p>
        </div>

        {/* Tabs Section */}
        <div className="game-tabs">
          <button 
            className={activeTab === 'overview' ? 'active' : ''}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={activeTab === 'rules' ? 'active' : ''}
            onClick={() => setActiveTab('rules')}
          >
            Rules
          </button>
          <button 
            className={activeTab === 'testimonials' ? 'active' : ''}
            onClick={() => setActiveTab('testimonials')}
          >
            Community
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === 'overview' && (
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h3>Fast-paced</h3>
                <p>Quick rounds with intense action</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔄</div>
                <h3>Dynamic</h3>
                <p>Ever-changing strategies</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🏆</div>
                <h3>Competitive</h3>
                <p>Ranked matches available</p>
              </div>
            </div>
          )}

          {activeTab === 'rules' && (
            <ul className="rules-list">
              {game.rules.map((rule, index) => (
                <li key={index}>
                  <span className="rule-number">{index + 1}.</span>
                  {rule}
                </li>
              ))}
            </ul>
          )}

          {activeTab === 'testimonials' && (
            <div className="testimonials-section">
              <h2>Player Experiences</h2>
              <div className="testimonials-grid">
                {game.testimonials.map((testimonial, index) => (
                  <div key={index} className="testimonial-card">
                    <div className="testimonial-header">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="user-avatar" 
                      />
                      <div>
                        <h4 className="user-name">{testimonial.name}</h4>
                        <div className="user-rating">
                          {Array(5).fill().map((_, i) => (
                            <span key={i} className={i < testimonial.rating ? 'star filled' : 'star'}>
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="testimonial-text">"{testimonial.text}"</p>
                    <div className="testimonial-footer">
                      <span className="playtime">{testimonial.playtime} hours played</span>
                      <span className="date">{testimonial.date}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="add-testimonial-btn">
                Share Your Experience
              </button>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button className="primary-button">Book Now</button>
          <button className="secondary-button">Add to Favorites</button>
        </div>
      </div>
    );
  }

  // If no slug, show listing view
  return (
    <div className="game-mode-container">
      <div className="game-mode-header">
        <h1>Choose Your Battle Style</h1>
        <p>Select from our exciting game modes to begin your adventure</p>
      </div>
      
      <div className="game-mode-grid">
        {listings.map((item, index) => (
          <div 
            key={index} 
            className="game-card" 
            onClick={() => navigate(`/gamemode/${item.slug}`)}
          >
            <div className="game-card-image-container">
              <img src={item.image} alt={item.title} className="game-card-image" />
              <div className="game-card-badge">
                <span className="star">★</span> {item.rating}
              </div>
            </div>
            <div className="game-card-content">
              <h3 className="game-card-title">{item.title}</h3>
              <div className="game-card-meta">
                <span className={`difficulty-badge ${item.difficulty.toLowerCase()}`}>
                  {item.difficulty}
                </span>
                <span className="team-size">{item.team}</span>
              </div>
              <p className="game-card-tagline">{item.tagline}</p>
              <button className="game-card-button">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CombinedGamePage;