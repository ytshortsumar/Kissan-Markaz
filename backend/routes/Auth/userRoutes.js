import express from "express";
import { getUser } from "../../controllers/User/get_User.js";

const router = express.Router();

router.get("/getUser", getUser);

export default router;




