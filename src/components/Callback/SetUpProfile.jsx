import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import supabase from "../../supabaseClient";

const SetupProfile = ({ onAuthSuccess }) => {
  const [username, setUsername] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state || {};

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Check if username is available
      const { data: existing } = await supabase
        .from("profiles")
        .select("username")
        .eq("username", username);

      if (existing.length > 0) {
        setStatus("Username is already taken");
        return;
      }

      // Get the authenticated user
      const {
        data: { user },
      } = await supabase.auth.getUser();

      // Create profile
      const { data: profile, error } = await supabase
        .from("profiles")
        .insert([{ id: user.id, username, email }])
        .single();

      if (error) throw error;

      // Trigger onAuthSuccess with user and profile data
      onAuthSuccess({ user, profile });

      // Redirect to home
      navigate("/");
    } catch (error) {
      console.error("Profile setup error:", error);
      setStatus("Error creating profile");
    }
  };

  return (
    <div className="profile-setup">
      <h2>Complete Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        {status && <p>{status}</p>}
        <button type="submit">Complete Signup</button>
      </form>
    </div>
  );
};

export default SetupProfile;
