

import React from 'react';
import '../app/styles/home.css'

const Button = ({ name, value, onclick, active}) => {
  return (
    <div className='btn-container'>
    <button onClick={() => onclick(value)} className={`btn ${active ? 'active' : ''}`}>
      {name}
    </button>
    </div>
  );
};
export default Button;
