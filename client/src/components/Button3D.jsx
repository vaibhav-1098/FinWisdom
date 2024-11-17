import React from "react";
import { Link } from "react-router-dom";

const Button3D = ({ text = "Button", link = "" }) => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return link ? (
        <Link to={link} onClick={scrollToTop} className="button jelly text-decoration-none text-black">
            {text}
        </Link>
    ) : (
        <button className="button jelly text-decoration-none text-black">{text}</button>
    );
};

export default Button3D;
