import React from 'react'
import "@/app/styles/input.css"

const Input = ({ type, value, onChange, placeholder }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="input-container"
    />
  );
};

export default Input;
