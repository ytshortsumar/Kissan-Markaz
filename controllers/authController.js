import User from "../models/user.js";

import bcrypt from "bcryptjs";

export const signupUser = async (req, res) =>{
    try{

        const name = req.body.name;
        console.log(name + "name");
        const email = req.body.email;
        console.log(email + "email");
        const password = req.body.password;
        console.log(password + "passwords");

       

        let userExist = await User.findOne({
            email : email
        });

        console.log(JSON.stringify(userExist) + "userexist");

        if(userExist){
            console.log("User already exists");
        }
         console.log("outside the if else");

     

        const hashedpassword = await bcrypt.hash(password, 10);
         console.log(hashedpassword + "hashed passowrds");


      let user_created =  await User.create({
            name : name,
            email : email,
            password : hashedpassword
        });
         console.log(JSON.stringify(user_created) + "user_created");


        res.status(200).json({
            message : "User Created Successfully"
        });


    }
    catch(error){
        console.log(JSON.stringify(error));

        res.status(500).json({
            message : "Something Went Wrong, Please Contact Support"
        });
    }
}