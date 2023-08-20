import React, { useState } from "react";
import "./style.css";

const AddTasks = ({ addTask }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;

    addTask(value);
    setValue("");
  };
  return (
    <div className="addTasks">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          placeholder="Add a task"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          maxLength="35"
        />
      </form>
    </div>
  );
};

export default AddTasks;
