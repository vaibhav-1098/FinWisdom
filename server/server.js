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

// 
const allowedOrigins = [
  "http://localhost:3000", // local dev
  "https://hsjnfinwisdom.com", // production
  "https://www.hsjnfinwisdom.com", // with www
];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like Postman or curl)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // handle preflight requests

// 

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
