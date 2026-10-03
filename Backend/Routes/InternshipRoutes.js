const express= require("express");
const router= express.Router();
const Internship= require("../models/Internship");

router.get("/", async (req,res) => {
    try {
        const Internships = await Internship.find();
        res.status(200).json(Internships);
    } catch (error) {
        res.status(404).send("Files not found");
    }
});


module.exports=router; 