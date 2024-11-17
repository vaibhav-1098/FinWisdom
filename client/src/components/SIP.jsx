import React, { useState } from "react";

const SIP = () => {
    const [amount, setAmount] = useState("");
    const [returnRate, setReturnRate] = useState(10);
    const [investmentPeriod, setInvestmentPeriod] = useState("");
    const [result, setResult] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const totalAmount = amount * investmentPeriod * 12;
        const totalReturn = Math.round((totalAmount * returnRate * investmentPeriod) / 100);
        setResult(totalReturn);
    };

    const resetResult = () => {
        setResult(null);
    };

    const formatToIndianNumber = (number) => {
        return new Intl.NumberFormat("en-IN").format(number);
    };

    return (
        <div className="container mt">
            <h2 className="text-center text-muted">SIP Calculator</h2>
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="mb-3">
                    <label className="form-label">Amount (₹):</label>
                    <input
                        type="number"
                        className="form-control bg-light text-dark"
                        min="0"
                        value={amount}
                        onChange={(e) => {
                            setAmount(e.target.value);
                            resetResult();
                        }}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Expected Return PA (%):</label>
                    <input
                        type="range"
                        className="w-100 bg-light text-dark"
                        min="1"
                        max="30"
                        value={returnRate}
                        onChange={(e) => {
                            setReturnRate(e.target.value);
                            resetResult();
                        }}
                    />
                    <span>{returnRate}%</span>
                </div>
                <div className="mb-3">
                    <label className="form-label">Investment Period (years):</label>
                    <input
                        type="number"
                        className="form-control bg-light text-dark"
                        value={investmentPeriod}
                        onChange={(e) => {
                            setInvestmentPeriod(e.target.value);
                            resetResult();
                        }}
                        min="0"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary bg1 hover:bg2">
                    Calculate
                </button>
            </form>
            <h5 className="fw-normal darkblue">
                Total Expected Return: ₹ {result !== null ? formatToIndianNumber(result) : "--"}
            </h5>
        </div>
    );
};

export default SIP;
