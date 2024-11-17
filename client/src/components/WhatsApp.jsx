import React, { useState } from "react";
import { useSelector } from "react-redux";

const WhatsApp = () => {
    const isLogin = useSelector((state) => state.isLogin);

    const [isIframeVisible, setIframeVisible] = useState(false);

    const toggleIframe = () => {
        setIframeVisible((prevState) => !prevState);
    };

    return (
        <section>
            <div className="position-fixed bottom-0 end-0 m-3 wa">
                {/* top button */}
                {isLogin && (
                    <div className="mb-3" onClick={toggleIframe}>
                        <a className="btn fs-1 bg-white text-black rounded d-flex align-items-center shadow border border-3">
                            {isIframeVisible ? (
                                <i className="bi bi-x"></i>
                            ) : (
                                <i className="bi bi-chat-dots"></i>
                            )}
                        </a>
                    </div>
                )}

                {/* bottom button, visibility hidden when iframe is visible */}
                <div className={isIframeVisible ? "invisible" : ""}>
                    <a
                        href="https://wa.link/xeacbe"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-success rounded d-flex align-items-center shadow WA border-0"
                    >
                        <i className="bi bi-whatsapp fs-1 text-white"></i>
                    </a>
                </div>
            </div>

            {isIframeVisible && (
                <iframe
                    src="https://chat.vercel.ai/"
                    width="100%"
                    height="400px"
                    style={{
                        position: "fixed",
                        bottom: "0",
                        border: "none",
                        zIndex: 900,
                    }}
                />
            )}
        </section>
    );
};

export default WhatsApp;
