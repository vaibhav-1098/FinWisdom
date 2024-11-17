import React from "react";
import { useSelector } from "react-redux";

const Price = ({
    title = "Heading",
    originalPrice = 1000,
    discountedPrice = 800,
    description = "a brief description here",
    link = "https://google.com",
}) => {
    const isLogin = useSelector((state) => state.isLogin);

    return (
        <div className="d-flex justify-content-center align-items-center flex-column w-100 text-white price-card">
            <div className="bg-primary fw-semibold p-2 fs-5 w-100 text-center text-white rounded-top price-title">
                {title}
            </div>
            <div className="bg-info w-100 card-body text-center d-flex justify-content-center align-items-center flex-column rounded-0">
                <div className={`fs-3 text-danger fw-lighter ${!isLogin ? "blurredTextSm" : ""}`}>
                    <s>₹ {originalPrice}</s>
                </div>
                <div className={`fs-1 ${!isLogin ? "blurredText" : ""}`}>₹ {discountedPrice}</div>
                <div className="mt-2 fs-5 discount">20% OFF</div>
                <div>{description}</div>
            </div>
            {isLogin ? (
                <a
                    href={link}
                    target="_blank"
                    className="p-2 bg-black text-white text-decoration-none mutedButton w-100 text-center rounded-bottom"
                    style={{
                        cursor: "pointer",
                    }}
                >
                    Enroll Now
                </a>
            ) : (
                <div
                    className="p-2 bg-black text-white mutedButton w-100 text-center rounded-bottom"
                    style={{
                        cursor: "not-allowed",
                    }}
                >
                    Login First
                </div>
            )}
        </div>
    );
};

export default Price;
