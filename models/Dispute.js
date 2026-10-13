import mongoose from "mongoose";

const disputeSchema = mongoose.Schema(
  {
    booking: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
      required: true,
    },
    raisedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
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
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    resolvedAt: Date,
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Dispute", disputeSchema);
