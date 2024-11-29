import React from 'react';
import '../index.css'; 
import carImage from '../assets/DoubleSuperLongBoomPump.png'; 

const OverviewSectionDSLBoom = () => {
  return (
    <div className="overview-section d-flex align-items-center">
      <div className="containerOverview">
        <div className="row align-items-center">
         
          <div className="col-md-6 text-section">
            <h5 className="overviewsectiondsl-title">OVERVIEW</h5>
            <h2 className="overviewsectiondsl-text">STRENGTH AND STABILITY</h2>
            <h2 className="overviewsectiondsl-text1">FOR SKY-HIGH POURS</h2>
          </div>
          
          <div className="col-md-6 text-right">
            <img src={carImage} alt="Truck" className="car-imagedsl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewSectionDSLBoom;
