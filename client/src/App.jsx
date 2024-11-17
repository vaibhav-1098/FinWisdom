import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Importing components
import CreateBlog from "./admin/CreateBlog";
import Forbidden from "./components/Forbidden";
import WhatsApp from "./components/WhatsApp";
import Footer from "./partials/Footer";
import Header from "./partials/Header";
import Navbar from "./partials/Navbar";
import { authActions } from "./redux/store";
import About from "./screens/About";
import Advisory from "./screens/Advisory";
import BlogbyId from "./screens/BlogbyId";
import Blogs from "./screens/Blogs";
import Books from "./screens/Books";
import Careers from "./screens/Careers";
import Courses from "./screens/Courses";
import Disclaimer from "./screens/Disclaimer";
import FAQs from "./screens/FAQs";
import Form from "./screens/Form";
import Home from "./screens/Home";
import JobForm from "./screens/JobForm";
import Login from "./screens/Login";
import NotFound from "./screens/NotFound";
import PDFs from "./screens/PDFs";
import Register from "./screens/Register";
import Store from "./screens/Store";

const App = () => {
    const dispatch = useDispatch();
    const isLogin = useSelector((state) => state.isLogin);
    const role = useSelector((state) => state.role);

    // Initialize AOS animation
    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, []);

    // Fetch user role when page loads and whenever isLogin changes
    useEffect(() => {
        const fetchUserRole = async () => {
            try {
                if (isLogin) {
                    const email = localStorage.getItem("email"); // Get email from localStorage
                    if (email) {
                        const response = await axios.post(
                            `${import.meta.env.VITE_EXPRESS_URL}/api/user/getCurrentUser`,
                            { email }
                        );

                        if (response.data.success) {
                            dispatch(authActions.setRole(response.data.role));
                        } else {
                            console.error("Error:", response.data.msg);
                        }
                    } else {
                        console.error("No email found in localStorage.");
                    }
                } else {
                    dispatch(authActions.setRole(0)); // Reset role when not logged in
                }
            } catch (error) {
                console.error("API call failed:", error);
            }
        };

        fetchUserRole();
    }, [isLogin, dispatch]);

    return (
        <Router>
            <Header />
            <Navbar />
            <WhatsApp />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/advisory-services" element={<Advisory />} />
                <Route path="/technical-analysis-courses" element={<Courses />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/blogs/:id" element={<BlogbyId />} />
                <Route path="/books" element={<Books />} />
                <Route path="/merchandise-store" element={<Store />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/faqs" element={<FAQs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/form" element={<Form />} />
                <Route path="/pdfs" element={<PDFs />} />
                <Route path="/jobs" element={<JobForm />} />
                <Route path="/disclaimer" element={<Disclaimer />} />
                <Route path="/create-blog" element={role === 1 ? <CreateBlog /> : <Forbidden />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
            <ToastContainer />
        </Router>
    );
};

export default App;
