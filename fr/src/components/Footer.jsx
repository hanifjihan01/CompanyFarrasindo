import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/fpaja.png';
import facebookLogo from '../assets/logofb2.png';
import instagramLogo from '../assets/logoig2.png';
import linkedinLogo from '../assets/logolinked2.png';
import tiktokLogo from '../assets/logotiktok2.png';
import logotokped from '../assets/logotokped2.png';
import '../index.css'; 

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container footer-white-text"> 
        <div className="row align-items-center text-center text-md-start">
          
        
          <div className="col-12 col-md-4 mb-3 mb-md-0 d-flex flex-column align-items-center align-items-md-start">
            <img src={logo} alt="Company Logo" style={{ width: '180px', height: '140px', marginLeft: '35px' }} />
            <div className="mt-3 text-center text-md-start">
              <h6 className="mb-1" style={{ fontSize: '20px', fontWeight: 'bold' }}>Head Office</h6>
              <p className="mb-1" style={{ fontSize: '16px' }}>Jl. Srengseng Raya</p>
              <p className="mb-1" style={{ fontSize: '16px' }}>No.41 A-B, RT.4/RW.1, Srengseng</p>
              <p className="mb-1" style={{ fontSize: '16px' }}>Kec. Kembangan, Kota Jakarta Barat,</p>
              <p className="mb-0" style={{ fontSize: '16px' }}>Daerah Khusus Ibukota Jakarta 11630</p>
              <br />
              <h6 className="mb-2" style={{ fontSize: '20px', fontWeight: 'bold' }}>Phone</h6>
              <p className="mb-1" style={{ fontSize: '16px' }}>0815 7474 7474</p>
              <p className="mb-1" style={{ fontSize: '16px' }}>0815 7547 3390</p>
              <p className="mb-1" style={{ fontSize: '16px' }}>0815 7545 3564</p>
            </div>
          </div>

          {/* Center: Social Media Links and Email */}
          <div className="col-12 col-md-4 mb-3 mb-md-0">
            <h6 className="mb-2" style={{ fontSize: '20px', fontWeight: 'bold' }}>Connect With Us</h6>
            <div className="d-flex justify-content-center justify-content-md-start">
              <a href="https://facebook.com" className="mx-2">
                <img src={facebookLogo} alt="Facebook" style={{ width: '20px', height: '20px' }} />
              </a>
              <a href="https://instagram.com" className="mx-2">
                <img src={instagramLogo} alt="Instagram" style={{ width: '20px', height: '20px' }} />
              </a>
              <a href="https://linkedin.com" className="mx-2">
                <img src={linkedinLogo} alt="LinkedIn" style={{ width: '20px', height: '20px' }} />
              </a>
              <a href="https://tiktok.com" className="mx-2">
                <img src={tiktokLogo} alt="TikTok" style={{ width: '20px', height: '20px' }} />
              </a>
              <a href="https://tokopedia.com" className="mx-2">
                <img src={logotokped} alt="Tokopedia" style={{ width: '20px', height: '20px' }} />
              </a>
            </div>
            <br />
            <h6 className="mb-2" style={{ fontSize: '20px', fontWeight: 'bold' }}>Email</h6>
            <p className="mb-2" style={{ fontSize: '16px' }}>
              <a href="mailto:marketing@farrasindo-cp.co.id" className="text-white">marketing@farrasindo-cp.co.id</a>
            </p>
          </div>

          {/* Right: Google Maps */}
          <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-end">
            <div style={{ width: '100%', maxWidth: '350px', height: '150px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.496174354221!2d106.7535656737797!3d-6.1980789607173215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f77305c654ff%3A0x5c50db3133a6daae!2sPT.%20FARRASINDO%20PERKASA%20-%20HEAD%20OFFICE%20(%20CONCRETE%20PUMP%20)!5e0!3m2!1sid!2sid!4v1723619411752!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: '1px solid #ccc', borderRadius: '8px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>

        <div className="text-center mt-3">
          <p className="mb-0">&copy; 2024 Farrasindo</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
