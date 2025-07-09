"use client";

import ColorButton from "@/component/ColorButton";
import React, { useState } from "react";
<<<<<<< HEAD
import "../../styles/colorChanger.css";
import Input from "@/component/Input";
=======
>>>>>>> f8bab1561466cb6c91695ca7b5b513c659d6b24a

const Page = () => {
  const [text, setText] = useState("");
  const [color, setColor] = useState("");

  const handleTextChange = (e) => setText(e.target.value);
  const handleColorChange = (e) => setColor(e.target.value);

  return (
<<<<<<< HEAD
    <div>
      <p className="description">
=======
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <p style={{ textAlign: "center", margin: "2rem" }}>
>>>>>>> f8bab1561466cb6c91695ca7b5b513c659d6b24a
        6. Create a functional component named Button that accepts props for
        text and color. Style the button using inline styles or CSS classes
        based on the color prop. Import and render the Button component in the
        App component with different text and color props.
      </p>
      <div className="colour">

<<<<<<< HEAD
      <div className="container dark">
        <div className="input-group">
          <Input
            type="text"
            placeholder="Enter button text"
            value={text}
            onChange={handleTextChange}
            className="input-field"
          />
          <Input
            type="text"
            placeholder="Enter button color"
            value={color}
            onChange={handleColorChange}
            className="input-field"
          />
        </div>
=======
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
>>>>>>> f8bab1561466cb6c91695ca7b5b513c659d6b24a

        <div className="button-wrapper">
          <ColorButton text={text} color={color} />
        </div>
      </div>
      </div>  
    </div>
  );
};

export default Page;
