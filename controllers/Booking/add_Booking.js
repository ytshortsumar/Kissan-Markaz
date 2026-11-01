import Booking from "../../models/Booking.js";

export const addBooking = async (req, res) => {
  try {
    const farmer = req.body.farmer;
    const owner = req.body.owner;
    const equipment = req.body.equipment;
    const operator = req.body.operator;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const acres = req.body.acres;
    const fieldLocation = req.body.fieldLocation;
    const totalPrice = req.body.totalPrice;

    if (
      !farmer ||
      !owner ||
      !equipment ||
      !startDate ||
      !endDate ||
      !fieldLocation ||
      totalPrice === undefined
    ) {
      return res.status(400).json({
        message:
          "Farmer, owner, equipment, start date, end date, field location, and total price are required",
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

    const bookingCreated = await Booking.create({
      farmer,
      owner,
      equipment,
      operator,
      startDate: parsedStartDate,
      endDate: parsedEndDate,
      acres,
      fieldLocation,
      totalPrice,
    });

    console.log("Booking Created Successfully:", bookingCreated._id);

    return res.status(201).json({
      message: "Booking Created Successfully",
      booking: bookingCreated,
    });
  } catch (error) {
    console.error("Add booking error:", error);

    return res.status(500).json({
      message: "Something Went Wrong, Please Contact Support",
    });
  }
};
