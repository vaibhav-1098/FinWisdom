import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";
import NotFound from "../screens/NotFound"; // Import NotFound component

const BlogbyId = () => {
    useDocumentTitle("Blog - HSJN FinWisdom Pvt Ltd");

    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [error, setError] = useState(false); // Track if blog is not found

    const getBlogById = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_EXPRESS_URL}/api/blog/${id}`);
            console.log("data", response.data);
            setBlog(response.data.blog);
            setError(false); // Reset error if blog is found
        } catch (error) {
            console.log("Error while getting blog by id", error);
            setError(true); // Set error to true if request fails
        }
    };

    useEffect(() => {
        getBlogById();
    }, [id]);

    if (error) {
        return <NotFound />; // Render NotFound if the blog is not found
    }

    return (
        <div className="container my-3 mb-5"  style={{minHeight:"50vh"}}>
            {blog ? (
                <div>
                    <h1 className="text-center">{blog.title}</h1>
                    <div className="flex">
                        <div
                            className="blog-img my-3"
                            style={{
                                backgroundImage: `url(${blog.image})`,
                            }}
                        ></div>
                    </div>
                    <div
                        className="blog-text"
                        dangerouslySetInnerHTML={{ __html: blog.description }}
                    />
                </div>
            ) : (
                <div className="text-center">
                    <p>Loading Blog...</p>
                </div>
            )}
        </div>
    );
};

export default BlogbyId;
