const express = require("express");
const router = express.Router();
const Internship = require("../models/Internship");

router.get("/external-internships", async (req, res) => {
    try {
        const response = await fetch(
    "https://www.themuse.com/api/public/jobs?page=1"
);

if (!response.ok) {
    const text = await response.text();
    console.log("Muse API error:", response.status, text);
    return res.status(response.status).json({
        message: "Muse API request failed"
    });
}

const data = await response.json();

        const internships = data.results.map((job) => ({
            _id: String(job.id),
            title: job.name,
            company: job.company?.name || "Unknown Company",
            location: job.locations?.[0]?.name || "Not specified",
            workMode: "Not specified",
            stipend: 0,
            duration: "Not specified",
            skills: [],
            openings: 1,
            category: "Internship",
            description: job.contents || "",
            applyLink: job.refs?.landing_page || ""
        }));

        await Internship.bulkWrite(
        internships.map((internship) => ({
        updateOne: {
            filter: { _id: internship._id },
            update: { $set: internship },
            upsert: true
        }
    }))
);

res.json(internships);

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Failed to fetch internships"
        });
    }
});

module.exports= router;