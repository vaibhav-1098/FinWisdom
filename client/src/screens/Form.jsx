import React, { useState } from "react";
import { Link } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Title from "../partials/Title";

const Form = () => {
    useDocumentTitle("Enquiry Form - HSJN FinWisdom Pvt Ltd");

    const [name, setName] = useState("");
    const [occupation, setOccupation] = useState("");
    const [enquiry, setEnquiry] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create the mailto link
        const subject = encodeURIComponent("Enquiry regarding Technical Analysis Courses");
        const body = encodeURIComponent(
            `Hello HSJN FinWisdom Team,
            I hope this message finds you well. I am reaching out to inquire about the Technical Analysis Courses you offer.
            • Name: ${name}
            • Occupation: ${occupation}
            • Enquiry: ${enquiry}
            • Ph.: ${phoneNumber}
        
            Thank you for your assistance. I look forward to your positive response and am eager to learn more about your offerings.
        `
        );
        const mailtoLink = `mailto:${encodeURIComponent(
            "hsjnfinwisdom@gmail.com"
        )}?subject=${subject}&body=${body}`;

        window.location.href = mailtoLink;

        // Reset form fields
        setName("");
        setOccupation("");
        setEnquiry("");
        setPhoneNumber("");
    };

    return (
        <>
            <Title title="Enquiry Form" iconClass="bi bi-chat-left-dots" />
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-5 col-10">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    value={name}
                                    minLength="2"
                                    maxLength="20"
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group mt-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Occupation"
                                    minLength="3"
                                    maxLength="25"
                                    value={occupation}
                                    onChange={(e) => setOccupation(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group mt-3">
                                <textarea
                                    className="form-control"
                                    placeholder="Enquiry About Technical Analysis Courses"
                                    rows={4}
                                    value={enquiry}
                                    onChange={(e) => setEnquiry(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group mt-3">
                                <input
                                    type="tel"
                                    className="form-control"
                                    placeholder="Phone Number"
                                    pattern="\d{10}"
                                    title="10 digits"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn bg1 btn-primary mt-3 w-100">
                                Submit
                            </button>
                            <p className="text-center mt-3">
                                <Link to="/courses" onClick={scrollToTop}>
                                    Go back instead?
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
                <div className="space"></div>
            </div>
        </>
    );
};

export default Form;
