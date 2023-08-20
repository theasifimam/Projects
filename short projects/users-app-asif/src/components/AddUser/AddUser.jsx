import React, { useEffect, useState } from "react";
import classes from "./AddUser.module.css";

const AddUser = ({ getAddUserValue }) => {
  const [userInput, setUserInput] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    city: "",
    company: "",
    website: "",
  });
  const [error, setError] = useState(true);

  const onChangeHandler = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  // Error Handling for null values
  useEffect(() => {
    if (
      userInput.name &&
      userInput.username &&
      userInput.email &&
      userInput.phone &&
      userInput.city &&
      userInput.company &&
      userInput.website
    ) {
      setError(false);
    }
  }, [userInput]);

  // Submitting form data and sending to App component using state lifting up
  const submitHandler = (e) => {
    e.preventDefault();
    getAddUserValue(userInput);
  };

  return (
    <div className={classes.formContainer}>
      <form onSubmit={submitHandler}>
        <h1>Add User</h1>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          onChange={onChangeHandler}
        />
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter your username"
          onChange={onChangeHandler}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          onChange={onChangeHandler}
        />
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Enter your city"
          onChange={onChangeHandler}
        />
        <input
          type="number"
          name="phone"
          id="phone"
          placeholder="Enter your phone number"
          onChange={onChangeHandler}
        />
        <input
          type="text"
          name="company"
          id="company"
          placeholder="Enter your company name"
          onChange={onChangeHandler}
        />
        <input
          type="url"
          name="website"
          id="website"
          placeholder="Enter website of your company"
          onChange={onChangeHandler}
        />
        <button disabled={error}>Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
