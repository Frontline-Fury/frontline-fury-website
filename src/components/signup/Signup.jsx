import React, { useState } from "react";
import "./Signup.css";
import { signupUser } from "../api/authApi";

const Signup = ({ isOpen, onClose, onAuthSuccess }) => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [Username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = { UserName, email, password };
      const response = await signupUser(userData);
      console.log("Signup successful:", response);
      onAuthSuccess(response); // Pass user data to parent component
      onClose(); // Close the modal
    } catch (err) {
      setError(err.response?.data?.error || "Signup failed");
    }

    const userData = {
      name: isSignUp ? Username : "User",
      email,
    };
    onAuthSuccess(userData);
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
                    onChange={(e) => setUserName(e.target.value)}
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
