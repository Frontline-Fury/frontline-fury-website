// App.js
import React, { useState, useEffect } from "react";
import Aboutus from "./components/aboutus/Aboutus";
import Homepage from "./components/homepage/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Waiver from "./components/waiver/Waiver";
import Pricing from "./components/pricing/Pricing";
import Signup from "./components/signup/Signup";
import Layout from "./components/layout/Layout";
import Leaderboard from "./components/leaderboard/Leaderboard";
import SetupProfile from "./components/Callback/SetUpProfile";
import OAuthCallback from "./components/Callback/OAuthCallback";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  // Handle authentication success
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
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/waiver" element={<Waiver />} />
          {/* Other routes */}
          <Route path="/signup" element={<Signup />} />

          {/* Callback routes */}
       
          <Route
            path="/auth/callback"
            element={<OAuthCallback onAuthSuccess={handleAuthSuccess} />}
          />
          <Route
            path="/setup-profile"
            element={<SetupProfile onAuthSuccess={handleAuthSuccess} />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
