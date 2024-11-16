import React, { useState, useEffect } from 'react';
const BASE_URL= 'https://latest.currency-api.pages.dev/v1/currencies/eur.json';

function Currency() {

    const [currencyData, setCurrencyData] = useState([]);
    console.log(currencyData);

    /*useEffect(()=>{
        fetch(BASE_URL)
        .then(res => res.json())
        .then(data => (console.log(data),setCurrencyData([data.eur.value, ...Object.keys(data.eur.value)])));
    
        
    },[]);
    */
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

      useEffect(() => {
        if (currencyData) {
          Object.entries(currencyData).forEach(([currency, value]) => {
            console.log(`${currency}: ${value}`);
          });
        }
      }, [currencyData]);

    return(
        <div>
            <h1>Currency exchange</h1>
            
            <input type="number" />
            <select>
                <option value="Hi">H</option>
                <option value="Hi">Ho</option>
            </select>
            <br/>
            <p>=</p>
            <input type="number" />
            <select>
                <option value="Hi">H</option>
                <option value="Hi">Ho</option>
            </select>

        </div>
    );

}

export default Currency;