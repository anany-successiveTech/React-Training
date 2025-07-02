"use client";

import React, { useState } from "react";
import "@/app/styles/a4q3.css";
import { Input } from "@mui/material";

const Message = () => {
  return <p className="message">✅ Hello! You typed "show" 👋</p>;
}

const ShowComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [show, setShow] = useState(false);

  const handleButtonClick = () => {
    if (inputValue === "show") {
      setShow(true);
    } else {
      setShow(false);
    }
  };
 
  return (
    <div>
      <p style={{ textAlign: "center", margin: "2rem" }}>
        3. Create a component with controlled input field and a button. When the
        user enters a specific value into the input (e.g., "show"), a new
        component should be rendered below the input, displaying a message.
        Otherwise, nothing should be displayed.
      </p>
      <div className="container">
        <h3 className="title">Type "show" to see the message</h3>
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type something..."
          className="input"
        />
        <button onClick={handleButtonClick} className="button">
          Submit
        </button>

        {show && <Message />}
      </div>
    </div>
  );
}

export default ShowComponent;
