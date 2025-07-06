// 1.Create a functional component named Greeting that displays a simple "Hello, Next.js!" message on the screen.
// Import and render the Greeting component in the App component.

import '../app/styles/home.css'

import React from 'react'
const Greeting = () => {
  return (
    <div className='header'>
      <h1>Hello, Next.js!</h1>
    </div>
  );
}

export default Greeting
