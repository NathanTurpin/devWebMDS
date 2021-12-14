import { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

import "../style/Tasks.css";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    loadTasks();
  }, []);
  useEffect(() => {
    document.title = tasks.length;
  }, [tasks]);
  function loadTasks() {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      console.log(res.data);
      setTasks(res.data);
    });
  }
  function handleTitle(event) {
    // console.log(event.target.value);
    setTitle(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log("J'ai soumis le formulaire");

    const newTask = {
      userId: 1,
      id: uuidv4(),
      title: title,
      completed: false,
    };
    console.log(newTask);

    setTasks([...tasks, newTask]);
  }
  function handleRemove(id) {
    const newTasks = tasks.filter((item) => item.id !== id);

    setTasks(newTasks);
  }
  function handleChangeChk(id) {
    const newTasks = [...tasks];
    const index = newTasks.findIndex((task) => task.id === id);
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  }
  return (
    <div className="tasks">
      <button className="btn btn-dark" onClick={loadTasks}>
        Charger mes utilisateurs depuis une API
      </button>

      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={handleTitle} />
        <button type="submit">ok</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className={task.completed ? "task task-completed" : "task"}
          >
            <p>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleChangeChk(task.id)}
              />

              {task.title}
              <button type="button" onClick={() => handleRemove(task.id)}>
                Remove
              </button>
              <Link to="#">Voir</Link>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
