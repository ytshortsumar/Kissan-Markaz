import express from "express";
import { addAvailability } from "../../controllers/Availability/add_Availability.js";

const router = express.Router();

router.post("/add_availability", addAvailability);

export default router;
