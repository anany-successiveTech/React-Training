'use client';

// import '@/app/styles/button.css';

export default function Button({ type = 'primary', onClick, children }) {
  return (
    <button className={`btn btn-${type}`} onClick={onClick}>
      {children}
    </button>
  );
}
