"use client";

import React, { useState, useEffect } from "react";
import "@/app/styles/message.css";

const Notification = () => {
  const [message, setMessage] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    setMessage(inputValue);
  };
  useEffect(() => {
    setTimeout(() => {
      setInputValue("");
      setMessage("");
    }, 5000);
  }, [message]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <p style={{ textAlign: "center", margin: "2rem" }}>
        7. Create a functional component called Notification. Use the useState
        hook to manage a state variable named message initialized to an empty
        string. Use the useEffect hook to show a notification message for 5
        seconds whenever the message state changes. Render the notification
        message in a 'div' element. After 5 seconds, clear the message to hide
        the notification.
      </p>
      <div className="page-center">
        <div className="message">{message || "Notify"}</div>
        <div className="notification-container">
          <input
            type="text"
            required
            id="msg"
            onChange={handleChange}
            placeholder="Enter Something......."
          />
          <button onClick={handleClick}>click me</button>
        </div>
      </div>
    </div>
  );
};

export default Notification;
