import React from "react";

const Heading = ({ heading = "Heading", image = "/illustrations/2.png" }) => {
    return (
        <>
            <p className="display-5 text-center py-2 pt-4 bg2 m-0">
                <b>{heading}</b>
            </p>
            <svg
                className="d-block w-100"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
            >
                <path
                    className="wave"
                    fill="var(--custom-color-ii)"
                    fillOpacity="1"
                    d="M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,106.7C672,107,768,149,864,181.3C960,213,1056,235,1152,229.3C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                />
            </svg>
            <img
                src={image}
                className="d-none d-lg-block position-absolute illustration"
                alt="image"
            />
        </>
    );
};

export default Heading;
