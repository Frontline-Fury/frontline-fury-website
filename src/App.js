// App.js
import React, { useState, useEffect } from "react";
import Aboutus from "./components/aboutus/Aboutus";
import Homepage from "./components/homepage/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Waiver from "./components/waiver/Waiver";
import Signup from "./components/signup/Signup";
import Layout from "./components/layout/Layout";
import Leaderboard from "./components/leaderboard/Leaderboard";
// import Booking from "./components/booking/Booking";
import Market from "./components/market/Market";
import Gamemode from "./components/gamemode/Gamemode";
import GameDetail from "./components/gamemode/GameDetail";


function App() {
  const [user, setUser] = useState(null); 

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const handleAuthSuccess = (userData) => {
    setUser(userData);
  };

  return (
    <Router>
      <Layout user={user} onAuthSuccess={setUser}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/gamemode" element={<Gamemode />} />
          <Route path="/gamemode/:slug" element={<GameDetail />} />
          <Route path="/waiver" element={<Waiver />} />
          <Route path="/market" element={<Market />} />
          {/* Signup route should receive the prop */}
          <Route path="/signup" element={<Signup onAuthSuccess={handleAuthSuccess} />} />
        </Routes>
      </Layout>
    </Router>
  );
}


export default App;
