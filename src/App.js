

import Aboutus from "./components/aboutus/Aboutus";
import Homepage from "./components/homepage/Homepage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Waiver from "./components/waiver/Waiver";
import Pricing from "./components/pricing/Pricing";
import Signup from "./components/signup/Signup";




function App() {
  return (
    <Router>
            
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/aboutus" element={<Aboutus />} />
                {/* <Route path="/leaderboard" element={<Leaderboard />} /> */}
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/waiver" element={<Waiver />} />
                {/* <Route path="/contact" element={<Contact />} /> */}
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </Router>
  );
}

export default App;
