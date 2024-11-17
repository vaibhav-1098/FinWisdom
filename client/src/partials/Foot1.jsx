import React from "react";
import { Link, NavLink } from "react-router-dom";

const Foot1 = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className="ms-3 py-3">
            <Link onClick={scrollToTop} to="/">
                <img src="/logo/Logo.png" className="Logo" alt="logo" />
            </Link>
            <br />
            <br />
            <p className="gray">
                Empowering Traders, Enriching Lives - Your Gateway to Expertise, Education and
                Exclusive Merchandise for Stocks, Commodities, Crypto and Forex Trading.
            </p>
            <li>
                <NavLink to="/disclaimer" className="text-white underline" onClick={scrollToTop}>
                    Disclaimer and T&C
                </NavLink>
            </li>
        </div>
    );
};

export default Foot1;
