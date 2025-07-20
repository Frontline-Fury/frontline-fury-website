import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Layout from "./components/layout/Layout";
import Homepage from "./components/homepage/Homepage";
import Aboutus from "./components/aboutus/Aboutus";
import Waiver from "./components/waiver/Waiver";
import Leaderboard from "./components/leaderboard/Leaderboard";
import Market from "./components/market/Market";
import CombinedGamePage from "./components/CombinedGamePage/CombinedGamePage";
import Signup from "./components/signup/Signup";  // Import Signup
import supabase from "./supabaseClient"; 


function App() {
  const [user, setUser] = useState(null);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [resetSignup, setResetSignup] = useState(false);

  const handleAuthSuccess = (userData) => {
    setUser(userData);
    setIsSignupOpen(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setResetSignup(true);
    // Reset flag immediately after to prevent loop
    setTimeout(() => setResetSignup(false), 0);
  };

  return (
    <Router>
      <Layout user={user} onLogout={handleLogout} onAuthSuccess={handleAuthSuccess} openSignup={() => setIsSignupOpen(true)}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/gamemode" element={<CombinedGamePage />} />
          <Route path="/gamemode/:slug" element={<CombinedGamePage />} />
          <Route path="/waiver" element={<Waiver />} />
          <Route path="/market" element={<Market />} />
        </Routes>

        {/* Signup modal controlled here */}
        <Signup
          isOpen={isSignupOpen}
          onClose={() => setIsSignupOpen(false)}
          onAuthSuccess={handleAuthSuccess}
          reset={resetSignup}
        />
      </Layout>
    </Router>
  );
}

export default App;
