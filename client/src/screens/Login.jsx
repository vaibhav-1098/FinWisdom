import axios from "axios";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Title from "../partials/Title";
import { authActions } from "../redux/store";

const Login = () => {
    useDocumentTitle("Login - HSJN FinWisdom Pvt Ltd");

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isLogin = useSelector((state) => state.isLogin);

    useEffect(() => {
        if (isLogin) {
            navigate("/");
        }
    }, [isLogin, navigate]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const decoded = jwtDecode(token);
            const currentTime = Date.now() / 1000;
            if (decoded.exp < currentTime) {
                localStorage.clear();
                dispatch(authActions.logout());
                navigate("/login");
            }
        }
    }, [dispatch, navigate]);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_EXPRESS_URL}/api/user/login`,
                { email, password },
            );
            const data = response.data;
            if (data?.success) {
                toast.success(data.msg, { autoClose: 1000, hideProgressBar: true });
                localStorage.setItem("token", data.token);
                localStorage.setItem("name", data.existingUser.name);
                localStorage.setItem("email", data.existingUser.email);
                dispatch(authActions.login());
                navigate("/");
            }
        } catch (error) {
            setEmail("");
            setPassword("");
            toast.error(error.response?.data?.msg, { autoClose: 1000, hideProgressBar: true });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Title title="Login" iconClass="bi bi-person-bounding-box" />

            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-5 col-10">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="E-mail"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    disabled={loading}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    onPaste={(e) => e.preventDefault()}
                                    onCopy={(e) => e.preventDefault()}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    disabled={loading}
                                />
                            </div>
                            <button
                                type="submit"
                                className={`btn bg1 btn-success mt-3 w-100 ${
                                    loading ? "disabled" : ""
                                }`}
                                disabled={loading}
                            >
                                {loading ? "Loading..." : "Submit"}
                            </button>
                        </form>
                        <div className="text-center mt-3">
                            <p>
                                New user?{" "}
                                <Link to="/register" onClick={scrollToTop}>
                                    Register instead
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <p className="text-muted container justify mt-5">
                Join us today! Create an account to unlock exclusive features, stay updated, and
                personalize your experience. It only takes a few moments, and we're excited to have
                you on board. Let's get started!
            </p>
            <div className="space"></div>
        </>
    );
};

export default Login;
