import React from 'react';
import './Features.css';

const featuresData = [
    {
        title: 'Feature 1',
        description: 'Description of feature 1.',
        icon: '🔧',
    },
    {
        title: 'Feature 2',
        description: 'Description of feature 2.',
        icon: '💻',
    },
    {
        title: 'Feature 3',
        description: 'Description of feature 3.',
        icon: '📱',
    },
];

const Features = () => {
    return (
        <div className="features" id="features">
            <h2>Our Features</h2>
            <div className="features-container">
                {featuresData.map((feature, index) => (
                    <div className="feature-card" key={index}>
                        <div className="feature-icon">{feature.icon}</div>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;