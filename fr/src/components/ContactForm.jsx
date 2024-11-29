import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from '../assets/bca.jpg'; 
import logopesan from '../assets/logopesan.png';
import logotelepon from '../assets/logotelpon.png'; 
import logomap from '../assets/logomap.png'; 

function ContactForm() {
  return (
    <div
      className="contactcuy"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw', 
        minHeight: '100vh', 
        padding: '20px',
        color: 'white', 
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'center', 
      }}
    >
      <div className="container text-left"> 
        <div className="row">
          <div className="col-md-6">
            <h3>Contact Us</h3>
            <form style={{ padding: '20px', borderRadius: '10px' }}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', border: 'none', color: 'white' }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Your Email"
                  style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', border: 'none', color: 'white' }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="3"
                  placeholder="Message"
                  style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', border: 'none', color: 'white' }}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', border: 'none', color: 'white' }}>
                Send
              </button>
            </form>
          </div>

          
          <div className="col-md-6">
            <h3>Farrasindo</h3>
            <p>
              If you have any questions or need assistance, please don’t hesitate
              to contact us using the information provided. We’re here to help you!
            </p>
            <br /><br /><br /><br />
            <h4>Contact Information</h4>
            <p>
              <img src={logopesan} alt="Email Icon" style={{ width: '20px', marginRight: '10px', filter: 'invert(100%)' }} />
              Email: marketing@farrasindo-cp.co.id
            </p>
            <p>
              <img src={logotelepon} alt="Phone Icon" style={{ width: '20px', marginRight: '10px', filter: 'invert(100%)' }} />
              Phone: 0815 7474 7474
            </p>
            <p>
              <img src={logomap} alt="Map Icon" style={{ width: '20px', marginRight: '10px', filter: 'invert(100%)' }} />
              Address: Jl. Srengseng Raya No.41 A-B, RT.4/RW.1,<br />
              Srengseng, Kec. Kembangan, Kota Jakarta Barat,<br />
              Daerah Khusus Ibukota Jakarta 11630
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
