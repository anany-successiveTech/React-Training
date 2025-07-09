"use client";
import React, { useState } from "react";
import "@/app/styles/counterStep.css";

const Page = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);

  const handleIncrement = () => {
    if (step <= 0) {
      alert("enter the steps");
      return;
    }
    setCount(count + step);
  };

  const handleDecrement = () => {
    if (step <= 0) {
      alert("Enter the steps");
      return;
    }
    if (count > 0) {
      setCount(count - step);
    }
  };

  const handleChange = (e) => {
    setStep(Number(e.target.value));
    setCount(step);
  };

  return (
    <div>
      <p style={{ textAlign: "center", margin: "2rem" }}>
        5. Create a functional component called CounterWithStep. Use the
        useState hook to manage a state variable named count initialized to 0.
        Render the current value of count in a 'p' element. Add two buttons, one
        for incrementing the count and another for decrementing it. Add an input
        field where the user can specify a step value. Update the count using
        the specified step value when the buttons are clicked.
      </p>
      <div>
        <div className="counter-container">
          <h2 className="counter-title">Conuter With Steps</h2>
          <p className="counter-display">Counting: {count}</p>
          <div className="counter-buttons">
            <div>
              <input
                type="number"
                placeholder="Enter Steps"
                onChange={handleChange}
              />
            </div>
            <div>
              <button onClick={handleDecrement}>-</button>
              <button onClick={handleIncrement}>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
