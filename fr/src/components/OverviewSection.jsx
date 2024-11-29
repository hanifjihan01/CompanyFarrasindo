import React from 'react';
import '../index.css';
import carImage from '../assets/StandardPump.png';

const OverviewSection = () => {
  return (
    <div className="overview-section d-flex align-items-center">
      <div className="containerOverview">
        <div className="row align-items-center">
       
          <div className="col-md-6 text-section">
            <h5 className="overviewsection-title">OVERVIEW</h5>
            <h2 className="overviewsection-text">YOUR GO-TO CONCRETE </h2>
            <h2 className="overviewsection-text1">MACHINERY RENTALS AND SALES</h2>
          </div>

         
          <div className="col-md-6 text-right">
            <img src={carImage} alt="Truck" className="car-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;
