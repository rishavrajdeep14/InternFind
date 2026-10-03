
const mongoose = require("mongoose");

const applicationSchema= new mongoose.Schema({
    userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
    },
    internshipId: {
        type: String,
        ref:"Internship",
        required:true
    },
    status: {
        type:String,
        default:"Applied"
    },
    date: {
        type:Date,
        default:Date.now
    }
})

const Application = new mongoose.model("Application",applicationSchema);

module.exports= Application;