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
          .eq("id", user.id)
          .single();

        if (profileError) {
          console.error("Profile check error:", profileError);
          throw new Error("Failed to check profile");
        }
        // Trigger onAuthSuccess with user data
        onAuthSuccess({ user, profile });

        console.log("URL hash:", window.location.hash);
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
        navigate("/login");
      }
    };

    handleOAuthCallback();
  }, [navigate, onAuthSuccess]);

  return <div>Completing authentication...</div>;
};

export default OAuthCallback;
