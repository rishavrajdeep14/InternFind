const express= require("express");
const router= express.Router();
const Application= require("../models/Application");
const Internship = require("../models/Internship");
console.log(Internship.collection.name);
console.log("DATABASE:", Internship.db.name);
console.log("COLLECTION:", Internship.collection.name);
Internship.findById("6a9e5499d8d5e12675c0b5d0")
    .then((data) => console.log("INTERNSHIP TEST:", data))
    .catch((error) => console.log("ERROR:", error));
const authMiddleware = require("../Middleware/authMiddleware"); 

router.post("/applications", authMiddleware, async (req,res) => {
    try {
        const application= await Application.create({
            userId: req.user.userId,
            internshipId: req.body.internshipId
        })
        res.status(200).json(application);
    } catch (error) {
        console.log(error);
    }
})

router.get("/applications", authMiddleware, async (req, res) => {
    try {
        const got_applications = await Application.find({
            userId: req.user.userId
        }).populate("internshipId");

        console.log(got_applications);
        res.status(200).json(got_applications);

    } catch (error) {
        console.log(error);
    }
});

module.exports= router;