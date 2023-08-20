import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [values, setValues] = useState({ role: "client" });
  let history = useNavigate();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(values);
    if (values.password === values.cpassword) {
      localStorage.setItem("user", JSON.stringify(values));
      history("/login");
    } else {
      alert("Please! Enter correct Information.");
    }
  };

  return (
    <div className="card">
      <h1>Sign up Now</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          id="username"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
        />
        <input
          type="password"
          name="cpassword"
          placeholder="confirm password"
          id="cpassword"
          onChange={handleChange}
        />
        <select name="role" id="role" onChange={handleChange}>
          <option value="client">Client</option>
          <option value="admin">Admin</option>
        </select>
        <div>
          <button className="primary" type="submit">
            submit
          </button>
          <button className="secondary">
            <Link to="/login">login</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
