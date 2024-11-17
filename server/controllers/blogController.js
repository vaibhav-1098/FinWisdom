const blogModel = require("../models/blogModel");

// Create a new blog
const createNewBlog = async (req, res) => {
    try {
        const { title, description, image } = req.body;
        const newBlog = await blogModel.create({ title, description, image });
        return res.status(200).send({ msg: "blog created", success: true, newBlog });
    } catch (error) {
        console.log("Error while creating blog", error);

        res.status(500).send({ msg: "an error occurred", success: false });
    }
};

// Get all blogs
const getAllBlogs = async (req, res) => {
    try {
        const blogs = await blogModel.find().sort({ _id: -1 });
        res.send({ success: true, blogs });
    } catch (error) {
        res.status(500).send({ msg: "an error occurred", success: false });
    }
};

// Controller to get paginated blogs
const getAllBlogsWithPagination = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 4;
        const startIndex = (page - 1) * limit;
        const blogs = await blogModel.find().sort({ _id: -1 }).skip(startIndex).limit(limit);
        const totalBlogs = await blogModel.countDocuments();

        res.send({
            success: true,
            blogs,
            totalBlogs,
            totalPages: Math.ceil(totalBlogs / limit),
            currentPage: page,
        });
    } catch (error) {
        res.status(500).send({ msg: "An error occurred", success: false });
    }
};

// Get blog by ID
const getBlogById = async (req, res) => {
    try {
        const blog = await blogModel.findById(req.params.id);
        if (!blog) return res.status(404).send({ msg: "no such blog", success: false });
        return res.status(200).send({ success: true, blog });
    } catch (error) {
        res.status(500).send({ msg: "an error occurred", success: false });
    }
};

module.exports = {
    createNewBlog,
    getAllBlogs,
    getAllBlogsWithPagination,
    getBlogById,
};
