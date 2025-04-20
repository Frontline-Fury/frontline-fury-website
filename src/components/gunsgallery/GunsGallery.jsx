import React, { useState } from 'react';
import './GunsGallery.css';
import gun1 from '../assests/gun1.png';
import gun2 from '../assests/gun2.png';

import gun3 from '../assests/gun3.png';

const airsoftGuns = [
  {
    id: 1,
    name: "M4 AEG Carbine",
    image: gun1,
    fps: "380-400 FPS",
    magazine: "300 rounds",
    weight: "2.4 kg",
    length: "75 cm",
    power: "LiPo Battery",
    price: "12,999"
  },
  {
    id: 2,
    name: "AK-74MN AEG",
    image: gun2,
    fps: "400-420 FPS",
    magazine: "600 rounds",
    weight: "3.1 kg",
    length: "88 cm",
    power: "NiMH Battery",
    price: "14,499"
  },

  {
    id: 2,
    name: "AK-74MN AEG",
    image: gun3,
    fps: "400-420 FPS",
    magazine: "600 rounds",
    weight: "3.1 kg",
    length: "88 cm",
    power: "NiMH Battery",
    price: "14,499"
  },
  // Add 3 more guns here similarly...
];

const GunCard = ({ image, name, fps, magazine, weight, length, power, price }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="gun-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="gun-image-wrapper">
        <img src={image} alt={name} />
        {!isHovered && <span className="gun-price">₹{price}</span>}
      </div>

      <h3 className="gun-name">{name}</h3>

      {isHovered && (
        <div className="gun-specs">
          <div className="spec-row">
            <span>FPS:</span>
            <span>{fps}</span>
          </div>
          <div className="spec-row">
            <span>Magazine:</span>
            <span>{magazine}</span>
          </div>
          <div className="spec-row">
            <span>Weight:</span>
            <span>{weight}</span>
          </div>
          <div className="spec-row">
            <span>Length:</span>
            <span>{length}</span>
          </div>
          <div className="spec-row">
            <span>Power:</span>
            <span>{power}</span>
          </div>
          <button className="view-button">View Details</button>
        </div>
      )}
    </div>
  );
};

const GunsGallery = () => {
  return (
    <div className="gun-display-homepage">
      <h2>Our Airsoft Arsenal</h2>
      <div className="guns-grid">
        {airsoftGuns.map((gun) => (
          <GunCard
            key={gun.id}
            image={gun.image}
            name={gun.name}
            fps={gun.fps}
            magazine={gun.magazine}
            weight={gun.weight}
            length={gun.length}
            power={gun.power}
            price={gun.price}
          />
        ))}
      </div>
    </div>
  );
};

export default GunsGallery;
