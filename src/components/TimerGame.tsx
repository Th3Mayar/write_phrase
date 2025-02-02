import React, { useState, useEffect } from "react";
import "../styles/TimerGame.css";

type TimerGameProps = {
  completedWords: number;
  onPhraseComplete?: () => void;
};

const useTimer = (initialTime: number, onTimeUpdate: (time: number) => void) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (timeLeft <= 0) {
      setIsRunning(false);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => {
        onTimeUpdate(prev - 1);
        return prev - 1;
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, onTimeUpdate]);

  return { timeLeft, isRunning };
};

const MyTimer = ({
  initialTime,
  onTimerFinish,
  onTimeUpdate,
}: {
  initialTime: number;
  onTimerFinish: () => void;
  onTimeUpdate: (time: number) => void;
}) => {
  const { timeLeft, isRunning } = useTimer(initialTime, onTimeUpdate);

  useEffect(() => {
    if (!isRunning) {
      onTimerFinish();
    }
  }, [isRunning, onTimerFinish]);

  // Define the color of the timer based on the time left.
  // > 60: white (normal) | > 30: yellow (warning) | <= 30: red (danger)
  const timeColorClass =
    timeLeft > 60 ? "white" : timeLeft > 30 ? "yellow" : "red";

  return (
    <div className="timer">
      <p className="timer-label">Time Left</p>
      <p className={`timer-time ${timeColorClass}`}>{timeLeft}s</p>
    </div>
  );
};

const TimerGame = ({ completedWords, onPhraseComplete }: TimerGameProps) => {
  const initialTime = 90;
  const [showModal, setShowModal] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [timeBonus, setTimeBonus] = useState(initialTime);

  const handleTimerFinish = () => {
    setFinalScore(completedWords);
    setShowModal(true);
    if (onPhraseComplete) {
      onPhraseComplete();
    }
  };

  const handleTimeUpdate = (remainingTime: number) => {
    // If the player completes 5 words, give them a 10s bonus
    if (completedWords > 0 && completedWords % 5 === 0) {
      setTimeBonus(remainingTime + 10);
    }
  };

  const handleClose = () => {
    setShowModal(false);
    window.location.href = "/";
  };

  return (
    <div>
      <MyTimer
        initialTime={timeBonus}
        onTimerFinish={handleTimerFinish}
        onTimeUpdate={handleTimeUpdate}
      />
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="modal-title">
              {finalScore >= 20 ? "You Win! 🎉" : "You Lose! 😢"}
            </h2>
            <p className="modal-text">Completed phrases: {finalScore}</p>
            <button onClick={handleClose} className="modal-button">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimerGame;