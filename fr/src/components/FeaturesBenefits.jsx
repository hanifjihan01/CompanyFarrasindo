
import React from 'react';
import '../index.css';


import image1 from '../assets/broadrange.jpg';
import image2 from '../assets/aftersalesservice.jpg';
import image3 from '../assets/bestquality.JPG';


const featuresData = [
  { img: image1, text: 'ONE YEAR WARRANTY' },
  { img: image2, text: 'DEDICATED SERVICE ASSISTANT' },
  { img: image3, text: 'GUARANTEE OPERATOR TRAINING' },

];


const FeaturesBenefits = () => {
  return (
    <section className="features-benefits">
      <h2 className="buyer" style={{ fontSize: '36px', fontWeight: 'bold' }}>FARRASINDO BUYER PROGRAM</h2>
      <div className="orange-lines"></div>
      <br />
      <br />
      <div className="features-container">
        {featuresData.map((feature, index) => (
          <div className="feature" key={index}>
            <img src={feature.img} alt={feature.text} />
            <p style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '20px', marginLeft:'25px', color:'white' }}>{feature.text}</p>
          </div>
        ))}
      </div>
      <br />
      <br />
      <br />
    </section>
    
  );
};

export default FeaturesBenefits;
