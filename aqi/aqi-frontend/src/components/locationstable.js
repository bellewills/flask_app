import React, { useState, useEffect } from 'react';

const LocationsTable = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5101/json/locations')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched locations:', data);
        setLocations(data.data);
      })
      .catch(error => console.error('Error fetching locations:', error));
  }, []);

  return (
    <div>
      <h1>Locations</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Country</th>
            <th>City</th>
            <th>Latitude</th>
            <th>Longitude</th>
          </tr>
        </thead>
        <tbody>
          {locations.length > 0 ? (
            locations.map(location => (
              <tr key={location.id}>
                <td>{location.id}</td>
                <td>{location.country}</td>
                <td>{location.city}</td>
                <td>{location.latitude}</td>
                <td>{location.longitude}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default LocationsTable;
