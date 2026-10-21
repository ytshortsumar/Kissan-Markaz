import mongoose from "mongoose";

const equipmentSchema = mongoose.Schema(
  {
    owner: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      enum: [
        "tractor",
        "harvester",
        "seeder",
        "sprayer",
        "water_pump",
        "other",
      ],
      required: true,
    },
    brand: String,
    model: String,
    description: String,
    pricePerHour: {
      type: Number,
      min: 0,
    },
    pricePerAcre: {
      type: Number,
      min: 0,
    },
    location: {
      type: String,
      required: true,
    },
    images: [String],
    status: {
      type: String,
      enum: ["available", "booked", "maintenance", "inactive"],
      default: "available",
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Equipment", equipmentSchema);
