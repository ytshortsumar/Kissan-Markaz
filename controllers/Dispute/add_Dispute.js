import Dispute from "../../models/Dispute.js";

export const addDispute = async (req, res) => {
  try {
    const booking = req.body.booking;
    const raisedBy = req.body.raisedBy;
    const description = req.body.description;
    const status = req.body.status;
    const resolution = req.body.resolution;
    const resolvedBy = req.body.resolvedBy;
    const resolvedAt = req.body.resolvedAt;

    if (!booking || !raisedBy || !description) {
      return res.status(400).json({
        message: "Booking, raised by, and description are required",
      });
    }

    const parsedResolvedAt = resolvedAt ? new Date(resolvedAt) : undefined;

    if (parsedResolvedAt && Number.isNaN(parsedResolvedAt.getTime())) {
      return res.status(400).json({
        message: "Please provide a valid resolved date",
      });
    }

    const disputeCreated = await Dispute.create({
      booking,
      raisedBy,
      description,
      status,
      resolution,
      resolvedBy,
      resolvedAt: parsedResolvedAt,
    });

    return res.status(201).json({
      message: "Dispute Created Successfully",
      dispute: disputeCreated,
    });
  } catch (error) {
    console.error("Add dispute error:", error);

    return res.status(error.name === "ValidationError" ? 400 : 500).json({
      message:
        error.name === "ValidationError"
          ? error.message
          : "Something Went Wrong, Please Contact Support",
    });
  }
};