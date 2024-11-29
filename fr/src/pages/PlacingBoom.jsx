import React, { useState } from 'react';
import '../index.css';
import '../baru.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import client1 from '../assets/placingboom.png';
import project from '../assets/project.jpg';
import client2 from '../assets/PlacingBoomSpider.png'


const portfolioItems = [
  {
    imgSrc: client1,
    title: 'Placing Boom',
    description: '',
    city: 'pb1',
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
    imgSrc: client2,
    title: 'Placing Boom Spider',
    description: '',
    city: 'pb2',
    details: {
      weight: '14 tons',
      height: '3.3 m',
      length: '9.2 m',
      width: '2.5 m',
      BoomArmLength:'24 m',
      Jacking: '4 Meters(Front), 4 Meters(Rear)'

    },
  },
 

 
 
  
];

const PlacingBoom = () => {
  const [portfolioIndex, setPortfolioIndex] = useState(8); 
  const [searchQuery, setSearchQuery] = useState(''); 
  const [selectedCity, setSelectedCity] = useState(''); 
  const [expandedCards, setExpandedCards] = useState({}); 

  const handleShowMoreClick = () => {
    setPortfolioIndex(portfolioItems.length); 
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value); 
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  // Toggle the details visibility
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
          height: '500px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
        }}
      >
        <div className="portfolio-title-overlay"></div>
      </div>
      <br /><br /><br />
      <h2 className="background-title2"><b>Placing Boom</b></h2>
      <section id="portfolio" className="py-5">
        <div className="search-bar text-center">
          {/* <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          /> */}
          {/* <select className="testtt" value={selectedCity} onChange={handleCityChange} style={{ color: selectedCity === '' ? 'gray' : 'black' }}> */}
            {/* <option value="">Filter Cars</option>
            <option value="pb1">Placing Boom</option>
            <option value="pb2">Placing Boom Spider</option>
         */}
          
          
          {/* </select> */}
        </div>
        <div className="portfolio-grid">
          {visiblePortfolios.map((item, index) => (
            <div className="portfolio-card portfolio-card-animate" key={index}>
                <div className="label-concrete-pump">Placing Boom</div> {/* New Label */}
              <img src={item.imgSrc} alt={`Portfolio ${index}`} className="portfolio-img" />
              <div className="portfolio-card-body">
                <h3 className="portfolio-card-title">{item.title}</h3>
                <p className="portfolio-card-description">{item.description}</p>
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

export default PlacingBoom;
