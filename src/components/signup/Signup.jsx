import React, { useState } from "react";
import "./Signup.css";
import { signupUser, loginUser } from "../../api/authApi";

const Signup = ({ isOpen, onClose, onAuthSuccess }) => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [Username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Add error state for displaying error messages

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response;
      const userData = { email, password }; // Only email and password for login

      if (isSignUp) {
        // Sign Up
        response = await signupUser({ Username, email, password }); // Send all data for sign up
        console.log("Signup successful:", response);
      } else {
        // Login
        response = await loginUser(userData); // Only email and password for login
        console.log("Login successful:", response);
      }

      onAuthSuccess(response); // Pass user data to parent component
      onClose(); // Close the modal after success
    } catch (err) {
      console.error("Error:", err.response?.data?.error || err.message);
      setError(
        err.response?.data?.error || "Authentication failed. Please try again."
      );
    }
  };

  return (
    <div className="signup-modal-overlay" onClick={onClose}>
      <div className="signup-modal" onClick={(e) => e.stopPropagation()}>
        <div className="form-box">
          <h1>{isSignUp ? "Sign Up" : "Sign In"}</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              {isSignUp && (
                <div className="input-field">
                  <i className="fa-solid fa-user"></i>
                  <input
                    type="text"
                    placeholder="Name"
                    value={Username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
              )}
              <div className="input-field">
                <i className="fa-solid fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="input-field">
                <i className="fa-solid fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <p>
                Lost Password? <a href="kk">Click Here</a>
              </p>
            </div>
            {error && <p className="error-message">{error}</p>}
            <div className="btn-field">
              <button type="submit" onClick={() => setIsSignUp(true)}>
                Sign Up
              </button>
              <button type="submit" onClick={() => setIsSignUp(false)}>
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
