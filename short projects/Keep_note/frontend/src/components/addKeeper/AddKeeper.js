import React, { useState } from "react";
import "./AddKeeper.css";
import axios from "axios";

const AddKeeper = ({ setKeeperList }) => {
  const [keeperObj, setKeeperObj] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setKeeperObj({ ...keeperObj, [name]: value });
  };

  const add = () => {
    if (keeperObj.title) {
      axios
        .post("http://localhost:3001/api/addNew", keeperObj)
        .then((res) => setKeeperList(res.data));
      setKeeperObj({
        title: "",
        description: "",
      });
    }
  };
  return (
    <div className="addKeeper">
      <input
        type="text"
        name="title"
        autoCapitalize="off"
        className="inputBox titleInput"
        placeholder="Add Title"
        onChange={handleChange}
        value={keeperObj.title}
      />

      <textarea
        name="description"
        className="inputBox description"
        placeholder="Add description here..."
        onChange={handleChange}
        value={keeperObj.description}
      />
      <div className="addButton" onClick={add}>
        Add
      </div>
    </div>
  );
};

export default AddKeeper;
