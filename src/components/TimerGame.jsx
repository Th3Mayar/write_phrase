import React from 'react';
import Timer from 'react-timer-hook';

function MyTimer({ expiryTimestamp }) {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = Timer.useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

  return (
    <div className='text-right -mt-40 mb-10'>
      <p>Timer Game</p>
      <div className='text-wrap font-mono text-5xl'>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'End Game'}</p>
    </div>
  );
}

const TimerGame = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 90);
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}

export default TimerGame;