import React from 'react';

function CountrySearch({ onSearch }) {
  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="Search by country" onChange={handleInputChange} />
    </div>
  );
}

export default CountrySearch;
