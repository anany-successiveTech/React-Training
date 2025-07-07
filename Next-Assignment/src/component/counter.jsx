import React, { useState } from 'react'
import "@/app/styles/counter.css"

const Counter = () => {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <div>
 

      <div className="counter-container">
        <h2 className="counter-title">Counting Machine</h2>
        <div className="counter-display">Counting: {count}</div>
        <div className="counter-buttons">
          <button onClick={handleDecrement}>-</button>
          <button onClick={handleIncrement}>+</button>
        </div>
      </div>
    </div>
  )
}

export default Counter
