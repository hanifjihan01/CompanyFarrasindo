import React from 'react';
import '../index.css'; // Importing the CSS file for custom styling
import carImage from '../assets/mobilgede.png'; // Path to your car image

const OverviewSectionStandard = () => {
  return (
    <div className="overview-section d-flex align-items-center">
      <div className="containerOverview">
        <div className="row align-items-center">
          {/* Left side text */}
          <div className="col-md-6 text-section">
            <h5 className="overviewsectionstandard-title">OVERVIEW</h5>
            <h2 className="overviewsectionstandard-text">VERSATILE AND RELIABLE</h2>
            <h2 className="overviewsectionstandard-text1">THE 24M BOOM ADVANTAGE</h2>
          </div>

          {/* Right side image */}
          <div className="col-md-6 text-right">
            <img src={carImage} alt="Truck" className="car-imageStandard" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewSectionStandard;
