import Equipment from "../../models/Equipment.js";

export const addEquipment = async (req, res) => {
  try {
    const owner = req.body.owner;
    const name = req.body.name;
    const category = req.body.category;
    const brand = req.body.brand;
    const model = req.body.model;
    const description = req.body.description;
    const pricePerHour = req.body.pricePerHour;
    const pricePerAcre = req.body.pricePerAcre;
    const location = req.body.location;
    const images = req.body.images;
    const status = req.body.status;

    if (!owner || !name || !category || !location) {
      return res.status(400).json({
        message: "Owner, name, category, and location are required",
      });
    }

    const equipmentCreated = await Equipment.create({
      owner,
      name,
      category,
      brand,
      model,
      description,
      pricePerHour,
      pricePerAcre,
      location,
      images,
      status,
    });

    return res.status(201).json({
      message: "Equipment Created Successfully",
      equipment: equipmentCreated,
    });
  } catch (error) {
    console.error("Add equipment error:", error);

    return res.status(error.name === "ValidationError" ? 400 : 500).json({
      message:
        error.name === "ValidationError"
          ? error.message
          : "Something Went Wrong, Please Contact Support",
    });
  }
};
