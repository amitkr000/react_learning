import { useEffect, useState } from "react";
import styles from "./DigitalClock.module.css";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const Intervalid = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(Intervalid);
    };
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridien = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${padzero(hours)}:${padzero(minutes)}:${padzero(
      seconds
    )} ${meridien}`;
  }

  function padzero(num) {
    return (num < 10 ? "0" : "") + num;
  }
  return (
    <div className={styles.digital_clock_container}>
      <div className={styles.digital_clock_box}>
        <h1 className={styles.title}>Digital Clock</h1>
        <hr />
        <h2>{formatTime()}</h2>
      </div>
    </div>
  );
}

export default DigitalClock;
