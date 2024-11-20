import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button3D from "../components/Button3D";
import Confetti from "../components/Confetti";
import Price from "../components/Price";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Heading from "../partials/Heading";

const Courses = () => {
    useDocumentTitle("Technical Analysis Courses - HSJN FinWisdom Pvt Ltd");
    const isLogin = useSelector((state) => state.isLogin);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <Heading heading="Technical Analysis Courses" image="/illustrations/5.png" />
            <Confetti />

            <h2 className="fs-3 text-center text-muted">90% Success Rate</h2>

            <div className="container">
                <div className="progress-bar">
                    <div className="progress"></div>
                </div>
            </div>

            <section className="container text-muted">
                <h1 className="text-center fs-4">Elevate Your Trading Game with HSJN FinWisdom</h1>
                <p className="justify">
                    Are you ready to transcend from a novice trader to a seasoned market expert?
                    <span className="text-success"> HSJN FinWisdom</span> invites you to embark on
                    an exhilarating journey of financial discovery through our unparalleled
                    Technical Analysis Courses. Prioritize learning before entering the stock
                    market, and with this course, you can develop expertise to{" "}
                    <strong>generate lifelong consistent income</strong>.
                </p>
            </section>

            <section className="container text-muted">
                <br />
                <hr />
                <div className="my-4">
                    <h4 className="fs-4">Why Choose Our Courses?</h4>
                    <strong className="fs-5">1. Mastery in Market Trends:</strong>
                    <div>
                        <ul>
                            <li>
                                • Grasp the art of identifying and understanding market trends like
                                never before.
                            </li>
                            <li>
                                • Harness the power of technical indicators to foresee potential
                                shifts in the financial landscape.
                            </li>
                        </ul>
                    </div>
                    <strong className="fs-5">2. Precision in Trading Strategies:</strong>
                    <div>
                        <ul>
                            <li>
                                • Develop a repertoire of effective trading strategies tailored to
                                your risk appetite and investment goals.
                            </li>
                            <li>
                                • Learn to time your trades with precision, maximizing your profit
                                potential.
                            </li>
                        </ul>
                    </div>
                    <strong className="fs-5">3. Real-world Application:</strong>
                    <div>
                        <ul>
                            <li>
                                • Immerse yourself in practical case studies and real-world
                                scenarios to apply your newfound knowledge.
                            </li>
                            <li>
                                • Gain hands-on experience through simulated trading exercises,
                                ensuring you're ready for the dynamic market environment.
                            </li>
                        </ul>
                    </div>
                    <strong className="fs-5">4. Expert Guidance:</strong>
                    <div>
                        <ul>
                            <li>
                                • Benefit from the wisdom of seasoned professionals with years of
                                experience in stocks, crypto, and forex markets.
                            </li>
                            <li>
                                • Receive personalized feedback and mentorship to fast-track your
                                learning curve.
                            </li>
                        </ul>
                    </div>
                    <strong className="fs-5">5. Cutting-edge Curriculum:</strong>
                    <div>
                        <ul>
                            <li>
                                • Stay ahead of the curve with a curriculum updated to reflect the
                                latest market trends and technological advancements.
                            </li>
                            <li>
                                • Access exclusive resources, webinars, and tools designed to
                                enhance your analytical skills.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <div className="container">
                <hr />

                <h1 className="text-center darkblue">Technical Analysis Courses</h1>

                <div className="row">
                    <div className="col-lg-4 col-md-6 my-4 col-sm-12 shrink">
                        <Price
                            title="Beginner's"
                            originalPrice="10,000"
                            discountedPrice="8,000"
                            description="Lay the foundation with fundamental concepts and chart analysis (Pre Recorded)."
                            link="https://pages.razorpay.com/pl_O4tqKwqdL7bbJd/view"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 my-4 col-sm-12 expand">
                        <Price
                            title={
                                <>
                                    Advanced <i className="bi bi-magic"></i>
                                </>
                            }
                            originalPrice="30,000"
                            discountedPrice="24,000"
                            description="Dive deep into complex indicator interpretations, risk management and option trading strategies."
                            link="https://pages.razorpay.com/pl_O4u2CrYQ7n8DQj/view"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 my-4 col-sm-12 shrink">
                        <Price
                            title="Personalized"
                            originalPrice="50,000"
                            discountedPrice="40,000"
                            description="Experience personalized learning like never before with our Offline One on One Technical Analysis Course!"
                            link="https://pages.razorpay.com/pl_O4uB8dyZJeXtcS/view"
                        />
                    </div>
                </div>

                {!isLogin && (
                    <Link to="/login" onClick={scrollToTop}>
                        <marquee behavior="" direction="" className="mb-3 bg-success p-1 text-white">
                            Login to view price. CLICK HERE TO LOGIN
                        </marquee>
                    </Link>
                )}

                <hr />
            </div>

            <div className="container text-muted justify mt-5">
                <h4 className="fs-4 text-center">Transform Your Passion into Profit</h4>
                <p>
                    At <span className="text-success">HSJN FinWisdom</span>, we believe that
                    financial success is within reach for everyone. Whether you're a beginner
                    seeking a solid foundation or an experienced trader aiming to refine your
                    skills, our Technical Analysis Courses are your key to unlocking the full
                    potential of the markets.
                    <br /> Join us on this transformative journey and witness your financial dreams
                    become a reality. Enroll now and step into a world where expertise meets
                    opportunity!
                </p>
            </div>

            <div className="d-flex justify-content-center align-items-center mb-3 query">
                <Link to="/form" onClick={scrollToTop}>
                    <Button3D text="Submit a Query" />
                </Link>
            </div>
            <br />
        </>
    );
};

export default Courses;
