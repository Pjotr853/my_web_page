import React, { useState, useEffect } from 'react';

function Countries(){

    const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")  // Nahraď skutočnou URL API
      .then((response) => response.json())
      .then((data) => {
        const mappedCountries = data.map((country) => ({
            name: country.name.common,
            capital: country.capital && country.capital.length > 0 ? country.capital[0] : "No capital",
            currency: country.currencies ? Object.keys(country.currencies)[0] + " - " + country.currencies[Object.keys(country.currencies)[0]].name : "No currency",
            flags: country.flags.png
        }));
        setCountries(mappedCountries);
      })
      .catch((error) => console.error("Error fetching country data:", error));
  }, []);

  return (
    <div>
        
            <ul>
            {countries.map((country, index) => (
              <li key={index}>
                <h2>Country: {country.name}</h2>
                <p>Capital: {country.capital}</p>
                <p>Currency: {country.currency}</p>
                
              <img src={country.flags} alt={country.name} width="100" />              
            </li>
            ))}
          </ul>
        
    </div>
  );
}

export default Countries;