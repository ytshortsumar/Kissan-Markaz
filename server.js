import express from 'express';
import cors  from 'cors';
import dotenv from 'dotenv';

// Load env vars FIRST before any other imports that may use them
dotenv.config();

import connectdb from './config/db.js';
import http, { createServer } from "http";
import url from 'url';
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

app.use(cors({
    origin: [],
    method : ["GET", "POST", "PUT","DELETE"],
    credentials :true
}
));
app.use(express.json());


app.use("/api/auth" , authRoute);
app.use("/api/review" , authReview);
app.use("/api/availability", availabilityRoute);
app.use("/api/booking", bookingRoute);
app.use("/api/payment", paymentRoute);
app.use("/api/operator", operatorRoute);
app.use("/api/notification", notificationRoute);
app.use("/api/maintenance-record", maintenanceRecordRoute);
app.use("/api/audit-log", auditLogRoute);
app.use("/api/equipment", equipmentRoute);
app.use("/api/dispute", disputeRoute);

// Basic routes on the Express app
app.get('/', (req, res) => res.send('Welcome to the Home Page!'));


const server = http.createServer(app); 

var adr = 'http://localhost:8080/default.htm?year=2017&month=february'; 
var q = url.parse(adr, true); 
console.log(q.host); //returns 'localhost:8080' 
console.log(q.pathname); //returns '/default.htm' 
console.log(q.search); //returns '?year=2017&month=february' 
var qdata = q.query; //returns an object: { year: 2017, month: 'february' } 
console.log(qdata.month); //returns 'february' 



connectdb();

console.log("CLAB_11");
console.log("abc");
server.listen(5001, ()=>{
    console.log("server is running on port 5001");
})