import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';

// Render the App component into the root div
ReactDOM.render(
  // Use React.StrictMode to highlight potential problems in the application
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // Mount the App component to the div with the id 'root'
  document.getElementById('root')
);
