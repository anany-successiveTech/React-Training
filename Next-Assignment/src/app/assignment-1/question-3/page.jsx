"use client";
import React, { useState } from "react";
import Weather from "@/component/Weather"

const Page = () => {
  const [temperature, setTemperature] = useState("");

  const handleInputChange = (e) => {
    setTemperature(e.target.value);
  };

  return (
    <div style={{ textAlign: "center", margin: "2rem" }}>
      <div>
        <p style={{ textAlign: "center", margin: "2rem" }}>
          3. Create a functional component named Weather that accepts a prop
          called temperature (a number). Display a message like "It's sunny
          today!" if the temperature is above 25°C and "It's cold today!" if the
          temperature is below 10°C. Import and render the Weather component in
          the App component with different temperature values.
        </p>
      </div>
      <input
        type="text"
        placeholder="Enter temperature"
        value={temperature}
        onChange={handleInputChange}
        style={{ padding: "0.5rem", fontSize: "1rem" }}
      />
      <Weather temperature={temperature !== "" ? Number(temperature) : null} />
    </div>
  );
};

export default Page;
