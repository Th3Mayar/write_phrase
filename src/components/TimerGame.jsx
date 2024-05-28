import React, { useState, useEffect } from 'react';

const useTimer = (expiryTimestamp) => {
  const calculateTimeLeft = () => {
    const difference = expiryTimestamp - Date.now();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        totalSeconds: Math.floor(difference / 1000),
        seconds: Math.floor((difference / 1000) % 60),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        isRunning: true,
      };
    } else {
      timeLeft = { isRunning: false };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [expiryTimestamp]);

  const handleTimerFinish = () => {
    localStorage.removeItem('expiryTimestamp');
  };

  return { timeLeft, handleTimerFinish };
};

function MyTimer({ expiryTimestamp }) {
  const { timeLeft, handleTimerFinish } = useTimer(expiryTimestamp);
  const { totalSeconds, seconds, minutes, hours, days, isRunning } = timeLeft;

  useEffect(() => {
    if (!isRunning) {
      console.log('El temporizador ha finalizado');
      handleTimerFinish();
    }
  }, [isRunning, handleTimerFinish]);

  return (
    <div className='text-right -mt-40 mb-10'>
      <p>Timer Game</p>
      <div className='text-wrap font-mono text-5xl'>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'End Game'}</p>
    </div>
  );
}

const TimerGame = () => {
  const initialSeconds = 90;
  let expiryTimestamp = Date.now() + initialSeconds * 1000;

  if (typeof window !== 'undefined') {
    const storedExpiryTimestamp = localStorage.getItem('expiryTimestamp');
    if (storedExpiryTimestamp) {
      expiryTimestamp = parseInt(storedExpiryTimestamp, 10);
    } else {
      localStorage.setItem('expiryTimestamp', expiryTimestamp);
    }
  }

  return (
    <div>
      <MyTimer expiryTimestamp={expiryTimestamp} />
    </div>
  );
};

export default TimerGame;
