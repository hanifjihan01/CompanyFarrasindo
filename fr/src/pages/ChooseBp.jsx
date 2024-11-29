import React from 'react';
import '../products.css';
import conventional from '../assets/conventional.jpg';
import bp from '../assets/thumbnailbp.jpg';
import mbp from '../assets/mbpproduct.jpg';
import crane from '../assets/craneproduct.jpg';
import mobile from '../assets/mobilebp.jpg';
import batching from '../assets/thumbnailbatchingplant.jpg';
import moli from '../assets/thumbnailmoli.jpg';
import truckmixer from '../assets/thumbnailtruckmixer.jpg';
import Header from '../components/Header';
import Footer from '../components/Footer';
import mbpbaru from '../assets/thumbnailmbp.jpg';
import SelfLoading from '../assets/selfloadingthumbnail.jpg';
import mobilecrane from '../assets/cranethumbnail.jpg';
import wl from '../assets/wheelloaderthumbnail.jpg';


import batchpumppenjualan from '../assets/rentall.jpg';
import placingboom from '../assets/PlacingBoom.jpg';

const ChooseBp = () => {
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
     
        <h2 className="background-title"><b>Products</b></h2>
      </div>

      <div className="products-container">

        
        <div className="product-item">
          <div className="product-text">
            <h2>CONVENTIONAL BATCHING PLANT</h2>
            <p>
            A machine used to transfer liquid concrete to hard-to-reach areas at construction sites. It ensures faster, more efficient concrete placement, especially for high-rise buildings or large projects.
            </p>
            <a class="bn60" href="./ConventionalBatchingPlant.jsx">More</a>
          </div>
          <div className="product-image">
            <img src={conventional} alt="Concrete Pump" />
          </div>
        </div>

       
        <div className="product-item2">
          <div className="product-text">
            <h2>MOBILE BATCHING PLANT</h2>
            <p>
              Stationery Concrete Pumps are ideal for projects requiring precision and reliability in transferring concrete to high elevations.
            </p>
            <a class="bn60" href="./MobileBatchingPlant.jsx">More</a>
          </div>
          <div className="product-image">
            <img src={mobile} alt="Stationery Concrete Pump" />
          </div>
        </div>

   
       
      </div>
      
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default ChooseBp;
