"use client";
import React, { useState, useRef, useEffect } from "react";

const useTimer = (initialDuration = 60) => {
  const [time, setTime] = useState(initialDuration);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const start = () => {
    if (intervalRef.current) return;
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const pause = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setIsRunning(false);
  };

  const reset = () => {
    pause();
    setTime(initialDuration);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return { time, isRunning, start, pause, reset };
};

const TimerComponent = () => {
  const { time, isRunning, start, pause, reset } = useTimer(30); // 30 seconds

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      <p style={{ textAlign: "center", margin: "2rem" }}>
        19.Build a custom hook named useTimer for creating countdown timers.
        Create a useTimer hook that takes a countdown duration as a parameter.
        Use setInterval to decrement the timer at regular intervals. Return the
        current timer value and methods to start, pause, and reset the timer.
        Develop a component that utilizes the useTimer hook to display and
        control a countdown.
      </p>
      <h2>Countdown: {time} sec</h2>
      <button onClick={start} disabled={isRunning}>
        Start
      </button>
      <button onClick={pause} disabled={!isRunning}>
        Pause
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default TimerComponent;
