import React, { useState } from 'react';
import '../index.css';
import fbi from '../assets/fbicuy.png';
import fpi from '../assets/fpi1.png';
import citipumpindonesia from '../assets/citipumpcuy.png';
import citicraneperkasa from '../assets/citicranecuy.png';
import bpr from '../assets/fpcuy.png';
import iji from '../assets/ijicuy.png';
import gbp from '../assets/gbp1.png';
import simi from '../assets/bprbarucuy.png';
import kane from '../assets/kane.jpg';
import plantsentul from '../assets/plantSentul.jpg';
import farrasindobrand from '../assets/farrasindobrand.jpg';
import farraconbrand from '../assets/farraconbrand.JPG';
import intijayabrand from '../assets/intijayabrand.JPG';
import {BrowserRouter, BrowserRouter as Router, route, routes} from 'react-router-dom'




const brands = {
  fbi: {
    logo: fbi,
    description: `PT. Fresh Beton Indonesia specializes in ready-mix and precast concrete...`
  },
  fpi: {
    logo: fpi,
    description: `Farracon Precast Industry is dedicated to providing innovative and high-quality precast solutions...`
  },
  citipumpindonesia: {
    logo: citipumpindonesia,
    description: `PT Citi Pump Indonesia is a Concrete Building Construction Equipment Rental Service Company...`
  },
  citicraneperkasa: {
    logo: citicraneperkasa,
    description: `PT Citi Crane Indonesia are well-equipped to handle the crane rental needs of all major industries...`
  },
  bpr: {
    logo: bpr,
    description: `PT. Farrasindo Perkasa takes pride in serving its customers and delivering exceptional quality...`
  },
  iji: {
    logo: iji,
    description: `Offering a comprehensive range of high-quality spare parts...`
  },
  gbp: {
    logo: gbp,
    description: `Specializing in mining and natural resources extraction, PT Gunung Bumi Perkasa...`
  },
  simi: {
    logo: simi,
  }
};

const BrandSection = () => {
  const [selectedBrand, setSelectedBrand] = useState('fbi');

  const handleClick = (brandKey) => {
    setSelectedBrand(brandKey);
  };




  return (
    <div className="brand-section">
      {Object.keys(brands).map((brandKey, index) => {
        const isSelected = brandKey === selectedBrand;
        const brand = brands[brandKey];
        

      

        return (
          <div
            key={brandKey}
            className={`brand-card ${isSelected ? 'selected' : ''}`}
            style={{
              backgroundImage: `url(${farraconbrand})`,
              backgroundSize: '453% 230%',
              backgroundPosition: `${(index % 4) * 31}% ${Math.floor(index / 4) * 86}%`,
              position: 'relative',
              textAlign: 'center',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              padding: '20px',
            }}
            onClick={() => handleClick(brandKey)}
          >
            
      
            
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                zIndex: 1,
              }}
            ></div>
            
            <h2 style={{ marginBottom: '20px', position: 'relative', zIndex: 2 }}>{brand.name}</h2>
            <img
              src={brand.logo}
              alt={`${brand.name} logo`}
              className="brand-logo bright-logo"
              style={{
                display: 'block',
                margin: '0 auto',
                width: '260px',
                height: '250px',
                position: 'relative',
                zIndex: 2,
              }}
              
            />
          </div>
        );
      })}
    </div>
  );
};

export default BrandSection;
