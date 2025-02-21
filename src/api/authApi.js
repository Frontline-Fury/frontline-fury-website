import axios from "axios";

const API_URL = "https://frontline-fury-backend.onrender.com/api/auth";

// Signup function
export const signupUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("Signup error:", error.response?.data || error.message);
    throw error;
  }
};

// Login function
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    throw error;
  }
};

// Check username availability
export const checkUsernameAvailability = async (username) => {
  try {
    const response = await axios.get(
      `${API_URL}/check-username?Username=${username}`
    );
    return response.data;
  } catch (error) {
    console.error(
      "Username check error:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// Sign in with Google
export const signInWithGoogle = () => {
  window.location.href = `${API_URL}/google`; // Redirect to backend Google auth route
};

// Handle Google Auth Callback
export const handleGoogleCallback = async (accessToken) => {
  try {
    const response = await axios.post(
      `${API_URL}/google/callback`,
      { access_token: accessToken },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    console.error("Google login error:", error.response?.data || error.message);
    throw error;
  }
};
