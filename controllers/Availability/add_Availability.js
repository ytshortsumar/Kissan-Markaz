import Availability from "../../models/Availability.js";

export const addAvailability = async (req, res) => {
  try {
    const equipment = req.body.equipment;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const isAvailable = req.body.isAvailable;

    if (!equipment || !startDate || !endDate) {
      return res.status(400).json({
        message: "Equipment, start date, and end date are required",
      });
    }

    const parsedStartDate = new Date(startDate);
    const parsedEndDate = new Date(endDate);

    if (
      Number.isNaN(parsedStartDate.getTime()) ||
      Number.isNaN(parsedEndDate.getTime()) ||
      parsedEndDate <= parsedStartDate
    ) {
      return res.status(400).json({
        message: "Please provide a valid date range",
      });
    }

    if (isAvailable !== undefined && typeof isAvailable !== "boolean") {
      return res.status(400).json({
        message: "isAvailable must be a boolean",
      });
    }

    const availabilityCreated = await Availability.create({
      equipment,
      startDate: parsedStartDate,
      endDate: parsedEndDate,
      isAvailable,
    });

    console.log("Availability Created Successfully:", availabilityCreated._id);

    return res.status(201).json({
      message: "Availability Created Successfully",
      availability: availabilityCreated,
    });
  } catch (error) {
    console.error("Add availability error:", error);

    return res.status(500).json({
      message: "Something Went Wrong, Please Contact Support",
    });
  }
};