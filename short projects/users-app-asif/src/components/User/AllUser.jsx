import React from "react";
import UserCard from "./UserCard";
import classes from "./AllUser.module.css";

const AllUser = ({ users, getSingleUser, deleteUser }) => {
  return (
    <div className={classes.allUser}>
      {users.map((user, index) => {
        return (
          <UserCard
            user={user}
            key={index}
            getSingleUser={getSingleUser}
            deleteUser={deleteUser}
          />
        );
      })}
    </div>
  );
};

export default AllUser;
