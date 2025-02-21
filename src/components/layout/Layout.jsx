import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Signup from "../signup/Signup"; // Modal component

const Layout = ({ children, user, onAuthSuccess }) => {
  const [isSignupOpen, setSignupOpen] = useState(false);

  const handleSignupClick = () => setSignupOpen(true);
  const handleCloseModal = () => setSignupOpen(false);
  const handleLogout = () => {
    onAuthSuccess(null); // Call the parent function to clear the user state
  };

  return (
    <div>
      <Navbar user={user} onSignupClick={handleSignupClick} handleLogout={handleLogout} />
      <main>{children}</main>
      <Signup isOpen={isSignupOpen} onClose={handleCloseModal} onAuthSuccess={onAuthSuccess} />
      <Footer />
    </div>
  );
};

export default Layout;
