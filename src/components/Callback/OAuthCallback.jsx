import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../../supabaseClient";

const OAuthCallback = ({ onAuthSuccess }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleOAuthCallback = async () => {
      try {
        // Extract the hash from the URL
        const hash = window.location.hash.substring(1);
        const params = new URLSearchParams(hash);

        // Get the access token
        const accessToken = params.get("access_token");
        const refreshToken = params.get("refresh_token");

        if (!accessToken || !refreshToken) {
          throw new Error("Authentication failed: No tokens found");
        }

        // Set the session
        const { error } = await supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken,
        });

        if (error) throw error;

        // Get the authenticated user
        const {
          data: { user },
        } = await supabase.auth.getUser();

        // Check if the user has a profile
        const { data: profile } = await supabase
          .from("profiles")
          .select("id")
          .eq("id", user.id)
          .single();

        // Trigger onAuthSuccess with user data
        onAuthSuccess({ user, profile });

        // Redirect based on profile existence
        if (profile) {
          navigate("/");
        } else {
          navigate("/setup-profile", {
            state: { email: user.email, provider: "google" },
          });
        }
      } catch (error) {
        console.error("OAuth callback error:", error);
        navigate("/signup");
      }
    };

    handleOAuthCallback();
  }, [navigate, onAuthSuccess]);

  return <div>Completing authentication...</div>;
};

export default OAuthCallback;
