import AuditLog from "../../models/AuditLog.js";

export const addAuditLog = async (req, res) => {
  try {
    const performedBy = req.body.performedBy;
    const action = req.body.action;
    const targetType = req.body.targetType;
    const targetId = req.body.targetId;
    const details = req.body.details;

    if (!performedBy || !action || !targetType) {
      return res.status(400).json({
        message: "Performed by, action, and target type are required",
      });
    }

    const auditLogCreated = await AuditLog.create({
      performedBy,
      action,
      targetType,
      targetId,
      details,
    });

    return res.status(201).json({
      message: "Audit Log Created Successfully",
      auditLog: auditLogCreated,
    });
  } catch (error) {
    console.error("Add audit log error:", error);

    return res.status(error.name === "ValidationError" ? 400 : 500).json({
      message:
        error.name === "ValidationError"
          ? error.message
          : "Something Went Wrong, Please Contact Support",
    });
  }
};
