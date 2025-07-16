import React, { useState, useEffect, useRef } from "react";
import {
  FaSearch, FaTrophy, FaMedal, FaUsers, FaUser,
  FaChartLine, FaCalendarAlt, FaShareAlt,
  FaHeart, FaRegHeart
} from "react-icons/fa";
import { IoMdTrophy } from "react-icons/io";
import { GiLaurelsTrophy } from "react-icons/gi";
import "./Leaderboard.css";

const initialLeaderboardData = [
  { id: 1, pos: 1, name: "Karan", Rating: 1200, wins: 80, team: "Alpha", trend: "up", matches: 120, avatar: "K", bio: "Seasoned player with 5 years experience", achievements: [1, 3, 4] },
  { id: 2, pos: 2, name: "Nandini", Rating: 1100, wins: 76, team: "Bravo", trend: "up", matches: 115, avatar: "N", bio: "Rising star with aggressive playstyle", achievements: [1, 2] },
  { id: 3, pos: 3, name: "Tarun", Rating: 1050, wins: 74, team: "Alpha", trend: "down", matches: 110, avatar: "T", bio: "Strategic player focusing on team coordination", achievements: [1, 3] },
  { id: 4, pos: 4, name: "Shashank", Rating: 980, wins: 73, team: "Charlie", trend: "up", matches: 105, avatar: "S", bio: "Defensive specialist with high win rate", achievements: [1] },
  { id: 5, pos: 5, name: "Garv", Rating: 950, wins: 70, team: "Bravo", trend: "up", matches: 100, avatar: "G", bio: "Young talent with innovative strategies", achievements: [1, 2] },
  { id: 6, pos: 6, name: "Virat", Rating: 900, wins: 65, team: "Delta", trend: "down", matches: 95, avatar: "V", bio: "Experienced player with multiple tournament wins", achievements: [1, 4] },
  { id: 7, pos: 7, name: "Rohit", Rating: 850, wins: 61, team: "Alpha", trend: "up", matches: 90, avatar: "R", bio: "Consistent performer with steady progress", achievements: [1] },
  { id: 8, pos: 8, name: "Hardik", Rating: 830, wins: 50, team: "Charlie", trend: "down", matches: 85, avatar: "H", bio: "Aggressive player with high-risk style", achievements: [1] },
  { id: 9, pos: 9, name: "Dhoni", Rating: 800, wins: 48, team: "Delta", trend: "up", matches: 80, avatar: "D", bio: "Legendary player with calm demeanor", achievements: [1, 3, 4] },
  { id: 10, pos: 10, name: "Shubman", Rating: 750, wins: 46, team: "Bravo", trend: "down", matches: 75, avatar: "S", bio: "Technical player with precise execution", achievements: [1] },
];

const teamData = {
  Alpha: { id: 1, wins: 215, members: 3, logo: "α", color: "#FF6B6B", bio: "Most dominant team this season", achievements: [1, 3] },
  Bravo: { id: 2, wins: 192, members: 3, logo: "β", color: "#4ECDC4", bio: "Balanced team with strong coordination", achievements: [2] },
  Charlie: { id: 3, wins: 123, members: 2, logo: "γ", color: "#45B7D1", bio: "New team showing great potential", achievements: [] },
  Delta: { id: 4, wins: 113, members: 2, logo: "δ", color: "#FFA07A", bio: "Experienced veterans of the game", achievements: [4] },
};





const achievements = [
  { id: 1, name: "First Win", icon: "🥇", description: "Win your first match", common: true },
  { id: 2, name: "Streak Starter", icon: "🔥", description: "3 wins in a row", common: false },
  { id: 3, name: "Team Player", icon: "👥", description: "Win 10 team matches", common: false },
  { id: 4, name: "Elite", icon: "🏆", description: "Reach top 5 ranking", common: false },
  { id: 5, name: "Legendary", icon: "🌟", description: "Maintain top 3 for a month", common: false },
];

const upcomingRewards = [
  { position: 1, reward: "Exclusive Champion Skin + 5000 coins" },
  { position: 2, reward: "3000 coins + Rare Avatar" },
  { position: 3, reward: "2000 coins + Special Emote" },
  { position: "4-10", reward: "1000 coins" },
  { position: "All participants", reward: "Seasonal Badge" },
];



const Leaderboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("players");


  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [followedPlayers, setFollowedPlayers] = useState([]);
  const [followedTeams, setFollowedTeams] = useState([]);
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareUrl, setShareUrl] = useState("");
  const firstMatchRef = useRef(null);

  const seasonEndDate = new Date();
  seasonEndDate.setDate(seasonEndDate.getDate() + 14);





  useEffect(() => {
    if (searchTerm && firstMatchRef.current) {
      firstMatchRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [searchTerm]);






  const sortedTeams = Object.entries(teamData)
    .map(([team, data]) => ({ team, ...data }))
    .sort((a, b) => b.wins - a.wins);

  const getMedalColor = (position) => {
    switch (position) {
      case 1: return "gold";
      case 2: return "silver";
      case 3: return "bronze";
      default: return "normal";
    }
  };

  const toggleFollowPlayer = (playerId) => {
    setFollowedPlayers(prev =>
      prev.includes(playerId)
        ? prev.filter(id => id !== playerId)
        : [...prev, playerId]
    );
  };

  const toggleFollowTeam = (teamId) => {
    setFollowedTeams(prev =>
      prev.includes(teamId)
        ? prev.filter(id => id !== teamId)
        : [...prev, teamId]
    );
  };

  const handleShare = (type, id) => {
    const url = `https://radiant-leaderboard.com/${type}/${id}`;
    setShareUrl(url);
    setShowShareModal(true);

    if (navigator.share) {
      navigator.share({
        title: `Check out this ${type} on Radiant Leaderboard`,
        url: url
      }).catch(() => navigator.clipboard.writeText(url));
    } else {
      navigator.clipboard.writeText(url);
    }
  };

  const renderPlayerCard = (player, position) => {
    const isTop3 = position <= 3 && !searchTerm;;
    const medalColor = getMedalColor(position);
    const isHighlighted = searchTerm && player.name.toLowerCase().includes(searchTerm.toLowerCase());
    const isFollowed = followedPlayers.includes(player.id);

    const handlePlayerClick = (e) => {
      // Only open modal if the click wasn't on a button
      if (!e.target.closest('button')) {
        setSelectedPlayer(player);
      }
    };

    return (
      <div
        key={player.id}
        ref={isHighlighted ? firstMatchRef : null}
        className={`player-card ${medalColor} ${isHighlighted ? "highlight" : ""}`}
        onClick={handlePlayerClick}
      >
        <div className="player-rank">{isTop3 ? <FaMedal /> : position}</div>
        <div className="player-avatar" style={{ backgroundColor: teamData[player.team].color }}>
          {player.avatar}
        </div>
        <div className="player-info">
          <div className="player-name">
            {player.name}
          </div>
          <div className="player-stats">
            <span><FaTrophy /> {player.wins} wins</span>
            <span>Rating: {player.Rating}</span>
            <span className={`trend-${player.trend}`}>{player.trend === "up" ? "↑" : "↓"}</span>
          </div>
        </div>
        <div className="player-actions">
          <button
            className={`follow-btn ${isFollowed ? 'followed' : ''}`}
            onClick={(e) => { e.stopPropagation(); toggleFollowPlayer(player.id); }}
          >
            {isFollowed ? <FaHeart /> : <FaRegHeart />}
          </button>
          <button
            className="share-btn"
            onClick={(e) => { e.stopPropagation(); handleShare('player', player.id); }}
          >
            <FaShareAlt />
          </button>
        </div>
      </div>
    );
  };

  const renderTeamCard = (team, position) => {
    const isTop3 = position <= 3;
    const medalColor = getMedalColor(position);
    const isFollowed = followedTeams.includes(team.id);

    return (
      <div
        key={team.team}
        className={`team-card ${medalColor}`}
        onClick={() => setSelectedTeam(team)}
      >
        <div className="team-rank">{isTop3 ? <FaMedal /> : position}</div>
        <div className="team-logo" style={{ backgroundColor: team.color }}>
          {team.logo}
        </div>
        <div className="team-info">
          <h3>{team.team}</h3>
          <div className="team-stats">
            <span><FaTrophy /> {team.wins} total wins</span>
            <span><FaUsers /> {team.members} members</span>
          </div>
        </div>
        <div className="team-performance">
          <FaChartLine />
          <span>Top performer: {
            initialLeaderboardData
              .filter(p => p.team === team.team)
              .sort((a, b) => b.wins - a.wins)[0].name
          }</span>
        </div>
        <div className="team-actions">
          <button
            className={`follow-btn ${isFollowed ? 'followed' : ''}`}
            onClick={(e) => { e.stopPropagation(); toggleFollowTeam(team.id); }}
          >
            {isFollowed ? <FaHeart /> : <FaRegHeart />}
          </button>
          <button
            className="share-btn"
            onClick={(e) => { e.stopPropagation(); handleShare('team', team.id); }}
          >
            <FaShareAlt />
          </button>
        </div>
      </div>
    );
  };

  const renderPlayerProfile = () => {
    if (!selectedPlayer) return null;

    const player = selectedPlayer;
    const team = teamData[player.team];
    const isFollowed = followedPlayers.includes(player.id);
    const playerAchievements = achievements.filter(a => player.achievements.includes(a.id));


    return (
      <div className="profile-modal-overlay">
        <div className="profile-modal">
          <div className="modal-content">
            <button className="close-modal" onClick={() => setSelectedPlayer(null)}>×</button>

            <div className="profile-header">
              <div className="profile-avatar" style={{ backgroundColor: team.color }}>
                {player.avatar}
              </div>
              <div className="profile-info">
                <h2>{player.name}</h2>
                <div className="profile-team" style={{ backgroundColor: team.color }}>
                  {player.team} Team
                </div>
                <div className="profile-stats">
                  <div><span className="stat-value">{player.wins}</span><span className="stat-label">Wins</span></div>
                  <div><span className="stat-value">{player.Rating}</span><span className="stat-label">Rating</span></div>
                  <div><span className="stat-value">{Math.round((player.wins / player.matches) * 100)}%</span><span className="stat-label">Win Rate</span></div>
                </div>
              </div>
              <div className="profile-actions">
                <button className={`follow-btn ${isFollowed ? 'followed' : ''}`} onClick={() => toggleFollowPlayer(player.id)}>
                  {isFollowed ? <FaHeart /> : <FaRegHeart />}
                  {isFollowed ? 'Following' : 'Follow'}
                </button>
                <button className="share-btn" onClick={() => handleShare('player', player.id)}>
                  <FaShareAlt /> Share
                </button>
              </div>
            </div>

            <div className="profile-bio">
              <h3>About</h3>
              <p>{player.bio}</p>
            </div>

            <div className="profile-sections">
              <div className="profile-section">
                <h3><GiLaurelsTrophy /> Achievements</h3>
                {playerAchievements.length > 0 ? (
                  <div className="achievements-grid">
                    {playerAchievements.map(achievement => (
                      <div key={achievement.id} className="achievement-badge">
                        <div className="achievement-icon">{achievement.icon}</div>
                        <div className="achievement-info">
                          <strong>{achievement.name}</strong>
                          <small>{achievement.description}</small>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="no-data">No achievements yet</p>
                )}
              </div>


            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderTeamProfile = () => {
    if (!selectedTeam) return null;

    const team = selectedTeam;
    const isFollowed = followedTeams.includes(team.id);
    const teamAchievements = achievements.filter(a => team.achievements.includes(a.id));
    const members = initialLeaderboardData.filter(p => p.team === team.team);

    return (
      <div className="profile-modal-overlay">
        <div className="profile-modal">
          <div className="modal-content team-modal">
            <button className="close-modal" onClick={() => setSelectedTeam(null)}>×</button>

            <div className="profile-header">
              <div className="team-logo-large" style={{ backgroundColor: team.color }}>
                {team.logo}
              </div>
              <div className="profile-info">
                <h2>{team.team} Team</h2>
                <div className="profile-stats">
                  <div><span className="stat-value">{team.wins}</span><span className="stat-label">Total Wins</span></div>
                  <div><span className="stat-value">{team.members}</span><span className="stat-label">Members</span></div>
                  <div>
                    <span className="stat-value">
                      {Math.round(team.wins / members.reduce((sum, m) => sum + m.matches, 0) * 100)}%
                    </span>
                    <span className="stat-label">Win Rate</span>
                  </div>
                </div>
              </div>
              <div className="profile-actions">
                <button
                  className={`follow-btn ${isFollowed ? 'followed' : ''}`}
                  onClick={() => toggleFollowTeam(team.id)}
                >
                  {isFollowed ? <FaHeart /> : <FaRegHeart />}
                  {isFollowed ? 'Following' : 'Follow Team'}
                </button>
                <button className="share-btn" onClick={() => handleShare('team', team.id)}>
                  <FaShareAlt /> Share
                </button>
              </div>
            </div>

            <div className="profile-bio">
              <h3>About</h3>
              <p>{team.bio}</p>
            </div>

            <div className="profile-sections">
              <div className="profile-section">
                <h3><GiLaurelsTrophy /> Team Achievements</h3>
                {teamAchievements.length > 0 ? (
                  <div className="achievements-grid">
                    {teamAchievements.map(achievement => (
                      <div key={achievement.id} className="achievement-badge">
                        <div className="achievement-icon">{achievement.icon}</div>
                        <div className="achievement-info">
                          <strong>{achievement.name}</strong>
                          <small>{achievement.description}</small>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="no-data">No team achievements yet</p>
                )}
              </div>

              <div className="profile-section">
                <h3><FaUsers /> Team Members</h3>
                <div className="team-members">
                  {members.map(member => (
                    <div
                      key={member.id}
                      className="team-member"
                      onClick={() => setSelectedPlayer(member)}
                    >
                      <div className="member-avatar" style={{ backgroundColor: team.color }}>
                        {member.avatar}
                      </div>
                      <div className="member-info">
                        <h4>{member.name}</h4>
                        <div className="member-stats">
                          <span>#{member.pos}</span>
                          <span>{member.wins} wins</span>
                          <span>{member.Rating} rating</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderShareModal = () => {
    if (!showShareModal) return null;

    return (
      <div className="profile-modal-overlay">
        <div className="profile-modal">
          <div className="modal-content">
            <button className="close-modal" onClick={() => setShowShareModal(false)}>×</button>
            <h3>Share Profile</h3>
            <div className="share-url">
              <input type="text" value={shareUrl} readOnly />
              <button onClick={() => navigator.clipboard.writeText(shareUrl)}>Copy</button>
            </div>
            <div className="share-buttons">
              <button className="share-facebook">Facebook</button>
              <button className="share-twitter">Twitter</button>
              <button className="share-whatsapp">WhatsApp</button>
            </div>
          </div>
        </div>
      </div>
    );
  };


  const renderLeaderboardContent = () => {
  const filteredPlayers = initialLeaderboardData
    .filter(player => searchTerm ? player.name.toLowerCase().includes(searchTerm.toLowerCase()) : true)
    .sort((a, b) => b.wins - a.wins);

     const playersWithOriginalRanks = filteredPlayers.map(player => ({
    ...player,
    originalRank: initialLeaderboardData.findIndex(p => p.id === player.id) + 1
  }));

  return (
    <>
      <div className="top-controls-container">
        {/* Tabs - Right Side */}
        <div className="tabs">
          <button
            className={activeTab === "players" ? "active" : ""}
            onClick={() => {
              setActiveTab("players");
              setSearchTerm(""); // Clear search when switching tabs
            }}
          >
            <FaUser /> SOLO
          </button>
          <button
            className={activeTab === "teams" ? "active" : ""}
            onClick={() => {
              setActiveTab("teams");
              setSearchTerm(""); // Clear search when switching tabs
            }}
          >
            <FaUsers /> SQUAD
          </button>
        </div>

        {/* Search Box - Left Side */}
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder={activeTab === "players" ? "Search players..." : "Search teams..."}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

       {activeTab === "players" ? (
        <>
          {/* Only show top players when not searching */}
          {!searchTerm && (
            <div className="top-players">
              {filteredPlayers.slice(0, 3).map((player, index) => (
                <div key={player.id} className={`podium-card ${getMedalColor(index + 1)}`}
                  onClick={() => setSelectedPlayer(player)}>
                  <div className="podium-rank">{index + 1}</div>
                  <div className="podium-name">{player.name}</div>
                  <div className="podium-wins">{player.wins} wins</div>
                </div>
              ))}
            </div>
          )}

          <div className="players-list">
            {playersWithOriginalRanks.map((player) =>
              renderPlayerCard(player, player.originalRank) // Use original rank here
            )}
          </div>
        </>
      ) : (
        // Similar logic for teams tab
        <>
          {!searchTerm && (
            <div className="top-players">
              {sortedTeams.slice(0, 3).map((team, index) => (
                <div
                  key={team.team}
                  className={`podium-card ${getMedalColor(index + 1)}`}
                  onClick={() => setSelectedTeam(team)}
                >
                  <div className="podium-rank">{index + 1}</div>
                  <div className="podium-name">{team.team}</div>
                  <div className="podium-wins">{team.wins} total wins</div>
                </div>
              ))}
            </div>
          )}
          <div className="players-list">
            {sortedTeams
              .filter(team => searchTerm ? team.team.toLowerCase().includes(searchTerm.toLowerCase()) : true)
              .slice(searchTerm ? 0 : 3)
              .map((team, index) =>
                renderTeamCard(team, searchTerm ? index + 1 : index + 4)
              )}
          </div>
        </>
      )}
    </>
  );
};

  const renderSidebar = () => (
    <div className="leaderboard-sidebar">
      <div className="sidebar-section">
        <h3><FaCalendarAlt /> Season Countdown</h3>
        <div className="countdown-card">
          <div className="countdown-days">
            {Math.ceil((seasonEndDate - new Date()) / (1000 * 60 * 60 * 24))}
          </div>
          <div className="countdown-label">days remaining</div>
          <div className="countdown-date">
            Ends on {seasonEndDate.toLocaleDateString()}
          </div>
        </div>
      </div>



      <div className="sidebar-section">
        <h3><IoMdTrophy /> Upcoming Rewards</h3>
        <div className="rewards-list">
          {upcomingRewards.map((reward, i) => (
            <div key={i} className="reward-item">
              <div className="reward-position">
                {reward.position === "4-10" ? "4th-10th" :
                  reward.position === "All participants" ? "All" :
                    `${reward.position}${reward.position === 1 ? 'st' : reward.position === 2 ? 'nd' : reward.position === 3 ? 'rd' : 'th'}`}
              </div>
              <div className="reward-details">{reward.reward}</div>
            </div>
          ))}
        </div>
      </div>




    </div>
  );

  return (
    <div>

      <section className="aboutus-header">
        <h1>LEADERBOARD</h1>
        <p>THE ULTIMATE RANKING OF CHAMPIONS</p>
      </section>

      <div className="leaderboard-app">


        <div className="leaderboard-content">
          <div className="leaderboard-main">


            <div className="leaderboard-container">
              {renderLeaderboardContent()}
            </div>
          </div>

          {renderSidebar()}
        </div>

        {renderPlayerProfile()}
        {renderTeamProfile()}
        {renderShareModal()}
      </div>
    </div>
  );
};

export default Leaderboard;