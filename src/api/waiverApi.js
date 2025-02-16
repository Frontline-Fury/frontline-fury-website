import axios from "axios";

const API_URL = "https://frontline-fury-backend.onrender.com/api/waivers";

export const submitWaiver = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/submit`, formData, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error submitting waiver:",
      error.response?.data || error.message
    );
    throw error;
  }
};
