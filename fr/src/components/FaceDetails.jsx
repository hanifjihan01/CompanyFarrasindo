import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import '../FaceDetails.css';
import ruptureImage from '../assets/canworkon.jpeg';
import thirstIcon from '../assets/mbporent.png';

const FacetDetails = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container facet-details mt-5">
      <h3 className="text-center mb-4">ABOUT:</h3>
      <div className="row">
        <div className="col-md-6" data-aos="fade-up">
          <div className="card ability-card arterial-spray">
            <div className="card-header">
              <i className="ability-icon"></i>
              <span className="ability-title">How It Works</span>
            </div>
            <div className="card-body">
              <p className="bab1">A concrete pump is a machine used to transport liquid concrete to areas that are difficult to reach.</p>
              <div className="ability-detail">
                
                <div className="ability-info">
                <img src={ruptureImage} alt="Rupture" className="ability-image" style={{ width: '100%', height: '250px' }} />
                  <h5 className="babbaru">WORKING</h5>
                  <p className="bab1">It works by using a powerful pump system that moves concrete through hoses or pipes</p>
                  <p className="bab1"><strong>TYPES:</strong> Boom Pumps and Line Pumps & Trailer Pump</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6" data-aos="fade-up">
          <div className="card ability-card bloodrush">
            <div className="card-header">
              <i className="ability-icon"></i>
              <span className="ability-title2">Best For</span>
            </div>
            <div className="card-body">
              <p className="bab2">Concrete pumps are best for projects requiring quick, efficient, and accurate concrete placement</p>
              <div className="ability-detail">
                
                <div className="ability-info">
                <img src={thirstIcon} alt="Thirst" className="ability-image" style={{ width: '100%', height: '250px', marginBottom: '58px' }} />
                  <h5 className="babbaru1">IMPORTANT</h5>
                  <p className="bab2">They save time and reduce labor costs on construction sites</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacetDetails;
