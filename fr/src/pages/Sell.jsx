import React, { useState } from 'react';
import batchpumppenjualan from '../assets/rentall.jpg';
import sertifikat from '../assets/sertifikat.jpg';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../baru.css';
import '../index.css';
import gambarbaru1 from '../assets/concretepumpp.png';
import gambarbaru2 from '../assets/stationeryconcretepump.png';
import gambarbaru3 from '../assets/tm.png';
import gambarbaru4 from '../assets/mlp.png';
import gambarbaru5 from '../assets/placingboom.png';


const images = [gambarbaru1, gambarbaru2, gambarbaru3, gambarbaru4, gambarbaru5];

const Sell = () => {
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  
  const handlePrevSlide = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // const handleScreen = () => {
  //   setHandleCurrentScreen((prevIndex) => 
  //     prevIndex === 1 ? images.current + 1 : prevIndex + 1
  //   )
  // }

 
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
        <h2 className="background-title"><b>AVAILABLE FOR SALE </b></h2>
      </div>

      <div className="combined-section">
        <div className="overview">
          <h2 className="overview-title">Our Products</h2>
          <p className="overview-text">
            
          </p>
        </div>

        <div className="custom-slider">
          <div className="image-display">
            <img 
              src={images[currentImageIndex]} 
              alt={`Product ${currentImageIndex + 1}`} 
              className="main-slider-image"
            />
          </div>

        
          <button className="prev-slide" onClick={handlePrevSlide}>
            &#10094;
          </button>
          <button className="next-slide" onClick={handleNextSlide}>
            &#10095;
          </button>

        
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

export default Sell;
