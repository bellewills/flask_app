import React, { useState, useEffect } from 'react';

const MeasurementsTable = () => {
  const [measurements, setMeasurements] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [allDataLoaded, setAllDataLoaded] = useState(false);

  const fetchMeasurements = (page) => {
    setLoading(true);
    fetch(`http://127.0.0.1:5101/json/location/1/measurements?page=${page}&per_page=100`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data.data.length === 0) {
          setAllDataLoaded(true);
        } else {
          setMeasurements(prevMeasurements => [...prevMeasurements, ...data.data]);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching measurements:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (!allDataLoaded) {
      fetchMeasurements(page);
    }
  }, [page, allDataLoaded]); // Include allDataLoaded in the dependency array

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      <h1>Measurements</h1>
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
      {loading && <p>Loading...</p>}
      {!loading && !allDataLoaded && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </div>
  );
};

export default MeasurementsTable;
