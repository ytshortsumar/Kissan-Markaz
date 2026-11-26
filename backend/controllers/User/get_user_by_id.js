import bcrypt from "bcryptjs";
import User from "../../models/User.js";

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error(" User Error:", error);

    return res.status(500).json({
      message: "Something Went Wrong, Please Contact Support",
    });
  }
};
