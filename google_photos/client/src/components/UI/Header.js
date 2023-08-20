import React from "react";
import classes from "../../styles/header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={classes.header}>
      <ul>
        <li>
          <span
            style={{
              fontWeight: "bolder",
              fontSize: "24px",
            }}
          >
            Google
          </span>{" "}
          Photos
        </li>
        <li>
          <div className={classes.inputField}>
            <input
              type="search"
              placeholder="Search"
              name="search"
              id="search"
            />
          </div>
        </li>
        <li>
          <Link to="/upload-image">
            <button>Import</button>
          </Link>
        </li>
        <li>Profile</li>
      </ul>
    </header>
  );
};

export default Header;
