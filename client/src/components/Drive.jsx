import React from "react";

const Drive = ({
    read,
    download,
    name = "Name of Book",
    author = "Author Name",
    lineBreak = true,
}) => {
    return (
        <div className="card mb-4 p-3 border-3 drive">
            <h4 className="card-title text-center fw-normal">{name}</h4>
            <p className="card-text text-center">
                <i>~ {author}</i>
                {lineBreak && <div className="gap"></div>}
            </p>
            <div className="d-flex justify-content-center align-items-center gap-3 btn-group">
                <a href={read} target="_blank">
                    <button className="bg1 text-white">Read</button>
                </a>
                <a href={download} target="_blank">
                    <button className="bg2">Download</button>
                </a>
            </div>
        </div>
    );
};

export default Drive;
