import React, { useState } from 'react';
import '../index.css'; 
import { CaretDown, CaretUp } from 'phosphor-react'; // Importing Phosphor Icons

import rentImage from '../assets/rent33.jpg';
import sellImage from '../assets/sell33.jpg';
import sparePartsImage from '../assets/service33.jpg';

const services = [
  {
    name: 'Rent',
    description: 'We rent construction machinery with reliable equipment and flexible rental options for all project needs.',
    backgroundImage: rentImage, 
  },
  {
    name: 'Sell',
    description: 'We sell a wide range of concrete machinery. Our equipment is designed to enhance efficiency and performance on construction sites, ensuring high-quality concrete production and delivery. We provide reliable, durable machinery suited for projects of all sizes.',
    backgroundImage: sellImage, 
  },
  {
    name: 'Spare Parts & Services',
    description: 'Keep your projects running smoothly with our comprehensive repair and maintenance services, including a wide range of spare parts.',
    backgroundImage: sparePartsImage, 
  }
];

const ServicesBaru = () => {
  const [selectedBackground, setSelectedBackground] = useState('');
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(null);
  const [expandedService, setExpandedService] = useState(null);

  const handleCardClick = (backgroundImage, index) => {
    setSelectedBackground(backgroundImage);
    setSelectedServiceIndex(index);
  };

  const toggleExpand = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <div className="servicess-container">
      <br />
      {services.map((service, index) => (
        <div
          key={index}
          className="servicesss-card"
          style={{
            backgroundImage: selectedServiceIndex === index
              ? `url(${selectedBackground})`
              : `url(${service.backgroundImage})`,
            backgroundSize: selectedServiceIndex === index ? '200% 100%' : 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="servicesss-text">
            <h3>{service.name}</h3>
            <p className={expandedService === index ? 'expanded-text' : 'collapsed-text'}>
              {service.description}
            </p>
            {service.description.length > 100 && (
              <button className="read-more-btn" onClick={() => toggleExpand(index)}>
                {expandedService === index ? <CaretUp size={50} /> : <CaretDown size={50} />}
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesBaru;
