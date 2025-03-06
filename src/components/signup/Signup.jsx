import React, { useState, useEffect } from "react";
import "./Signup.css";
import {
  signupUser,
  loginUser,
  checkUsernameAvailability,
  handleGoogleCallback,
} from "../../api/authApi";
import supabase from "../../supabaseClient";

import { FcGoogle } from "react-icons/fc";





const Signup = ({ isOpen, onClose, onAuthSuccess }) => {
  const [isSignup, setIsSignup] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [usernameStatus, setUsernameStatus] = useState("");

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

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      const userData = isSignup
        ? { username, email, password }
        : { email, password };

      const response = isSignup
        ? await signupUser(userData)
        : await loginUser(userData);

      console.log(`${isSignup ? "Signup" : "Login"} successful:`, response);
      onAuthSuccess(response);
      onClose();
    } catch (err) {
      console.error("Error:", err.response?.data?.error || err.message);
      setError(
        err.response?.data?.error || "Authentication failed. Please try again."
      );
    }
  };

 const handleGoogleSignUp = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });

  if (error) {
    console.error("Google Sign-Up Error:", error);
    setError("Google Sign-Up failed. Please try again.");
  }
};
  return (
    <div className="signup-modal-overlay" onClick={onClose}>
      <div className="signup-modal" onClick={(e) => e.stopPropagation()}>
        <div className="form-box">
          <h1>{isSignup ? "Sign Up" : "Login"}</h1>
          <form>
            <div className="input-group">
              {isSignup && (
                <div className="input-field">
                  <i className="fa-solid fa-user"></i>
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={handleUsernameChange}
                    required
                  />
                </div>
              )}
              {isSignup && <p className="username-status">{usernameStatus}</p>}

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
            </div>
            {error && <p className="error-message">{error}</p>}

            <button type="submit" onClick={handleAuth} className="auth-btn">
              {isSignup ? "Create Account" : "Login"}
            </button>

            <p className="or-text">OR</p>

            <button type="button" className="google-btn" onClick={handleGoogleSignUp}>
              <FcGoogle size={24} className="google-icon" />
              {isSignup ? "Sign Up with Google" : "Sign In with Google"}
            </button>




            <p className="switch-auth">
              {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
              <button type="button" className="switch-auth-btn" onClick={() => setIsSignup(!isSignup)}>
                {isSignup ? "Login" : "Sign Up"}
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

Signup.defaultProps = {
  onAuthSuccess: () => { },
};

export default Signup;
