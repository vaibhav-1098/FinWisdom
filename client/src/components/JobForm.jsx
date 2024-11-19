import React, { useState } from "react";
import ProtectedRoute from "../components/ProtectedRoute";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Title from "../partials/Title";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { userApplied } from "../redux/slice/authSlice";


const JobForm = () => {
    useDocumentTitle("Jobs - HSJN FinWisdom Pvt Ltd");
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [experience, setExperience] = useState("fresher");
    const [additionalInfo, setAdditionalInfo] = useState("");
    const [resume, setResume] = useState(null);

    console.log("Job title: " + jobTitle);
    


    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const formData = new FormData();
        formData.append("fullName", fullName);
        formData.append("phone", phoneNumber);
        formData.append("email", email);
        formData.append("address", address);
        formData.append("jobTitle", jobTitle);
        formData.append("additionalInfo", additionalInfo);
        formData.append("resume", resume);
    
        try {
            const response = await axios.post(`${import.meta.env.VITE_EXPRESS_URL}/api/user/apply`, formData, {
                headers: {
                    "Content-Type": 'multipart/form-data',
                },
            });
    
            console.log("Data of uploaded job: ", response.data);
            dispatch(userApplied())
            toast.success("Applied Successfully");
            navigate("/");
    
        } catch (error) {
            console.log("Error:while applying for job ", error);
            
            // Handle error responses from the API
            if (error.response) {
                // The request was made, but the server responded with a status code
                // that falls out of the range of 2xx
                const errorMessage = error.response.data.message || "An error occurred. Please try again.";
                toast.error(errorMessage);
                console.error("Error Response: ", error.response.data);
            } else if (error.request) {
                // The request was made but no response was received
                toast.error("No response received from the server.");
                console.error("Error Request: ", error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                toast.error("Error in sending request: " + error.message);
                console.error("Error Message: ", error.message);
            }
        }
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
                                    type="email"
                                    className="form-control bg-light"
                                    placeholder="E-mail Address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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
                                     <option value="">Select an option</option>
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
                                    placeholder="Any Additional Information"
                                    value={additionalInfo}
                                    onChange={(e) => setAdditionalInfo(e.target.value)}
                                    required
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