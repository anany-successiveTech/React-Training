import Greeting from '@/component/Greeting'
import React from 'react'

const Page = () => {
  return (
    <div>
      <p style={{ textAlign: 'center', margin:'2rem'}}>
        1. Create a functional component named Greeting that displays a simple "Hello, Next.js!" message on the screen.
        Import and render the Greeting component in the App component.
      </p>
      <Greeting />
    </div>
  )
}

export default Page
