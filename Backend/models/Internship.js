const express = require("express");
const mongoose = require("mongoose");

const internshipSchema = new mongoose.Schema({
    _id: {
        type: String
    },
    title: {
        type: String
    },
    company: {
        type: String
    },
    location: {
        type: String
    },
    workMode: {
        type: String
    },
    stipend: {
        type: Number
    },
    duration: {
        type: String
    },
    skills: {
        type:[String]
    },
    openings: {
        type: Number
    },
    category: {
        type: String
    },
    description: {
        type:String
    },
    applyLink: {
        type:String
    }
})

const Internship =new mongoose.model("Internship",internshipSchema);

module.exports=Internship;