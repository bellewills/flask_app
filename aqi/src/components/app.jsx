// src/App.jsx
import React, { useState, useEffect } from 'react';
import CountrySearch from './components/CountrySearch';
import CountryList from './components/CountryList';
import './App.css';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Fetch data from your database API endpoint
    fetch('aqi_database.db')
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Air Quality Index (AQI) by Country</h1>
      <CountrySearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <CountryList countries={filteredCountries} />
    </div>
  );
};

export default App;
