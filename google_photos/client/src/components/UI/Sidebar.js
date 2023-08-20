import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../../styles/sidebar.module.css";

const Sidebar = (props) => {
  const activeClass = ({ isActive }) =>
    isActive ? classes.active : classes.inactive;
  return (
    <div className={classes.sidebarContainer}>
      <nav className={classes.sidebar}>
        <NavLink exact to="/" className={activeClass}>
          Home
        </NavLink>
        <NavLink to="/explore" className={activeClass}>
          Explore
        </NavLink>
        <NavLink to="/sharing" className={activeClass}>
          Sharing
        </NavLink>
      </nav>
      <div className={classes.contentContainer}>{props.children}</div>
    </div>
  );
};

export default Sidebar;
