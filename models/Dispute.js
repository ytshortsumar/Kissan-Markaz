import mongoose from "mongoose";

const disputeSchema = mongoose.Schema(
  {
    booking: {
      type: String,
      required: true,
    },
    raisedBy: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["open", "under_review", "resolved", "rejected"],
      default: "open",
    },
    resolution: String,
    resolvedBy: {
      type: String,
      ref: "User",
    },
    resolvedAt: Date,
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Dispute", disputeSchema);
