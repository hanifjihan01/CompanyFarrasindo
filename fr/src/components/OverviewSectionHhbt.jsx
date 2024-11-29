import React from 'react';
import '../index.css'; // Importing the CSS file for custom styling
import carImage from '../assets/hbt100new.png'; // Path to your car image

const OverviewSectionMLB = () => {
  return (
    <div className="overview-section d-flex align-items-center">
      <div className="containerOverview">
        <div className="row align-items-center">
          {/* Left side text */}
          <div className="col-md-6 text-section">
            <h5 className="overviewsectionhbt100-title">OVERVIEW</h5>
            <h2 className="overviewsectionhbt100-text">FROM MIXER TO SITE</h2>
            <h2 className="overviewsectionhbt100-text1">SEAMLESS CONCRETE DELIVERY</h2>
            <h2 className="overviewsectionhbt100-text2"> AT YOUR FINGERTIPS</h2>
          </div>

          {/* Right side image */}
          <div className="col-md-6 text-right">
            <img src={carImage} alt="Truck" className="car-imagemhbt" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewSectionMLB;
