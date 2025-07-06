
import React from 'react';
<<<<<<< HEAD
import '@/app/styles/navBar.css'
=======
import "@/app/styles/home.css"
>>>>>>> 2477047551f0578600795f127bb09a54de0dc281

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
