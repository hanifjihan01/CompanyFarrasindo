import React, { useState } from 'react';
import '../index.css'; 
import rentImage from '../assets/rent33.jpg';
import sellImage from '../assets/sell33.jpg';
import sparePartsImage from '../assets/service33.jpg';


const services = [
  {
    name: 'Rent',
    description: 'Rent high-quality equipment for any project, big or small. From residential builds to commercial developments, we\'ve got you covered.',
    backgroundImage: rentImage, 
  },
  {
    name: 'Sell',
    description: 'Buy top-tier equipment to control your projects and timelines. Our range suits projects of all sizes.  ',
    backgroundImage: sellImage, 
  },
  {
    name: 'Spare Parts & Services',
    description: 'Keep your projects running smoothly with our comprehensive repair and maintenance services, including a wide range of spare parts.',
    backgroundImage: sparePartsImage, 
  }
];



const Services = () => {
  const [selectedBackground, setSelectedBackground] = useState('');
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(null);

  const handleCardClick = (backgroundImage, index) => {
    setSelectedBackground(backgroundImage);
    setSelectedServiceIndex(index);
  };

  return (

    
   
    <div className="services-container">
       
      
       <br />
      
      {services.map((service, index) => (
        <div
          key={index}
          className="service-card"
          // onClick={() => handleCardClick(service.backgroundImage, index)}
          style={{
            backgroundImage: selectedServiceIndex === index
              ? `url(${selectedBackground})`
              : `url(${service.backgroundImage})`,
            backgroundSize: selectedServiceIndex === index ? '200% 100%' : 'cover',
            backgroundPosition: selectedServiceIndex === index
              ? 'center'
              : 'center',
          }}
        >    
            
          <h2 className="service-title">{service.name}</h2>
          <p className="service-description">{service.description}</p>
          
        </div>
      ))}
    </div>
  );
};

export default Services;
