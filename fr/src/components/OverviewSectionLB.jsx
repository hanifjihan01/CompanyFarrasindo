import React from 'react';
import '../index.css'; // Importing the CSS file for custom styling
import carImage from '../assets/LongBoomPump.png'; // Path to your car image

const OverviewSectionLB = () => {
  return (
    <div className="overview-section d-flex align-items-center">
      <div className="containerOverview">
        <div className="row align-items-center">
          {/* Left side text */}
          <div className="col-md-6 text-section">
            <h5 className="overviewsectionlb-title">OVERVIEW</h5>
            <h2 className="overviewsectionlb-text">PRECISION AND POWER</h2>
            <h2 className="overviewsectionlb-text1">FOR LONG DISTANCES</h2>
          </div>

          {/* Right side image */}
          <div className="col-md-6 text-right">
            <img src={carImage} alt="Truck" className="car-imagelb" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewSectionLB;
