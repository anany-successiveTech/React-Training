"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Input from "@/component/Input";
import "@/app/styles/a5q9.css";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    localStorage.removeItem("isLoggedIn");
  }, []);

  const handleLogin = () => {
    if (email === "test@example.com" && password === "1234") {
      localStorage.setItem("isLoggedIn", "true");
      router.push("/assignment-5/question-9/dashboard");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="loginWrapper">
      <h1 className="loginTitle">Login</h1>

      <div className="loginInputWrapper">
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="loginInputWrapper">
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button className="loginButton" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}
