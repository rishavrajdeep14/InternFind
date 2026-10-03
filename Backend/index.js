require("dotenv").config();

const express = require("express");
const passport = require("./config/passport");
const mongoose = require("mongoose");

const authRoutes = require("./Routes/authRoutes");
const authRoutesin = require("./Routes/authRoutesin");
const InternshipRoutes = require("./Routes/InternshipRoutes");
const applicationRoute = require("./Routes/applicationRoute");
const adminRoutes = require("./Routes/adminRoutes");
const externalInternshipRoutes = require("./Routes/externalInternshipRoutes");

const cors = require("cors");

const app = express();

app.use(passport.initialize());
app.use(express.json());
app.use(cors());

app.use("/api", externalInternshipRoutes);
app.use("/api", adminRoutes);
app.use("/api", applicationRoute);
app.use("/api", authRoutes);
app.use("/api", authRoutesin);
app.use("/api/internships", InternshipRoutes);

const port = process.env.PORT || 3000;

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("Connection successful");
        console.log("DATABASE:", mongoose.connection.name);
        console.log("HOST:", mongoose.connection.host);

    } catch (error) {
        console.log("Database connection failed:", error);
    }
};

app.get("/", (req, res) => {
    res.send("Server is running");
});

connectDb().then(() => {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
});

module.exports = connectDb;