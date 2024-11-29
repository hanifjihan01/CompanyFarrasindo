import React, { useState } from 'react';
import '../index.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import client2 from '../assets/fpcirebon.jpg';
import client3 from '../assets/fpbandung.jpg';
import client4 from '../assets/fpmeruyapoll5.jpg';
import client5 from '../assets/fpcikarang.jpg';
import client6 from '../assets/fppusat.jpg';
import client7 from '../assets/fpjatiasih.jpg';
import client8 from '../assets/fpjogja.jpg';
import client9 from '../assets/fpkediri.jpg';
import client10 from '../assets/fpmeruyapoll4.jpg';
import client11 from '../assets/fpsemarang.jpg';
import client12 from '../assets/fpsentul.jpg';
import client13 from '../assets/hermina.JPG';
import client14 from '../assets/fpsolo.jpg';
import client15 from '../assets/bocimi.JPG';
import client16 from '../assets/fpsurabaya.jpg';

const locationItems = [
  { imgSrc: client6, title: 'Farrasindo Perkasa Pusat', description: 'Jakarta Barat' },
  { imgSrc: client4, title: 'Farrasindo Perkasa Poll 5', description: 'Meruya' },
  { imgSrc: client3, title: 'Farrasindo Perkasa Pool Bandung', description: 'Bandung' },
  { imgSrc: client5, title: 'Farrasindo Perkasa Pool Cikarang', description: 'Cikarang' },
  { imgSrc: client2, title: 'Farrasindo Perkasa Pool Cirebon', description: 'Cirebon' },
  { imgSrc: client7, title: 'Farrasindo Perkasa Pool Jatiasih', description: 'Jatiasih' },
  { imgSrc: client8, title: 'Farrasindo Perkasa Pool Jogja', description: 'Yogyakarta' },
  { imgSrc: client9, title: 'Farrasindo Perkasa Pool Kediri', description: 'Kediri' },
  { imgSrc: client10, title: 'Farrasindo Perkasa Pool 4 Meruya', description: 'Meruya' },
  { imgSrc: client11, title: 'Farrasindo Perkasa Pool Semarang', description: 'Semarang' },
  { imgSrc: client12, title: 'Farrasindo Perkasa Pool Sentul', description: 'Sentul' },
  { imgSrc: client13, title: 'Farrasindo Perkasa Pool Solo', description: 'Solo' },
  { imgSrc: client16, title: 'Farrasindo Perkasa Pool Surabaya', description: 'Surabaya' },
];

const OurLocation = () => {
  const [locationIndex, setLocationIndex] = useState(13); 
  const [searchQuery, setSearchQuery] = useState('');

  const handleShowMoreClick = () => {
    setLocationIndex(prevIndex => (prevIndex === locationItems.length ? 6 : locationItems.length));
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredLocations = locationItems.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const visibleLocations = filteredLocations.slice(0, locationIndex);

  return (
    <div className="our-location">
      <h1 className="location-title">Our Locations</h1>
      <p className="location-subtitle">Farrasindo Perkasa Available in Jakarta, West Java, and More</p>

      <input 
        type="text" 
        className="search-bar" 
        placeholder="Search locations..." 
        value={searchQuery} 
        onChange={handleSearchChange} 
      />

      <div className="location-grid">
        {visibleLocations.map((item, index) => (
          <div
          className="location-card"
          key={index}
          style={item.title === 'Farrasindo Perkasa Pool Surabaya' ? { marginBottom: '200px'  } : {}}
        >
            <img src={item.imgSrc} alt={item.title} className="location-img" />
            <div className="location-card-body">
              <h3 className="location-card-title">{item.title}</h3>
              <p className="location-card-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {locationIndex < filteredLocations.length && (
        <div className="show-more-container">
          <button className="btn show-more-btn" onClick={handleShowMoreClick}>
            {locationIndex === locationItems.length ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}
    </div>
  );
};

export default OurLocation;
