import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Title from "../partials/Title";
import { authActions } from "../redux/store";

// OTP Form Component
const OTPForm = ({ handleOtpSubmit, loading }) => {
    useDocumentTitle("Register - HSJN FinWisdom Pvt Ltd");

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const [otp, setOtp] = useState("");

    return (
        <div>
            <form
                onSubmit={(e) => handleOtpSubmit(e, otp)}
                className="bg-gray-100 p-6 rounded shadow-md w-full max-w-sm mx-auto"
            >
                <div className="form-group">
                    <input
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        type="number"
                        className="form-control"
                        placeholder="Enter OTP"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="btn bg1 btn-success mt-3 w-100 mb-5"
                    disabled={loading}
                >
                    {loading ? "Verifying..." : "Verify OTP"}
                </button>
                <p className="mt-4 text-center">
                    <Link
                        to="/login"
                        onClick={scrollToTop}
                        className="text-blue-600 hover:underline"
                    >
                        Go back instead ?
                    </Link>
                </p>
            </form>
        </div>
    );
};

// Register Component
const Register = () => {
    useDocumentTitle("Register - HSJN FinWisdom Pvt Ltd");

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLogin = useSelector((state) => state.isLogin);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [showOtpForm, setShowOtpForm] = useState(false);
    const [token, setToken] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (isLogin) {
            navigate("/");
        }
    }, [isLogin, navigate]);

    // Registration Form Submission
    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_EXPRESS_URL}/api/user/register`,
                { name, email, password, phone }
            );
            const data = response.data;
            if (data?.success) {
                setShowOtpForm(true);
                setToken(data.token);
                toast.success(data.msg, { autoClose: 1000, hideProgressBar: true });
            }
        } catch (error) {
            setName("");
            setEmail("");
            setPassword("");
            setPhone(""); // Reset phone field on error
            toast.error(error.response?.data?.msg, { autoClose: 1000, hideProgressBar: true });
        } finally {
            setLoading(false);
        }
    };

    // OTP Form Submission
    const handleOtpSubmit = async (e, otp) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_EXPRESS_URL}/api/user/verifyOtp`,
                { token, otp }
            );
            const data = response.data;
            if (data?.success) {
                toast.success(data.msg, { autoClose: 1000, hideProgressBar: true });
                localStorage.setItem("token", data.token);
                localStorage.setItem("name", data.newUser.name);
                localStorage.setItem("email", data.newUser.email);
                dispatch(authActions.login());
                navigate("/technical-analysis-courses");
            }
        } catch (error) {
            toast.error(error.response?.data?.msg, { autoClose: 1000, hideProgressBar: true });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Title title="Register" iconClass="bi bi-person-plus-fill" />

            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-5 col-10">
                        {!showOtpForm ? (
                            <form onSubmit={handleRegisterSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Full Name"
                                        value={name}
                                        minLength={3}
                                        maxLength={20}
                                        onChange={(e) => setName(e.target.value)}
                                        pattern=".*[a-zA-Z].*"
                                        required
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="E-mail"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Password"
                                        minLength={8}
                                        maxLength={50}
                                        onPaste={(e) => e.preventDefault()}
                                        onCopy={(e) => e.preventDefault()}
                                        pattern="^(?=.*[a-zA-Z])(?=.*[0-9]).+$"
                                        title="Password must contain at least one letter and one digit."
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Phone Number"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        pattern="[0-9]{10}"
                                        maxLength={10}
                                        title="Phone number must be 10 digits"
                                        required
                                    />
                                </div>
                                <div className="mt-2">
                                    <input type="checkbox" required />
                                    <span>
                                        {" "}
                                        I have read the disclaimer and agree to all the{" "}
                                        <Link
                                            to="/disclaimer"
                                            className="text-decoration-none"
                                            onClick={scrollToTop}
                                        >
                                            terms and conditions
                                        </Link>
                                    </span>
                                </div>
                                <button
                                    type="submit"
                                    className="btn bg1 btn-success mt-3 w-100"
                                    disabled={loading}
                                >
                                    {loading ? "Submitting..." : "Submit"}
                                </button>
                            </form>
                        ) : (
                            <OTPForm handleOtpSubmit={handleOtpSubmit} loading={loading} />
                        )}
                        {!showOtpForm && (
                            <div className="text-center mt-3">
                                <p>
                                    Already have an account?{" "}
                                    <Link to="/login" onClick={scrollToTop}>
                                        Login instead
                                    </Link>
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <p className="text-muted container justify mt-3">
                Create your account and start enjoying all the benefits we offer. Get access to
                personalized content, exclusive updates, and seamless experiences tailored just for
                you. Your privacy is our priority, and signing up is quick and easy. Join us now and
                be part of something special!
            </p>
            <div className="space"></div>
        </>
    );
};

export default Register;
