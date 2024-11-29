import React, { useState, useEffect } from 'react';
import batchpumppenjualan from '../assets/sell.jpg';
import sertifikat from '../assets/sertifikat.jpg';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../baru.css';
import '../index.css';
import gambarslide1 from '../assets/gambarslide1.jpeg';
import gambarslide2 from '../assets/gambarslide2.jpeg';
import gambarslide3 from '../assets/gambarslide3.jpeg';
import gambarslide4 from '../assets/mcprent.jpg';
import gambarslide5 from '../assets/mbporent.png';
import ServicesBaru from '../components/ServicesBaru';
import tenis from '../assets/tenis1.jpg';
import bgarticle from '../assets/fcprent.jpg';
import OverviewSection from '../components/OverviewSection';
import safety from '../assets/safety.jpg';
import loweroperationcost from '../assets/loweroperationcost.jpeg';
import canworkon from '../assets/canworkon.jpeg';
import broadrange from '../assets/broadrange.jpg';
import aftersalesservice from '../assets/aftersalesservice.jpg';
import FeaturesBenefits from '../components/FeaturesBenefits';
import service1 from '../assets/cpservice.png';
import service2 from '../assets/scprent.png';
import service3 from '../assets/bpsell2.png';
import sparepart1 from '../assets/sp1.png';
import sparepart2 from '../assets/sp2.png';
import sparepart3 from '../assets/sp3.png';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom'; 



const Service = () => {

  const images1 = [bgarticle, gambarslide4, gambarslide5];
  const images2 = [service1, service2, service3];
  const images3 = [sparepart1, sparepart2, sparepart3];


  const titles1 = ['Foldable Crane Project', 'Mass Concrete Project', 'Retail Concrete Pump Project'];
  const titles2 = ['Concrete Pump', 'Stationary Concrete Pump', 'Batching Pump'];
  const titles3 = ['Blend', 'Pulling Roler Blend', 'Emulsion Pump Blend'];

  const [selectedImage1, setSelectedImage1] = useState(images1[0]);
  const [selectedImage2, setSelectedImage2] = useState(images2[0]);
  const [selectedImage3, setSelectedImage3] = useState(images3[0]);

  const [title1, setTitle1] = useState(titles1[0]);
  const [title2, setTitle2] = useState(titles2[0]);
  const [title3, setTitle3] = useState(titles3[0]);

  useEffect(() => { 
    const interval1 = setInterval(() => {
      setSelectedImage1((prevImage) => {
        const currentIndex = images1.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % images1.length;
        setTitle1(titles1[nextIndex]); 
        return images1[nextIndex];
      });
    }, 6000);

    const interval2 = setInterval(() => {
      setSelectedImage2((prevImage) => {
        const currentIndex = images2.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % images2.length;
        setTitle2(titles2[nextIndex]); 
        return images2[nextIndex];
      });
    }, 6000);

    const interval3 = setInterval(() => {
      setSelectedImage3((prevImage) => {
        const currentIndex = images3.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % images3.length;
        setTitle3(titles3[nextIndex]); 
        return images3[nextIndex];
      });
    }, 6000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, [images1, images2, images3]);

  return (
    <div className='sasake'>
      <div
        className="about-us-background"
        style={{
          backgroundImage: `url(${tenis})`,
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
        <h2 className="background-title"><b>Services</b></h2>
      </div>  
      <div className="combined-section">
        <div className="overview">
          <h2 className="overview-title" style={{ fontSize: '36px', fontWeight: 'bold' }}>Your Trusted Concrete Equipment Partner for 23 Years</h2>
          <p className="overview-text">
            Farrasindo Group offers comprehensive solutions for your concrete machinery needs. Specializing in sales, rentals, and spare parts, we ensure top-quality service and reliable equipment for every project. With 23 years in this industry, we’re dedicated to providing the best support to keep your operations running smoothly and efficiently.
          </p>
        </div>

        <ServicesBaru />
      </div>
      <OverviewSection />
      <br />
      <br />
      <br />

      <div className="combined-section">
        <br />
        <h2 className="buyers" style={{ fontSize: '36px', fontWeight: 'bold' }}>PRODUCT HIGHLIGHT</h2>
        <div className="orange-line"></div>
        <br /><br />

        <div className="rental-purchase-sections" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className="overview" style={{ flex: '1', margin: '0 10px', border: '3px solid black', boxShadow: '30px 0 5px rgba(0, 0, 0, 0.1)' }}>
            <h3 className="overview-title">AVAILABLE FOR RENT</h3>
            <div className="image-display" style={{ textAlign: 'center' }}>
              <img src={selectedImage1} alt="Selected" className="main-image" />
            </div>
            <h4 className="image-title">{title1}</h4> 
            <div className="image-thumbnails">
              {images1.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className={`thumbnail-image ${selectedImage1 === image ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedImage1(image);
                    setTitle1(titles1[index]);
                  }}
                />
              ))}
            </div>
            <div className="find-more-unit-section" style={{ textAlign: 'center', marginTop: '20px' }}>
              <Link to="/./pages/Rental.jsx" className="find-more-unit-button" style={{
                padding: '10px 20px',
                backgroundColor: '#f56b2a',
                color: '#fff',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '16px'
              }}>
                Find More Unit
              </Link>
            </div>
          </div>

          
          <div className="overview" style={{ flex: '1', margin: '0 10px', border: '3px solid black', boxShadow: '30px 0 5px rgba(0, 0, 0, 0.1)' }}>
            <h3 className="overview-title">AVAILABLE FOR SELL</h3>
            <div className="image-display" style={{ textAlign: 'center' }}>
              <img src={selectedImage2} alt="Selected" className="main-image" />
            </div>
            <h4 className="image-title">{title2}</h4> 
            <div className="image-thumbnails">
              {images2.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className={`thumbnail-image ${selectedImage2 === image ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedImage2(image);
                    setTitle2(titles2[index]);
                  }}
                />
              ))}
            </div>
            <div className="find-more-unit-section" style={{ textAlign: 'center', marginTop: '20px' }}>
              <Link to="/./pages/Products.jsx" className="find-more-unit-button" style={{
                padding: '10px 20px',
                backgroundColor: '#f56b2a',
                color: '#fff',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '16px'
              }}>
                Find More Unit
              </Link>
            </div>
          </div>

         
          <div className="overview" style={{ flex: '1', margin: '0 10px', border: '3px solid black', boxShadow: '1px 0 5px rgba(0, 0, 0, 0.1)' }}>
            <h3 className="overview-title">AVAILABLE FOR SPAREPART</h3>
            <div className="image-display" style={{ textAlign: 'center' }}>
              <img src={selectedImage3} alt="Selected" className="main-image" />
            </div>
            <h4 className="image-title">{title3}</h4> 
            <div className="image-thumbnails">
              {images3.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className={`thumbnail-image ${selectedImage3 === image ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedImage3(image);
                    setTitle3(titles3[index]);
                  }}
                />
              ))}
            </div>
            <div className="find-more-unit-section" style={{ textAlign: 'center', marginTop: '20px' }}>
              <Link to="https://www.intijaya-parts.com/" className="find-more-unit-button" style={{
                padding: '10px 20px',
                backgroundColor: '#f56b2a',
                color: '#fff',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '16px'
              }}>
                Find More Unit
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <br />
      <br />
      <br />
      <FeaturesBenefits />
     

      <Footer />
    </div>
  );
};

export default Service;
