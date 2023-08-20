import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.connect(
  "mongodb://localhost:27017/myAuth",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Database Connected!");
  }
);

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = new mongoose.model("User", UserSchema);

// Routes

//***********************Login Route ******************************
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "Login Successful", user: user });
      } else {
        res.send({ message: "Password Incorrect" });
      }
    } else {
      res.send({ message: "User Not found" });
    }
  });
});

// **************************Register Route **************************
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "User already registered", user });
    } else {
      const user = new User({
        name,
        email,
        password,
      });

      user.save((err) => {
        if (err) {
          console.log(err);
        } else {
          res.send({ message: "Successfully Registered! Please Login Now" });
        }
      });
    }
  });
});

app.listen(9002, () => {
  console.log("Db started at 9002");
});
