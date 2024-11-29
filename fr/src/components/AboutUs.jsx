// AboutUs.js
import React from 'react';
import '../index.css';
import t5 from '../assets/t5.jpg'; // Ensure the image path is correct
import allunit from '../assets/allunit.png';
import TypeIt from "typeit-react";
import Swiper from 'swiper';







const AboutUs = () => {
  return (
    <div className='testri'>
      <div className="about-us-section">
        <h2 className="section-title">About Us</h2>
        <div className="about-us-content">
          
          <div className="about-us-text">
            <h3>Dedicated to building a better tomorrow for</h3>
            
            {/* TypeIt typing effect */}
            <p className="animated-text">
              <TypeIt
                options={{
                  strings: ["Sustainable", "Excellence", "Top-Quality"],
                  speed: 100,
                  breakLines: false,
                  loop: true,
                }}
              />
            </p>
            
            <p><strong>Our extensive range of high-quality equipment.</strong></p>
            <p>meets the diverse needs of the construction industry,<br></br> providing comprehensive concrete solutions <br /> from upstream to downstream.</p>
           
          </div>
          <div className="about-us-image">
            <img src={allunit} alt="Founder" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
