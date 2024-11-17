const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

const connectDB = require("./config/database");
const userController = require("./controllers/userController");
const blogController = require("./controllers/blogController");
const cookieParser = require("cookie-parser");

// connect database
connectDB();

// middlewares
app.use(cookieParser());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({ origin: process.env.REACT_URL }));

/* routes */
app.get("/", (req, res) => {
    res.send("Welcome");
});

// sign up
app.post("/api/user/register", userController.registerUser);
app.post("/api/user/verifyOtp", userController.verifyOtp);
app.post("/api/user/login", userController.loginUser);
app.post("/api/user/getCurrentUser", userController.getCurrentUser);

// blogs
app.post("/api/blog/create-blog", blogController.createNewBlog);
app.get("/api/blog/get-blog", blogController.getAllBlogsWithPagination);
app.get("/api/blog/get-all-blog", blogController.getAllBlogsWithPagination);
app.get("/api/blog/:id", blogController.getBlogById);

app.use("/", (req, res) => {
    res.status(404).json({ message: "route not found" });
});

// port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("server started");
});
