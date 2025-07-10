"use client";

import ColorButton from "@/component/ColorButton";
import React, { useState } from "react";
import "@/app/styles/colorChnger.css"
import Input from "@/component/Input";

const Page = () => {
  const [text, setText] = useState("");
  const [color, setColor] = useState("");

  const handleTextChange = (e) => setText(e.target.value);
  const handleColorChange = (e) => setColor(e.target.value);

  return (
    <div>
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <p style={{ textAlign: "center", margin: "2rem" }}>
        6. Create a functional component named Button that accepts props for
        text and color. Style the button using inline styles or CSS classes
        based on the color prop. Import and render the Button component in the
        App component with different text and color props.
      </p>
      <div className="colour">

      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Enter button text"
          value={text}
          onChange={handleTextChange}
          style={{
            padding: "1rem",
            marginRight: "1rem",
            borderRadius: "0.5rem",
            border: "none",
          }}
        />
        <input
          type="text"
          placeholder="Enter button color"
          value={color}
          onChange={handleColorChange}
          style={{
            padding: "1rem",
            marginRight: "1rem",
            borderRadius: "0.5rem",
            border: "none",
          }}
        />
      </div>

        <div className="button-wrapper">
          <ColorButton text={text} color={color} />
        </div>
      </div>
      </div>  
    </div>
  );
};

export default Page;
