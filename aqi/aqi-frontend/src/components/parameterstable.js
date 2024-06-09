import React, { useState, useEffect } from 'react';

const ParametersTable = () => {
  // State to hold the parameters data
  const [parameters, setParameters] = useState([]);

  // useEffect hook to fetch parameters data when the component mounts
  useEffect(() => {
    fetch('http://127.0.0.1:5101/json/parameters')
      .then(response => {
        // Check if the response is ok
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched parameters:', data);
        // Set the fetched data to the parameters state
        setParameters(data.data);
      })
      .catch(error => console.error('Error fetching parameters:', error));
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <div>
      <h1>Parameters</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {parameters.length > 0 ? (
            // Map through parameters and render each as a table row
            parameters.map(parameter => (
              <tr key={parameter.id}>
                <td>{parameter.id}</td>
                <td>{parameter.name}</td>
              </tr>
            ))
          ) : (
            // Display a message if no data is available
            <tr>
              <td colSpan="2">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ParametersTable;
