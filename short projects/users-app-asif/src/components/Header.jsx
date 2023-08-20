import React from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            AppBy<span>Asif.</span>
          </Link>
        </li>
        <li>
          <NavLink to="/">All User</NavLink>
        </li>

        <li>
          <NavLink to="/add-user">Add New User</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
