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
import client8 from '../assets/bpnew.png';
import project from '../assets/bpacover.png';








const portfolioItems = [


  {
    imgSrc: client8,
    title: 'Batching Plant',
    description: '',
    city: 'Batch Pump',
    link: './ConventionalBP.jsx',
    details: {
      weight: '10 tons',
      height: '2.8 m',
      length: '7 m',
      width: '2.4 m',
      BoomArmLength:'15-17 m',
      Jacking: '4 Meters(Front), 4 Meters(Rear)'
    },
  },

 
  
  // Add details for other items similarly...
];

const ConventionalBatchingPlant = () => {
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
          height: '650px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
        }}
      >
        <div className="portfolio-title-overlay"></div>
      </div>
      <br /><br /><br />
      <h2 className="background-title2"><b>Conventional Batching Plant</b></h2>
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
              <div className="label-concrete-pump">Conventional Batching Plant</div> {/* New Label */}
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

export default ConventionalBatchingPlant;
