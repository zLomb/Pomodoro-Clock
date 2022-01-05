function Controls({ session, breaknum, setSession, setBreak, isRunning }) {
    // SESSION //
    const increaseSession = () => {
      if (session < 60 && !isRunning) {
        setSession(session + 1);
      }
    };
    const decreaseSession = () => {
      if (session > 1 && !isRunning) {
        setSession(session - 1);
      }
    };
  
    // BREAK //
    const increaseBreak = () => {
      if (breaknum < 60 && !isRunning) {
        setBreak(breaknum + 1);
      }
    };
    const decreaseBreak = () => {
      if (breaknum > 1 && !isRunning) {
        setBreak(breaknum - 1);
      }
    };
  
    return (
      <div id="controls" className="row justify-content-center">
        <div className="col-4 length">
          <p id="break-label">Break Length</p>
          <button
            className="btn btn-light"
            id="break-increment"
            onClick={() => increaseBreak()}
          >
            ↑
          </button>
          <button
            className="btn btn-light"
            id="break-decrement"
            onClick={() => decreaseBreak()}
          >
            ↓
          </button>
          <p id="break-length">{breaknum}</p>
        </div>
        <div className="col-4 length">
          <p id="session-label">Session Length</p>
          <button
            className="btn btn-light"
            id="session-increment"
            onClick={() => increaseSession()}
          >
            ↑
          </button>
          <button
            className="btn btn-light"
            id="session-decrement"
            onClick={() => decreaseSession()}
          >
            ↓
          </button>
          <p id="session-length">{session}</p>
        </div>
      </div>
    );
  }

export default Controls;