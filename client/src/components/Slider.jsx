import React from "react";

const Slider = ({ slide1, slide2, slide3, slide4 }) => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div
                                className="carousel-item active"
                                style={{ backgroundImage: `url(${slide1})` }}
                            ></div>
                            <div
                                className="carousel-item"
                                style={{ backgroundImage: `url(${slide2})` }}
                            ></div>
                            <div
                                className="carousel-item"
                                style={{ backgroundImage: `url(${slide3})` }}
                            ></div>
                            <div
                                className="carousel-item"
                                style={{ backgroundImage: `url(${slide4})` }}
                            ></div>
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExample"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExample"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
