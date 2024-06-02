import React from 'react';
import CountryCard from './CountryCard';

function CountryList({ countries }) {
  return (
    <div>
      {countries.map((country, index) => (
        <CountryCard key={index} country={country} />
      ))}
    </div>
  );
}

export default CountryList;
