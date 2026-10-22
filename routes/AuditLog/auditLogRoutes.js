import express from "express";
import { addAuditLog } from "../../controllers/AuditLog/add_AuditLog.js";

const router = express.Router();

router.post("/add_audit_log", addAuditLog);

export default router;
