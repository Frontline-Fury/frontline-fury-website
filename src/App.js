

import Aboutus from "./components/aboutus/Aboutus";
import Homepage from "./components/homepage/Homepage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <Router>
            
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/aboutus" element={<Aboutus />} />
                {/* <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/waiver" element={<Waiver />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/signup-login" element={<SignupLogin />} /> */}
            </Routes>
        </Router>
  );
}

export default App;
