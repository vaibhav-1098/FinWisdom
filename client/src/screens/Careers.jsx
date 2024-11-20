import React from "react";
import { Link } from "react-router-dom";
import Button3D from "../components/Button3D";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Heading from "../partials/Heading";

const Careers = () => {
    useDocumentTitle("Careers - HSJN FinWisdom Pvt Ltd");

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <Heading heading="Let's Work Together" image="/illustrations/6.png" />

            <div className="container text-muted text-start">
                <p data-aos="slide-up">
                    <span className="text-success fs-2">W</span>elcome to the{" "}
                    <span className="text-success">HSJN FinWisdom</span> career page, where
                    opportunities for growth and innovation intersect. We are on a mission to
                    empower individuals in the financial world, and we believe that our team is the
                    driving force behind our success.
                </p>

                <h2>Why Join HSJN FinWisdom?</h2>

                <p>
                    At HSJN FinWisdom, we foster a dynamic and collaborative work environment where
                    every team member plays a crucial role in shaping the future of financial
                    education. Here are some compelling reasons to consider a career with us:
                </p>

                <ol>
                    <li>
                        <strong>Innovation and Learning: </strong>We thrive on innovation and are
                        committed to staying ahead in the ever-evolving financial landscape. Join us
                        to be part of a learning culture that encourages continuous growth and
                        development.
                    </li>
                    <li>
                        <strong>Impactful Work: </strong>Contribute to something meaningful by being
                        part of a company that empowers individuals to navigate the complexities of
                        stocks, crypto, and forex markets. Your work will have a direct impact on
                        shaping the financial success of our community.
                    </li>
                    <li>
                        <strong>Collaborative Team: </strong>We believe in the power of
                        collaboration. Work alongside talented and passionate individuals who share
                        a common goal of making financial wisdom accessible to all.
                    </li>
                    <li>
                        <strong>Diverse Opportunities: </strong>Whether you're interested in
                        finance, technology, marketing, or customer service, we offer diverse
                        opportunities for career growth. Explore your passions and carve out your
                        unique path within HSJN FinWisdom.
                    </li>
                </ol>

                <p data-aos="fade-in">
                    Participate in our online internship program, where we engage with our students
                    virtually. This initiative has proven to be successful, allowing more
                    individuals to collaborate with us remotely.
                </p>
            </div>

            {/*  */}
            <div
                className="parallax my-5"
                style={{
                    backgroundImage: "url('/images/hire.jpg')",
                }}
            ></div>
            {/*  */}

            <div className="container justify text-muted">
                <h2>Current Openings:</h2>
                <div>
                    <div>
                        <strong className="fs-5">1. Social Media Manager</strong>
                        <ul>
                            <li>
                                <strong className="fs-6">● Role: </strong>Full-time social media
                                marketing of our company, focusing on lead generation through social
                                media channels.
                            </li>
                            <li>
                                <strong>● Requirements:</strong>
                                <ul>
                                    <li>⚬ Proven experience in social media marketing.</li>
                                    <li>⚬ Strong understanding of lead generation strategies.</li>
                                    <li>⚬ Creative mindset with excellent communication skills.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <strong className="fs-5">2. Sales Executive</strong>
                        <ul>
                            <li>
                                <strong>● Role: </strong>Sales and marketing.
                            </li>
                            <li>
                                <strong>● Preferred Candidate Location: </strong>Sonipat, Haryana
                            </li>
                            <li>
                                <strong>● Requirements:</strong>
                                <ul>
                                    <li>⚬ Previous experience in sales.</li>
                                    <li>
                                        ⚬ Ability to effectively communicate and build
                                        relationships.
                                    </li>
                                    <li>
                                        ⚬ Self-motivated with a passion for achieving sales targets.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <strong className="fs-5">3. Executive Assistant</strong>
                        <ul>
                            <li>
                                <strong>● Role: </strong>Day-to-day office work.
                            </li>
                            <li>
                                <strong>● Preferred Candidate: </strong>Female
                            </li>
                            <li>
                                <strong>● Requirements:</strong>
                                <ul>
                                    <li>⚬ Excellent organizational and communication skills.</li>
                                    <li>⚬ Previous experience in administrative roles.</li>
                                    <li>
                                        ⚬ Ability to handle day-to-day office tasks efficiently.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <strong className="fs-5">4. Sales Intern</strong>
                        <ul>
                            <li>
                                <strong>● Role: </strong>Generating leads for technical analysis
                                courses.
                            </li>
                            <li>
                                <strong>● Preferred Candidate Location: </strong>Work From Home
                            </li>
                            <li>
                                <strong>● Requirements:</strong>
                                <ul>
                                    <li>⚬ Freshers can apply.</li>
                                    <li>⚬ Good verbal communication skills.</li>
                                    <li>
                                        ⚬ Self-motivated with a passion for achieving sales targets.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <br />
                <div data-aos="zoom-in">
                    <h2>Internship Opportunity</h2>
                    <p>
                        For share market enthusiasts, we have our internship program available to
                        get them noticed and improve their skills. You can join our technical
                        analysis courses and start your internship with us on completion. Else if
                        you are an experienced analyst, then you can apply for the internship
                        directly.
                    </p>
                </div>

                <div className="d-flex justify-content-center align-items-center">
                    <Link to="/jobs" onClick={scrollToTop}>
                        <Button3D text="Apply Now" />
                    </Link>
                </div>

                <br />
                <p className="text-center">
                    Join us at HSJN FinWisdom and be part of a team that's shaping the future of
                    financial wisdom!
                </p>
            </div>
        </>
    );
};

export default Careers;
