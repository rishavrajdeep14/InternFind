const express = require("express");
const router = express.Router();
const passport = require("../config/passport");
const jwt = require("jsonwebtoken");

router.post(
    "/signin",
    passport.authenticate("local", { session: false }),
    (req, res) => {
        const token = jwt.sign(
            {
                userId: req.user._id,
                role: req.user.role
            },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        return res.status(200).json({
            message: "Login successful",
            token: token
        });
    }
);


router.get(
    "/auth/google",
    passport.authenticate("google", {
        scope: ["profile", "email"]
    })
);

router.get(
    "/auth/google/callback",
    passport.authenticate("google", {
        session: false
    }),
    (req, res) => {
        const token = jwt.sign(
            {
                userId: req.user._id,
                role: req.user.role
            },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.redirect(`https://internfind-frontend.onrender.com/?token=${token}`);
    }
);

module.exports = router;