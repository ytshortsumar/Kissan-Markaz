import mongoose from "mongoose";

const auditLogSchema = mongoose.Schema(
  {
    performedBy: {
      type: String,
      required: true,
    },
    action: {
      type: String,
      required: true,
    },
    targetType: {
      type: String,
      required: true,
    },
    targetId: {
      type: String,
    },
    details: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("AuditLog", auditLogSchema);
