import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../../supabaseClient";

const OAuthCallback = ({ onAuthSuccess }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleOAuthCallback = async () => {
      try {
        // Supabase automatically handles the OAuth callback
        const {
          data: { session },
          error,
        } = await supabase.auth.getSession();

        if (error || !session) {
          throw new Error("Authentication failed: No session found");
        }

        // Get the authenticated user
        const {
          data: { user },
        } = await supabase.auth.getUser();

        // Check if the user has a profile
        const { data: profile, error: profileError } = await supabase
          .from("profiles")
          .select("id")
          .eq("id", user.id);

        if (profileError) {
          console.error("Profile check error:", profileError);
          throw new Error("Failed to check profile");
        }

        // Redirect based on profile existence
        if (profile.length === 0) {
          navigate("/setup-profile", {
            state: { email: user.email, provider: "google" },
          });
        } else {
          onAuthSuccess({ user, profile: profile[0] });
          navigate("/");
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
