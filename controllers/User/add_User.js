import bcrypt from "bcryptjs";
import User from "../../models/user.js";

export const signupUser = async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const phone = req.body.phone;
    const role = req.body.role || "farmer";
    const address = req.body.address;
    const location = req.body.location;

    if (!["farmer", "owner", "operator"].includes(role)) {
      return res.status(400).json({
        message: "Invalid role",
      });
    }

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(409).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const userCreated = await User.create({
      name,
      email,
      password: hashedPassword,
      phone,
      role,
      address,
      location,
      isVerified: false,
    });

    console.log("User Created Successfully:", userCreated._id);

    return res.status(200).json({
      message: "User Created Successfully",
    });
  } catch (error) {
    console.error("Signup error:", error);

    return res.status(500).json({
      message: "Something Went Wrong, Please Contact Support",
    });
  }
};
