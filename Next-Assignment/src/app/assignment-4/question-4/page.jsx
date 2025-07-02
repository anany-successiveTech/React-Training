"use client";

import "@/app/styles/a4q4.css";
import Input from "@/component/Input";
import React, { useState } from "react";

function RegistrationForm() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`password ${password}`);
    console.log(`confirmed password ${confirmPassword}`);

    if (!password || !confirmPassword) {
      setMessage("❌ Both fields are required.");
      return;
    }

    if (password.includes(" ")) {
      setMessage("❌ Password must not contain spaces.");
      return;
    }

    if (password.length < 6) {
      setMessage("❌ Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("❌ Passwords do not match.");
      return;
    }

    setMessage("✅ Passwords match! Form submitted.");
  };

  return (
    <div>
      <p style={{ textAlign: "center", margin: "2rem" }}>
        4. Build a registration form with two password fields. Implement
        controlled components for both password inputs. Add a validation rule to
        ensure that the two passwords match before allowing the form submission.
      </p>
      <div className="form-container">
        <h2 className="form-title">Register</h2>
        <form onSubmit={handleSubmit}>
          <Input
            type={"password"}
            placeholder={"Enter password"}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <br />
          <Input
            type={password}
            placeholder={"Confirm password"}
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          <br />
          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
        {message && <div className="form-message">{message}</div>}
      </div>
    </div>
  );
}

export default RegistrationForm;
