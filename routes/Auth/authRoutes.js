import express from "express";
import { signupUser } from "../../controllers/User/add_User.js";

const router = express.Router();

router.post("/signup", signupUser);

export default router;