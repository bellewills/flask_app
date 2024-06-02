import React from 'react';

function CountryCard({ country }) {
  return (
    <div>
      <h2>{country.country}</h2>
      <p>City: {country.city}</p>
      <p>Date: {country.date}</p>
      <p>Value: {country.value}</p>
      <p>Parameter: {country.parameter}</p>
    </div>
  );
}

export default CountryCard;
