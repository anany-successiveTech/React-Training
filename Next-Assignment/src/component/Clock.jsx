"use client";
import "@/app/styles/clock.css";
import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const updateTime = () => setTime(new Date());
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!time) return null;

  return <div className="clock-container">{time.toLocaleTimeString()}</div>;
};

export default Clock;
