"use client";

import ColorButton from "@/component/ColorButton";
import React, { useState } from "react";
import "../../styles/colorChanger.css";
import Input from "@/component/Input";

const App = () => {
  const [text, setText] = useState("");
  const [color, setColor] = useState("");

  const handleTextChange = (e) => setText(e.target.value);
  const handleColorChange = (e) => setColor(e.target.value);

  return (
    <div>
      <p className="description">
        6. Create a functional component named Button that accepts props for
        text and color. Style the button using inline styles or CSS classes
        based on the color prop. Import and render the Button component in the
        App component with different text and color props.
      </p>
      <div className="colour">

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

        <div className="button-wrapper">
          <ColorButton text={text} color={color} />
        </div>
      </div>
      </div>  
    </div>
  );
};

export default App;
