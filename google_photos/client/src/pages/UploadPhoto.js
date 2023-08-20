import React, { useState } from "react";
import classes from "../styles/uploadImage.module.css";
import { useNavigate } from "react-router-dom";

const UploadPhoto = () => {
  const [values, setValues] = useState({ image: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({ image: e.currentTarget.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("imageUrl", values.image);
    // values.image &&
    const uploadImage = await fetch("http://localhost:4000/image", {
      method: "POST",
      body: formData,
    });
    uploadImage && navigate("/");
    setValues({ image: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.inputField}>
        <input type="file" name="image" id="image" onChange={handleChange} />
        <button type="submit">Upload</button>
      </div>
    </form>
  );
};

export default UploadPhoto;
