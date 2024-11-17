import axios from "axios";
import React, { useEffect, useState } from "react";

const Currency = () => {
    const [currencies, setCurrencies] = useState([]);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("INR");
    const [amount, setAmount] = useState(1);
    const [convertedAmount, setConvertedAmount] = useState(0);

    // Allowed currencies
    const allowedCurrencies = ["INR", "USD", "JPY", "GBP", "EUR"];

    useEffect(() => {
        const fetchCurrencies = async () => {
            try {
                const response = await axios.get("https://api.exchangerate-api.com/v4/latest/USD");
                const filteredCurrencies = Object.keys(response.data.rates).filter((currency) =>
                    allowedCurrencies.includes(currency)
                );
                setCurrencies(filteredCurrencies);
            } catch (error) {
                console.error("Error fetching currency data:", error);
            }
        };

        fetchCurrencies();
    }, []);

    useEffect(() => {
        const handleConvert = async () => {
            try {
                const response = await axios.get(
                    `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
                );
                const rate = response.data.rates[toCurrency];
                setConvertedAmount(amount * rate);
            } catch (error) {
                console.error("Error converting currency:", error);
            }
        };

        handleConvert();
    }, [fromCurrency, toCurrency, amount]);

    return (
        <div className="container">
            <h2 className="text-center text-muted">Currency Converter</h2>
            <div className="mb-3">
                <label className="form-label">Amount:</label>
                <input
                    type="number"
                    className="form-control bg-light text-dark"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">From Currency:</label>
                <select
                    className="form-select bg-light text-dark"
                    value={fromCurrency}
                    onChange={(e) => setFromCurrency(e.target.value)}
                >
                    {currencies.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
            <div className="mb-3">
                <label className="form-label">To Currency:</label>
                <select
                    className="form-select bg-light text-dark"
                    value={toCurrency}
                    onChange={(e) => setToCurrency(e.target.value)}
                >
                    {currencies.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
            <h5 className="fw-normal darkblue">
                {amount} {fromCurrency} = {convertedAmount.toFixed(2)} {toCurrency}
            </h5>
        </div>
    );
};

export default Currency;
