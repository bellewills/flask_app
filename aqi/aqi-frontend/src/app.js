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
        <nav>
          <ul>
            <li><Link to="/" className="home-link">Home</Link></li>
          </ul>
        </nav>
        <h1 className="title">Air Quality Database</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/locations" element={<LocationsTable />} />
          <Route path="/parameters" element={<ParametersTable />} />
          <Route path="/measurements" element={<MeasurementsTable />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
