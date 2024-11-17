import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Heading from "../partials/Heading";

const Blogs = () => {
    useDocumentTitle("Blogs - HSJN FinWisdom Pvt Ltd");
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [isLoading, setIsLoading] = useState(true); // State to track loading

    const fetchBlogs = async (page) => {
        setIsLoading(true); // Set loading to true before fetching
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_EXPRESS_URL}/api/blog/get-blog`,
                {
                    params: { page, limit: 4 }, // Page and limit set here
                }
            );
            setBlogs(response.data.blogs);
            setTotalPages(response.data.totalPages);
        } catch (error) {
            console.error("Error fetching blogs:", error);
        } finally {
            setIsLoading(false); // Set loading to false after fetching
        }
    };

    // Fetch blogs initially or when page changes
    useEffect(() => {
        fetchBlogs(currentPage);
    }, [currentPage]);

    // Handle click for pagination links
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <section>
            <Heading heading="Our Latest Blogs" image="/illustrations/8.png" />

            <div className="container" style={{ minHeight: "50vh" }}>
                {isLoading ? ( // Show loading text if loading
                    <div className="text-center my-5">
                        <p>Loading Blogs...</p>
                    </div>
                ) : (
                    <div className="row">
                        {blogs.map((blog) => (
                            <div key={blog._id} className="col-lg-6 col-md-6 col-sm-12 p-3">
                                <div className="border rounded p-4 h-100">
                                    <Link
                                        to={`/blogs/${blog._id}`}
                                        target="_blank"
                                        className="text-decoration-none text-dark"
                                    >
                                        <h2 className="text-center">{blog.title}</h2>
                                        <div className="flex">
                                            <div
                                                className="blog-img my-3"
                                                style={{
                                                    backgroundImage: `url(${blog.image})`,
                                                }}
                                            ></div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Pagination */}
            {!isLoading && (
                <nav aria-label="Page navigation example">
                    <ul className="pagination d-flex justify-content-center">
                        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                            <button
                                className="page-link"
                                onClick={() => handlePageChange(currentPage - 1)}
                                aria-label="Previous"
                            >
                                <span aria-hidden="true">&laquo;</span>
                            </button>
                        </li>
                        {[...Array(totalPages)].map((_, index) => (
                            <li
                                className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
                                key={index}
                            >
                                <button
                                    className="page-link"
                                    onClick={() => handlePageChange(index + 1)}
                                >
                                    {index + 1}
                                </button>
                            </li>
                        ))}
                        <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                            <button
                                className="page-link"
                                onClick={() => handlePageChange(currentPage + 1)}
                                aria-label="Next"
                            >
                                <span aria-hidden="true">&raquo;</span>
                            </button>
                        </li>
                    </ul>
                </nav>
            )}
        </section>
    );
};

export default Blogs;
