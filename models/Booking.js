import mongoose from "mongoose";

const bookingSchema = mongoose.Schema(
  {
    farmer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    equipment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Equipment",
      required: true,
    },
    operator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Operator",
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    acres: {
      type: Number,
      min: 0,
    },
    fieldLocation: {
      type: String,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
      min: 0,
    },
    status: {
      type: String,
      enum: [
        "pending",
        "accepted",
        "rejected",
        "in_progress",
        "completed",
        "cancelled",
      ],
      default: "pending",
    },
    paymentStatus: {
      type: String,
      enum: ["unpaid", "pending", "paid", "refunded"],
      default: "unpaid",
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Booking", bookingSchema);
