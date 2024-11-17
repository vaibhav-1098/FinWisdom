import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const Online = ({ number, duration, countIncrease, icon, text, color, link }) => {
    const [startCounting, setStartCounting] = useState(false);
    const onlineRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartCounting(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.5,
            }
        );

        if (onlineRef.current) {
            observer.observe(onlineRef.current);
        }

        return () => {
            if (onlineRef.current) {
                observer.unobserve(onlineRef.current);
            }
        };
    }, []);

    return (
        <a href={link} target="_blank" className="text-decoration-none text-black">
            <div
                ref={onlineRef}
                className="container text-center p-2 border border-primary rounded"
            >
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="fs-4">{text}</div>
                    <div className="d-flex justify-content-center align-items-center">
                        {startCounting && (
                            <>
                                <i className={`bi ${icon} ${color} fs-3`}></i>
                                <CountUp
                                    start={0}
                                    end={number}
                                    duration={duration}
                                    className="text-primary fs-3 fw-normal mx-1"
                                    formattingFn={(value) =>
                                        Math.floor(value / countIncrease) * countIncrease
                                    }
                                />
                                <span className="text-primary fs-3"> +</span>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </a>
    );
};

export default Online;
