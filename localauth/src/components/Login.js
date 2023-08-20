import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState();
  let history = useNavigate();

  // Getting values from inputs
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // handle Submit then route accordingly
  const handleSubmit = (e) => {
    let localUserData = JSON.parse(localStorage.getItem("user"));
    e.preventDefault();

    if (localUserData) {
      if (
        values.username === localUserData.username &&
        values.password === localUserData.password &&
        localUserData.role === "admin"
      ) {
        history("/admin");
      } else if (
        values &&
        values.username === localUserData.username &&
        values.password === localUserData.password &&
        localUserData.role === "client"
      ) {
        history("/client");
      }
    } else {
      alert(
        "Please! Fill Correct Login Credentials or Register yourself first!"
      );
    }
  };

  return (
    <div className="card">
      <h1>Login Now</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          onChange={handleChange}
        />
        <div>
          <button className="primary" type="submit">
            login
          </button>
          <button className="secondary">
            <Link to="/">Sign up</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
