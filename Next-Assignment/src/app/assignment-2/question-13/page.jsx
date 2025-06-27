"use client";

import "@/app/styles/parentCount.css";

import React, { useState, useCallback } from "react";

const Parent = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, [count]);

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="parent-container">
      <p style={{ textAlign: "center", margin: "2rem" }}>
        13. Create two components: Parent and Child. In the Parent component,
        maintain a count state. Pass a callback function from the Parent to the
        Child that increments the count. Use the useCallback hook in the Parent
        to memoize the callback function with a dependency on the count state.
        Display the count in the Child component. Implement a button in the
        Child component that resets the count to zero when clicked.
      </p>
      <Child count={count} increment={increment} reset={reset} /> 
    </div>
  );
};

const Child = ({ count, increment, reset }) => {
  return (
    <div className="child-container">
      <h2 className="count-text">Count: {count}</h2>
      <div className="button-group">
        <button onClick={increment} className="btn">
          Increment
        </button>
        <button onClick={reset} className="btn">
          Reset
        </button>
      </div>
    </div>
  );
};

export default ParentChild;
