import React from "react";
import { Link } from "react-router-dom";
import Button3D from "../components/Button3D";
import Drive from "../components/Drive";
import ProtectedRoute from "../components/ProtectedRoute";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Heading from "../partials/Heading";

const PDFs = () => {
    useDocumentTitle("PDFs - HSJN FinWisdom Pvt Ltd");

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <ProtectedRoute>
            <Heading heading="Trading Books PDFs" image="/illustrations/11.png" />

            <p className="text-center text-muted mb-5 container">
                <span className="text-primary fs-2">W</span>elcome to your trading journey! This
                eBook is packed with essential insights and practical strategies to help you
                navigate the markets and make informed decisions.
            </p>

            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4" data-aos="flip-up">
                        <Drive
                            name="Rich Dad Poor Dad"
                            author="Robert T. Kiyosaki"
                            read="https://drive.google.com/file/d/1Y43_TFEOEpQ-v3pjjDEyaYusIWn8F1N5/view"
                            download="https://drive.google.com/uc?export=download&id=1Y43_TFEOEpQ-v3pjjDEyaYusIWn8F1N5"
                        />
                    </div>
                    <div className="col-12 col-md-4" data-aos="flip-up">
                        <Drive
                            name="Catching the Wolf of Wall Street"
                            author="Jordan Belfort"
                            read="https://drive.google.com/file/d/1yCsNv__UC-BxH3a4dlxhki-DGzyzgmWB/view"
                            download="https://drive.google.com/uc?export=download&id=1yCsNv__UC-BxH3a4dlxhki-DGzyzgmWB"
                        />
                    </div>
                    <div className="col-12 col-md-4" data-aos="flip-up">
                        <Drive
                            name="Trade Like a Stock Market Wizard"
                            author="Mark Minervini"
                            read="https://drive.google.com/file/d/1XXofVxQWLyZ6Sflcha9vJB6xs7adxuWd/view"
                            download="https://drive.google.com/uc?export=download&id=1XXofVxQWLyZ6Sflcha9vJB6xs7adxuWd"
                        />
                    </div>
                    <div className="col-12 col-md-4" data-aos="flip-up">
                        <Drive
                            name="7 Habits of a Highly Successful Trader"
                            author="Mark Crisp"
                            lineBreak={false}
                            read="https://drive.google.com/file/d/1wd18ChP91Woqq-Fiv4DhBCQCnmZ9stVX/view"
                            download="https://drive.google.com/uc?export=download&id=1wd18ChP91Woqq-Fiv4DhBCQCnmZ9stVX"
                        />
                    </div>
                    <div className="col-12 col-md-4" data-aos="flip-up">
                        <Drive
                            name="How To Make Money in Intraday Trading"
                            author="Ashwani Gujral & Rachana A. Vaidya"
                            lineBreak={false}
                            read="https://drive.google.com/file/d/1XysbL9PevAv264TFSyXFTywPMD8GKUCr/view"
                            download="https://drive.google.com/uc?export=download&id=1XysbL9PevAv264TFSyXFTywPMD8GKUCr"
                        />
                    </div>
                    <div className="col-12 col-md-4" data-aos="flip-up">
                        <Drive
                            name="Crypto Assets"
                            author="Chris Burniske & Jack Tatar"
                            read="https://drive.google.com/file/d/10bKJCFUiYWM6GKDi4Ypes2kUJMH6NVz8/view"
                            download="https://drive.google.com/uc?export=download&id=10bKJCFUiYWM6GKDi4Ypes2kUJMH6NVz8"
                        />
                    </div>
                    <div className="col-12 col-md-4" data-aos="flip-up">
                        <Drive
                            name="Visual Guide to Hedge Funds"
                            author="Richard C. Wilson"
                            read="https://drive.google.com/file/d/1wRkrFu6a_DOUHr4oK1QBAbuad3JQSeVw/view"
                            download="https://drive.google.com/uc?export=download&id=1wRkrFu6a_DOUHr4oK1QBAbuad3JQSeVw"
                        />
                    </div>
                    <div className="col-12 col-md-4" data-aos="flip-up">
                        <Drive
                            name="Trading With Ichimoku Clouds"
                            author="Manesh Patel"
                            read="https://drive.google.com/file/d/1hMyMS5RgOUbCYBKUrlYWVOvnafkEyroR/view"
                            download="https://drive.google.com/uc?export=download&id=1hMyMS5RgOUbCYBKUrlYWVOvnafkEyroR"
                        />
                    </div>
                    <div className="col-12 col-md-4" data-aos="flip-up">
                        <Drive
                            name="Visual Guide to Candlestick Charting"
                            author="Michael C. Thomsett"
                            lineBreak={false}
                            read="https://drive.google.com/file/d/18mVApS_UDCcGemZa06qIzcA_0jbyxq3H/view"
                            download="https://drive.google.com/uc?export=download&id=18mVApS_UDCcGemZa06qIzcA_0jbyxq3H"
                        />
                    </div>
                    <div className="col-12 col-md-4" data-aos="flip-up">
                        <Drive
                            name="Mental Fitness For Traders"
                            author="Norman Hallett"
                            read="https://drive.google.com/file/d/1I5W74xkePH2Q8tgJMhElv7cxKB_mHBY-/view"
                            download="https://drive.google.com/uc?export=download&id=1I5W74xkePH2Q8tgJMhElv7cxKB_mHBY-"
                        />
                    </div>
                    <div className="col-12 col-md-4" data-aos="flip-up">
                        <Drive
                            name="Investing in India"
                            author="Rahul Saraogi"
                            read="https://drive.google.com/file/d/1eay-qFmzVzaqrXbqqn2evJKGYdkGqwfp/view"
                            download="https://drive.google.com/uc?export=download&id=1eay-qFmzVzaqrXbqqn2evJKGYdkGqwfp"
                        />
                    </div>
                    <div className="col-12 col-md-4" data-aos="flip-up">
                        <Drive
                            name="A Rough and Ready Guide to Algorithmic Trading"
                            author="Vivek Krishnamoorthy & Ashutosh Dave"
                            lineBreak={false}
                            read="https://drive.google.com/file/d/1VAubK5tv_f9EN2FW8Lgi8KA-qzjT-c6x/view"
                            download="https://drive.google.com/uc?export=download&id=1VAubK5tv_f9EN2FW8Lgi8KA-qzjT-c6x"
                        />
                    </div>
                </div>

                <p className="text-center text-muted mt-5 container fs-5">
                    Join our Technical Analysis course and gain free access to 300 life-changing
                    eBooks!
                </p>
                <div className="d-flex justify-content-center">
                    <Link to="/technical-analysis-courses" onClick={scrollToTop}>
                        <Button3D text="Technical Analysis Courses" />
                    </Link>
                </div>
                <br />
            </div>
        </ProtectedRoute>
    );
};

export default PDFs;
