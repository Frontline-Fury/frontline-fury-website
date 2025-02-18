import React, { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import "./Leaderboard.css";

const initialLeaderboardData = [
  { pos: 1, name: "Karan", Rating: 1200, wins: 80 },
  { pos: 2, name: "Nandini", Rating: 1100, wins: 76 },
  { pos: 3, name: "Tarun", Rating: 1050, wins: 74 },
  { pos: 4, name: "Shashank", Rating: 980, wins: 73 },
  { pos: 5, name: "Garv", Rating: 950, wins: 70 },
  { pos: 6, name: "Virat", Rating: 900, wins: 65 },
  { pos: 7, name: "Rohit", Rating: 850, wins: 61 },
  { pos: 8, name: "Hardik", Rating: 830, wins: 50 },
  { pos: 9, name: "Dhoni", Rating: 8000, wins: 48 },
  { pos: 10, name: "Shubman", Rating: 750, wins: 46 },
  { pos: 11, name: "Krish", Rating: 700, wins: 41 },
  { pos: 12, name: "Rock", Rating: 650, wins: 38 },
  { pos: 13, name: "Badshah", Rating: 600, wins: 27 },
  { pos: 14, name: "Raftaar", Rating: 550, wins: 25 },
  // Add more players as needed...
];

// Sort leaderboard data by wins in descending order
const sortedLeaderboardData = [...initialLeaderboardData].sort(
  (a, b) => b.wins - a.wins
);

const Leaderboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const firstMatchRef = useRef(null);

  // When searchTerm changes, if there's a matching row, scroll it into view
  useEffect(() => {
    if (searchTerm && firstMatchRef.current) {
      firstMatchRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [searchTerm]);

  // We'll render all rows. For each row, check if it matches the search term.
  // The first matching row gets assigned the ref.
  let firstMatchAssigned = false;

  return (
    <div className="leaderboard-container">
      <h1>Leaderboards</h1>
      <p>Radiant</p>

      {/* Search Bar with icon */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by player name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FaSearch className="search-icon" />
      </div>

      {/* Leaderboard Table */}
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
              const match = player.name
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
              let rowRef = null;
              if (searchTerm && match && !firstMatchAssigned) {
                rowRef = firstMatchRef;
                firstMatchAssigned = true;
              }
              return (
                <tr
                  key={player.name}
                  ref={rowRef}
                  className={match && searchTerm ? "highlight" : ""}
                >
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
    </div>
  );
};

export default Leaderboard;
