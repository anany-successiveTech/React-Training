"use client";

import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/AuthProvider";
import Input from "@/component/Input";
import "@/app/styles/auth.css";

const AuthConsumer = () => {
  const { user, login, logout, error } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (username.trim() && password.trim()) {
      login(username, password);
      setUsername("");
      setPassword("");

      const redirectPath = localStorage.getItem("redirectAfterLogin");
      if (redirectPath) {
        localStorage.removeItem("redirectAfterLogin");
        router.push(redirectPath);
      }
    }
  };

  return (
    <div>
      <p style={{ textAlign: "center", margin: "2rem" }}>
        1. Create two components: a parent component that acts as a provider and
        a child component that consumes the context. Create a context to manage
        a user's authentication status (logged in or out). Implement a login
        button in the child component that, when clicked, updates the
        authentication status in the context to "logged in." Display a message
        in the child component based on the user's authentication status. If the
        user is logged in, show "Welcome, [username]!" Otherwise, display
        "Please log in."
      </p>

      <div className="auth-container">
        <div className="auth-card">
          {user ? (
            <>
              <h2 className="auth-heading">
                Welcome, <span className="auth-username">{user.username}</span>!
              </h2>
              <button onClick={logout} className="auth-button">
                Log out
              </button>
            </>
          ) : (
            <>
              <h2 className="auth-heading">Please log in</h2>
              <div className="checking">
                <Input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
                  className="auth-input"
                />
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="auth-input"
                />
              </div>
              {error && (
                <p style={{ color: "red", marginBottom: "1rem" }}>{error}</p>
              )}
              <button onClick={handleLogin} className="auth-button">
                Log in
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthConsumer;
