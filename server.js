import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Load env vars FIRST before any other imports that may use them
dotenv.config();

import connectdb from "./config/db.js";
import http, { createServer } from "http";
import authRoute from "./routes/Auth/authRoutes.js";
import authReview from "./routes/Review/Review.js";
import availabilityRoute from "./routes/Availability/availabilityRoutes.js";
import bookingRoute from "./routes/Booking/bookingRoutes.js";
import paymentRoute from "./routes/Payment/paymentRoutes.js";
import operatorRoute from "./routes/Operator/operatorRoutes.js";
import notificationRoute from "./routes/Notification/notificationRoutes.js";
import maintenanceRecordRoute from "./routes/MaintenanceRecord/maintenanceRecordRoutes.js";
import auditLogRoute from "./routes/AuditLog/auditLogRoutes.js";
import equipmentRoute from "./routes/Equipment/equipmentRoutes.js";
import disputeRoute from "./routes/Dispute/disputeRoutes.js";

const app = express();

app.use(
  cors({
    origin: [],
    method: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);
app.use(express.json());

// app.use((req,res,next)=>{
//     console.log("hello from middleware");
//     next();
// }) //in order to use middleware we use  app.use ..expression.json() is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser. This middleware is available in Express v4.16.0 onwards.

app.use("/api/auth", authRoute);
app.use("/api/review", authReview);
app.use("/api/availability", availabilityRoute);
app.use("/api/booking", bookingRoute);
app.use("/api/payment", paymentRoute);
app.use("/api/operator", operatorRoute);
app.use("/api/notification", notificationRoute);
app.use("/api/maintenance-record", maintenanceRecordRoute);
app.use("/api/audit-log", auditLogRoute);
app.use("/api/equipment", equipmentRoute);
app.use("/api/dispute", disputeRoute);

// very basic method
app.get("/", (req, res) => res.status(200).send("Welcome to the Home Page!"));

const server = http.createServer(app);

connectdb();

server.listen(5001, () => {
  console.log("server is running on port 5001");
});
