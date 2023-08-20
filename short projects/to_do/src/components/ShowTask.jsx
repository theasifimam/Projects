import React, { useState } from "react";
import AddTask from "./AddTask";
import Task from "./Task";

const ShowTask = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (value) => {
    const newTaskArray = [...tasks, value];
    setTasks(newTaskArray);
  };

  const removeTask = (index) => {
    const newTaskArray = [...tasks];
    newTaskArray.splice(index, 1);
    setTasks(newTaskArray);
  };

  const checkedTask = (index) => {};

  const updateTask = (value, index) => {
    const newTaskArray = [...tasks];
    newTaskArray.splice(index, 1, value);
    setTasks(newTaskArray);
  };
  return (
    <div>
      <AddTask addTask={addTask} />

      <ul>
        {tasks.map((task, index) => {
          return (
            <Task
              title={task}
              index={index}
              removeTask={removeTask}
              checked={checkedTask}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ShowTask;
