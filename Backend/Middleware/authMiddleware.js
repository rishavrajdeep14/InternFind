const jwt= require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).send("Access denied");
    }

    try {
        const decoded = jwt.verify(token, "internfind_secret");
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).send("Invalid token");
    }
};

module.exports = authMiddleware;