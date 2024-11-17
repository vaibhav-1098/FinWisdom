import React from "react";
import Foot1 from "./Foot1";
import Foot2 from "./Foot2";
import Foot3 from "./Foot3";

const FootGrid = () => {
    return (
        <div className="bg1">
            <footer className="container">
            <div className="row">
                <div className="col-xs-12 col-lg-5 py-3 bg1">
                    <Foot1 />
                </div>
                <div className="col-xs-12 col-lg-4 py-3 bg1">
                    <Foot2 />
                </div>
                <div className="col-xs-12 col-lg-3 py-3 bg1">
                    <Foot3 />
                </div>
            </div>
        </footer>
        </div>
    );
};

export default FootGrid;
