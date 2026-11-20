import express from "express";
import { addOperator } from "../../controllers/Operator/add_Operator.js";

const router = express.Router();

router.post("/add_operator", addOperator);

export default router;
