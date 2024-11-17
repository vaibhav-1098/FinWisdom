import React from "react";
import Button3D from "../components/Button3D";

const ServiceBox = ({
    link,
    heading = "Name of Service",
    text = "Button",
    p = "Enter a brief description of your service here. Highlight the key features and benefits that set your service apart. Ensure to include a call to action, inviting users to explore more or take the next step with your offering.",
}) => {
    return (
        <div className="bg-gray py-4 rounded service-box" data-aos="flip-up">
            <h3 className="text-center text-muted">{heading}</h3>
            <p className="justify text-muted mx-4">{p}</p>
            <div className="d-flex justify-content-center align-items-center small-btn">
                <Button3D text={text} link={link} />
            </div>
        </div>
    );
};

export default ServiceBox;
