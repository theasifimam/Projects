import { signin, signout, signup } from "../controllers/auth/authController";

const express = require("express");

const router = express.Router();

router.post("/register", signup);
router.post("/login", signin);
router.get("/signin", signout);
export default router;
