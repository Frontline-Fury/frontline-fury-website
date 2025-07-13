import React from 'react';
import { useParams } from 'react-router-dom';
import { listings } from './Gamemode';
import './GameDetail.css';







const GameDetail = () => {


  





  const { slug } = useParams();
  const game = listings.find((g) => g.slug === slug);

  if (!game) {
    return <div className="game-detail-container">Game mode not found.</div>;
  }


  



  return (
    <div className="game-detail-container">
      <div className="collage-grid">
        <div className="collage-large">
          <img src={game.image} alt="Main" />
        </div>
        <div className="collage-small collage-small-1">
          <img src={game.image} alt="Small 1" />
        </div>
        <div className="collage-small collage-small-2">
          <img src={game.image} alt="Small 2" />
        </div>
        <div className="collage-small collage-small-3">
          <img src={game.image} alt="Small 3" />
        </div>
        <div className="collage-small collage-small-4">
          <img src={game.image} alt="Small 4" />
        </div>
        
      </div>

      <h2 className="gamemode-title">{game.title}</h2>
      <div className="game-description">
        {game.discription}
      </div>
      <div className="game-info">
        <p><strong>Difficulty:</strong> {game.difficulty}</p>
        <p><strong>Team Size:</strong> {game.team}</p>
        <p><strong>Rating:</strong> {game.rating} ★</p>
      </div>


      <div className="testimonials-section">
  <h2 className="section-title">Player Testimonials</h2>
  <div className="testimonials-grid">
    {game.testimonials.map((testimonial, index) => (
      <div key={index} className="testimonials-card">
        <div className="testimonials-header">
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
        <div className="testimonials-footer">
          <span className="playtime">{testimonial.playtime} hours played</span>
          <span className="date">{testimonial.date}</span>
        </div>
      </div>
    ))}
  </div>
  <button className="add-testimonials-btn">
    Share Your Experience
  </button>
</div>

    </div>
  );
};

export default GameDetail;
