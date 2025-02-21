import React, { useState, useEffect } from "react";
import "./Signup.css";
import {
  signupUser,
  loginUser,
  checkUsernameAvailability,
  signInWithGoogle,
  handleGoogleCallback,
} from "../../api/authApi";

const Signup = ({ isOpen, onClose, onAuthSuccess }) => {
  const [Username, setUsername] = useState(""); // Changed to camelCase
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [UsernameStatus, setUsernameStatus] = useState("");

  // Handle OAuth callback on page load
  useEffect(() => {
    const handleOAuthRedirect = async () => {
      const params = new URLSearchParams(window.location.search);
      const googleToken = params.get("access_token");

      if (googleToken) {
        try {
          const response = await handleGoogleCallback(googleToken);
          onAuthSuccess(response);
          onClose();
        } catch (error) {
          console.error("Error handling Google sign-in:", error);
          setError("Google sign-in failed. Please try again.");
        }
      }
    };

    handleOAuthRedirect();
  }, [onAuthSuccess, onClose]);

  if (!isOpen) return null;

  const handleGoogleSignIn = async () => {
    signInWithGoogle();
  };

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
      const userData = { Username, email, password }; // using username instead of Username
      const response = await signupUser(userData);
      console.log("Signup successful:", response);
      onAuthSuccess(response);
      onClose();
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
      const userData = { email, password };
      const response = await loginUser(userData);
      console.log("Login successful:", response);
      onAuthSuccess(response);
      onClose();
    } catch (err) {
      // console.error("Error:", err.response?.data?.error || err.message);
      // setError(
      //   err.response?.data?.error ||
      //     "Authentication failed. Please try again."
      // );
      alert("Maa chuda ");
    }
  };

  return (
    <div className="signup-modal-overlay" onClick={onClose}>
      <div className="signup-modal" onClick={(e) => e.stopPropagation()}>
        <div className="form-box">
          <h1>Sign Up / Sign In</h1>
          <form>
            <div className="input-group">
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
              <p className="username-status">{UsernameStatus}</p>
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
                Lost Password? <a href="#!">Click Here</a>
              </p>
            </div>
            {error && <p className="error-message">{error}</p>}
            <div className="btn-field">
              <button type="button" onClick={handleSignUp}>
                Sign Up
              </button>
              <button type="button" onClick={handleSignIn}>
                Sign In
              </button>
              <button type="button" onClick={handleGoogleSignIn}>
                Sign in with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Set default props to prevent errors if onAuthSuccess isn't provided
Signup.defaultProps = {
  onAuthSuccess: () => {},
};

export default Signup;
