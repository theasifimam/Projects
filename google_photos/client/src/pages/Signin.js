import React, { useState } from "react";

const Signin = () => {
  const [values, setValues] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={handleChange}
          value={values.email}
        />

        <input
          type="password"
          name="password"
          id="password"
          value={values.password}
          onChange={handleChange}
        />
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default Signin;
