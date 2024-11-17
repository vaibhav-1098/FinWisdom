const mongoose = require("mongoose");

// schema to make document
const BlogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true, unique: true },
    image: { type: String},
   
});

// collection to make model
const BlogModel = mongoose.model("blog", BlogSchema);
module.exports = BlogModel;
