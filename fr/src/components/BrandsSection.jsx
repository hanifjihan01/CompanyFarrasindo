import React, { useState } from 'react';
import '../index.css';
import fbi from '../assets/sasuke.png';
import fpi from '../assets/fpi1.png';
import citipumpindonesia from '../assets/citipumpcuy.png';
import citicraneperkasa from '../assets/citicranecuy.png';
import fpnew from '../assets/fpajah.png';
import iji from '../assets/ijicuy.png';
import gbp from '../assets/gbp1.png';
import simi from '../assets/simiputih.png';
import fbibrand from '../assets/plantSentul.jpg';
import farrasindobrand from '../assets/farrasindobrand.jpg';
import farraconbrand from '../assets/farraconbrand.JPG';
import intijayabrand from '../assets/intijayabrand.JPG';
import gbpbrand from '../assets/gbpbrandd.jpg';
import citipumpbrand from '../assets/citipumpbrand.png';
import citicranebrand from '../assets/citicranebrand.jpg';
import simibrand from '../assets/simibrand.png';

const brands = {
  fbi: { logo: fbi, background: fbibrand, link: 'https://freshbeton.com/' },
  fpi: { logo: fpi, background: farrasindobrand, link: 'https://freshbeton.com/product/category/precast' },
  citipumpindonesia: { logo: citipumpindonesia, background: citipumpbrand, link: 'https://www.citi-pump.com/' },
  citicraneperkasa: { logo: citicraneperkasa, background: citicranebrand, link: 'https://citi-crane.com/' },
  fpnew: { logo: fpnew, background: farraconbrand, link: 'https://farrasindo-cp.co.id/' },
  iji: { logo: iji, background: intijayabrand, link: 'https://www.intijaya-parts.com/' },
  gbp: { logo: gbp, background: gbpbrand, link: 'https://gbp-quarry.com/' },
  simi: { logo: simi, background: simibrand, link: 'https://simi.co.id/' },
};

const BrandSection = () => {
  const [selectedBrand, setSelectedBrand] = useState('fbi');
  const [hoveredBrand, setHoveredBrand] = useState(null);

  const handleMouseEnter = (brandKey) => {
    setHoveredBrand(brandKey);
  };

  const handleMouseLeave = () => {
    setHoveredBrand(null);
  };

  const handleCardClick = (brandKey) => {
    window.open(brands[brandKey].link, '_blank'); 
    setSelectedBrand(brandKey);
  };

  return (
    <div className="brand-section">
      {Object.keys(brands).map((brandKey, index) => {
        const brand = brands[brandKey];
        const backgroundBrand = hoveredBrand ? hoveredBrand : selectedBrand;

        return (
          <div
            key={brandKey}
            className="brand-card"
            style={{
              backgroundImage: `url(${brands[backgroundBrand].background})`,
              backgroundSize: '453% 230%',
              backgroundPosition: `${(index % 4) * 31}% ${Math.floor(index / 4) * 86}%`,
              position: 'relative',
              textAlign: 'center',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              padding: '20px',
              cursor: 'pointer',
            }}
            onClick={() => handleCardClick(brandKey)}
            onMouseEnter={() => handleMouseEnter(brandKey)}
            onMouseLeave={handleMouseLeave}
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

            <h2 style={{ marginBottom: '20px', position: 'relative', zIndex: 2 }}>{brand.description}</h2>
            <img
              src={brand.logo}
              alt={`${brandKey} logo`}
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
