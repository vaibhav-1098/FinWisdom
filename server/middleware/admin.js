const userModel = require("../models/userModel");

const adminAuth = async (req, res, next) => {
    try {
        // Extract token from cookies
        const token = req.cookies.nazimtoken;
        if (!token) {
            return res.status(401).json({ message: "Access denied. No token provided." });
        }

        // Verify and decode the token
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const userId = decoded.id;

        // Find the user by ID
        const user = await userModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        // Check if the user is an admin
        if (user.role !== 1) {
            return res.status(403).json({ message: "Access denied. Admins only." });
        }

        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        console.log("Error in middleware: " + error);
        
        return res.status(400).json({ message: "Invalid token." });
    }
};




module.exports = adminAuth;
