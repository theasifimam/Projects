import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [username, setUsername] = useState({});
  let history = useNavigate();
  const handleClick = () => {
    localStorage.removeItem("user");
    history("/login");
  };

  let data = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    setUsername(data);
  }, []);
  return (
    <div className="card">
      <h1>Welcome Mr {username.username}!</h1>
      <p>You are here as an Admin.</p>
      <button onClick={handleClick}>Log out</button>
    </div>
  );
};

export default Admin;
