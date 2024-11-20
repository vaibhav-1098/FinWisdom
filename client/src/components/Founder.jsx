import React from "react";

const Founder = () => {
    return (
        <div className="container my-4" data-aos="zoom-in">
            <hr />
            <h2 className="text-center founder-heading">Our Founder</h2>
            <br /><br /><br />
            <div className="position-relative">
                <div className="circle" style={{
                    backgroundImage: "url('/illustrations/hg.png')",
                }}></div>
            </div>
            <div className="border p-3 px-5 border-success-subtle rounded border-3">
                <br /><br /><br />
                <div className="text-center fs-4 name">Himanshu Ghangas</div>
                <div className="text-center fs-5 text-muted">(Founder & CEO)</div>
                <p className="text-muted py-3 justify">
                    Meet the visionary behind HSJN FinWisdom, Mr. Himanshu Ghangas. His passion for
                    financial education and unwavering commitment to empowering individuals have
                    been instrumental in shaping our journey. With a wealth of experience in
                    technical analysis and a keen understanding of market dynamics, Himanshu is
                    dedicated to creating a platform where traders can thrive and achieve their
                    financial goals.
                </p>
            </div>
            <br />
            <hr />
        </div>
    );
};

export default Founder;
