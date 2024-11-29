import React, { useState } from 'react';
import '../index.css';
import '../baru.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import client1 from '../assets/tm1new.png';
import client2 from '../assets/tm2new.png';
import client3 from '../assets/tm3new.png';
import project from '../assets/tma.png';

// Adding detail information like weight, height, etc.
const portfolioItems = [
  {
    imgSrc: client1,
    title: 'Truck Mixer 3m3',
    description: '',
    city: 'tm1',
    link: './TruckMOne.jsx',
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
    title: 'Truck Mixer 7m3',
    description: '',
    city: 'tm2',
    link: './TruckMTwo.jsx',
    details: {
      weight: '25 tons',
      height: '17 m',
      length: '22 m',
      width: '3.2 m',
      BoomArmLength:'33-36 m',
      Jacking: '5.2 Meters'
    },
  },
  {
    imgSrc: client3,
    title: 'Truck Mixer 8m3',
    description: '',
    city: 'tm3',
    link: './TruckMThree.jsx',
    details: {
      weight: '34 tons',
      height: '4 m',
      length: '12 m',
      width: '2.5 m',
      BoomArmLength:'37-40 m',
      Jacking: '8.3 Meters'
    },
  },
 
  // Add details for other items similarly...
];

const TruckMixer = () => {
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
      <h2 className="background-title2"><b>Truck Mixer</b></h2>
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
            <option value="tm1">Truck Mixer 1</option>
            <option value="tm2">Truck Mixer 2</option>
            <option value="tm3">Truck Mixer 3</option> */}
          
          {/* </select> */}
        </div>
        <div className="portfolio-grid">
          {visiblePortfolios.map((item, index) => (
            <div className="portfolio-card portfolio-card-animate" key={index}>
              
                <div className="label-concrete-pump">Truck Mixer</div> {/* New Label */}
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

export default TruckMixer;
