"use client"

import React, { useEffect, useState } from "react";
import "../../styles/randomNumber.css";

const RandomNumberGenerator = () => {
  const [randomNumber, setRandomNumber] = useState(null);
  const handleClick = () => {
    let number = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(number)
  };

  useEffect(()=>{
    setRandomNumber(Math.floor(Math.random() * 100) + 1)
  }, [])

  return (
    <div className="number-container">
      <p style={{ textAlign: "center", margin: "2rem" }}>
        4. Create a functional component called RandomNumberGenerator. Use the
        useState hook to manage a state variable named randomNumber, initialized
        to a random number between 1 and 100. Render the current value of
        randomNumber. Add a button that generates a new random number and
        updates the state when clicked.
      </p>
      <div className="random-container">
        <div className="display-no">
          <h1>{randomNumber}</h1>
        </div>
        <div className="generator-btn">
          <button onClick={handleClick}>Generate Number</button>
        </div>
      </div>
    </div>
  );
};

export default RandomNumberGenerator;
