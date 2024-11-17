import React from "react";
import Currency from "../components/Currency";
import HomeTable from "../components/HomeTable";
import Laptop from "../components/Laptop";
import Numbers from "../components/Numbers";
import Popup from "../components/Popup";
import Quote from "../components/Quote";
import ServiceBox from "../components/ServiceBox";
import SIP from "../components/SIP";
import Slider from "../components/Slider";
import YouTube from "../components/YouTube";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Banner from "../partials/Banner";
import { useSelector } from "react-redux";

const Home = () => {
    useDocumentTitle("HSJN FinWisdom Pvt Ltd");
    const isLogin = useSelector((state) => state.isLogin);

    return (
        <>
            <Banner />

            <Laptop />

            <Quote />

            <section className="container mt-4">
                <hr />
                <h2 className="text-center mb-3 container">Our Services</h2>
                <div className="container">
                    <div className="row g-3">
                        <div className=" col-12">
                            <ServiceBox
                                heading="Technical Analysis Courses"
                                text="Explore Now"
                                link="/courses"
                                p={
                                    <>
                                        Our courses cover Trading Psychology, Chart Reading, Price
                                        Action, Technical Indicators, Demand-Supply Zones, Selection
                                        for Intraday & Swing Trading, Fundamental Analysis, Option
                                        Greeks, Option Writing, Hero or Zero Trades, and Risk
                                        Management.{" "}
                                        <strong>
                                            Discover the perfect trading course for your requirement
                                            - <span className="text-primary">Beginner</span>,
                                            <span className="text-primary"> Advance</span>, or
                                            <span className="text-primary">
                                                {" "}
                                                Crypto & Forex
                                            </span>{" "}
                                            and embark on your trading adventure with us!
                                        </strong>
                                    </>
                                }
                            />
                        </div>
                        <div className="col-lg-6 col-12" id="advisory-box">
                            <ServiceBox
                                heading="Advisory Services"
                                text="Learn More"
                                link="/advisory"
                                p={
                                    <>
                                        Our plan is to provide stock market advisory services once
                                        we obtain SEBI registration. Currently, we focus on
                                        delivering informative and educational content to enhance
                                        your trading knowledge. <br />
                                        <strong>Advisory Services Coming Soon.</strong>
                                    </>
                                }
                            />
                        </div>
                        <div className="col-lg-6 col-12">
                            <ServiceBox
                                heading="Merchandise Store"
                                text="Visit Now"
                                link="/store"
                                p={
                                    <>
                                        Express your passion for trading with style. Dive into our
                                        Merchandise Store and discover exclusive
                                        <strong> T-Shirts, Hoodies, Caps, Mugs, Desk Mats </strong>
                                        and more. Each item is crafted to reflect the spirit of the
                                        trading community, making a statement both in and out of the
                                        market.
                                    </>
                                }
                            />
                        </div>
                    </div>
                </div>
                <br />
                <hr />
            </section>

            <h2 className="text-center mb-3 container">Why choose us ?</h2>

            <HomeTable />

            <div className="container">
                <hr />
                <Slider
                    slide1="/images/1.png"
                    slide2="/images/2.png"
                    slide3="/images/3.png"
                    slide4="/images/4.png"
                />

                <p className="text-muted justify mt-4">
                    <strong>Join the FinWisdom Community:</strong> Become a part of a thriving
                    community of traders on a shared mission for success. Connect with like-minded
                    individuals, stay updated with market trends, and elevate your trading game.
                </p>
                <hr />
            </div>

            <Numbers />

            <YouTube />

            <Popup />

            {isLogin && (
                <div className="container mb-4">
                    <div className="row g-3">
                        <div className="col-lg-6 col-12 ">
                            <SIP />
                        </div>
                        <div className="col-lg-6 col-12">
                            <Currency />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Home;
