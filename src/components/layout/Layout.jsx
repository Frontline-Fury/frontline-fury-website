// Layout.js
import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Signup from "../signup/Signup"; // Modal component

const Layout = ({ children, user, onAuthSuccess }) => {
  const [isSignupOpen, setSignupOpen] = useState(false);

  const handleSignupClick = () => setSignupOpen(true);
  const handleCloseModal = () => setSignupOpen(false);

  return (
    <div>
      <Navbar user={user} onSignupClick={handleSignupClick} />
      <main>{children}</main>
      <Signup
        isOpen={isSignupOpen}
        onClose={handleCloseModal}
        onAuthSuccess={onAuthSuccess}  // Pass the callback to Signup
      />
      <Footer />
    </div>
  );
};

export default Layout;
