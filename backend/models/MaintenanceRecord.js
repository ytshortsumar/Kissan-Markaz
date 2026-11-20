import mongoose from "mongoose";

const maintenanceRecordSchema = mongoose.Schema(
  {
    equipment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Equipment",
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    maintenanceDate: {
      type: Date,
      required: true,
    },
    cost: {
      type: Number,
      min: 0,
      default: 0,
    },
    performedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    nextMaintenanceDate: Date,
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("MaintenanceRecord", maintenanceRecordSchema);
