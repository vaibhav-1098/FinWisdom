import React from "react";
import Typing from "../components/Typing";

const Banner = () => {
    return (
        <div className="bg2 px-3 px-lg-5 py-5 bg2">
            <div className="container">
            <h1 className="fw-normal pb-3">
                Acquire <span className="fw-semibold fst-italic">trading skills</span> in the
                easiest manner possible.
            </h1>
            <Typing />
            </div>
        </div>
    );
};

export default Banner;
