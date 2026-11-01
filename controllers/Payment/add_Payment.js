import Payment from "../../models/Payment.js";

export const addPayment = async (req, res) => {
  try {
    const booking = req.body.booking;
    const payer = req.body.payer;
    const amount = req.body.amount;
    const method = req.body.method;
    const transactionId = req.body.transactionId;
    const status = req.body.status;
    const paidAt = req.body.paidAt;

    if (!booking || !payer || amount === undefined) {
      return res.status(400).json({
        message: "Booking, payer, and amount are required",
      });
    }

    const paymentCreated = await Payment.create({
      booking,
      payer,
      amount,
      method,
      transactionId,
      status,
      paidAt,
    });

    return res.status(201).json({
      message: "Payment Created Successfully",
      payment: paymentCreated,
    });
  } catch (error) {
    console.error("Add payment error:", error);

    return res.status(error.name === "ValidationError" ? 400 : 500).json({
      message:
        error.name === "ValidationError"
          ? error.message
          : "Something Went Wrong, Please Contact Support",
    });
  }
};
