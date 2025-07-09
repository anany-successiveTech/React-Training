"use client";

import { useState } from "react";
import "@/app/styles/a5q10.css"

function LoggerExample() {
  const [count, setCount] = useState(0);

  return (
    <div className="loggerWrapper">
      <h2 className="loggerTitle">Logger Component</h2>
      <p className="loggerCount">Count: {count}</p>
      <button className="loggerButton" onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default LoggerExample;
