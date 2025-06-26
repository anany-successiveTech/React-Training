'use client'

import React from 'react'
import Clock from '../../../component/Clock'

const Page = () => {
  return (
    <div>
      <p style={{ textAlign: "center", margin: "2rem" }}>
6. Create a functional component called Clock.
Use the useState hook to manage a state variable named time initialized to the current time.
Use the useEffect hook to update the time state every second to display the current time.
Render the current time in a "P" element.
When the component unmounts, clear the interval to stop updating the time.
      </p>
      <Clock/>
    </div>
  )
}

export default Page
