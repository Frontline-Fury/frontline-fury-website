import React, { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import "./Leaderboard.css";

const initialLeaderboardData = [
  { pos: 1, name: "Karan", Rating: 1200, wins: 80, team: "Alpha" },
  { pos: 2, name: "Nandini", Rating: 1100, wins: 76, team: "Bravo" },
  { pos: 3, name: "Tarun", Rating: 1050, wins: 74, team: "Alpha" },
  { pos: 4, name: "Shashank", Rating: 980, wins: 73, team: "Charlie" },
  { pos: 5, name: "Garv", Rating: 950, wins: 70, team: "Bravo" },
  { pos: 6, name: "Virat", Rating: 900, wins: 65, team: "Delta" },
  { pos: 7, name: "Rohit", Rating: 850, wins: 61, team: "Alpha" },
  { pos: 8, name: "Hardik", Rating: 830, wins: 50, team: "Charlie" },
  { pos: 9, name: "Dhoni", Rating: 800, wins: 48, team: "Delta" },
  { pos: 10, name: "Shubman", Rating: 750, wins: 46, team: "Bravo" },
];

const announcementsData = [
  "New tournament starting next week! Register now!",
  "Top 3 players this month will win exclusive rewards!",
  "Player 'X' just hit a record-breaking score!",
  "Weekend challenge: Win 5 matches to earn bonus points!",
  "Leaderboard reset coming soon – prepare for the next season!",
];

const sortedLeaderboardData = [...initialLeaderboardData].sort(
  (a, b) => b.wins - a.wins
);

const teamWins = initialLeaderboardData.reduce((acc, player) => {
  acc[player.team] = (acc[player.team] || 0) + player.wins;
  return acc;
}, {});

const sortedTeams = Object.entries(teamWins)
  .map(([team, wins]) => ({ team, wins }))
  .sort((a, b) => b.wins - a.wins);

const Leaderboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const firstMatchRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % announcementsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (searchTerm && firstMatchRef.current) {
      firstMatchRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [searchTerm]);

  let firstMatchAssigned = false;

  return (
    <>
      <div className="announcements-container">
        <p className="announcement-text">{announcementsData[index]}</p>
      </div>
      <div className="leaderboard-container">
        <h1>Leaderboards</h1>
        <p>Radiant</p>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search by player name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="search-icon" />
        </div>

        <div className="table-wrapper">
          <table className="leaderboard-table">
            <thead>
              <tr>
                <th>Position</th>
                <th>Name</th>
                <th>Rating</th>
                <th>Games Won</th>
              </tr>
            </thead>
            <tbody>
              {sortedLeaderboardData.map((player, index) => {
                const match = player.name.toLowerCase().includes(searchTerm.toLowerCase());
                let rowRef = null;
                if (searchTerm && match && !firstMatchAssigned) {
                  rowRef = firstMatchRef;
                  firstMatchAssigned = true;
                }
                return (
                  <tr key={player.name} ref={rowRef} className={match && searchTerm ? "highlight" : ""}>
                    <td>{index + 1}</td>
                    <td>{player.name}</td>
                    <td>{player.Rating}</td>
                    <td>{player.wins}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <h2 className="section-heading">Top Performing Teams of the Month</h2>
        <div className="table-wrapper">
          <table className="leaderboard-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Team</th>
                <th>Total Wins</th>
              </tr>
            </thead>
            <tbody>
              {sortedTeams.map((team, index) => (
                <tr key={team.team}>
                  <td>{index + 1}</td>
                  <td>{team.team}</td>
                  <td>{team.wins}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;