import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

const Forbidden = () => {
    useDocumentTitle("Forbidden - HSJN FinWisdom Pvt Ltd");

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center bg-light text-dark height">
            <div className="text-center">
                <h1 className="display-1">403</h1>
                <h2 className="lead">Forbidden</h2>
                <p>You do not have permission to access this page.</p>
            </div>
        </div>
    );
};

export default Forbidden;
