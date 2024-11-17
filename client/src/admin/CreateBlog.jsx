import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreateBlog = () => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [paragraph, setParagraph] = useState("");
    const navigate = useNavigate();

    const handleCreateBlog = async (e) => {
        e.preventDefault();
        try {
            const blogData = {
                title: title,
                description: paragraph, 
                image: image,
            };

            await axios.post(`${import.meta.env.VITE_EXPRESS_URL}/api/blog/create-blog`, blogData);
            navigate("/blogs");
            toast.success("blog created", { autoClose: 1000, hideProgressBar: true });
        } catch (error) {
            toast.success("failed to create blog", { autoClose: 1000, hideProgressBar: true });
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Create Blog</h1>
            <form onSubmit={handleCreateBlog}>
                <div className="mb-3">
                    <input
                        onChange={(e) => setImage(e.target.value)}
                        value={image}
                        type="text"
                        className="form-control"
                        placeholder="Paste the image link"
                        required
                    />
                </div>

                <div className="mb-3">
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        type="text"
                        className="form-control"
                        placeholder="Enter title of your blog"
                        required
                    />
                </div>

                <div className="mb-4">
                    <textarea
                        onChange={(e) => setParagraph(e.target.value)}
                        value={paragraph}
                        className="form-control"
                        rows="8"
                        placeholder="Enter your paragraph"
                        required
                    ></textarea>
                </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-success mb-3">
                        Create Blog
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateBlog;
