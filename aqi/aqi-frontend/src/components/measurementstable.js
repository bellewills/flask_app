import React, { useState, useEffect } from 'react';

const MeasurementsTable = () => {
  const [measurements, setMeasurements] = useState([]);

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
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Parameter</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {measurements.length > 0 ? (
            measurements.map(measurement => (
              <tr key={measurement.id}>
                <td>{measurement.id}</td>
                <td>{measurement.parameter}</td>
                <td>{measurement.value}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MeasurementsTable;
