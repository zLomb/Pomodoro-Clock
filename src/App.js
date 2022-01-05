import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState, useRef } from "react";
import Controls from './Controls.js';
import Timer from './Timer.js';

export default function App() {
  const [session, setSession] = useState(25);
  const [breaknum, setBreak] = useState(5);
  const [timerType, setType] = useState("session");
  const [isRunning, setRunning] = useState(false);
  const [timerStarted, setTimerState] = useState(false);
  const [timer, setTimer] = useState(1500);

  const convertTime = (secs) => {
    let minutes = Math.floor((secs % 3600) / 60);
    let tseconds = Math.floor((secs % 3600) % 60);
    if (secs === 3600) {
      tseconds = 0;
      minutes = 60;
    }
    if (tseconds < 10) {
      tseconds = "0" + tseconds;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return minutes + ":" + tseconds;
  };

  const [timerDisplay, setDisplay] = useState(convertTime(timer));

  const beep = useRef();
  beep.current = document.getElementById("beep");
  let countdown = null;

  const startStop = () => {
    if (!isRunning) {
      setTimerState(true);
    }
    setRunning(!isRunning);
  };

  const reset = () => {
    setSession(25);
    setBreak(5);
    setTimer(1500);
    setTimerState(false);
    setType("session");
    setRunning(false);
    setDisplay("25:00");
    beep.current.load();
  };

  return (
    <div className="App d-flex align-items-center">
      <main className="container">
        <Controls
          session={session}
          breaknum={breaknum}
          setSession={setSession}
          setBreak={setBreak}
          isRunning={isRunning}
        />

        <div id="buttons">
          <button className="btn" id="start_stop" onClick={() => startStop()}>
            <span>►</span>
          </button>
          <button className="btn" id="reset" onClick={() => reset()}>
            <span>↻</span>
          </button>
        </div>

        <div>
          <audio
            preload="auto"
            id="beep"
            src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
          />
          <Timer
            session={session}
            breaknum={breaknum}
            timer={timer}
            setTimer={setTimer}
            isRunning={isRunning}
            timerStarted={timerStarted}
            timerType={timerType}
            setType={setType}
            countdown={countdown}
            timerDisplay={timerDisplay}
            setDisplay={setDisplay}
            convertTime={convertTime}
            beep={beep}
          />
        </div>
      </main>
    </div>
  );
}
