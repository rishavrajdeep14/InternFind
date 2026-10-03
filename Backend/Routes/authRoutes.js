const express= require("express");
const router= express.Router();
const bcrypt= require("bcrypt");
const User= require("../models/User");

router.post("/signup", async (req,res) =>{
    try {
    const { username,email,mobile,password} = req.body;
    const existingEmail =await User.findOne({email});
    if(existingEmail){
       return res.status(500).send("Email already exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user=new User ({
        username,
        email,
        mobile,
        password : hashedPassword
    });
    await user.save();
    res.status(200).send("User registered successfully");
    } catch (error) {
        res.status(500).send("Registration failed"); 
    }
   
});




module.exports=router; 