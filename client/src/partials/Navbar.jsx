import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { authActions } from "../redux/store";

const Navbar = () => {
    const isLogin = useSelector((state) => state.isLogin);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const Email = localStorage.getItem("email");
    const Name = localStorage.getItem("name");

    const handleLogout = () => {
        try {
            dispatch(authActions.logout());
            localStorage.clear();
            toast.warn("Logged out", { autoClose: 1000, hideProgressBar: true });
            navigate("/login");
        } catch (error) {
            toast.error("Error logging out", { autoClose: 1000, hideProgressBar: true });
        }
    };

    // Render nothing if not logged in
    if (!isLogin) return null;

    return (
        <div className="d-flex justify-content-between p-2 bg1 align-items-center">
            <div className="dropdown ms-2 ms-lg-3 text-light my-info">
                <div
                    className="d-flex align-items-center dropdown-toggle"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ cursor: "pointer" }}
                >
                    <i className="bi bi-person-circle profile fs-5"></i>
                    <span className="ms-2">Welcome {Name}</span>
                </div>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li className="dropdown-item">{Email}</li>
                    <li>
                        <button className="dropdown-item" onClick={handleLogout}>
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
