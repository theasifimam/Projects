import React from "react";
import { Link } from "react-router-dom";
import classes from "./UserDetail.module.css";

const UserDetail = ({ singleUser }) => {
  return (
    <div className={classes.detailContainer}>
      <div className={classes.detailCard}>
        <Link to="/">Back</Link>
        <h1>Detail Information of User</h1>
        <h1>
          <span>Name </span>
          <span>{singleUser.name}</span>
        </h1>
        <h3>
          <span>Username </span>
          <span> {singleUser.username}</span>
        </h3>
        <h3>
          <span>Email </span>
          <span>{singleUser.email}</span>
        </h3>
        <h3>
          <span>City </span>
          <span> {singleUser.city}</span>
        </h3>
        <h3>
          <span>Phone no. </span>
          <span>{singleUser.phone}</span>
        </h3>
        <h3>
          <span>Company name </span>
          <span>{singleUser.company}</span>
        </h3>
        <h3>
          <span>Website </span>
          <span>{singleUser.website}</span>
        </h3>
      </div>
    </div>
  );
};

export default UserDetail;
