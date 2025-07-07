"use client";
import "@/app/styles/timer.css";
import React from "react";
import useTimer from "@/hooks/useTimer";

function TimerComponent() {
  const { time, start, pause, reset } = useTimer(60);
  
  console.log(time);
  

  return (
    <div>
      <p style={{ textAlign: "center", margin: "2rem" }}>
        19. Build a custom hook named useTimer for creating countdown timers.
        Create a useTimer hook that takes a countdown duration as a parameter.
        Use setInterval to decrement the timer at regular intervals. Return the
        current timer value and methods to start, pause, and reset the timer.
        Develop a component that utilizes the useTimer hook to display and
        control a countdown.
      </p>
      <div className="timer-container">
         <h2>Countdown Timer</h2>
      <div className="time-display">{time} sec</div>
      <div className="button-group">
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>
      </div>
      </div>
    </div>
  );
}

export default TimerComponent;
