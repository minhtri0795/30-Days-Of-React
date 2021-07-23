import React, { useState, useEffect } from "react";

function useClock() {
  const [timeString, setTimeString] = useState("");
  const formatTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    return `${hours}:${minute}:${second}`;
  };
  useEffect(() => {
    const intervalClock = setInterval(() => {
      const newTimeString = formatTime();
      setTimeString(newTimeString);
    }, 1000);

    return () => {
      clearInterval(intervalClock);
    };
  }, []);

  return timeString;
}

export default useClock;
