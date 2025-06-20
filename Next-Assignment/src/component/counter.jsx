import React, { useState } from 'react'
import '../app/styles/counter.css'

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
      <p style={{ textAlign: 'center', margin: '2rem' }}>
        4. Create a functional component named Counter that displays a count and two buttons: "Increment" and "Decrement".
        Implement event handlers for the "Increment" and "Decrement" buttons to increase and decrease the count.
        Display the updated count on the screen.
      </p>

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
