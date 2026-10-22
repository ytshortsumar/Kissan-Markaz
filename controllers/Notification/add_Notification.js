import Notification from "../../models/Notification.js";

export const addNotification = async (req, res) => {
  try {
    const user = req.body.user;
    const title = req.body.title;
    const message = req.body.message;
    const type = req.body.type;
    const isRead = req.body.isRead;

    if (!user || !title || !message) {
      return res.status(400).json({
        message: "User, title, and message are required",
      });
    }

    const notificationCreated = await Notification.create({
      user,
      title,
      message,
      type,
      isRead,
    });

    return res.status(201).json({
      message: "Notification Created Successfully",
      notification: notificationCreated,
    });
  } catch (error) {
    console.error("Add notification error:", error);

    return res.status(error.name === "ValidationError" ? 400 : 500).json({
      message:
        error.name === "ValidationError"
          ? error.message
          : "Something Went Wrong, Please Contact Support",
    });
  }
};