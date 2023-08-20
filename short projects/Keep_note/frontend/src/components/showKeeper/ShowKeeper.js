import React from "react";
import "./ShowKeeper.css";
import axios from "axios";

const ShowKeeper = ({ keeperList, setKeeperList }) => {
  const deleteKeeper = (id) => {
    axios
      .post("http://localhost:3001/api/delete", { id })
      .then((res) => setKeeperList(res.data));
  };
  return (
    <div className="showKeeper row">
      {keeperList.map((keeper) => (
        <div className="keeperCard" key={keeper._id}>
          <h1 className="title">
            {keeper.title}
            <i
              className="deleteIcon fa fa-trash"
              aria-hidden="true"
              onClick={() => deleteKeeper(keeper._id)}
            ></i>
          </h1>
          <textarea
            value={keeper.description}
            className="descriptionBox"
            readOnly
          ></textarea>
        </div>
      ))}
    </div>
  );
};

export default ShowKeeper;
