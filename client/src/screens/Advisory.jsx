import React from "react";
import Confetti from "../components/Confetti";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Heading from "../partials/Heading";

const Advisory = () => {
    useDocumentTitle("Advisory Services - HSJN FinWisdom Pvt Ltd");

    return (
        <>
            <Heading heading="Advisory Services" image="/illustrations/9.png" />
            <Confetti />

            <div className="container text-muted justify">
                <p data-aos="fade-out">
                    <span className="text-success fs-2">A</span>t HSJN FinWisdom, we're committed to
                    evolving with our community's needs, and we're thrilled to announce that
                    Advisory Services are on the horizon! While we currently focus on delivering
                    top-notch educational content and informative resources, we're gearing up to
                    elevate your trading experience.
                </p>

                <div className="jelly">
                    <div className="ribbon">Coming Soon</div>
                </div>

                <div className="fs-4">
                    <strong>What to Expect ?</strong>
                </div>
                <ol>
                    <li>
                        <strong className="fs-5 text-start">
                            <u>Expert Guidance:</u>
                        </strong>
                        <p>
                            Our seasoned analysts are gearing up to provide you with personalized
                            insights and strategies to navigate the ever-changing financial
                            landscape.
                        </p>
                    </li>
                    <li>
                        <strong className="fs-5 text-start">
                            <u>Tailored Recommendations:</u>
                        </strong>
                        <p>
                            Secure your financial future with our carefully curated long-term
                            investment ideas. Our team identifies opportunities aligned with your
                            investment goals, ensuring a strategic approach to wealth accumulation.
                        </p>
                    </li>
                    <li>
                        <strong className="fs-5 text-start">
                            <u>Intraday Trading Calls with High Accuracy:</u>
                        </strong>
                        <p>
                            Receive exclusive buy and sell recommendations based on in-depth
                            research, empowering you to make informed decisions in the dynamic world
                            of stocks, crypto, and forex.
                        </p>
                    </li>
                    <li>
                        <strong className="fs-5 text-start">
                            <u>Market Intelligence:</u>
                        </strong>
                        <p>
                            Gain access to comprehensive market analyses, trend forecasts, and
                            timely updates to stay ahead of market movements.
                        </p>
                    </li>
                </ol>
                <hr />
                <div className="fs-5 text-danger">Disclaimer</div>
                <p>
                    As of now, HSJN FinWisdom is not a SEBI-registered Research Analyst, and the
                    Advisory Services are currently in the planning phase. We continue to provide
                    only educational and informative content, empowering you with the knowledge to
                    become a savvy trader.
                </p>
                <hr />

                <div className="mt-5">
                    <strong className="fs-4">Stay Tuned for Exciting Updates!</strong>
                </div>
                <p data-aos="fade-in">
                    We're diligently working towards obtaining our SEBI registration, and once
                    secured, our Advisory Services will launch to provide you with unparalleled
                    insights and opportunities. Thank you for being a part of our journey, and we
                    look forward to taking your trading experience to new heights!
                </p>
            </div>
            <br />
        </>
    );
};

export default Advisory;
