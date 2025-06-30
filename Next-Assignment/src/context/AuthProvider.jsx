"use client";

import { useState, createContext, useEffect } from "react";

export const AuthContext = createContext({
  user: null,
  login: (username, password) => {},
  logout: () => {},
  error: null,
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("registeredUser");
    if (!storedUser) {
      const defaultUser = {
        username: "ananymore65@gmail.com",
        password: "1234",
      };
      localStorage.setItem("registeredUser", JSON.stringify(defaultUser));
    }
  }, []);

  const login = (username, password) => {
    try {
      const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

      // console.log(storedUser);
      // console.log(storedUser.username, storedUser.password);
      
      if (
        storedUser &&
        username === storedUser.username &&
        password === storedUser.password
      ) {
        // console.log(username, "username");
        
        setUser({ username });
        setError(null);
        console.log("Login successful:", username);
      } else {
        setError("Invalid username or password");
        console.log("Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  const logout = () => {
    setUser(null);
    setError(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};
