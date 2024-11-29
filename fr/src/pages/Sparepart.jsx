import React, { useState } from 'react';
import batchpumppenjualan from '../assets/rentall.jpg';
import sertifikat from '../assets/sertifikat.jpg';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../baru.css';
import '../index.css';
import gambarbaru1 from '../assets/ijisparepart.jpg';
import gambarbaru2 from '../assets/ijisparepart2.jpg';
import gambarbaru3 from '../assets/ijisparepart3.jpg';
import gambarbaru4 from '../assets/mlp.png';
import gambarbaru5 from '../assets/placingboom.png';

// Array of images
const images = [gambarbaru1, gambarbaru2, gambarbaru3];

const Sparepart = () => {
  // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to go to the previous slide
  const handlePrevSlide = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Function to go to the next slide
  const handleNextSlide = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className='sasake'>
      <div
        className="about-us-background"
        style={{
          backgroundImage: `url(${batchpumppenjualan})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '620px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <Header />
        <h2 className="background-title"><b>AVAILABLE FOR SPAREPART </b></h2>
      </div>

      <div className="combined-section">
        <div className="overview">
          <h2 className="overview-title">Our Rental</h2>
          <p className="overview-text">
            
          </p>
        </div>

        <div className="custom-slider">
          {/* Main image */}
          <div className="image-display">
            <img 
              src={images[currentImageIndex]} 
              alt={`Product ${currentImageIndex + 1}`} 
              className="main-slider-image"
            />
          </div>

          {/* Navigation buttons */}
          <button className="prev-slide" onClick={handlePrevSlide}>
            &#10094;
          </button>
          <button className="next-slide" onClick={handleNextSlide}>
            &#10095;
          </button>
        
          {/* Thumbnails */}
          <div className="image-thumbnails">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setCurrentImageIndex(index)}
                className={`thumbnail-image ${currentImageIndex === index ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Sparepart;
