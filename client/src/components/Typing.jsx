import React from "react";
import Typewriter from "typewriter-effect";

const Typing = () => {
    return (
        <div>
            <h3 className="fw-normal text-muted">
                <Typewriter
                    options={{
                        strings: ["Demat Account", "Technical Analysis Courses"],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </h3>
        </div>
    );
};

export default Typing;
