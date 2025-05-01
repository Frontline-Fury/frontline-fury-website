// src/components/ExitIntentPopup.jsx
import React from 'react';
import './ExitIntentPopup.css';

const ExitIntentPopup = ({ onClose }) => {
  return (
    <div className="exit-popup-overlay">
      <div className="exit-popup">
        <h2>Wait! Before You Go...</h2>
        <p>Don't miss out on booking your airsoft adventure!</p>
        <button onClick={onClose}>Continue Exploring</button>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
