import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; 

// Home component
function Home() {
  return (
    // Main container for the Home component
    <div className="home-container">
      
      {/* Background video container */}
      <div className="bg-video">
        
        {/* Video element with autoplay, muted, and loop properties */}
        <video autoPlay muted loop className="bg-video__content">
          <source src={`${process.env.PUBLIC_URL}/3129724-uhd_3840_2160_30fps.mp4`} type="video/mp4" />
          Your browser is not supported! :/
        </video>
      </div>
      
      {/* Central container for the navigation links */}
      <div className="center-container">
        
        {/* List of navigation links */}
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
