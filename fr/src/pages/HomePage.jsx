import React, { useState,useRef } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import Footer from '../components/Footer';
import BrandSection from '../components/BrandsSection';
import ImageSlider from '../components/ImageSlider';
import Testimonials from '../components/Testimonials';
import batchingPlant from '../assets/mobile_batching_plant.png';
import stationery from '../assets/stationerybaru.jpg';
import concretePump from '../assets/concrete_pump.png';
import concretepumpbaru from '../assets/concretepumpbaru.jpg';
import batchPump from '../assets/batch_pump.png';
import blend from '../assets/blend.jpg';
import blend2 from '../assets/blend2.png';
import batchpumpbaru from '../assets/batchpumpbaru.jpg';
import selfLoadingMixer from '../assets/self_loading_mixer.png';
import selfbaru from '../assets/selfbaru.jpg';
import truck from '../assets/truck.jpg';
import crane from '../assets/crane.png';
import truckMixer from '../assets/truck_mixer.png';
import cpDouble from '../assets/cp_double.png';
import cpExtraDslb from '../assets/cp_extra_dslb.png';
import newbatch from '../assets/newbatch.jpg';
import wheel from '../assets/wheel.jpg';
import cpLb from '../assets/cp_lb.png';
import cpMini from '../assets/cp_mini.png';
import cpSuperLb from '../assets/cp_super_lb.png';
import doubleSuperLongBoom from '../assets/double_super_long_boom.png';
import extraDoubleSuperLong from '../assets/extra_double_super_long.png';
import semiLongBoom from '../assets/semi_long_boom.png';
import standard from '../assets/standard.png';
import superLongBoom from '../assets/super_long_boom.png';
import client1 from '../assets/jabar.jpg';
import client2 from '../assets/jakpus.jpg';
import client3 from '../assets/jaksel.jpg';
import client4 from '../assets/pik1.JPG';
import client5 from '../assets/pik2.jpg';
import client6 from '../assets/sutera.JPG';
import client7 from '../assets/kulit.JPG';
import client8 from '../assets/cilacap.jpg';
import client9 from '../assets/indah.JPG';
import client10 from '../assets/kereta.jpg';
import client11 from '../assets/hotel.JPG';
import client12 from '../assets/tenis.JPG';
import client13 from '../assets/hermina.JPG';
import client14 from '../assets/sekolah.JPG';
import client15 from '../assets/bocimi.JPG';
import client16 from  '../assets/warehouse.JPG';

import ContactForm from '../components/ContactForm';
import SliderComponent from '../components/Slider';
import AboutUs from '../components/AboutUs';
import fbi from '../assets/fbi.png';
import fpi from '../assets/fpi.png';
import citipumpindonesia from '../assets/citipumpindonesia.png';
import citicraneperkasa from '../assets/citicraneperkasa.png';
import bpr from '../assets/bpr.png';
import iji from '../assets/iji.png';
import gbp from '../assets/gbp.png';
import simi from '../assets/simi.png';
import abipraya from '../assets/abipraya.png';
import acset from '../assets/acset.png';
import adhi from '../assets/adhi.png';
import bakrie_logo from '../assets/bakrie_logo.png';
import ciputra from '../assets/ciputra.png';
import gandaria from '../assets/gandaria.png';
import himindo from '../assets/HIMINDO.png';
import hutama from '../assets/hutama.png';
import jakon from '../assets/JAKON.png';
import kajima from '../assets/kajima.png';
import kcic from '../assets/KCIC.png';
import koin from '../assets/KOIN.png';
import krakatau from '../assets/KRAKATAU.png';
import lrt from '../assets/Logo_LRT_Jakarta.png';
import mrt from '../assets/MRT.png';
import multikon from '../assets/multikon-logo.png';
import murinda from '../assets/murinda.png';
import nindya from '../assets/NINDYA.png';
import obayashi from '../assets/obayashi-logo.png';
import pertamina from '../assets/PERTAMINA.png';
import pp from '../assets/PP.png';
import pupr from '../assets/PUPR.png';
import senayan from '../assets/SENAYAN.png';
import summarecon from '../assets/Summarecon_Agung.png';
import tamini from '../assets/tamini.png';
import total from '../assets/TOTAL.png';
import waskita from '../assets/WASKITA.png';
import wika from '../assets/WIKA.png';
import bp1 from '../assets/bp1.png';
import bp2 from '../assets/bp2.png';
import wlnew1 from '../assets/wlnew1.png';
import wlnew2 from '../assets/wlnew2.png';
import wlnew3 from '../assets/wlnew3.png';
import wlnew4 from '../assets/wlnew4.png';
import wlnew5 from '../assets/wlnew5.png';
import wlnew6 from '../assets/wlnew6.png';
import wlnew7 from '../assets/wlnew7.png';
import sl1baru from '../assets/sl1baru.png';
import sl2baru from '../assets/sl2baru.png';
import hbt100 from '../assets/hbt100new.png';
import hbt50 from '../assets/hbt50new.png';
import hbt80 from '../assets/hbt80new.png';









import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import LogosSlider from '../components/LogosSlider';




function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [portfolioIndex, setPortfolioIndex] = useState(4); 

  const brandsSliderRef = useRef(null);

  const scrollBrands = (direction) => {
    const scrollAmount = 200; 
    if (direction === 'left') {
      brandsSliderRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else if (direction === 'right') {
      brandsSliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  
  const scrollLeft = () => {
    if (brandsSliderRef.current) {
      brandsSliderRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  

  const scrollRight = () => {
    if (brandsSliderRef.current) {
      brandsSliderRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };
  const productImages = {
    mobileBatchingPlant: {
      images: [bp1, bp2, truckMixer],
      details: {
        length: '7 meters',
        height: '2.8 meters',
        width: '2.4 meters',
        weight: '10 tons',
      },
    },
    concretePump: {
      images: [cpMini, cpLb, standard, cpDouble, cpExtraDslb],
      details: {
        length: '7 meters',
        height: '2.8 meters',
        width: '2.4 meters',
        weight: '10 tons'
      }
    },
    batchPump: {
      images: [bp1, bp2],
      details: {
        length: '7 meters',
        height: '2.5 meters',
        width: '2.3 meters',
        weight: '8 tons'
      }
    },
    SelfLoadingConcreteMixer: {
      images: [sl1baru, sl2baru],
      details: {
        length: '9 meters',
        height: '2.7 meters',
        width: '2.5 meters',
        weight: ' 9 tons'
      }
    },
    StationeryConcretePump: {
      images: [hbt100, hbt80, hbt50],
      details: {
        length: '8 meters',
        height: '3 meters',
        width: '5 meters',
        weight: '15 tons'
      }
    },
    TruckMixxer: {
      images: [truckMixer],
      details: {
        length: '9 meters',
        height: '5 meters',
        width: '6 meters',
        weight: '15 tons'
      }
    },
    WheelLoaders:{
      images: [wlnew1, wlnew2, wlnew3, wlnew4, wlnew5, wlnew6,wlnew7],
      details: {
        length: '9 meters',
        height: '5 meters',
        width: '6 meters',
        weight: '15 tons'
      }
    }
    
  
  };
 



  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % productImages[selectedProduct].images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + productImages[selectedProduct].images.length) % productImages[selectedProduct].images.length);
  };

  const handleMouseEnter = () => {
    setHoveredImage(selectedProduct);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };
  const handleShowMoreClick = () => {
    setPortfolioIndex(portfolioItems.length); 
  };

  

  
  
  

  const portfolioItems = [
    { imgSrc: client6, title: 'Mass Concrete Apartment', description: 'Alam Sutera' },
    { imgSrc: client4, title: 'Mass Concrete Apartment', description: 'PIK 1' },
    { imgSrc: client3, title: 'Mass Concrete Chitaland Tower', description: 'Jakarta Selatan' },
    { imgSrc: client5, title: 'Mass Concrete Gedung BNI', description: 'PIK 2' },
    { imgSrc: client2, title: 'Mass Concrete Hotel', description: 'Jakarta Pusat' },
    { imgSrc: client7, title: 'Mass Concrete Pabrik Kulit', description: 'Jawa Barat' },
    { imgSrc: client8, title: 'Mass Concrete PLTU ', description: 'Cilacap' },
    { imgSrc: client9, title: 'Mass Concrete Pondok Indah Residence ', description: 'Jakarta Selatan' },
    { imgSrc: client10, title: 'Proyek Kereta Cepat Jakarta - Bandung ', description: '' },
    { imgSrc: client11, title: 'Proyek Pengecoran Hotel 500 Kamar', description: 'Bogor' },
    { imgSrc: client12, title: 'Proyek Pengecoran Lapangan Tennis', description: 'Pesanggrahan' },
    { imgSrc: client13, title: 'Proyek Pengecoran RS Hermina', description: 'Depok' },
    { imgSrc: client14, title: 'Proyek Pengecoran Sekolah 6 Lantai', description: 'Tangerang' },
    { imgSrc: client15, title: 'Proyek Pengecoran Tol Bocimi Seksi 3', description: 'Jawa Barat' },
    { imgSrc: client16, title: 'Proyek Pengecoran Warehouse', description: 'Banten' },
   
  ];
  const visiblePortfolios = portfolioItems.slice(0, portfolioIndex);

  const partnershipItems = [
    { imgSrc: abipraya },
    { imgSrc: acset },
    { imgSrc: adhi },
    { imgSrc: bakrie_logo },
    { imgSrc: ciputra },
    { imgSrc: gandaria },
    { imgSrc: himindo },
    { imgSrc: hutama },
    { imgSrc: jakon },
    { imgSrc: kajima },
    { imgSrc: kcic },
    { imgSrc: koin },
    { imgSrc: krakatau },
    { imgSrc: lrt },
    { imgSrc: mrt },
    { imgSrc: multikon },
    { imgSrc: murinda },
    { imgSrc: nindya },
    { imgSrc: obayashi },
    { imgSrc: pertamina },
    { imgSrc: pp },
    { imgSrc: pupr },
    { imgSrc: senayan },
    { imgSrc: summarecon },
    { imgSrc: tamini },
    { imgSrc: total },
    { imgSrc: waskita },
    { imgSrc: wika },
    { imgSrc: abipraya },
    { imgSrc: acset },
    { imgSrc: adhi },
    { imgSrc: bakrie_logo },
    { imgSrc: ciputra },
    { imgSrc: gandaria },
    { imgSrc: himindo },
    { imgSrc: hutama },
    { imgSrc: jakon },
    { imgSrc: kajima },
    { imgSrc: kcic },
    { imgSrc: koin },
    { imgSrc: krakatau },
    { imgSrc: lrt },
    { imgSrc: mrt },
    { imgSrc: multikon },
    { imgSrc: murinda },
    { imgSrc: nindya },
    { imgSrc: obayashi },
    { imgSrc: pertamina },
    { imgSrc: pp },
    { imgSrc: pupr },
    { imgSrc: senayan },
    { imgSrc: summarecon },
    { imgSrc: tamini },
    { imgSrc: total },
    { imgSrc: waskita },
    { imgSrc: wika },
    { imgSrc: abipraya },
    { imgSrc: acset },
    { imgSrc: adhi },
    { imgSrc: bakrie_logo },
    { imgSrc: ciputra },
    { imgSrc: gandaria },
    { imgSrc: himindo },
    { imgSrc: hutama },
    { imgSrc: jakon },
    { imgSrc: kajima },
    { imgSrc: kcic },
    { imgSrc: koin },
    { imgSrc: krakatau },
    { imgSrc: lrt },
    { imgSrc: mrt },
    { imgSrc: multikon },
    { imgSrc: murinda },
    { imgSrc: nindya },
    { imgSrc: obayashi },
    { imgSrc: pertamina },
    { imgSrc: pp },
    { imgSrc: pupr },
    { imgSrc: senayan },
    { imgSrc: summarecon },
    { imgSrc: tamini },
    { imgSrc: total },
    { imgSrc: waskita },
    { imgSrc: wika },
    
   
   
   
  ];

  const brandsItems = [
    { imgSrc: fbi },
    { imgSrc: fpi },
    { imgSrc: citipumpindonesia },
    { imgSrc: citicraneperkasa},
    { imgSrc: bpr },
    { imgSrc: iji },
    { imgSrc: gbp },
    { imgSrc: simi }

   
    
  ];

  return (
    <div className="App">
      <Header />
      <SliderComponent />
      <AboutUs />
      <h2 className="text-baru"><b>Our Services</b></h2>
      <Services />
     
      
    
      
      <div className="container">
        <section id="innovation" className="py-5">
          <h2><b>Product & Services</b></h2>
          <div className="product-card-wrapper">
            <div className="product-card" onClick={() => handleCardClick('mobileBatchingPlant')}>
              <img src={blend} className="card-img-top" alt="Mobile Batching Plant" />
              <div className="card-body"></div>
            </div>
            <div className="product-card" onClick={() => handleCardClick('concretePump')}>
              <img src={concretepumpbaru} className="card-img-top" alt="Concrete Pump" />
              <div className="card-body"></div>
            </div>
            <div className="product-card" onClick={() => handleCardClick('batchPump')}>
              <img src={newbatch} className="card-img-top" alt="Batch Pump" />
              <div className="card-body"></div>
            </div>
            <div className="product-card" onClick={() => handleCardClick('SelfLoadingConcreteMixer')}>
              <img src={selfbaru} className="card-img-top" alt="Self Loading Mixer" />
              <div className="card-body"></div>
            </div>
            <div className="product-card" onClick={() => handleCardClick('StationeryConcretePump')}>
              <img src={stationery} className="card-img-top" alt="Crane" />
              <div className="card-body"></div>
            </div>
            <div className="product-card" onClick={() => handleCardClick('TruckMixxer')}>
              <img src={truck} className="card-img-top" alt="Crane" />
              <div className="card-body"></div>
            </div>
            <div className="product-card" onClick={() => handleCardClick('WheelLoaders')}>
              <img src={wheel} className="card-img-top" alt="Crane" />
              <div className="card-body"></div>
            </div>
          </div>
          </section>
  
        <div className={`background-fp ${selectedProduct ? '' : 'hidden'}`}>
          {selectedProduct && (
            <div
              className="product-images"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={productImages[selectedProduct].images[currentImageIndex]} alt={selectedProduct} />
              {productImages[selectedProduct].images.length > 1 && (
                <div className="slider-controls">
                  <button className="slider-button" onClick={prevImage}>◀</button>
                  <button className="slider-button" onClick={nextImage}>▶</button>
                </div>
              )}
              {hoveredImage && (
                <div className="product-details">
                  <p>Car Length: {productImages[hoveredImage].details.length}</p>
                  <p>Car Height: {productImages[hoveredImage].details.height}</p>
                  <p>Car Width: {productImages[hoveredImage].details.width}</p>
                  <p>Car Weight: {productImages[hoveredImage].details.weight}</p>
                </div>
              )}
            </div>
          )}
        </div>
        </div>
        <br />
        <br />
        
        <h2><b>Our Brands</b></h2>
        <BrandSection />
        
        
        <br />
       
        <div className="container">
        <section id="portfolio" className="py-5">
          <h2 className="text-center"><b>Portfolio</b></h2>
          <div className="portfolio-grid">
          {visiblePortfolios.map((item, index) => (
            <div className="portfolio-card" key={index}>
              <img src={item.imgSrc} alt={`Portfolio ${index}`} className="portfolio-img" />
              <div className="portfolio-card-body">
                <h3 className="portfolio-card-title">{item.title}</h3>
                <p className="portfolio-card-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
          {portfolioIndex < portfolioItems.length && (
            <div className="text-center mt-3">
             <a href="pages/PortfolioPage.jsx" className="btn btn-primary small-btn" target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
          )}
        </section>
        </div>

          <br />
          <h2><b>Testimonials</b></h2>
  
        <Testimonials />
        
     
  
      <section id="partnership" className="py-5">

    <h2 className="text-center"><b>Partnership</b></h2>

    <LogosSlider />
    {/* <div className="partnership-slider-wrapper">
      <div className="partnership-slider">
        <div className="partnership-inner">
          {partnershipItems.map((item, index) => (
            <div className="partnership-item" key={index}>
              <img src={item.imgSrc} alt={item.title} className="partnership-img" />
            </div>
          ))}
          {partnershipItems.map((item, index) => (
            <div className="partnership-item" key={index + partnershipItems.length}>
              <img src={item.imgSrc} alt={item.title} className="partnership-img" />
            </div>
          ))}
        </div>
      </div>
    </div> */}
 
</section>

       
      
  
      <div className="map-contact-container py-5">
        <div className="contact-form-container">
          
        </div>
      </div>
      
    
     
      <Footer />
    </div>
  );
  
}

export default HomePage;