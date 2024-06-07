// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; 

// Home component
function Home() {
  return (
    <div className="home-container">
      <div className="bg-video">
        <video autoPlay muted loop className="bg-video__content">
          <source src={`${process.env.PUBLIC_URL}/earth.mp4`} type="video/mp4" />
          Your browser is not supported!:/
        </video>
      </div>
      <div className="center-container">
        
        <ul className="center-links">
          <li><Link to="/locations" className="button-link">Locations</Link></li>
          <li><Link to="/parameters" className="button-link">Parameters</Link></li>
          <li><Link to="/measurements" className="button-link">Measurements</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
