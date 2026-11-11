import express from "express";
import { addDispute } from "../../controllers/Dispute/add_Dispute.js";

const router = express.Router();

router.post("/add_dispute", addDispute);

export default router;
