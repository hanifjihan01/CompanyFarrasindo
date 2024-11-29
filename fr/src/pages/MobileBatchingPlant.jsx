import React, { useState } from 'react';
import '../index.css';
import '../baru.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import client1 from '../assets/blend01.png';
import client2 from '../assets/SuperLongBoomPump.png';
import client3 from '../assets/DoubleSuperLongBoomPump.png';
import client4 from '../assets/batchpump2.png';
import client5 from '../assets/blend03.png';
import client6 from '../assets/ExtraDoubleSuperLongBoomPump.png';
import client7 from '../assets/blend02.png';
import client8 from '../assets/batchpump1.png';
import project from '../assets/bpb.png';








const portfolioItems = [


  {
    imgSrc: client8,
    title: 'Batch Pump 1 M3',
    description: '',
    city: 'Batch Pump',
    link: './BatchPump.jsx',
    details: {
      weight: '10 tons',
      height: '2.8 m',
      length: '7 m',
      width: '2.4 m',
      BoomArmLength:'15-17 m',
      Jacking: '4 Meters(Front), 4 Meters(Rear)'
    },
  },
  {
    imgSrc: client4,
    title: 'Batch Pump 0.5 M3',
    description: '',
    city: 'Batch Pump',
    link: './BatchPumpDua.jsx',
    details: {
      weight: '10 tons',
      height: '2.8 m',
      length: '7 m',
      width: '2.4 m',
      BoomArmLength:'18-21 m',
      Jacking: '4 Meters(Front), 4 Meters(Rear)'
    },
  },
  {
    imgSrc: client1,
    title: 'Blend EO25',
    description: '',
    city: 'Standard',
    link: './MonsterProfile.jsx',  
    details: {
      weight: '14 tons',
      height: '3.3 m',
      length: '9.2 m',
      width: '2.5 m',
      BoomArmLength:'24 m',
      Jacking: '4 Meters(Front), 4 Meters(Rear)'

    },
  },

  {
    imgSrc: client7,
    title: 'Blend Seventy',
    description: '',
    city: 'SemiLongBoom',
    link: './SemiLongBoom.jsx',
    details: {
      weight: '14 tons',
      height: '3.5 m',
      length: '9.2 m',
      width: '2.5 m',
      BoomArmLength:'26 m',
      Jacking: '4.2 Meters(Front), 3.9 Meters(Rear)'
    },
  },
  {
    imgSrc: client5,
    title: 'Blend A240',
    description: '',
    city: 'LongBoom',
    link: './LongBoom.jsx',
    details: {
      weight: '18 tons',
      height: '3.5 m',
      length: '12 m',
      width: '2.5 m',
      BoomArmLength:'27-30 m',
      Jacking: '6.3 Meters(Front), 4 Meters(Rear)'
    },
  },
 
 
  
  // Add details for other items similarly...
];

const MobileBatchingPlant = () => {
  const [portfolioIndex, setPortfolioIndex] = useState(8); 
  const [searchQuery, setSearchQuery] = useState(''); 
  const [selectedCity, setSelectedCity] = useState(''); 
  const [expandedCards, setExpandedCards] = useState({}); // Track expanded state for each card

  const handleShowMoreClick = () => {
    setPortfolioIndex(portfolioItems.length); 
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value); 
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };


  const toggleDetails = (index) => {
    setExpandedCards(prevState => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const filteredPortfolios = portfolioItems.filter(item =>
    (item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (selectedCity === '' || item.city.toLowerCase() === selectedCity.toLowerCase())
  );

  const visiblePortfolios = filteredPortfolios.slice(0, portfolioIndex);

  return (
    <div className="portfolio-page">
      <Header />
      <div
        className="portfolio-background"
        style={{
          backgroundImage: `url(${project})`,
          width: '100%',
          height: '600px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
        }}
      >
        <div className="portfolio-title-overlay"></div>
      </div>
      <br /><br /><br />
      <h2 className="background-title2"><b>Mobile Batching Plant</b></h2>
      <section id="portfolio" className="py-5">
        {/* <div className="search-bar text-center"> */}
          {/* <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          /> */}
          {/* <select className="testtt" value={selectedCity} onChange={handleCityChange} style={{ color: selectedCity === '' ? 'gray' : 'black' }}> */}
            {/* <option value="">Filter Cars</option> */}
            {/* <option value="Standard">Standard</option>
            <option value="SuperLongBoom">Super Long Boom</option>
            <option value="DoubleSuperLongBoom">Double Super Long Boom</option>
            <option value="MiniLongBoom">Mini Long Boom</option>
            <option value="LongBoom">Long Boom</option>
            <option value="ExtraSuperLongBoom">Extra Super Long Boom</option>
            <option value="SemiLongBoom">Semi Long Boom</option>
            <option value="Mini">Mini</option> */}
          {/* </select> */}
        {/* </div> */}
        <div className="portfolio-grid">
          {visiblePortfolios.map((item, index) => (
            
            <div className="portfolio-card portfolio-card-animate" key={index}>
              <div className="label-concrete-pump">Mobile Batching Plant</div> {/* New Label */}
              <img src={item.imgSrc} alt={`Portfolio ${index}`} className="portfolio-img" />
              <div className="portfolio-card-body">
              <a href={item.link} target="_blank" rel="noopener noreferrer" key={index} className="concretelink"> {/* Anchor tag wrapping the card */}
                <h3 className="portfolio-card-title">{item.title}</h3>
                <p className="portfolio-card-description">{item.description}</p>
                </a>
                <div className="expand-details" onClick={() => toggleDetails(index)}>
                  <span>{expandedCards[index] ? '▲' : '▼'} Details</span> {/* Arrow down/up */}
                </div>
                {expandedCards[index] && (
                  <div className="portfolio-details">
                    <br />
                   
                    <p><strong>Weight:</strong> {item.details.weight}</p>
                    <p><strong>Height:</strong> {item.details.height}</p>
                    <p><strong>Length:</strong> {item.details.length}</p>
                    <p><strong>Width:</strong> {item.details.width}</p>
                    <p><strong>Boom Arm Length:</strong> {item.details.BoomArmLength}</p>
                    <p><strong>Jacking:</strong> {item.details.Jacking}</p>
                  </div>
                )}
              </div>
            </div>
            
          ))}
        </div>

      
        {portfolioIndex < filteredPortfolios.length && (
          <div className="text-center mt-3">
            <button className="btn small-btn" onClick={handleShowMoreClick}>Selengkapnya</button>
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
};

export default MobileBatchingPlant;
