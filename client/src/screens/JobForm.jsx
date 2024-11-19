import React from "react";
import ProtectedRoute from "../components/ProtectedRoute";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Title from "../partials/Title";

const JobForm = () => {
    useDocumentTitle("Jobs - HSJN FinWisdom Pvt Ltd");

    return (
        <ProtectedRoute>
            <Title title="Job Openings Form" iconClass="bi bi-building-check" />
            <div className="d-flex justify-content-center align-items-center">
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLScrkXZmPPC8AwO0K2gRN9FBCEskjw-WjFwA1cR8im3_p136HQ/viewform?embedded=true"
                    width="640"
                    height="1720"
                >
                    Loading…
                </iframe>
            </div>
        </ProtectedRoute>
    );
};

export default JobForm;
