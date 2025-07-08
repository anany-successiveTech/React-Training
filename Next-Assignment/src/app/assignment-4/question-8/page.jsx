"use client";

import React, { useState } from "react";
import "@/app/styles/tempConverter.css";

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    if (value === "") {
      setFahrenheit("");
    }
    setFahrenheit(((parseFloat(value) * 9) / 5 + 32).toFixed(2));
  };

  const handleFahrenheitChange = (e) => {
     e.target.value;
    setFahrenheit(value);
    if (value === "") {
      setCelsius("");
    }
    setCelsius((((parseFloat(value) - 32) * 5) / 9).toFixed(2));
  };

  return (
    <div>
      <p style={{ textAlign: "center", margin: "2rem" }}>
        8. Create a temperature converter component with two input fields: one
        for Celsius and one for Fahrenheit. Implement controlled components for
        both inputs. When the user enters a value in one input, the other input
        should update with the converted temperature.
      </p>
      <div className="temp-container">
        <h2 className="temp-title">Temperature Converter</h2>
        <div className="temp-inputs">
          <input
            type="number"
            placeholder="Celsius"
            value={celsius}
            onChange={handleCelsiusChange}
            className="temp-input"
          />
          <input
            type="number"
            placeholder="Fahrenheit"
            value={fahrenheit}
            onChange={handleFahrenheitChange}
            className="temp-input"
          />
        </div>
      </div>
    </div>
  );
};

export default TemperatureConverter;
