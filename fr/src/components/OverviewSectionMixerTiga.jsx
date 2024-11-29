import React from 'react';
import '../index.css'; 
import carImage from '../assets/tm3new.png'; 

const OverviewSectionMixerTiga = () => {
  return (
    <div className="overview-section d-flex align-items-center">
      <div className="containerOverview">
        <div className="row align-items-center">
         
          <div className="col-md-6 text-section">
            <h5 className="overviewsectionmlb-title">OVERVIEW</h5>
            <h2 className="overviewsectionmlb-text">EFFICIENTLY WORK IN NARROW SITES</h2>
            <h2 className="overviewsectionmlb-text1">WITH COMPACT DESIGN</h2>
          </div>
          

        
          <div className="col-md-6 text-right">
            <img src={carImage} alt="Truck" className="car-imagemixerdua" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewSectionMixerTiga;
