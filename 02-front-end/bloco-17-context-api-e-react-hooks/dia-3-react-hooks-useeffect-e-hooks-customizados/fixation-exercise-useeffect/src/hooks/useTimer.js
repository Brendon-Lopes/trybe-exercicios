import { useState, useEffect } from 'react';

function useTimer() {
  const [number, setNumber] = useState(1);
  const [isMultiple, setIsMultiple] = useState(false);
  const [timer, setTimer] = useState(0);

  const FIVE_SECONDS = 5000;
  const MESSAGE_TIMEOUT = 3000;
  const ONE_SECOND = 1000;

  const verifyMultiple = (randomNumber) => {
    if (randomNumber % 3 === 0 || randomNumber % 5 === 0) {
      setIsMultiple(true);
      setTimeout(setIsMultiple, MESSAGE_TIMEOUT, false);
    }
  }

  const increaseTimerInterval = () => setTimer((timer) => timer + 1);

  useEffect(() => {
    const generateRandomNumber = () => {
      const randomNumber = Math.floor(Math.random() * 100 + 1);
      setNumber(randomNumber);
      verifyMultiple(randomNumber);
    }

    const interval = setInterval(generateRandomNumber, FIVE_SECONDS);
    const setTimerInterval = setInterval(increaseTimerInterval, ONE_SECOND);
    return () => {
      clearInterval(interval);
      clearInterval(setTimerInterval);
    };
  }, []);

  return { number, isMultiple, timer };
}

export default useTimer;