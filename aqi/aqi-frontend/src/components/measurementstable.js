import React, { useState, useEffect } from 'react';

const MeasurementsTable = () => {
  // State to hold the measurements data
  const [measurements, setMeasurements] = useState([]);
  // State to keep track of the current page for pagination
  const [page, setPage] = useState(1);
  // State to indicate if data is currently being loaded
  const [loading, setLoading] = useState(false);
  // State to check if all data has been loaded
  const [allDataLoaded, setAllDataLoaded] = useState(false);

  // Function to fetch measurements data from the API
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
        // If no more data, set allDataLoaded to true
        if (data.data.length === 0) {
          setAllDataLoaded(true);
        } else {
          // Append new data to the existing measurements
          setMeasurements(prevMeasurements => [...prevMeasurements, ...data.data]);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching measurements:', error);
        setLoading(false);
      });
  };

  // useEffect hook to fetch data when component mounts or page changes
  useEffect(() => {
    if (!allDataLoaded) {
      fetchMeasurements(page);
    }
  }, [page, allDataLoaded]); // Include allDataLoaded in the dependency array

  // Function to handle loading more data when 'Load More' button is clicked
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
            // Map through measurements and render each as a table row
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
            // Display a message if no data is available
            <tr>
              <td colSpan="6">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
      {loading && <p>Loading...</p>}
      {/* Render 'Load More' button if not loading and all data isn't loaded yet */}
      {!loading && !allDataLoaded && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </div>
  );
};

export default MeasurementsTable;
