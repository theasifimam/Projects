import React, { useState } from "react";

const Signup = () => {
  const [values, setValues] = useState({
    fname: "",
    lname: "",
    mnumber: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    values.password === values.cpassword
      ? console.log(values)
      : window.alert("Password and confirm password should be same.");

    const response = await fetch("http://localhost:4000/signup", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(values),
    });

    const result = await response.json();
    console.log(result);
  };
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fname"
          id="fname"
          placeholder="First name"
          onChange={handleChange}
          value={values.fname}
        />
        <input
          type="text"
          name="lname"
          id="lname"
          placeholder="Last name"
          onChange={handleChange}
          value={values.lname}
        />
        <input
          type="text"
          name="mnumber"
          id="mnumber"
          placeholder="Mobile number"
          onChange={handleChange}
          value={values.mnumber}
        />
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

        <input
          type="password"
          name="cpassword"
          id="cpassword"
          value={values.cpassword}
          onChange={handleChange}
        />
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default Signup;
