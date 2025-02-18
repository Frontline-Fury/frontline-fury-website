import React, { useState } from "react";
import "./Signup.css";
import {
  signupUser,
  loginUser,
  checkUsernameAvailability,
} from "../../api/authApi";

const Signup = ({ isOpen, onClose, onAuthSuccess }) => {
  const [Username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [usernameStatus, setUsernameStatus] = useState("");

  if (!isOpen) return null;

  const handleUsernameChange = async (e) => {
    const newUsername = e.target.value;
    setUsername(newUsername);

    if (newUsername.length < 3) {
      setUsernameStatus("Username must be at least 3 characters.");
      return;
    }

    try {
      const response = await checkUsernameAvailability(newUsername);
      setUsernameStatus(response.message);
    } catch (err) {
      setUsernameStatus("Error checking username availability.");
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userData = { Username, email, password }; // Send all data for sign up
      const response = await signupUser(userData); // Call signupUser function
      console.log("Signup successful:", response);
      onAuthSuccess(response); // Pass user data to parent component
      onClose(); // Close the modal after success
    } catch (err) {
      console.error("Error:", err.response?.data?.error || err.message);
      setError(
        err.response?.data?.error || "Authentication failed. Please try again."
      );
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const userData = { email, password }; // Only email and password for login
      const response = await loginUser(userData); // Call loginUser function
      console.log("Login successful:", response);
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
          <h1>Sign Up / Sign In</h1>
          <form>
            <div className="input-group">
              {/* Sign Up Field */}
              {/* Username input for Sign Up */}
              <div className="input-field">
                <i className="fa-solid fa-user"></i>
                <input
                  type="text"
                  placeholder="Username"
                  value={Username}
                  onChange={handleUsernameChange}
                  required
                />
              </div>
              <p className="username-status">{usernameStatus}</p>
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
              {/* Buttons to handle sign up and sign in separately */}
              <button type="button" onClick={handleSignUp}>
                Sign Up
              </button>
              <button type="button" onClick={handleSignIn}>
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
