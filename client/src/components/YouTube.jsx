import React from "react";

const YouTube = () => {
    return (
        <div className="container mb-4">
            <hr className="mb-4" />
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
                        <div className="iframe-container">
                            <iframe
                                className="rounded"
                                src="https://www.youtube.com/embed/Hk7KILOY6Tc?si=tVO9K4eaCjE_2ldh"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
                        <div className="justify text-muted">
                            <br className="d-block d-sm-none" />
                            <h2 className="text-center text-black mb-3 container">
                                Subscribe to our YouTube channel
                            </h2>
                            Our YouTube channel is designed to help you learn about the stock
                            market, from the basics to advanced topics. We provide educational
                            content on market analysis, trading strategies, technical and
                            fundamental analysis, and more. Our videos are created with the goal of
                            simplifying complex financial concepts and making them easy to
                            understand for our viewers.
                            <div className="text-center">
                                <a
                                    href="https://www.youtube.com/@hsjnfinwisdom?sub_confirmation=1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-decoration-none fs-4"
                                >
                                    <div className="d-flex justify-content-center align-items-center gap-2">
                                        <i className="bi bi-youtube fs-1 text-danger"></i>{" "}
                                        <span>
                                            <u>Subscribe</u>
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YouTube;
