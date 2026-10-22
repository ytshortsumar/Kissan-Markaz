import express from "express";
import { addBooking } from "../../controllers/Booking/add_Booking.js";

const router = express.Router();

router.post("/add_booking", addBooking);

export default router;
