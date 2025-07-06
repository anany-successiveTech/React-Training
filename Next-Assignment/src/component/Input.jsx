import React from 'react'
import "@/app/styles/input.css"

const Input = ({ type, placeholder, onChange }) => {
  return (
    <div className='input-container'>
      <input type={type} placeholder={placeholder} onChange={onChange}/>
    </div>
  )
}

export default Input
