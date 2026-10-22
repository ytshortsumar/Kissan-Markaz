import MaintenanceRecord from "../../models/MaintenanceRecord.js";

export const addMaintenanceRecord = async (req, res) => {
  try {
    const equipment = req.body.equipment;
    const description = req.body.description;
    const maintenanceDate = req.body.maintenanceDate;
    const cost = req.body.cost;
    const performedBy = req.body.performedBy;
    const nextMaintenanceDate = req.body.nextMaintenanceDate;

    if (!equipment || !description || !maintenanceDate) {
      return res.status(400).json({
        message: "Equipment, description, and maintenance date are required",
      });
    }

    const parsedMaintenanceDate = new Date(maintenanceDate);
    const parsedNextMaintenanceDate = nextMaintenanceDate
      ? new Date(nextMaintenanceDate)
      : undefined;

    if (
      Number.isNaN(parsedMaintenanceDate.getTime()) ||
      (parsedNextMaintenanceDate &&
        Number.isNaN(parsedNextMaintenanceDate.getTime()))
    ) {
      return res.status(400).json({
        message: "Please provide valid maintenance dates",
      });
    }

    const maintenanceRecordCreated = await MaintenanceRecord.create({
      equipment,
      description,
      maintenanceDate: parsedMaintenanceDate,
      cost,
      performedBy,
      nextMaintenanceDate: parsedNextMaintenanceDate,
    });

    return res.status(201).json({
      message: "Maintenance Record Created Successfully",
      maintenanceRecord: maintenanceRecordCreated,
    });
  } catch (error) {
    console.error("Add maintenance record error:", error);

    return res.status(error.name === "ValidationError" ? 400 : 500).json({
      message:
        error.name === "ValidationError"
          ? error.message
          : "Something Went Wrong, Please Contact Support",
    });
  }
};