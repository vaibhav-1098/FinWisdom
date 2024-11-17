import React from "react";

const QnA = ({ Q = "this is the question", A = "this is the answer", id }) => {
    return (
        <div className="accordion mb-3">
            <div className="accordion-item">
                <button
                    className="accordion-button bg-gray"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${id}`}
                    aria-expanded="false"
                    aria-controls={`collapse${id}`}
                >
                    {Q}
                </button>
                <div
                    id={`collapse${id}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`heading${id}`}
                >
                    <div className="accordion-body justify">{A}</div>
                </div>
            </div>
        </div>
    );
};

export default QnA;
