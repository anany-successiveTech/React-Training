import React, { useState } from 'react';
import '../app/styles/counting.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <div className="count-box-container">
        <h2 className="count-box-title">Counting Machine</h2>
        <div className="count-box-display">Counting: {count}</div>
        <div className="count-box-buttons">
          <button onClick={handleDecrement}>-</button>
          <button onClick={handleIncrement}>+</button>
        </div>
      </div>
    </div>
  )
};

export default Counter;
