import express from "express";
import { addNotification } from "../../controllers/Notification/add_Notification.js";

const router = express.Router();

router.post("/add_notification", addNotification);

export default router;
