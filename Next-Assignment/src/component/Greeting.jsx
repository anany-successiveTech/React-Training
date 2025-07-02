// 1.Create a functional component named Greeting that displays a simple "Hello, Next.js!" message on the screen.
// Import and render the Greeting component in the App component.

import '@/app/styles/navBar.css'

import React from 'react'
const Greeting = ({text}) => {
  return (
    <div className='header'>
      <h1>{text || 'Hello, Next.js!'}</h1>
    </div>
  );
}

export default Greeting
