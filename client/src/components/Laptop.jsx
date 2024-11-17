import React from "react";

const Laptop = () => {
    return (
        <div className="container">
            <div className="container my-2">
                <div className="row">
                    <div className="col-12 col-lg-6 bg">
                        <div className="pc position-relative overflow-hidden">
                            <img alt="pc" src="/logo/pc.png" />
                            <img alt="pc" id="trade" src="/logo/trading.gif" />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center pc-heading">
                        <h1 className="text-center">
                            Navigate the Stock Market's complexities effortlessly
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Laptop;
