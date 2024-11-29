import React from 'react';
import '../products.css';
import cp from '../assets/thumbnailcp.jpg';
import bp from '../assets/thumbnailbp.jpg';
import mbp from '../assets/mbpproduct.jpg';
import crane from '../assets/craneproduct.jpg';
import stationery from '../assets/thumbnailstationery.jpg';
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

const Products = () => {
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
            <h2>CONCRETE PUMP</h2>
            <p>
            A machine used to transfer liquid concrete to hard-to-reach areas at construction sites. It ensures faster, more efficient concrete placement, especially for high-rise buildings or large projects.
            </p>
            <a class="bn60" href="./ConcretePump.jsx">More</a>
          </div>
          <div className="product-image">
            <img src={cp} alt="Concrete Pump" />
          </div>
        </div>

       
        <div className="product-item2">
          <div className="product-text">
            <h2>STATIONERY CONCRETE PUMP</h2>
            <p>
              Stationery Concrete Pumps are ideal for projects requiring precision and reliability in transferring concrete to high elevations.
            </p>
            <a class="bn60" href="./Stationery.jsx">More</a>
          </div>
          <div className="product-image">
            <img src={stationery} alt="Stationery Concrete Pump" />
          </div>
        </div>

   
        <div className="product-item3">
          <div className="product-text">
          <h2>MOUNTED LINE PUMP</h2>
            <p>
              Mounted Line Pumps offer mobility and flexibility for transferring concrete in a variety of construction scenarios. Their compact design makes them ideal for sites with limited space.
            </p>
            <a class="bn60" href="./MountedLinePump.jsx">More</a>
          </div>
          <div className="product-image">
            <img src={moli} alt="Mounted Line Pump" />
           
          </div>
        </div>


    
  

       
        <div className="product-item4">
          <div className="product-text">
          <h2>BATCHING PLANT</h2>
            <p>
              Mobile Batching Plants are versatile, efficient, and cost-effective solutions for construction projects that require on-site concrete production. Their mobility, flexibility, and integration with the construction process make them indispensable tools for meeting the dynamic demands of modern construction projects.
            </p>
            <a class="bn60" href="./chooseBp.jsx">More</a>
          </div>
          <div className="product-image">
            <img src={batching} alt="Mobile Batching Plan    t" />
          </div>
        </div>

  
        <div className="product-item6">
          <div className="product-text">
            <h2>TRUCK MIXER</h2>
            <p>
              Truck Mixers are used to transport concrete to construction sites while keeping it in a liquid state, ensuring the material remains usable for extended periods during transportation.
            </p>
            <a class="bn60" href="./TruckMixer.jsx">More</a>
          </div>
          <div className="product-image">
            <img src={truckmixer} alt="Truck Mixer" />
          </div>
        </div>

 
        <div className="product-item6">
          <div className="product-text">
            <h2>SELF LOADING CONCRETE MIXER</h2>
            <p>
              Truck Mixers are used to transport concrete to construction sites while keeping it in a liquid state, ensuring the material remains usable for extended periods during transportation.
            </p>
            <a class="bn60" href="./SelfLoading.jsx">More</a>
          </div>
          <div className="product-image">
            <img src={SelfLoading} alt="Truck Mixer" />
          </div>
        </div>

        <div className="product-item8">
          <div className="product-text">
            <h2>MOBILE CRANE</h2>
            <p>
              Truck Mixers are used to transport concrete to construction sites while keeping it in a liquid state, ensuring the material remains usable for extended periods during transportation.
            </p>
            <a class="bn60" href="./MobileCrane.jsx">More</a>
          </div>
          <div className="product-image">
            <img src={mobilecrane} alt="Truck Mixer" />
          </div>
        </div>

        <div className="product-item8">
          <div className="product-text">
            <h2>WHEEL LOADER</h2>
            <p>
              Truck Mixers are used to transport concrete to construction sites while keeping it in a liquid state, ensuring the material remains usable for extended periods during transportation.
            </p>
            <a class="bn60" href="./WheelLoader.jsx">More</a>
          </div>
          <div className="product-image">
            <img src={wl} alt="Truck Mixer" />
          </div>
        </div>

        <div className="product-item10">
          <div className="product-text">
            <h2>PLACING BOOM</h2>
            <p>
              A Placing Boom is a crane-like machine used for placing concrete in high-rise construction projects. It helps to efficiently deliver concrete to high elevations.
            </p>
            <a class="bn60" href="./PlacingBoom.jsx">More</a>
          </div>
          <div className="product-image">
            <img src={placingboom} alt="Placing Boom" />
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

export default Products;
