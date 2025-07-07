'use client'
import React, { useState, useEffect } from "react";
import "@/app/styles/slideShow.css"

const Page = () => {
  const images = [
  '/1.jpg', '/2.jpg', '/3.jpg', '/4.jpg', '/5.jpg',
  '/6.jpg', '/7.jpg', '/8.jpg', '/9.jpg', '/10.jpg', '/11.jpg'
];

  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggle = () => {
    setIsPlaying(prev => !prev);
  };

  function handleNext() {
  if (current === images.length - 1) {
    setCurrent(0);
  } else {
    setCurrent(current + 1);
  }
}

function handlePrev() {
  if (current === 0) {
    setCurrent(images.length - 1);
  } else {
    setCurrent(current - 1);
  }
}


useEffect(() => {
  if (!isPlaying) return;

 const timer = setInterval(() => {
    setCurrent(prev => {
      if (prev + 1 >= images.length) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  }, 2000);

  return () => clearInterval(timer);
}, [isPlaying]);


  return (
    <div>
      <p style={{ textAlign: "center", margin: "2rem" }}>
     8. Use the useEffect hook to manage the current slide and transition.
Add few images atleast 10 in public folder to populate the slideshow.
Allow users to pause, play the slideshow.
Include a time interval option to control the automatic slideshow progression.
      </p>

      <div className="slide-container">
        <div className="images">
          <img
            src={images[current]}
            alt='Slide Images'
          
          />
        </div>

        <div className="controls">
          <button onClick={handlePrev}>Prev</button>
          <button onClick={handleToggle}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Page;
