import React, { useRef, useState } from 'react';
import '../index.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
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
import client16 from '../assets/warehouse.JPG';
import project from '../assets/project.jpg';
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
import acset from '../assets/acset.png';
import abipraya from '../assets/abipraya.png';
import LogosSlider from '../components/LogosSlider';




const portfolioItems = [
  { imgSrc: client6, title: 'Mass Concrete Apartment', description: 'Alam Sutera', city: 'Jakarta' },
  { imgSrc: client4, title: 'Mass Concrete Apartment', description: 'PIK 1', city: 'Jakarta' },
  { imgSrc: client3, title: 'Mass Concrete Chitaland Tower', description: 'Jakarta Selatan', city: 'Jakarta' },
  { imgSrc: client5, title: 'Mass Concrete Gedung BNI', description: 'PIK 2', city: 'Jakarta' },
  { imgSrc: client2, title: 'Mass Concrete Hotel', description: 'Jakarta Pusat', city: 'Jakarta' },
  { imgSrc: client7, title: 'Mass Concrete Pabrik Kulit', description: 'Jawa Barat', city: 'Bogor' },
  { imgSrc: client8, title: 'Mass Concrete PLTU', description: 'Cilacap', city: 'Cilacap' },
  { imgSrc: client9, title: 'Mass Concrete Pondok Indah Residence', description: 'Jakarta Selatan', city: 'Jakarta' },
  { imgSrc: client10, title: 'Proyek Kereta Cepat Jakarta - Bandung', description: '', city: 'Bandung' },
  { imgSrc: client11, title: 'Proyek Pengecoran Hotel 500 Kamar', description: 'Bogor', city: 'Bogor' },
  { imgSrc: client12, title: 'Proyek Pengecoran Lapangan Tennis', description: 'Pesanggrahan', city: 'Jakarta' },
  { imgSrc: client13, title: 'Proyek Pengecoran RS Hermina', description: 'Depok', city: 'Depok' },
  { imgSrc: client14, title: 'Proyek Pengecoran Sekolah 6 Lantai', description: 'Tangerang', city: 'Tangerang' },
  { imgSrc: client15, title: 'Proyek Pengecoran Tol Bocimi Seksi 3', description: 'Jawa Barat', city: 'Bogor' },
  { imgSrc: client16, title: 'Proyek Pengecoran Warehouse', description: 'Banten', city: 'Banten' },
];

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
  { imgSrc: wika }
 
 
];



const PortfolioPage = () => {
  const [portfolioIndex, setPortfolioIndex] = useState(15); 
  const [searchQuery, setSearchQuery] = useState(''); 
  const [selectedCity, setSelectedCity] = useState(''); 

  const handleShowMoreClick = () => {
    setPortfolioIndex(portfolioItems.length); 
  };


  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value); 
  };



  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
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
      <div className="portfolio-title-overlay">
        <h2 className="background-title"><b>Completed Project</b></h2>
      </div>
    </div>
    <div className="containerss">
      <section id="portfolio" className="py-5">
        <div className="search-bar text-center">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
          <select  className="testtt" aria-label=".form-select-lg example"  value={selectedCity} onChange={handleCityChange} style={{ color: selectedCity === '' ? 'gray' : 'black' }}>
            <option value="" className="filterss">Filter Cities</option>
            <option value="Jakarta">Jakarta</option>
            <option value="Bogor">Bogor</option>
            <option value="Depok">Depok</option>
            <option value="Bandung">Bandung</option>
            <option value="Cilacap">Cilacap</option>
            <option value="Tangerang">Tangerang</option>
            <option value="Banten">Banten</option>
          </select>
        </div>
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
        {portfolioIndex < filteredPortfolios.length && (
          <div className="text-center mt-3">
            <button className="btn small-btn" onClick={handleShowMoreClick}>Selengkapnya</button>
            </div>
          )}
        </section>
      </div>

      <section id="partnership" className="py-5">

<h2 className="text-center">Partnership</h2>

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
      <Footer />
    </div>
  );
};

export default PortfolioPage;
