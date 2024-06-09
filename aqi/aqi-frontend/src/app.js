import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/home';
import LocationsTable from './components/locationstable';
import ParametersTable from './components/parameterstable';
import MeasurementsTable from './components/measurementstable';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app">
        {/* Navigation bar */}
        <nav>
          <ul>
            {/* Link to the Home page */}
            <li><Link to="/" className="home-link">Home</Link></li>
          </ul>
        </nav>
        
        {/* Main title of the application */}
        <h1 className="title">Air Quality Database</h1>
        
        {/* Define routes for different components */}
        <Routes>
          {/* Route for the Home component */}
          <Route path="/" element={<Home />} />
          {/* Route for the LocationsTable component */}
          <Route path="/locations" element={<LocationsTable />} />
          {/* Route for the ParametersTable component */}
          <Route path="/parameters" element={<ParametersTable />} />
          {/* Route for the MeasurementsTable component */}
          <Route path="/measurements" element={<MeasurementsTable />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
