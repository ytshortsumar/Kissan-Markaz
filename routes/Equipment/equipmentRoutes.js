import express from "express";
import { addEquipment } from "../../controllers/Equipment/add_Equipment.js";

const router = express.Router();

router.post("/add_equipment", addEquipment);

export default router;
