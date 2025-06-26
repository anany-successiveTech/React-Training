'use client'
import React from 'react'

import Counter from '../../../component/Counter'

const Page = () => {
  return (
    <div>
      <p style={{ textAlign: "center", margin: "2rem" }}>
        1.Create a functional component called Counter. Inside the component,
        use the useState hook to manage a state variable named count initialized
        to 0. Render the current value of count in a element. Add two buttons,
        one for incrementing the count and another for decrementing it. When the
        user clicks on the buttons, update the count state accordingly.
      </p>
      <Counter />
    </div>
  );
}

export default Page
