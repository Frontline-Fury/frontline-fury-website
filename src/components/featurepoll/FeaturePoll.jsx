import React, { useState } from 'react';
import './FeaturePoll.css';

const pollData = [
  { id: 1, label: 'Dark Mode' },
  { id: 2, label: 'Mobile App' },
  { id: 3, label: 'Offline Support' },
  { id: 4, label: 'Custom Themes' },
];

const FeaturePoll = () => {
  const [votes, setVotes] = useState(Array(pollData.length).fill(0));
  const [hasVoted, setHasVoted] = useState(false);

  const totalVotes = votes.reduce((a, b) => a + b, 0);

  const handleVote = (index) => {
    if (hasVoted) return;
    const newVotes = [...votes];
    newVotes[index]++;
    setVotes(newVotes);
    setHasVoted(true);
  };

  return (
    <section className="feature-poll-section">
      <h2>🗳️ Vote for the Next Feature</h2>
      <p>Help us decide what to build next!</p>

      <div className="poll-options">
        {pollData.map((option, index) => {
          const votePercent = totalVotes ? ((votes[index] / totalVotes) * 100).toFixed(1) : 0;
          return (
            <div key={option.id} className="poll-card" onClick={() => handleVote(index)}>
              <div className="poll-header">
                <span>{option.label}</span>
                {hasVoted && <span className="percent">{votePercent}%</span>}
              </div>
              <div className="poll-bar-container">
                <div
                  className="poll-bar"
                  style={{ width: `${votePercent}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {hasVoted && <p className="thank-you">Thank you for voting!</p>}
    </section>
  );
};

export default FeaturePoll;
