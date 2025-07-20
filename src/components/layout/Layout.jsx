import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Signup from "../signup/Signup";
import supabase from "../../supabaseClient";

const Layout = ({ children, user, onAuthSuccess }) => {
  const [isSignupOpen, setSignupOpen] = useState(false);
  const [resetSignup, setResetSignup] = useState(false);

  const handleSignupClick = () => {
    setResetSignup(false);
    setSignupOpen(true);
  };

  const handleCloseModal = () => setSignupOpen(false);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    onAuthSuccess(null);
    setResetSignup(true);  // Trigger reset in Signup modal
  };

  return (
    <div>
      <Navbar 
        user={user} 
        onSignupClick={handleSignupClick} 
        handleLogout={handleLogout} 
      />
      <main>{children}</main>
      <Signup
        isOpen={isSignupOpen}
        onClose={handleCloseModal}
        onAuthSuccess={onAuthSuccess}
        reset={resetSignup}  // Pass reset flag to Signup modal
      />
      <Footer />
    </div>
  );
};

export default Layout;
