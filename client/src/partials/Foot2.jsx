import React from "react";
import { NavLink } from "react-router-dom";

const Foot2 = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <>
            <div className="text-white fs-5 ms-4 pb-2">Website Navigation</div>
            <ul>
                <li><NavLink to="/" className="link" onClick={scrollToTop}>→ Home</NavLink></li>
                <li><NavLink to="/about-us" className="link" onClick={scrollToTop}>→ About Us</NavLink></li>
                <li><NavLink to="/advisory-services" className="link" onClick={scrollToTop}>→ Advisory Services</NavLink></li>
                <li><NavLink to="/technical-analysis-courses" className="link" onClick={scrollToTop}>→ Technical Analysis Courses</NavLink></li>
                <li><NavLink to="/books" className="link" onClick={scrollToTop}>→ e-Books</NavLink></li>
                <li><NavLink to="/blogs" className="link" onClick={scrollToTop}>→ Blogs</NavLink></li>
                <li><NavLink to="/merchandise-store" className="link" onClick={scrollToTop}>→ Merchandise Store</NavLink></li>
                <li><NavLink to="/careers" className="link" onClick={scrollToTop}>→ Careers</NavLink></li>
                <li><NavLink to="/faqs" className="link" onClick={scrollToTop}>→ FAQs</NavLink></li>
            </ul>
        </>
    );
};

export default Foot2;
