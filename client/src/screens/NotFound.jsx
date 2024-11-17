import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

const NotFound = () => {
    useDocumentTitle("Page Not Found - HSJN FinWisdom Pvt Ltd");

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center bg-light text-dark height">
            <div className="text-center">
                <h1 className="display-1">404</h1>
                <h2 className="lead">Page Not Found</h2>
                <p>The page you are looking for does not exist.</p>
            </div>
        </div>
    );
};

export default NotFound;
