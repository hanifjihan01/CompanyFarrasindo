
import t5 from '../assets/t5.jpg';
import sertifikat from '../assets/iso37001.png';
import sertifikat2 from '../assets/iso14001.png';
import sertifikat3 from '../assets/iso9001.png';
import sertifikat4 from '../assets/iso45001.png';
import sertifikat5 from '../assets/ref1.png';
import sertifikat6 from '../assets/ref2.png';
import sertifikat7 from '../assets/ref3.png';
import sertifikat8 from '../assets/ref4.png';
import sertifikat9 from '../assets/certificateframe4.png';
import sertifikat10 from '../assets/certificateframe5.png';
import sertifikat11 from '../assets/certificateframe6.png';
import sertifikat12 from '../assets/certificateframe7.png';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../baru.css';
import '../index.css';
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';
import project from '../assets/project.jpg';
import allunit from '../assets/allunit.png';
import logoaboutus from '../assets/logoaboutus.png';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const AboutUsBaru = () => {
  
  return (
    <div className='sasake'>
      <div
        className="about-us-background"
        style={{
          backgroundImage: `url(${t5})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '400px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
 
        }}
      >
        <Header />
        
    
        <h2 className="background-title"><b>Company Profile</b></h2>
      </div>

      <div className="combined-section">
        <div className="overview">
        <img src={logoaboutus} alt="About Us Logo" className="about-us-logo" style={{ width: '350px', marginBottom: '20px', marginLeft:'410px', marginTop:'-30px'}} />
          <h2 className="overview-title">Overview</h2>
          <p className="overview-text">
            Farrasindo Perkasa is a company providing heavy equipment rental services for concrete building construction, which was founded in Jakarta on 3 October 2001 by Readymix Concrete practitioners 
            who are experienced in the practice of casting buildings, apartments, and roads.
            PT Farrasindo Perkasa was founded and built to answer the challenges and demands of large cities in Indonesia 
            which have limited land to build and provide office facilities and infrastructure, as well as trade on the one 
            hand, and housing for residents on the other. The implementation of regional autonomy for PT Farrasindo Perkasa 
            is seen as a window and door to see big cities in the world with the common characteristics of increasingly high 
            skyscrapers, modern shopping centers & the construction of houses based on Readymix Concrete or ready-made concrete.
          </p>
        </div>

        <div className="allunit-section">
          <img src={allunit} alt="All Unit" className="allunit-image" />
          <div className="allunit-text">
            <h3 className="dualima">250<div className="plus">++</div></h3>
            <h3 className="concrete">Concrete Machinery</h3>
            <br />
            <p className="text250">More than 250 fleets consisting of concrete pumps, stationery concrete pumps, and mobile batching plants.</p>
          </div>
        </div>
        
        <div className="overview">
          <h2 className="overview-title">History Company</h2>
          <p className="overview-text">
            PT. Farrasindo Perkasa was established and built to answer the challenges and demands of big cities in Indonesia that have limited land to build and provide office facilities and infrastructure, as well as trade on the one hand, as well as housing for residents on the other.
            
            The implementation of regional autonomy for PT. Farrasindo Perkasa is seen as a window and a door to see big cities in the world with the general characteristics of increasingly tall skyscrapers, modern shopping centers & construction of houses based on Readymix Concrete or ready-mix concrete so that the quality of the building is guaranteed and durable.
          </p>
          <div className="history-image-container">
            <img src={project} alt="Project" className="history-image" />
          </div>
        </div>

        <div className="barus">
          <div className="vision">
            <h2 className="vision-title">Vision</h2>
            <p className="vision-text">
              Become an influential & leading Concrete Pump Equipment Rental Service Company and supply of spare parts in Southeast Asia.
            </p>
          </div>
          <div className="mission">
            <h2 className="mission-title">Mission</h2>
            <p className="mission-text">
              Develop, disseminate Concrete Pump Equipment Rental Services and provide spare parts and assist customers in their use to achieve higher levels of quality and productivity in accordance with customer expectations.
            </p>
          </div>
        </div>

        <div className="quality-police-baru">
          <h2 className="quality-police-title-baru">Quality Policy</h2>
          <div className="quality-police-content-baru">
            <div className="quality-item-baru">
              <h4>Service Quality</h4>
              <p>Prioritizing service quality with the aim of customer satisfaction.</p>
            </div>
            <div className="quality-item-baru">
              <h4>Skilled Mechanics</h4>
              <p>
                Providing skilled and experienced mechanics, honest and motivated to work hard and trained in several countries (Germany, China, Singapore, etc.).
              </p>
            </div>
            <div className="quality-item-baru">
              <h4>Cooperation</h4>
              <p>Do good and integrated cooperation.</p>
            </div>
            <div className="quality-item-baru">
              <h4>Concrete Pumps</h4>
              <p>Providing Concrete Pumps of more than 70 CP, including those that have a reach of up to 400 m in height.</p>
            </div>
          </div>
        </div>

        <div className="quality-police">
          <h2 className="quality-police-title"><div className="why">Why You</div> <div className="mengapa">Should Choose Us?</div></h2>
          <div className="quality-police-content">
            <div className="quality-item">
           <center> <img src={icon1} alt="Expert Icon" className="choose-icon" /> </center>
             <center> <h4>Expert</h4> </center>
              <p>Supported by professional resources & advanced technology, PT. Farrasindo Group offers more than 250 units with high quality control and maintenance.</p>
            </div>
            <div className="quality-item">
           <center> <img src={icon3} alt="Technology Icon" className="choose-icon" /></center>
              <center><h4>Technology</h4></center>
              <p>
              Farrasindo Group operates in the construction industry which prioritizes technology that keeps up with the times towards Indonesia with advanced development.
              </p>
            </div>
            <div className="quality-item">
            <center><img src={icon2} alt="Concrete Machinery Specialist Icon" className="choose-icon" /></center>
             <center><h4>Concrete Machinery Specialist</h4></center>
              <p>Having a Concrete Machinery Fleet of more than 200 units of all types and sizes, we are ready to contribute to developing Indonesia.</p>
            </div>
            <div className="quality-item">
            <center><img src={icon4} alt="Portfolio Icon" className="choose-icon" /></center>
             <center> <h4>Portfolio</h4> </center>
              <p>With experience in building and working on strategic and retail projects, we are ready to help with your project.</p>
            </div>
          </div>
        </div>
        <br />
      
        <div className="certificate-section">
          <h2 className="certificate-title">Certificate</h2>
          <div className="certificate-grid">
          <img src={sertifikat4} alt="ISO Certificate 1" className="certificate-image" />
          <img src={sertifikat3} alt="ISO Certificate 2" className="certificate-image" />
          <img src={sertifikat2} alt="ISO Certificate 3" className="certificate-image" />
          <img src={sertifikat} alt="ISO Certificate 4" className="certificate-image" />
          <img src={sertifikat8} alt="ISO Certificate 5" className="certificate-image" />
          <img src={sertifikat7} alt="ISO Certificate 6" className="certificate-image" />
          <img src={sertifikat6} alt="ISO Certificate 7" className="certificate-image" />
          <img src={sertifikat5} alt="ISO Certificate 8" className="certificate-image" />
          <img src={sertifikat9} alt="ISO Certificate 9" className="certificate-image" />
          <img src={sertifikat10} alt="ISO Certificate 10" className="certificate-image" />
          <img src={sertifikat11} alt="ISO Certificate 11" className="certificate-image" />
          <img src={sertifikat12} alt="ISO Certificate 12" className="certificate-image" />
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUsBaru;
