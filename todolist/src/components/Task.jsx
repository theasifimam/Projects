import React from "react";

const Task = ({ task, index, completeTask, removeTask }) => {
  return (
    <div
      className="task"
      style={{ textDecoration: task.completed ? "line-through" : "" }}
    >
      <p>{task.title}</p>
      <div className="buttons">
        <button onClick={() => completeTask(index)}>
          <i className="fa-regular fa-circle-check"></i>
        </button>
        <button onClick={() => removeTask(index)}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default Task;
