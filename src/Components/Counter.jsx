import styles from "./Counter.module.css";
import React, { useState } from "react";

function Counter() {
  // Using useState to change the virtual DOM
  let [count, SetCount] = useState(0);

  const decrement = () => {
    SetCount((c) => c - 1);
  };
  const reset = () => {
    SetCount((c) => (c = 0));
  };
  const increment = () => {
    SetCount((c) => c + 1);
  };
  return (
    <div className={styles.counter_container}>
      <div>
        <h1 className={styles.count}>{count}</h1>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
        <button onClick={increment}>increment</button>
      </div>
    </div>
  );
}

export default Counter;
