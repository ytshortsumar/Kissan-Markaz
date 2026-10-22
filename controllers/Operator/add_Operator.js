import Operator from "../../models/Operator.js";

export const addOperator = async (req, res) => {
  try {
    const user = req.body.user;
    const skills = req.body.skills;
    const experienceYears = req.body.experienceYears;
    const pricePerHour = req.body.pricePerHour;
    const pricePerAcre = req.body.pricePerAcre;
    const serviceArea = req.body.serviceArea;
    const isAvailable = req.body.isAvailable;

    if (!user || !serviceArea) {
      return res.status(400).json({
        message: "User and service area are required",
      });
    }

    const operatorCreated = await Operator.create({
      user,
      skills,
      experienceYears,
      pricePerHour,
      pricePerAcre,
      serviceArea,
      isAvailable,
    });

    return res.status(201).json({
      message: "Operator Created Successfully",
      operator: operatorCreated,
    });
  } catch (error) {
    console.error("Add operator error:", error);

    if (error.code === 11000) {
      return res.status(409).json({
        message: "An operator profile already exists for this user",
      });
    }

    return res.status(error.name === "ValidationError" ? 400 : 500).json({
      message:
        error.name === "ValidationError"
          ? error.message
          : "Something Went Wrong, Please Contact Support",
    });
  }
};