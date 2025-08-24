import React, { useState, useEffect } from "react";
import "./Signup.css";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";

const Signup = ({ isOpen, onClose, onAuthSuccess, reset }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Use Render URL for production
const API_BASE_URL = process.env.REACT_APP_API_URL || "https://frontline-fury-backend.onrender.com";
  useEffect(() => {
    if (reset) {
      setIsLogin(false);
      setUsername("");
      setEmail("");
      setPassword("");
      setError("");
    }
  }, [reset]);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setError("");
    setUsername("");
    setEmail("");
    setPassword("");
  };

  const validateEmail = (email) => {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLogin && username.trim().length < 3) {
      setError("Username must be at least 3 characters long.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setError("");

    try {
      if (isLogin) {
        // 🔹 Login API call - Using Render URL
        const res = await axios.post(`${API_BASE_URL}/api/auth/login`, {
          email,
          password,
        });

        localStorage.setItem("token", res.data.token); // save token
        onAuthSuccess(res.data.user); // pass user data back to parent
        onClose();
      } else {
        // 🔹 Signup API call - Using Render URL
        await axios.post(`${API_BASE_URL}/api/auth/signup`, {
          username: username.trim().toLowerCase(),
          email,
          password,
        });

        alert("Account created successfully ✅. Please login.");
        setIsLogin(true);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  // Abhi ke liye Google Auth ko disable rakha (baad me backend OAuth integrate kr skte hai)
  const handleGoogleLogin = () => {
    alert("Google login not implemented yet ⚡");
  };

  if (!isOpen) return null;

  return (
    <div className="signup-modal-overlay" onClick={onClose}>
      <div className="signup-modal" onClick={(e) => e.stopPropagation()}>
        <div className="form-box">
          <h1>{isLogin ? "LOGIN" : "SIGN UP"}</h1>

          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="input-field">
                <i className="fa-solid fa-user"></i>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoFocus={!isLogin}
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
                autoFocus={isLogin}
              />
            </div>

            <div className="input-field">
              <i className="fa-solid fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && <p className="error-message">{error}</p>}

            <button type="submit" className="auth-btn">
              {isLogin ? "LOGIN" : "CREATE ACCOUNT"}
            </button>
          </form>

          <p className="or-text">OR</p>

          <button className="google-btn" onClick={handleGoogleLogin}>
            <FcGoogle size={22} style={{ marginRight: "8px" }} />
            {isLogin ? "Login" : "Sign Up"} with Google
          </button>

          <p className="switch-auth">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              type="button"
              className="switch-auth-btn"
              onClick={toggleAuthMode}
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;