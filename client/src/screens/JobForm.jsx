import React, { useState } from "react";
import ProtectedRoute from "../components/ProtectedRoute";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Title from "../partials/Title";

const JobForm = () => {
    useDocumentTitle("Jobs - HSJN FinWisdom Pvt Ltd");

    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [experience, setExperience] = useState("fresher");
    const [additionalInfo, setAdditionalInfo] = useState("");
    const [resume, setResume] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("please mail us your cv");
    };

    return (
        <ProtectedRoute>
            <Title title="Job Openings Form" iconClass="bi bi-building-check" />
            <div className="container my-4">
                <form onSubmit={handleSubmit} className="needs-validation" noValidate>
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-8">
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control bg-light"
                                    placeholder="Full Name"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="tel"
                                    className="form-control bg-light"
                                    placeholder="Phone Number"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    required
                                    minLength={10}
                                    maxLength={10}
                                />
                            </div>
                            <div className="mb-3">
                                <textarea
                                    className="form-control bg-light"
                                    placeholder="Residential Address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    required
                                ></textarea>
                            </div>
                            <div className="mb-3">
                                <input
                                    type="file"
                                    className="form-control bg-light"
                                    accept=".pdf"
                                    onChange={(e) => setResume(e.target.files[0])}
                                    required
                                />
                            </div>
                            <small>Choose Job Title :</small>
                            <div className="mb-3">
                                <select
                                    className="form-select bg-light"
                                    value={jobTitle}
                                    onChange={(e) => setJobTitle(e.target.value)}
                                    required
                                >
                                    <option value="social-media-manager">
                                        Social Media Manager
                                    </option>
                                    <option value="sales-executive">Sales Executive</option>
                                    <option value="executive-assistant">Executive Assistant</option>
                                    <option value="sales-intern">Sales Intern</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <div>
                                    <div className="form-check">
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            name="experience"
                                            value="fresher"
                                            checked={experience === "fresher"}
                                            onChange={(e) => setExperience(e.target.value)}
                                        />
                                        <label className="form-check-label">I'm a fresher</label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            name="experience"
                                            value="experienced"
                                            checked={experience === "experienced"}
                                            onChange={(e) => setExperience(e.target.value)}
                                        />
                                        <label className="form-check-label">
                                            I have prior experience
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <textarea
                                    className="form-control bg-light"
                                    placeholder="Additional Information (optional)"
                                    rows={5}
                                    value={additionalInfo}
                                    onChange={(e) => setAdditionalInfo(e.target.value)}
                                ></textarea>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button type="submit" className="button">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </ProtectedRoute>
    );
};

export default JobForm;
