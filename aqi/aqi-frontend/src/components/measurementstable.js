// src/components/MeasurementsTable.js
import React, { useState, useEffect } from 'react';

// MeasurementsTable component
const MeasurementsTable = () => {
  const [measurements, setMeasurements] = useState([]);

  // Fetch data from the API when the component mounts
  useEffect(() => {
    fetch('http://127.0.0.1:5100/json/location/1/measurements')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched measurements:', data);
        setMeasurements(data.data);
      })
      .catch(error => console.error('Error fetching measurements:', error));
  }, []);

  return (
    <div>
      <h1>Measurements</h1>
      {/* Render the table with measurements data */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Parameter</th>
            <th>Value</th>
            <th>Date</th>
            <th>Location ID</th>
            <th>Parameter ID</th>
          </tr>
        </thead>
        <tbody>
          {measurements.length > 0 ? (
            measurements.map(measurement => (
              <tr key={measurement.id}>
                <td>{measurement.id}</td>
                <td>{measurement.parameter}</td>
                <td>{measurement.value}</td>
                <td>{measurement.date}</td>
                <td>{measurement.location_id}</td>
                <td>{measurement.parameter_id}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MeasurementsTable;
