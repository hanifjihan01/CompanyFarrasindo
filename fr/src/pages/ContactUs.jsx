import React from 'react';
import '../contact.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import facebookLogo from '../assets/logofb.png';
import instagramLogo from '../assets/logoig.png';
import linkedinLogo from '../assets/logolnkd.png';
import tiktokLogo from '../assets/logotiktoknew.png';
import logotokped from '../assets/logotokped.png';
import OurLocation from '../components/OurLocations';
import logopesan from '../assets/logopesan.png';
import logotelpon from '../assets/logotelpon.png';
import logolocation from '../assets/logolocation.png';
import logocontact from '../assets/contacts.png';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <Header />
      
      <div className="contact-us-header"></div>
     
      <div className="contact-us-content">
        <div className="contact-info">
          <h1 className="contact-us-title">Contact Us</h1>
          
          
          <p className='address'>
            <img src={logolocation} alt="Location" className="inline-icon" /> Address:
          </p>
          <p>Jl. Srengseng Raya No.41 A-B, RT.4/RW.1, Srengseng Kec. Kembangan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11630</p>

          <p className='email1'>
            <img src={logopesan} alt="Location" className="inline-icon" /> Email:
          </p>
          <p><p href="https://farrasindo-cp.co.id/" target="_blank" rel="noopener noreferrer" className="website-link">marketing@farrasindo-cp.co.id</p></p>
          
          
          <div className="contact-details">
            <div className="contact-detail-item">
              <img src={logotelpon} alt="Phone" className="inline-icon" /> Tel:
              <p>0815 7474 7474</p>
              <p>0815 7547 3390</p>
              <p>0212 9045 2276</p>   
            </div>
            <div className="contact-detail-item">
              <img src={logocontact} alt="Phone" className="inline-icon" /> Contact:
              <p>021 – 587 0525</p>
              <p> 021 – 587 0538</p>   
            </div>
          </div>

          <h3 className="follow">Follow Us</h3>
          <div className="social-icons">
            <img src={facebookLogo} alt="Facebook" className="social-icon" />
            <img src={instagramLogo} alt="Instagram" className="social-icon" />
            <img src={linkedinLogo} alt="LinkedIn" className="social-icon" />
            <img src={tiktokLogo} alt="TikTok" className="social-icon" />
            <img src={logotokped} alt="Tokopedia" className="social-icon" />
          </div>
        </div>
      </div>
       
      <div className="full-width-separator"></div>
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
      
      <OurLocation />
      <Footer />
    </div>
  );
}

export default ContactUs;
