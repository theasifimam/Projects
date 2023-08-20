import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Client = () => {
  let history = useNavigate();
  const [username, setUsername] = useState({});

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
      <p>You are here as a Client!</p>
      <button onClick={handleClick}>Log out</button>
    </div>
  );
};

export default Client;
