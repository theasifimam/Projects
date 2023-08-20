import React, { useEffect, useState } from "react";
import classes from "../styles/home.module.css";

const Home = () => {
  const [imagesList, setImagesList] = useState([]);
  const fetchData = async () => {
    const result = await fetch("http://localhost:4000/image", {
      // Enter your IP address here
      method: "GET",
      // body: JSON.stringify(jsonData),
      // body data type must match "Content-Type" header
    });

    const data = await result.json();
    setImagesList(data.images);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className={classes.home}>
      <ul>
        {imagesList.length == 0
          ? "Loading..."
          : imagesList.map((image) => {
              return (
                <li>
                  <div className={classes.imageBox}>
                    <img src={image.imageUrl} width="300" alt={image.title} />
                  </div>
                </li>
              );
            })}
      </ul>
    </div>
  );
};

export default Home;
