import React from 'react';
import '../index.css'; // Importing the CSS file for custom styling
import carImage from '../assets/MiniPump.png'; // Path to your car image

const OverviewSectionMini = () => {
  return (
    <div className="overview-section d-flex align-items-center">
      <div className="containerOverview">
        <div className="row align-items-center">
          {/* Left side text */}
          <div className="col-md-6 text-section">
            <h5 className="overviewsectionmlb-title">OVERVIEW</h5>
            <h2 className="overviewsectionmlb-text">EFFICIENTLY WORK IN NARROW SITES</h2>
            <h2 className="overviewsectionmlb-text1">WITH COMPACT DESIGN</h2>
          </div>

          {/* Right side image */}
          <div className="col-md-6 text-right">
            <img src={carImage} alt="Truck" className="car-imagemini" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewSectionMini;
