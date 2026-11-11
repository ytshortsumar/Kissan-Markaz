import mongoose from "mongoose";

const operatorSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    skills: [
      {
        type: String,
      },
    ],
    experienceYears: {
      type: Number,
      min: 0,
      default: 0,
    },
    pricePerHour: {
      type: Number,
      min: 0,
    },
    pricePerAcre: {
      type: Number,
      min: 0,
    },
    serviceArea: {
      type: String,
      required: true,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Operator", operatorSchema);
