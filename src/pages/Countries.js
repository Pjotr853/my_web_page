import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
//import 'bootstrap/dist/css/bootstrap.min.css';

function Countries(){

    const [countries, setCountries] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")  
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

  const filteredCountries = countries.filter((country) =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>

    <InputGroup className="mb-3">
      <InputGroup.Text>Search for a country...</InputGroup.Text>
      <Form.Control aria-label="First name"  type="text"
                placeholder="Country..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}/>
    </InputGroup>
      
        
            <ul>
            {filteredCountries.map((country, index) => (
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