// src/components/HeroSection.js
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import homefp1 from '../assets/homefp1.jpg';
import b5 from '../assets/b5.jpg';
import b6 from '../assets/b6.jpg';
import b1 from '../assets/b1.jpg';
import b4 from '../assets/b4.jpg';
import b7 from '../assets/b7.jpg';
import b8 from '../assets/b8.jpg';
import b9 from '../assets/b9.jpg';

const backgrounds = [homefp1, b5, b6, b1, b4, b7, b8, b9];

function HeroSection() {
  const [currentBg, setCurrentBg] = useState(backgrounds[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg(prevBg => {
        const currentIndex = backgrounds.indexOf(prevBg);
        const nextIndex = (currentIndex + 1) % backgrounds.length;
        return backgrounds[nextIndex];
      });
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="jumbotron jumbotron-fluid text-white d-flex align-items-center"
      style={{
        backgroundImage: `url(${currentBg})`,
        backgroundSize: 'cover',
        height: '100vh',
        marginTop: '56px'
      }}
    >
      <div className="container text-center">
        <h1 className="display-4"></h1>
        <p className="lead"></p>
      </div>
    </div>
  );
}

export default HeroSection;
