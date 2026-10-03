const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    role: {
        type: String,
        default: "student"
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    },
    provider: {
        type: String,
        default: "local"
    },
    providerId: {
        type: String
    }
});

const User = new mongoose.model("User", UserSchema);

module.exports = User;