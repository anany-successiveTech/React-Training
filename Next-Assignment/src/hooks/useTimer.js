import { useState, useRef, useEffect } from 'react';

function useTimer(initialTime) {
  const [time, setTime] = useState(initialTime);
  const timerRef = useRef(null);

  const start = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          timerRef.current = null;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const pause = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const reset = () => {
    pause();
    setTime(initialTime);
  };

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  return { time, start, pause, reset };
}

export default useTimer;

