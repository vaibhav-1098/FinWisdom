import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = () => {
    const handleNavLinkClick = () => {
        const navbarToggler = document.querySelector(".navbar-toggler");
        const isSmallScreen = window.innerWidth < 992;

        // Scroll to the top
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        // Collapse the navbar on small screens
        if (navbarToggler && isSmallScreen && navbarToggler.offsetParent !== null) {
            navbarToggler.click();
        }
    };

    const isLogin = useSelector((state) => state.isLogin);
    const role = useSelector((state) => state.role);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/" onClick={scrollToTop}>
                    <img src="/logo/Logo.png" className="logo" alt="logo" />
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbar-collapse"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse justify-content-center"
                    id="navbar-collapse"
                >
                    <ul className="navbar-nav" id="nav-links">
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-link text-black ${isActive ? "active-class" : ""}`
                                }
                                to="/"
                                end
                                onClick={handleNavLinkClick}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-link text-black ${isActive ? "active-class" : ""}`
                                }
                                to="/about-us"
                                onClick={handleNavLinkClick}
                            >
                                About Us
                            </NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-link text-black dropdown-toggle ${
                                        isActive ? "active-class" : ""
                                    }`
                                }
                                to="/services"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Services
                            </NavLink>
                            <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                                <li>
                                    <NavLink
                                        className={({ isActive }) =>
                                            `dropdown-item ${isActive ? "active-class" : ""}`
                                        }
                                        to="/advisory-services"
                                        onClick={handleNavLinkClick}
                                    >
                                        Advisory Services
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className={({ isActive }) =>
                                            `dropdown-item ${isActive ? "active-class" : ""}`
                                        }
                                        to="/technical-analysis-courses"
                                        onClick={handleNavLinkClick}
                                    >
                                        Technical Analysis Courses
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-link text-black dropdown-toggle ${
                                        isActive ? "active-class" : ""
                                    }`
                                }
                                to="/resources"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Free Resources
                            </NavLink>
                            <ul className="dropdown-menu" aria-labelledby="resourcesDropdown">
                                <li>
                                    <NavLink
                                        className={({ isActive }) =>
                                            `dropdown-item ${isActive ? "active-class" : ""}`
                                        }
                                        to="/blogs"
                                        onClick={handleNavLinkClick}
                                    >
                                        Blogs
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className={({ isActive }) =>
                                            `dropdown-item ${isActive ? "active-class" : ""}`
                                        }
                                        to="/books"
                                        onClick={handleNavLinkClick}
                                    >
                                        e-Books
                                    </NavLink>
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item"
                                        href="https://www.youtube.com/@HSJNFinWisdom"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={handleNavLinkClick}
                                    >
                                        YouTube
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item"
                                        href="https://t.me/HSJNFinWisdom"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={handleNavLinkClick}
                                    >
                                        Telegram Channel
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-link text-black ${isActive ? "active-class" : ""}`
                                }
                                to="/merchandise-store"
                                onClick={handleNavLinkClick}
                            >
                                Merchandise Store
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-link text-black ${isActive ? "active-class" : ""}`
                                }
                                to="/careers"
                                onClick={handleNavLinkClick}
                            >
                                Careers
                            </NavLink>
                        </li>
                        {role === 1 && (
                            <li className="nav-item dropdown">
                                <NavLink
                                    className={({ isActive }) =>
                                        `nav-link text-white dropdown-toggle ${
                                            isActive ? "active-class" : ""
                                        }`
                                    }
                                    to="/resources"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Dashboard
                                </NavLink>
                                <ul className="dropdown-menu" aria-labelledby="resourcesDropdown">
                                    <li>
                                        <NavLink
                                            className={({ isActive }) =>
                                                `dropdown-item ${isActive ? "active-class" : ""}`
                                            }
                                            to="/create-blog"
                                            onClick={handleNavLinkClick}
                                        >
                                            Create Blogs
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                        )}
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-link text-black ${isActive ? "active-class" : ""}`
                                }
                                to="/faqs"
                                onClick={handleNavLinkClick}
                            >
                                FAQs
                            </NavLink>
                        </li>
                    </ul>

                    {/* Login and Register buttons on the right */}
                    <div id="nav-buttons">
                        {!isLogin ? (
                            <li className="nav-item d-flex">
                                <NavLink
                                    to="/register"
                                    className={({ isActive }) =>
                                        `btn account-btn me-2 ${isActive ? "LogBtnActive" : ""}`
                                    }
                                    onClick={handleNavLinkClick}
                                >
                                    Register
                                </NavLink>
                                <NavLink
                                    to="/login"
                                    className={({ isActive }) =>
                                        `btn account-btn ${isActive ? "LogBtnActive" : ""}`
                                    }
                                    onClick={handleNavLinkClick}
                                >
                                    Login
                                </NavLink>
                            </li>
                        ) : (
                            <div>
                                <NavLink
                                    to="/pdfs"
                                    id="pdf-btn"
                                    className={({ isActive }) =>
                                        `btn btn-secondary account-btn me-2 ${
                                            isActive ? "highlight" : ""
                                        }`
                                    }
                                    onClick={handleNavLinkClick}
                                >
                                    <div>e-books PDFs</div>
                                </NavLink>
                            </div>
                        )}
                    </div>
                    {/*  */}
                </div>
            </div>
        </nav>
    );
};

export default Header;
