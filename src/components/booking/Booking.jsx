import React, { useState } from "react";
import "./Booking.css";
import captureTheFlagImg from '../assests/captureflag.jpg';
import spikeRushImg from '../assests/spikerush.jpg';
import battleRoyalImg from '../assests/battleroyale.jpg';
import { useNavigate } from 'react-router-dom';




const gameModes = [
  {
    id: "tdm",
    name: "Team Deathmatch",
    description: "Team Deathmatch (TDM) is a fast-paced combat mode where two teams compete to reach the kill limit first. Perfect for players who enjoy constant action and quick respawns.",
    difficulty: "Intermediate",
    teamSize: "4v4 / 5v5",
    image: captureTheFlagImg
  },
  {
    id: "ctf",
    name: "Capture the Flag",
    description: "Capture the Flag (CTF) is an exciting team-based game mode where players must infiltrate the enemy base, capture their flag, and return it to their own base while defending their own flag.",
    difficulty: "Advanced",
    teamSize: "6v6 / 8v8",
    image: spikeRushImg
  },
  {
    id: "bomb-defusal",
    name: "Spike Rush",
    description: "Spike Rush is an intense and tactical game mode where one team plants a bomb (spike) and the other team attempts to defuse it. Requires strategy, coordination, and precise execution.",
    difficulty: "Hard",
    teamSize: "5v5",
    image: battleRoyalImg
  },
  {
    id: "battle-royale",
    name: "Battle Royale",
    description: "Battle Royale is a thrilling survival game mode where players are dropped into a large map that shrinks over time. The last player or team standing wins. Gather resources, outplay opponents, and survive!",
    difficulty: "Expert",
    teamSize: "Solo/Duo/Squad",
    image: captureTheFlagImg
  },
];



  

const timeSlots = {
  morning: ["9:00 AM", "10:00 AM", "11:00 AM"],
  afternoon: ["12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"],
  evening: ["6:00 PM", "7:00 PM", "8:00 PM"]
};

const Booking = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedGameMode, setSelectedGameMode] = useState("");
  const [selectedTimeCategory, setSelectedTimeCategory] = useState("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [playerIds, setPlayerIds] = useState({});
  const [activeTab, setActiveTab] = useState("modes"); // 'modes' or 'booking'

  const getNext14Days = () => {
    return [...Array(14)].map((_, index) => {
      const date = new Date();
      date.setDate(date.getDate() + index);
      return {
        key: index,
        day: date.toLocaleDateString("en-US", { weekday: "short" }),
        dateNum: date.getDate(),
        month: date.toLocaleDateString("en-US", { month: "short" }),
        fullDate: date.toDateString(),
      };
    });
  };

  const handleTimeCategorySelect = (category) => {
    setSelectedTimeCategory(category);
    setSelectedTimeSlot("");
  };

  const handlePlayerSelect = (team, position) => {
    const playerKey = `${team}-${position}`;
    if (selectedPlayers.includes(playerKey)) {
      setSelectedPlayers(selectedPlayers.filter(p => p !== playerKey));
    } else if (selectedPlayers.length < 3) {
      setSelectedPlayers([...selectedPlayers, playerKey]);
    }
  };

  const handlePlayerIdChange = (playerKey, id) => {
    setPlayerIds({
      ...playerIds,
      [playerKey]: id
    });
  };

  const calculateTotal = () => {
    return selectedPlayers.length * 500;
  };

  const renderPlayerSelection = () => {
    if (!selectedTimeSlot) return null;

    return (
      <div className="player-selection">
        <h3>Select Players (Max 3)</h3>
        <div className="selection-info">
          <p>Select player slots and enter their IDs. You can mix players from both teams.</p>
        </div>
        <div className="teams-container">
          {['teamA', 'teamB'].map(team => (
            <div key={team} className="team">
              <h4>{team === 'teamA' ? 'Team A' : 'Team B'}</h4>
              {[1, 2, 3, 4, 5].map(position => (
                <div
                  key={`${team}-${position}`}
                  className={`player-slot ${selectedPlayers.includes(`${team}-${position}`) ? 'selected' : ''}`}
                  onClick={() => handlePlayerSelect(team, position)}
                >
                  <span className="player-position">Player {position}</span>
                  {selectedPlayers.includes(`${team}-${position}`) && (
                    <div className="player-id-input">
                      <input
                        type="text"
                        placeholder="Player ID"
                        value={playerIds[`${team}-${position}`] || ''}
                        onChange={(e) => handlePlayerIdChange(`${team}-${position}`, e.target.value)}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );

    
  };

  return (
    <div className="booking-container">
      {/* Tab Navigation */}
      <div className="booking-tabs">
        <button
          className={`tab-button ${activeTab === 'modes' ? 'active' : ''}`}
          onClick={() => setActiveTab('modes')}
        >
          Game Modes
        </button>
        <button
          className={`tab-button ${activeTab === 'booking' ? 'active' : ''}`}
          onClick={() => setActiveTab('booking')}
        >
          Book Session
        </button>
      </div>

      {/* Game Modes Section */}
      {activeTab === 'modes' && (
        <div className="game-modes-section">
          <h2 className="section-title">Available Game Modes</h2>
          <p className="section-subtitle">Choose from our exciting game modes</p>

          <div className="alternating-game-modes">
            {gameModes.map((mode, index) => (
              <div
                key={mode.id}
                className={`game-mode-row ${index % 2 === 0 ? 'left-image' : 'right-image'}`}
              >
                {index % 2 === 0 ? (
                  <>
                    <div className="mode-images-collage">
                      <div className="main-image">
                        <img src={mode.image} alt={mode.name} />
                      </div>
                      <div className="side-images">
                        <img src={mode.image} alt={`${mode.name} side1`} />
                        <img src={mode.image} alt={`${mode.name} side2`} />
                      </div>
                    </div>

                    <div className="mode-details">
                      <h3>{mode.name}</h3>
                      <div className="game-mode-meta">
                        <span className="difficulty">{mode.difficulty}</span>
                        <span className="team-size">{mode.teamSize}</span>
                      </div>
                      <p className="game-mode-description">{mode.description}</p>
                      <button
                        className="select-mode-button"
                        onClick={() => {
                          setSelectedGameMode(mode.id);
                          setActiveTab('booking');
                        }}
                      >
                        Book This Mode
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mode-details">
                      <h3>{mode.name}</h3>
                      <div className="game-mode-meta">
                        <span className="difficulty">{mode.difficulty}</span>
                        <span className="team-size">{mode.teamSize}</span>
                      </div>
                      <p className="game-mode-description">{mode.description}</p>
                      <button
                        className="select-mode-button"
                        onClick={() => {
                          setSelectedGameMode(mode.id);
                          setActiveTab('booking');
                        }}
                      >
                        Book This Mode
                      </button>
                    </div>
                    <div className="mode-images-collage">
                      <div className="main-image">
                        <img src={mode.image} alt={mode.name} />
                      </div>
                      <div className="side-images">
                        <img src={mode.image} alt={`${mode.name} side1`} />
                        <img src={mode.image} alt={`${mode.name} side2`} />
                      </div>
                    </div>

                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Booking Section */}
      {activeTab === 'booking' && (
        <div className="booking-section">
          <div className="booking-header">
            <h2>Book Your Game Session</h2>
            <p>Fill in the details below to reserve your spot</p>
          </div>

          <div className="booking-steps">
            {/* Game Mode Selection */}
            <div className={`booking-step ${selectedGameMode ? 'completed' : ''}`}>
              <div className="step-header">
                <span className="step-number">1</span>
                <h3>Select Game Mode</h3>
              </div>
              <div className="step-content">
                <select
                  value={selectedGameMode}
                  onChange={(e) => {
                    setSelectedGameMode(e.target.value);
                    setSelectedDate(null);
                    setSelectedTimeCategory("");
                    setSelectedTimeSlot("");
                    setSelectedPlayers([]);
                  }}
                  required
                >
                  <option value="">-- Choose Game Mode --</option>
                  {gameModes.map((mode) => (
                    <option key={mode.id} value={mode.id}>
                      {mode.name} ({mode.teamSize})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Date Selection */}
            {selectedGameMode && (
              <div className={`booking-step ${selectedDate ? 'completed' : ''}`}>
                <div className="step-header">
                  <span className="step-number">2</span>
                  <h3>Select Date</h3>
                </div>
                <div className="step-content">
                  <div className="date-scroll-container">
                    {getNext14Days().map((d) => (
                      <button
                        key={d.key}
                        type="button"
                        className={`date-button ${selectedDate === d.fullDate ? "active" : ""}`}
                        onClick={() => {
                          setSelectedDate(d.fullDate);
                          setSelectedTimeCategory("");
                          setSelectedTimeSlot("");
                          setSelectedPlayers([]);
                        }}
                      >
                        <div className="day">{d.day}</div>
                        <div className="date-num">{d.dateNum}</div>
                        <div className="month">{d.month}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Time Selection */}
            {selectedDate && (
              <div className={`booking-step ${selectedTimeSlot ? 'completed' : ''}`}>
                <div className="step-header">
                  <span className="step-number">3</span>
                  <h3>Select Time</h3>
                </div>
                <div className="step-content">
                  {!selectedTimeCategory ? (
                    <div className="time-categories">
                      <h4>Choose Time Category</h4>
                      <div className="category-buttons">
                        <button
                          className="time-category-button"
                          onClick={() => handleTimeCategorySelect('morning')}
                        >
                          <span className="time-range">9:00 AM - 12:00 PM</span>
                          <span className="category-name">Morning</span>
                        </button>
                        <button
                          className="time-category-button"
                          onClick={() => handleTimeCategorySelect('afternoon')}
                        >
                          <span className="time-range">12:00 PM - 6:00 PM</span>
                          <span className="category-name">Afternoon</span>
                        </button>
                        <button
                          className="time-category-button"
                          onClick={() => handleTimeCategorySelect('evening')}
                        >
                          <span className="time-range">6:00 PM - 9:00 PM</span>
                          <span className="category-name">Evening</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="time-slots-selection">
                      <h4>Available Time Slots</h4>
                      <div className="time-slots-grid">
                        {timeSlots[selectedTimeCategory].map((time) => (
                          <button
                            key={time}
                            type="button"
                            className={`time-slot-button ${selectedTimeSlot === time ? 'active' : ''}`}
                            onClick={() => {
                              setSelectedTimeSlot(time);
                              setSelectedPlayers([]);
                              setPlayerIds({});
                            }}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                      <button
                        className="back-button"
                        onClick={() => setSelectedTimeCategory("")}
                      >
                        Back to Categories
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Player Selection */}
            {selectedTimeSlot && (
              <div className={`booking-step ${selectedPlayers.length > 0 ? 'completed' : ''}`}>
                <div className="step-header">
                  <span className="step-number">4</span>
                  <h3>Select Players</h3>
                </div>
                <div className="step-content">
                  {renderPlayerSelection()}
                </div>
              </div>
            )}

            {/* Checkout Summary */}
            {selectedPlayers.length > 0 && (
              <div className="booking-summary">
                <div className="step-header">
                  <span className="step-number">5</span>
                  <h3>Confirm Booking</h3>
                </div>
                <div className="summary-card">
                  <h4>Booking Details</h4>
                  <div className="summary-details">
                    <div className="detail-row">
                      <span className="detail-label">Game Mode:</span>
                      <span className="detail-value">
                        {gameModes.find(m => m.id === selectedGameMode)?.name}
                      </span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Date:</span>
                      <span className="detail-value">{selectedDate}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Time:</span>
                      <span className="detail-value">{selectedTimeSlot}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Players:</span>
                      <span className="detail-value">{selectedPlayers.length}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Price per player:</span>
                      <span className="detail-value">₹500</span>
                    </div>
                    <div className="detail-row total">
                      <span className="detail-label">Total Amount:</span>
                      <span className="detail-value">₹{calculateTotal()}</span>
                    </div>
                  </div>

                  <button
                    className="confirm-booking-button"
                    onClick={() => navigate('/waiver')}
                    disabled={Object.keys(playerIds).length !== selectedPlayers.length}
                  >
                    Confirm Booking
                  </button>

                  <div className="booking-note">
                    <p>Note: You'll receive a confirmation email with session details after payment.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;