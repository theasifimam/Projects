import React, { useState } from "react";

const AddTask = ({ addTask }) => {
  const [value, setValue] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    addTask(value);
    setValue("");
  };

  return (
    <div>
      <form onSubmit={SubmitHandler}>
        <input
          placeholder="Enter you task..."
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </div>
  );
};

export default AddTask;
