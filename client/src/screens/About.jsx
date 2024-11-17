import React from "react";
import Founder from "../components/Founder";
import Numbers from "../components/Numbers";
import Reviews from "../components/Reviews";
import Slider from "../components/Slider";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Heading from "../partials/Heading";

const About = () => {
    useDocumentTitle("About Us - HSJN FinWisdom Pvt Ltd");

    return (
        <>
            <Heading heading="About Us" image="/illustrations/10.png" />

            <div className="container text-muted text-start">
                <p data-aos="slide-up" className="justify">
                    <span className="text-primary fs-2">W</span>elcome to
                    <span className="text-primary"> HSJN FinWisdom</span>, where the intricate world
                    of financial markets meets the art of trading. We are a dynamic and innovative
                    force in the trading education landscape, dedicated to empowering individuals
                    with the knowledge and skills needed to navigate stocks, commodities, forex, and
                    crypto markets successfully.
                </p>

                <h2 className="fs-3">Our Mission</h2>

                <p className="justify">
                    At HSJN FinWisdom, our mission is clear — to democratize financial knowledge and
                    provide a platform where aspiring traders can gain expertise, confidence, and
                    financial wisdom. We believe in fostering a community where each member is
                    equipped to make informed decisions and chart their path to financial success.
                </p>

                <h2 className="fs-3">What Sets Us Apart ?</h2>

                <ol>
                    <li>
                        <strong>No-nonsense Disclaimer: </strong>We believe in transparency. HSJN
                        FinWisdom does not provide advisory or buy/sell recommendations as we are
                        not SEBI registered research analysts. Your journey, your decisions.
                    </li>
                    <li>
                        <strong>Expertise in Technical Analysis: </strong>Our foundation rests on
                        the principles of technical analysis, providing a comprehensive
                        understanding of market trends, patterns, and indicators. We equip our
                        community with the tools needed to decipher the complexities of financial
                        markets.
                    </li>
                    <li>
                        <strong>Exclusive Trading Merchandise: </strong> Express your passion for
                        trading with our exclusive merchandise. From customized T-shirts and hoodies
                        to caps and mugs, we bring you gear that resonates with the spirit of the
                        trading community.
                    </li>
                </ol>
            </div>

            <Founder />

            <h2 className="text-center mb-3 container">Testimonials</h2>

            <Slider
                slide1="/reviews/1.png"
                slide2="/reviews/2.png"
                slide3="/reviews/3.png"
                slide4="/reviews/4.png"
            />

            <div className="container text-muted text-start my-3">
                <h2 className="fs-4">Ready to Chart Your Success? Explore Now:</h2>

                <ol>
                    <li>
                        <strong>Expert-Led Technical Analysis Courses:</strong> Gain a deep
                        understanding of market trends and trading strategies through comprehensive
                        courses taught by industry professionals.
                    </li>
                    <li>
                        <strong>Exclusive Merchandise Store:</strong> Browse our carefully curated
                        selection of tools and resources that empower you to achieve your financial
                        and investment goals.
                    </li>
                </ol>
            </div>

            <div className="container my-3">
                <hr />
            </div>

            <Numbers />
            <div className="container">
                <hr />
            </div>
            <Reviews />
            <br />
        </>
    );
};

export default About;
