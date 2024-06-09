import React, { useState, useEffect } from 'react';

const ParametersTable = () => {
  const [parameters, setParameters] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5101/json/parameters')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched parameters:', data);
        setParameters(data.data);
      })
      .catch(error => console.error('Error fetching parameters:', error));
  }, []);

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
            parameters.map(parameter => (
              <tr key={parameter.id}>
                <td>{parameter.id}</td>
                <td>{parameter.name}</td>
              </tr>
            ))
          ) : (
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
