import express from "express";
import { addMaintenanceRecord } from "../../controllers/MaintenanceRecord/add_MaintenanceRecord.js";

const router = express.Router();

router.post("/add_maintenance_record", addMaintenanceRecord);

export default router;
