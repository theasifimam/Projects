import React from "react";

const Task = ({ title, index, removeTask }) => {
  return (
    <div>
      <li>
        <p> {title}</p>
        <button
          onClick={() => {
            removeTask(index);
          }}
        >
          Done
        </button>
      </li>
    </div>
  );
};

export default Task;
