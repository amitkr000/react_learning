import { useState } from "react";
import styles from "./StopWatch.module.css";
import { useRef } from "react";
import { useEffect } from "react";

function StopWatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setelapsedTime] = useState(0);
  const intervalRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setelapsedTime(Date.now() - startTimeRef.current);
      }, 10);
      console.log(elapsedTime);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  function start() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
    console.log(startTimeRef.current);
  }

  function stop() {
    setIsRunning(false);
  }

  function reset() {
    setelapsedTime(0);
    setIsRunning(false);
  }

  function format() {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10); //divide by 10 to display only two digit of milliseconds

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");
    return `${minutes}:${seconds}:${milliseconds}`;
  }

  return (
    <div className={styles.stop_watch_container}>
      <div className={styles.stop_watch_box}>
        <h1>StopWatch</h1>
        <hr />
        <h2>{format()}</h2>
        <div className={styles.button}>
          <button onClick={stop} className={styles.stop}>
            Stop
          </button>
          <button onClick={reset} className={styles.reset}>
            Reset
          </button>
          <button onClick={start} className={styles.start}>
            Start
          </button>
        </div>
      </div>
    </div>
  );
}

export default StopWatch;
