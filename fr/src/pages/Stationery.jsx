import React, { useState } from 'react';
import '../index.css';
import '../baru.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import client1 from '../assets/hbt100new.png';
import client2 from '../assets/hbt80new.png';
import client3 from '../assets/hbt50new.png';
import project from '../assets/hbtaaaaa.png';


const portfolioItems = [
  {
    imgSrc: client1,
    title: 'HBT 100',
    description: '',
    city: 'hbt100',
    link: './Hhbt.jsx',
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
    title: 'HBT 80',
    description: '',
    city: 'hbt40',
    link: './Hbtdelapan.jsx',
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
    title: 'HBT 50',
    description: '',
    city: 'hbt50',
    link: './Hbtso.jsx',
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

const Stationery = () => {
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
          height: '800px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
        }}
      >
        <div className="portfolio-title-overlay"></div>
      </div>
      <br /><br /><br />
      <h2 className="background-title2"><b>Stationery Pump</b></h2>
      <section id="portfolio" className="py-5">
        <div className="search-bar text-center">
 
        </div>
        <div className="portfolio-grid">
          {visiblePortfolios.map((item, index) => (
            <div className="portfolio-card portfolio-card-animate" key={index}>
                <div className="label-concrete-pump">Stationery Pump</div> {/* New Label */}
              <img src={item.imgSrc} alt={`Portfolio ${index}`} className="portfolio-img" />
              <div className="portfolio-card-body">
              <h3 className="portfolio-card-title">
  <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
</h3>

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

export default Stationery;
