import React, { useState, useEffect } from 'react';
import CountrySearch from './components/CountrySearch';
import CountryList from './components/CountryList';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5100/api/data')  // URL that matches Flask API endpoint
      .then(response => response.json())
      .then(data => setCountries(data));
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredCountries = countries.filter(country =>
    country.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <CountrySearch onSearch={handleSearch} />
      <CountryList countries={filteredCountries} />
    </div>
  );
}

export default App;
