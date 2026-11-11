import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    booking: {
      type: String,
      required: true,
    },
    reviewer: {
      type: String,
      required: true,
    },
    reviewee: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Review", reviewSchema);
