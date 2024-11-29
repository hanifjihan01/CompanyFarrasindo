import React, { useState } from 'react';
import batchpumppenjualan from '../assets/gambarslide2.jpeg';
import sertifikat from '../assets/sertifikat.jpg';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../baru.css';
import '../index.css';
import gambarslide1 from '../assets/gambarslide1.jpeg';
import gambarslide2 from '../assets/gambarslide2.jpeg';
import gambarslide3 from '../assets/gambarslide3.jpeg';
import gambarslide4 from '../assets/gambarslide4.jpeg';
import gambarslide5 from '../assets/gambarslide5.jpeg';







const Blend = () => {

  const images = [gambarslide1, gambarslide4, gambarslide5];
  const [selectedImage, setSelectedImage] = useState(images[0]);

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
        <h2 className="background-title"><b>Blend</b></h2>
      </div>

      <div className="combined-section">
        <div className="overview">
          <h2 className="overview-title"></h2>
          <p className="overview-text">
          </p>
        </div>
 
        <div className="overview">
          <h3 className="overview-title"></h3>
          <div className="image-display" style={{ textAlign: 'center' }}>
            <img 
              src={selectedImage} 
              alt="Selected" 
              className="main-image"
            />
          </div>

         
          <div className="image-thumbnails">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                onClick={() => setSelectedImage(image)}
                className={`thumbnail-image ${selectedImage === image ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>

        <br />
      </div>
      <Footer />
    </div>
  );
};

export default Blend;
