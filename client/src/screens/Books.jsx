import React from "react";
import { Link } from "react-router-dom";
import Button3D from "../components/Button3D";
import Numbers from "../components/Numbers";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Heading from "../partials/Heading";

const Books = () => {
    useDocumentTitle("e-Books - HSJN FinWisdom Pvt Ltd");

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <Heading heading="Free E-Books" image="/illustrations/7.png" />

            <section className="container text-muted">
                <p className="justify" data-aos="slide-up">
                    <span className="text-primary fs-2">W</span>elcome to the
                    <span className="text-primary">HSJN FinWisdom</span> Free Resources Hub! Empower
                    your trading journey with our curated collection of valuable insights,
                    educational content, and downloadable resources.
                </p>

                <div>
                    <h2 className="fs-3">1. E-books: Unlock the Power of Knowledge</h2>
                    <p className="justify">
                        Unlock the secrets of successful trading with our curated collection of
                        e-books authored by industry luminaries. From proven strategies to market
                        analysis, these e-books are invaluable resources for traders. Access is
                        granted exclusively to registered members.
                    </p>
                    <Link to="/pdfs" onClick={scrollToTop}>
                        <Button3D text="Get free e-Books" />
                    </Link>
                </div>
                <br />
                <br />
                <div>
                    <h2 className="fs-3">2. Educational Content: Learn, Engage, Succeed</h2>
                    <p className="justify">
                        Delve into the world of trading education through our dynamic YouTube
                        channel. Subscribe now to access a treasure trove of video tutorials, market
                        insights, and educational content. Stay informed and enhance your trading
                        skills with content curated just for you.
                    </p>
                    <a href="https://www.youtube.com/@HSJNFinWisdom" className="button jelly text-decoration-none text-black" target="_blank">
                        Subscribe to our YouTube channel
                    </a>
                </div>
                <br />
                <br />
                <div>
                    <h2 className="fs-3">3. Blog: Stay Ahead of the Curve</h2>
                    <p className="justify">
                        Stay informed with our regularly updated blog. Our experts share valuable
                        perspectives, trading tips, and the latest market trends. Dive into
                        insightful articles that provide actionable insights, ensuring you're always
                        one step ahead in the fast-paced world of trading.
                    </p>
                    <Link to="/blogs" onClick={scrollToTop}>
                        <Button3D text="Read our Blogs" />
                    </Link>
                </div>
                <br />
                <br />
            </section>

            <Numbers />
        </>
    );
};

export default Books;
