import mongoose from "mongoose";

const bookingSchema = mongoose.Schema(
  {
    farmer: {
      type: String,
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
    equipment: {
      type: String,
      required: true,
    },
    operator: {
      type: String,
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
