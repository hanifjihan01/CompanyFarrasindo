import React from 'react';
import '../index.css'; // Importing the CSS file for custom styling
import carImage from '../assets/SuperLongBoomPump.png'; // Path to your car image

const OverviewSectionSuperLBoom = () => {
  return (
    <div className="overview-section d-flex align-items-center">
      <div className="containerOverview">
        <div className="row align-items-center">
          {/* Left side text */}
          <div className="col-md-6 text-section">
            <h5 className="overviewsectionsuperlboom-title">OVERVIEW</h5>
            <h2 className="overviewsectionsuperlboom-text">LONG REACH</h2>
            <h2 className="overviewsectionsuperlboom-text1">FOR HIGH-DEMAND PROJECTS</h2>
          </div>

          {/* Right side image */}
          <div className="col-md-6 text-right">
            <img src={carImage} alt="Truck" className="car-imagesuperlb" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewSectionSuperLBoom;
