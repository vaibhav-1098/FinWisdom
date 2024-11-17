import React from "react";
import Online from "./Online";

const Numbers = () => {
    return (
        <div>
            <h2 className="text-center my-3 mb-4">Social Media Presence</h2>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-6 mb-4">
                        <a
                            href="https://g.page/r/CVrRcyU52fXcEAI/review"
                            target="_blank"
                            className="text-decoration-none text-black"
                        >
                            <div className="container text-center p-2 border border-primary rounded">
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                    <div className="fs-4">Rating</div>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <i className="bi bi-google fs-3"></i>
                                        <span className="text-primary fs-3 fw-normal mx-1">
                                            4.5
                                        </span>
                                        <span className="text-primary fs-3"> +</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-lg-4 col-6 mb-4">
                        <Online
                            number={1500}
                            duration={2.5}
                            countIncrease={10}
                            icon="bi-youtube"
                            text="Subscribers"
                            color="red"
                            link="https://www.youtube.com/@HSJNFinWisdom"
                        />
                    </div>

                    <div className="col-lg-4 col-6 mb-4">
                        <Online
                            number={1000}
                            duration={2.5}
                            countIncrease={10}
                            icon="bi-instagram"
                            text="Followers"
                            color="pink"
                            link="https://www.instagram.com/HSJNFinWisdom"
                        />
                    </div>

                    <div className="col-lg-4 col-6 mb-4">
                        <Online
                            number={50}
                            duration={2.5}
                            countIncrease={1}
                            icon="bi-twitter-x"
                            text="Followers"
                            color="grey"
                            link="https://x.com/HSJNFinWisdom"
                        />
                    </div>

                    <div className="col-lg-4 col-6 mb-4">
                        <Online
                            number={1000}
                            duration={2.5}
                            countIncrease={10}
                            icon="bi-facebook"
                            text="Followers"
                            color="blue"
                            link="https://www.facebook.com/HSJNFinWisdom"
                        />
                    </div>

                    <div className="col-lg-4 col-6 mb-4">
                        <Online
                            number={1000}
                            duration={2.5}
                            countIncrease={10}
                            icon="bi-telegram"
                            text="Members"
                            color="sky"
                            link="https://t.me/HSJNFinWisdom"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Numbers;
