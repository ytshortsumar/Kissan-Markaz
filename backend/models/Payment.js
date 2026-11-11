import mongoose from "mongoose";

const paymentSchema = mongoose.Schema(
  {
    booking: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
      required: true,
    },
    payer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
      min: 0,
    },
    method: {
      type: String,
      enum: ["cash", "jazzcash", "easypaisa", "bank_transfer"],
      default: "cash",
    },
    transactionId: String,
    status: {
      type: String,
      enum: ["pending", "completed", "failed", "refunded"],
      default: "pending",
    },
    paidAt: Date,
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Payment", paymentSchema);
