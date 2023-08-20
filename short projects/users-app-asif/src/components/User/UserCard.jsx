import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./UserCard.module.css";

const UserCard = ({ user, getSingleUser, deleteUser }) => {
  const moreBtnHandler = () => {
    getSingleUser(user.id);
  };
  return (
    <div className={classes.card}>
      <h1>{user.username}</h1>
      <h3>{user.email}</h3>
      <h3>{user.city}</h3>
      <div className={classes.button}>
        <button onClick={moreBtnHandler}>
          <Link to={`/user-detail/${user.id}`}>More</Link>
        </button>
        <button
          onClick={() => {
            deleteUser(user.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
