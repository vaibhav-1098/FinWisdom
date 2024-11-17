import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Popup = () => {
    const [hasOpened, setHasOpened] = useState(() => {
        const storedData = JSON.parse(localStorage.getItem("popupData"));
        if (storedData) {
            const { opened, timestamp } = storedData;
            const currentTime = Date.now();
            const twelveHours = 12 * 60 * 60 * 1000; // 12 hours in milliseconds

            return opened && currentTime < timestamp + twelveHours;
        }
        return false;
    });

    useEffect(() => {
        const handleScroll = () => {
            const mainScreenHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPosition = window.scrollY;

            if (scrollPosition >= mainScreenHeight * 0.8 && !hasOpened) {
                const modalButton = document.getElementById("triggerModalButton");
                if (modalButton) {
                    modalButton.click();
                    setHasOpened(true);

                    localStorage.setItem(
                        "popupData",
                        JSON.stringify({
                            opened: true,
                            timestamp: Date.now(), 
                        })
                    );
                }
            }
        };

        // Attach the scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [hasOpened]); // Add hasOpened as a dependency

    return (
        <>
            <div className="text-center my-3">
                <button
                    id="triggerModalButton"
                    type="button"
                    className="btn btn-primary d-none"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                >
                    Launch demo modal
                </button>
            </div>

            {/* Modal */}
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body justify">
                            <div>
                                <div className="text-center fw-semibold fs-4">
                                    Exclusive Limited Time Offer!
                                </div>
                                <div className="text-center lights">20% OFF</div>
                                <p>
                                    Unlock your trading potential with our premium technical
                                    analysis courses. For a short time, enjoy a special discount of
                                    up to 20% on all our courses.
                                </p>
                                <p>
                                    Enhance your skills, make informed decisions, and elevate your
                                    trading journey with us. Avail the discount now!
                                </p>
                            </div>
                        </div>
                        <div className="modal-footer justify-content-center">
                            <Link
                                to="/technical-analysis-courses"
                                className="button text-black text-decoration-none"
                                onClick={() => {
                                    const modalElement = document.getElementById("exampleModal");
                                    const modal = bootstrap.Modal.getInstance(modalElement);
                                    if (modal) modal.hide();
                                }}
                            >
                                Avail Discount
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Popup;
