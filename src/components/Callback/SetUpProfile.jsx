import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import supabase from "../../supabaseClient";

const SetUpProfile = ({ onAuthSuccess }) => {
  const [username, setUsername] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state || {};

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      // Check if username is available
      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("Username")
        .eq("Username", username);

      if (profileError) {
        console.error("Profile check error:", profileError);
        throw new Error("Failed to check username availability");
      }

      // If profile exists, username is taken
      if (profile && profile.length > 0) {
        setStatus("Username is already taken");
        return;
      }

      // Get the authenticated user
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError || !user) {
        throw new Error("User not authenticated");
      }

      // Create profile
      const { data: newProfile, error: createError } = await supabase
        .from("profiles")
        .insert([{ id: user.id, Username: username, email }])
        .select();

      if (createError) {
        console.error("Profile creation error:", createError);
        throw new Error("Failed to create profile");
      }

      // Trigger onAuthSuccess with user and profile data
      onAuthSuccess({ user, profile: newProfile[0] });

      // Redirect to home
      navigate("/");
    } catch (error) {
      console.error("Profile setup error:", error);
      setStatus(error.message);
    }
  };

  return (
    <div className="profile-setup">
      <h2>Complete Your Profile</h2>
      <form onSubmit={onSubmit}>
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

export default SetUpProfile;
