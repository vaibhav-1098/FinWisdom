import React from "react";

const Title = ({ title = "Title", iconClass }) => {
    return (
        <>
            <h2 className="bg2 text-center p-5">
                {title} <i className={iconClass}></i>
            </h2>
        </>
    );
};

export default Title;
