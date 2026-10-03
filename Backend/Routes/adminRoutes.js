const express = require("express");
const router = express.Router();

const Internship = require("../models/Internship");
const authMiddleware = require("../Middleware/authMiddleware");
const adminMiddleware = require("../Middleware/adminMiddleware");

router.post(
    "/admin/internships",
    authMiddleware,
    adminMiddleware,
    async (req, res) => {
        try {
            const internship = await Internship.create(req.body);

            res.status(201).json(internship);
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Failed to add internship"
            });
        }
    }
);

module.exports = router;