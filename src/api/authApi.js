import axios from "axios";

const API_URL = "https://frontline-fury-backend.onrender.com/api/auth";

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
