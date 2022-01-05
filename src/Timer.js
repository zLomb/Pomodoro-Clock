import { useEffect } from 'react';

function Timer({
    session,
    breaknum,
    timer,
    setTimer,
    isRunning,
    timerStarted,
    timerType,
    setType,
    countdown,
    timerDisplay,
    setDisplay,
    convertTime,
    beep
  }) {
    const checkPhase = () => {
      if (timer === -1 && timerType === "session") {
        setType("break");
        setTimer(breaknum * 60);
      } else if (timer === -1 && timerType === "break") {
        setType("session");
        setTimer(session * 60);
      }
    };
  
    useEffect(() => {
      if (isRunning) {
        countdown = timer >= -1 && setInterval(() => setTimer(timer - 1), 1000);
      }
      return () => clearInterval(countdown);
    }, [isRunning, timer]);
  
    useEffect(() => {
      if (timerType === "session") {
        setTimer(session * 60);
      }
    }, [session]);
  
    useEffect(() => {
      if (timerType === "break") {
        setTimer(breaknum * 60);
      }
    }, [breaknum]);
  
    useEffect(() => {
      checkPhase();
      setDisplay(convertTime(timer));
    }, [timer]);
  
    useEffect(() => {
      if (timerDisplay === "00:00") {
        beep.current.play();
      }
    }, [timer]);
  
    return (
      <div>
        <p id="time-left">{timerDisplay}</p>
        <p id="timer-label">{timerType}</p>
      </div>
    );
  }

export default Timer;