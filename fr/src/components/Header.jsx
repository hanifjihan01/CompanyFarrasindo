import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Browser, MagnifyingGlass } from 'phosphor-react';
import logo from '../assets/fpaja.png';
import sidebarLogo from '../assets/fpaja.png';
import flagEn from '../assets/british.png'; // Gambar bendera Inggris
import flagId from '../assets/indonesia.png'; // Gambar bendera Indonesia
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../index.css';



function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [batchingDropdownOpen, setBatchingDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('EN'); // Default English

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleOutsideClick = (event) => {
      if (
        !event.target.closest('.dropdown-menu') &&
        !event.target.closest('.dropdown-toggle')
      ) {
        setServicesDropdownOpen(false);
        setProductsDropdownOpen(false);
        setBatchingDropdownOpen(false);
      }
    };



    window.addEventListener('scroll', handleScroll);
    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
    setProductsDropdownOpen(false);
  };

  const toggleProductsDropdown = () => {
    setProductsDropdownOpen(!productsDropdownOpen);
    setServicesDropdownOpen(false);
    setBatchingDropdownOpen(false);
  };

  const toggleBatchingDropdown = (event) => {
    event.stopPropagation(); 
    setBatchingDropdownOpen(!batchingDropdownOpen);
  };

  const changeLanguage = (lang) => {
    setSelectedLanguage(lang);
    // Logic untuk translate bisa ditambahkan di sini, seperti menggunakan library i18n
  };

 



  return (
    <header className={`navbar navbar-expand-lg navbar-light fixed-top ${scrolled ? 'bg-dark' : 'bg-transparent'} header-container`}>
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Farrosindo Logo" className="logo-image" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><a className="nav-link text-white" href="/">Home</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="/pages/AboutUsBaru.jsx">About Us</a></li>
            <li className={`nav-item dropdown ${servicesDropdownOpen ? 'show' : ''}`}>
              <a
                className="nav-link dropdown-toggle text-white"
                id="servicesDropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded={servicesDropdownOpen}
                onClick={toggleServicesDropdown}
                
              >
                Services 
              </a>
              <div className={`dropdown-menu ${servicesDropdownOpen ? 'show' : ''} custom-dropdown`} aria-labelledby="servicesDropdown">
                <a className="dropdown-item" href="/pages/Service.jsx">Farrasindo Services</a>
                <a className="dropdown-item" href="https://www.intijaya-parts.com/pages/spare-parts-dan-servis">After Sales Services</a>
              </div>
            </li>
            <li className={`nav-item dropdown ${productsDropdownOpen ? 'show' : ''}`}>
              <a
                className="nav-link dropdown-toggle text-white"
                id="productsDropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded={productsDropdownOpen}
                onClick={toggleProductsDropdown}
              >
                Products
              </a>
              <div className={`dropdown-menu ${productsDropdownOpen ? 'show' : ''} custom-dropdown`} aria-labelledby="productsDropdown">
                <a className="dropdown-item" href="/pages/ConcretePump.jsx">Concrete Pump</a>
                <a className="dropdown-item" href="/pages/Stationery.jsx">Stationery Concrete Pump</a>
                <a className="dropdown-item" href="/pages/MountedLinePump.jsx">Mounted Line Pump</a>
                <div className={`dropdown-submenu ${batchingDropdownOpen ? 'show' : ''}`}>
                  <a
                    className="dropdown-item dropdown-toggle"
                    onClick={toggleBatchingDropdown}
                    
                  >
                    Batching Plant
                  </a>
                  <div className={`dropdown-menu ${batchingDropdownOpen ? 'show' : ''}`}>
                    <a className="dropdown-item" href="/pages/ConventionalBatchingPlant.jsx">Conventional Batching Plant</a>
                    <a className="dropdown-item" href="/pages/MobileBatching.jsx">Mobile Batching Plant</a>
                  </div>
                </div>
                <a className="dropdown-item" href="/pages/TruckMixer.jsx">Truck Mixer</a>
                <a className="dropdown-item" href="/pages/SelfLoading.jsx">Self Loading Concrete Mixer</a>
                <a className="dropdown-item" href="/pages/MobileCrane.jsx">Crane</a>
                <a className="dropdown-item" href="/pages/WheelLoader.jsx">Wheel Loader</a>
                <a className="dropdown-item" href="/pages/MonsterStatus.jsx">Placing Boom</a>
                <a className="dropdown-item" href="/pages/MonsterProfile.jsx">Precast</a>
                <a className="dropdown-item" href="/pages/WheelLoader.jsx">Stone Quary Service</a>
              </div>
            </li>
            <li className="nav-item"><a className="nav-link text-white" href="/pages/PortfolioPage.jsx">Portfolio</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="/pages/ArticlePage.jsx">Article</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="/pages/ContactUs.jsx">Contact Us</a></li>
            <li className="nav-item">
              <button className="search-icon-button" onClick={toggleSidebar}>
                <MagnifyingGlass size={30} color="white" />
              </button>
            </li>
              {/* Tombol Bahasa */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                id="languageDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  src={selectedLanguage === 'EN' ? flagEn : flagId}
                  alt={selectedLanguage === 'EN' ? 'English' : 'Indonesia'}
                  className="language-flag"
                />
              </a>
              <div className="dropdown-menu" aria-labelledby="languageDropdown">
                <button className="dropdown-item" onClick={() => changeLanguage('EN')}>
                  <img src={flagEn} alt="English" className="language-flag" /> English
                </button>
                <button className="dropdown-item" onClick={() => changeLanguage('ID')}>
                  <img src={flagId} alt="Indonesia" className="language-flag" /> Bahasa
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}>×</button>
        <div className="sidebar-logo-container">
          <img src={sidebarLogo} alt="Sidebar Logo" className="sidebar-logo" />
        </div>
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
          <button className="ok">Ok</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
