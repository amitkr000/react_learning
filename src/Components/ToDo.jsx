import { useState } from "react";
import styles from "./ToDo.module.css";

function ToDo() {
  const [tasks, setTasks] = useState(["Do Home Work", "Dance", "Sing"]);
  const [newtasks, setNewTaks] = useState("");

  function handleInputChange(e) {
    setNewTaks(e.target.value);
  }

  function AddTask() {
    if (newtasks.trim() !== "") {
      setTasks((t) => [...t, newtasks]);
      setNewTaks("");
    }
  }

  function DeleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }
  return (
    <div className={styles.to_do_container}>
      <div className={styles.to_do_box}>
        <h1>To Do List</h1>
        <div className={styles.add_task}>
          <input
            type="text"
            placeholder="Enter a task"
            value={newtasks}
            onChange={handleInputChange}
          />
          <button onClick={AddTask}>Add</button>
        </div>
        <hr />
        <ol className={styles.to_do_list}>
          {tasks.map((task, index) => (
            <li key={index}>
              <span>{task}</span>
              <button onClick={() => DeleteTask(index)}>delete</button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default ToDo;
