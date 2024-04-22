import React, { useEffect, useState } from "react";

function Timer() {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(false);
  useEffect(() => {
    let timero = null;
    if (timer) {
      console.log("timer", timer);
      timero = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 100);
    }
    return () => {
      clearInterval(timero);
    };
  }, [timer]);
  const onHandleStart = () => {
    setTimer(true);
  };
  const onHandleStop = () => {
    setTimer(false);
    setCount(0);
  };
  const onHandlePause = () => {
    setTimer(false);
  };
  return (
    <>
      <button onClick={onHandleStart}>Start</button>
      <button onClick={onHandleStop}>Stop</button>
      <button onClick={onHandlePause}>Pause</button>
      <div>{count}</div>
    </>
  );
}

export default Timer;
