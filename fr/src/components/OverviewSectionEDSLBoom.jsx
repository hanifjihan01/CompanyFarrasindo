import React from 'react';
import '../index.css'; // Importing the CSS file for custom styling
import carImage from '../assets/ExtraDoubleSuperLongBoomPump.png'; // Path to your car image

const OverviewSectionEDSLBoom = () => {
  return (
    <div className="overview-section d-flex align-items-center">
      <div className="containerOverview">
        <div className="row align-items-center">
          {/* Left side text */}
          <div className="col-md-6 text-section">
            <h5 className="overviewsectionedsl-title">OVERVIEW</h5>
            <h2 className="overviewsectionedsl-text">REACH THE SKY</h2>
            <h2 className="overviewsectionedsl-text1">41-60 M OF UNMATCHED POWER!</h2>
          </div>

          {/* Right side image */}
          <div className="col-md-6 text-right">
            <img src={carImage} alt="Truck" className="car-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewSectionEDSLBoom;
