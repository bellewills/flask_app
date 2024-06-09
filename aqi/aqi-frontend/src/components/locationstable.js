import React, { useState, useEffect } from 'react';

const LocationsTable = () => {
  // State to hold the locations data
  const [locations, setLocations] = useState([]);

  // useEffect hook to fetch locations data when the component mounts
  useEffect(() => {
    fetch('http://127.0.0.1:5101/json/locations')
      .then(response => {
        // Check if the response is ok
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched locations:', data);
        // Set the fetched data to the locations state
        setLocations(data.data);
      })
      .catch(error => console.error('Error fetching locations:', error));
  }, []); // Empty dependency array means this runs once when the component mounts

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
            // Map through locations and render each as a table row
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
            // Display a message if no data is available
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
