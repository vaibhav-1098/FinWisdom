import React from "react";
import Confetti from "../components/Confetti";
import Table from "../components/Table";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Heading from "../partials/Heading";

const Demat = () => {
    useDocumentTitle("Demat Account - HSJN FinWisdom Pvt Ltd");

    return (
        <>
            <Heading heading="Demat Account" image="/illustrations/4.png" />
            <Confetti />
            <div className="container">
                <h1 className="text-muted text-center">
                    Authorized Person - ICICI Securities Limited
                </h1>

                <p className="text-muted justify">
                    As a registered authorized person of ICICI Securities, we bring you a seamless
                    experience in demat account services. ICICI Securities provides a secure and
                    reliable platform for your investment needs. This means you gain access to the
                    advanced trading platforms of ICICI Securities, ensuring you stay at the
                    forefront of market opportunities. Should you ever encounter any challenges,
                    rest assured that HSJN FinWisdom is at your service, ready to assist and enhance
                    your trading journey.
                </p>

                <div className="d-flex justify-content-center align-items-center">
                    <a
                        href="https://secure.icicidirect.com/accountopening?rmcode=HGTIN090&ibempcd=HGTIN090"
                        className="button jelly text-decoration-none text-black"
                        target="_blank"
                    >
                        Sign up!
                    </a>
                </div>

                <div className="ribbon">Benefits of demat account with ICICI Securities</div>

                <Table />

                <h2 className="text-muted">Why ICICI Direct?</h2>

                <p className="text-muted justify">
                    ICICI Direct stands as one of India's largest retail brokers and distributors of
                    financial products, earning the trust of approximately 80 lakh customers over
                    its two-decade-long service history. Recognized for its commitment, ICICI Direct
                    has transformed the landscape of online investing. This platform provides a
                    seamless and trouble-free electronic trading experience through a trading
                    account. Offering a comprehensive range of more than 50 products and services,
                    including Equity, Mutual Funds, Derivatives, Futures and Options, Currency,
                    Commodity, ETF, Insurance, IPOs, Corporate Fixed Deposits, Loans, NPS, Wealth
                    Management, Corporate Services, NRI Services, Portfolio Management Services,
                    Global Investment, Financial Learning, Tax Services, and more, ICICI Direct aims
                    to assist you in realizing your financial objectives, all conveniently
                    accessible under one roof.
                </p>

                <hr />

                <small className="text-muted">
                    <span className="text-black">Note:</span> The information provided on this page
                    is sourced from{" "}
                    <a href="https://www.icicidirect.com" target="_blank">
                        https://www.icicidirect.com
                    </a>{" "}
                    and we do not claim ownership of this content nor do we guarantee its accuracy.
                    The details mentioned here are based on the information available on ICICI
                    Direct's public website and may be subject to change. For the most up-to-date
                    and comprehensive information, please visit{" "}
                    <a href="https://www.icicidirect.com" target="_blank">
                        https://www.icicidirect.com
                    </a>
                    .
                </small>
            </div>
        </>
    );
};

export default Demat;
