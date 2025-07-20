import React, { useState, useEffect } from "react";
import "./Signup.css";
import { FcGoogle } from "react-icons/fc";
import supabase from "../../supabaseClient";

const Signup = ({ isOpen, onClose, onAuthSuccess, reset }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [tempGoogleUser, setTempGoogleUser] = useState(null);
  const [googleUserId, setGoogleUserId] = useState(null);

  useEffect(() => {
    if (reset) {
      setTempGoogleUser(null);
      setIsLogin(false);
      setUsername("");
      setEmail("");
      setPassword("");
      setError("");
    }
  }, [reset]);

  useEffect(() => {
    const checkSession = async () => {
      if (tempGoogleUser) return;

      const {
        data: { session },
        error: sessionError,
      } = await supabase.auth.getSession();

      if (sessionError) {
        console.error("Session fetch error:", sessionError);
        return;
      }

      const user = session?.user;
      if (user) {
        const { data: profile, error: profileError } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single();

        if (profileError && profileError.code !== "PGRST116") {
          console.error("Profile fetch error:", profileError);
          setError("Failed to fetch profile.");
          return;
        }

        const providers = user.identities?.map((id) => id.provider) || [];
        const isGoogleUser = providers.includes("google");

        if (!profile && isGoogleUser) {
          setGoogleUserId(user.id);
          setTempGoogleUser({
            name: user.user_metadata?.name || "Google User",
            email: user.email,
            profileImage: user.user_metadata?.avatar_url || null,
          });
        } else if (profile) {
          onAuthSuccess(profile);
          onClose();
        }
      }
    };

    checkSession();
  }, [onAuthSuccess, onClose, tempGoogleUser]);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setError("");
    setUsername("");
    setEmail("");
    setPassword("");
    setTempGoogleUser(null);
  };

  const validateEmail = (email) => {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Always convert username to lowercase for check and insertion
    const usernameLower = username.trim().toLowerCase();

    if (tempGoogleUser) {
      if (usernameLower.length < 3) {
        setError("Username must be at least 3 characters long.");
        return;
      }

      // Check if username already exists (case-insensitive)
      const { data: existingUsernames, error: checkError } = await supabase
        .from("profiles")
        .select("username")
        .ilike("username", usernameLower)
        .limit(1);

      if (checkError) {
        setError("Failed to validate username.");
        return;
      }
      if (existingUsernames.length > 0) {
        setError("Username already taken. Please choose another.");
        return;
      }

      const { error: insertErr } = await supabase.from("profiles").insert([
        {
          id: googleUserId,
          username: usernameLower,
        },
      ]);

      if (insertErr) {
        setError(insertErr.message);
        return;
      }

      onAuthSuccess({ ...tempGoogleUser, username: usernameLower });
      onClose();
      setTempGoogleUser(null);
      setUsername("");
      return;
    }

    if (!isLogin && usernameLower.length < 3) {
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

    if (isLogin) {
      const { data, error: loginError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (loginError) {
        setError(loginError.message);
        return;
      }

      const userId = data?.user?.id;
      if (userId) {
        const { data: profile, error: profileError } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", userId)
          .single();

        if (profileError) {
          setError("Failed to load profile after login.");
          return;
        }

        onAuthSuccess(profile);
        onClose();
      }
    } else {
      // Signup mode - Check username availability before signup (case-insensitive)
      const { data: existingUsernames, error: checkError } = await supabase
        .from("profiles")
        .select("username")
        .ilike("username", usernameLower)
        .limit(1);

      if (checkError) {
        setError("Failed to validate username.");
        return;
      }
      if (existingUsernames.length > 0) {
        setError("Username already taken. Please choose another.");
        return;
      }

      const { data, error: signupError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (signupError) {
        setError(signupError.message);
        return;
      }

      const userId = data?.user?.id;

      if (userId) {
        const { error: insertError } = await supabase.from("profiles").insert([
          {
            id: userId,
            username: usernameLower,
          },
        ]);

        if (insertError) {
          setError(insertError.message);
          return;
        }

        onAuthSuccess({ username: usernameLower, email });
        onClose();
      }
    }
  };

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      setError("Google sign-in failed.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="signup-modal-overlay" onClick={onClose}>
      <div className="signup-modal" onClick={(e) => e.stopPropagation()}>
        <div className="form-box">
          {tempGoogleUser ? (
            <>
              <h1>Set Your Username</h1>
              <form onSubmit={handleSubmit}>
                <div className="input-field">
                  <i className="fa-solid fa-user"></i>
                  <input
                    type="text"
                    placeholder="Choose a username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    autoFocus
                  />
                </div>
                {error && <p className="error-message">{error}</p>}
                <button type="submit" className="auth-btn">
                  Save Username
                </button>
              </form>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
