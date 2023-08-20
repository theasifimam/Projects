const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/images", express.static(path.join(__dirname, "images")));

// Connecting to db
mongoose
  .connect("mongodb://0.0.0.0:27017/GooglePhotos", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected!"))
  .catch((err) => console.log(err.message));

app.listen(port, () => {
  console.log(`server started at port : ${port}`);
});
