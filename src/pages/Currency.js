import React, { useState, useEffect } from "react";

const BASE_URL = "https://latest.currency-api.pages.dev/v1/currencies/eur.json";

function Currency() {
  const [currencyData, setCurrencyData] = useState({});
  const [fromCurrency, setFromCurrency] = useState("eur");
  const [toCurrency, setToCurrency] = useState("usd");
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState("");

  const allowedCurrencies = ["eur", "usd", "czk", "pln", "huf"];

  
  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setCurrencyData(data.eur);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    fetchCurrencyData();
  }, []);

  // Prepočítanie hodnoty
  useEffect(() => {
    if (currencyData[fromCurrency] && currencyData[toCurrency]) {
      const fromRate = fromCurrency === "eur" ? 1 : currencyData[fromCurrency];
      const toRate = toCurrency === "eur" ? 1 : currencyData[toCurrency];
      const result = (amount / fromRate) * toRate;
      setConvertedAmount(result.toFixed(2));
    }
  }, [amount, fromCurrency, toCurrency, currencyData]);

  return (
    <div>
      <h1>Currency Exchange</h1>

    
      <div>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </label>
        <label>
          From:
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}>

            {allowedCurrencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </label>
      </div>


      <div>
        <label>
          Converted Amount:
          <input type="number" value={convertedAmount} readOnly />
        </label>
        <label>
          To:
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}>

            {allowedCurrencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
}

export default Currency;
