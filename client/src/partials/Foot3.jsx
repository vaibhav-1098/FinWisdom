import React from "react";

const Foot3 = () => {
    return (
        <>
            <div className="text-white fs-5 ms-4 pb-2">Contact Us</div>
            <p className="ms-4">
                <a href="tel:+919996067333" className="text-decoration-none gray" target="_blank">
                    📞 +91 99960 67333
                </a>
                <br />
                <a
                    href="mailto:contact@hsjnfinwisdom.com"
                    className="text-decoration-none gray"
                    target="_blank"
                >
                    ✉️ contact@hsjnfinwisdom.com
                </a>
            </p>
            <br />
            <div className="text-white fs-5 ms-4 pb-2">Our Social Media</div>
            <div className="text-white ms-4 pb-3">
                <a
                    href="https://www.youtube.com/@HSJNFinWisdom"
                    target="_blank"
                    className="text-white hover-black mx-2"
                >
                    <i className="bi bi-youtube fs-3"></i>
                </a>
                <a
                    href="https://x.com/HSJNFinWisdom"
                    target="_blank"
                    className="text-white hover-black mx-2"
                >
                    <i className="bi bi-twitter-x fs-3"></i>
                </a>
                <a
                    href="https://www.instagram.com/HSJNFinWisdom"
                    target="_blank"
                    className="text-white hover-black mx-2"
                >
                    <i className="bi bi-instagram fs-3"></i>
                </a>
                <br />
                <a
                    href="https://t.me/HSJNFinWisdom"
                    target="_blank"
                    className="text-white hover-black mx-2"
                >
                    <i className="bi bi-telegram fs-3"></i>
                </a>
                <a
                    href="https://www.facebook.com/HSJNFinWisdom"
                    target="_blank"
                    className="text-white hover-black mx-2"
                >
                    <i className="bi bi-facebook fs-3"></i>
                </a>
                <a
                    href="https://www.linkedin.com/in/himanshughangas"
                    target="_blank"
                    className="text-white hover-black mx-2"
                >
                    <i className="bi bi-linkedin fs-3"></i>
                </a>
            </div>
        </>
    );
};

export default Foot3;
