import bcrypt from "bcryptjs";
import User from "../../models/user.js";

export const getUser = async (req, res) => {
  try {

    const page=req.query.page || 1;
    const limit =req.query.limit || 2;

    let skip=(page-1)*limit;

    let Totalusers = await User.countDocuments();
    let user = await User.find().select("name").skip(skip).limit(limit).sort({ createdAt:-1});

    let totalpages = Math.ceil(Totalusers /limit);

    res.json({
        current_page:page,
        total_pages:totalpages,
        total_users:Totalusers,
        limit:limit,
        users:user
    })

    



  }catch (error) {
    console.error("Signup error:", error);

    return res.status(500).json({
      message: "Something Went Wrong, Please Contact Support",
    });
  }
};
