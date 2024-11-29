import React, { useEffect } from 'react';
import '../logos.css';
import abipraya from '../assets/abipraya.svg';
import acset from '../assets/acset.svg';
import adhi from '../assets/adhi.svg';
import bakrie_logo from '../assets/bakrie_logo.svg';
import ciputra from '../assets/ciputra.svg';
import gandaria from '../assets/gandaria.svg';
import himindo from '../assets/himindo.svg';
import hutama from '../assets/hutama.svg';
import jakon from '../assets/jakon.svg';
import kajima from '../assets/kajima.svg';
import kcic from '../assets/kcic.svg';
import koin from '../assets/koin.svg';
import krakatau from '../assets/krakatau.svg';
import lrt from '../assets/logo_lrt_jakarta.svg';
import mrt from '../assets/mrt.svg';
import multikon from '../assets/multikon-logo.svg';
import murinda from '../assets/murinda.svg';
import nindya from '../assets/nindya.svg';
import obayashi from '../assets/obayashi-logo.svg';
import pertamina from '../assets/pertamina.svg';
import pp from '../assets/pp.svg';
import pupr from '../assets/pupr.svg';
import senayan from '../assets/senayan.svg';
import summarecon from '../assets/summarecon.svg';
import tamini from '../assets/tamini.svg';
import total from '../assets/total.svg';
import waskita from '../assets/waskita.svg';
import wika from '../assets/wika.svg';

const Logos = [
  { imgSrc: abipraya, name: 'abipraya' },
  { imgSrc: acset, name: 'acset' },
  { imgSrc: adhi, name: 'adhi' },
  { imgSrc: bakrie_logo, name: 'bakrie_logo' },
  { imgSrc: ciputra, name: 'ciputra' },
  { imgSrc: gandaria, name: 'gandaria' },
  { imgSrc: himindo, name: 'himindo' },
  { imgSrc: hutama, name: 'hutama' },
  { imgSrc: jakon, name: 'jakon' },
  { imgSrc: kajima, name: 'kajima' },
  { imgSrc: kcic, name: 'kcic' },
  { imgSrc: koin, name: 'koin' },
  { imgSrc: krakatau, name: 'krakatau' },
  { imgSrc: lrt, name: 'lrt' },
  { imgSrc: mrt, name: 'mrt' },
  { imgSrc: multikon, name: 'multikon' },
  { imgSrc: murinda, name: 'murinda' },
  { imgSrc: nindya, name: 'nindya' },
  { imgSrc: obayashi, name: 'obayashi' },
  { imgSrc: pertamina, name: 'pertamina' },
  { imgSrc: pp, name: 'pp' },
  { imgSrc: pupr, name: 'pupr' },
  { imgSrc: senayan, name: 'senayan' },
  { imgSrc: summarecon, name: 'summarecon' },
  { imgSrc: tamini, name: 'tamini' },
  { imgSrc: total, name: 'total' },
  { imgSrc: waskita, name: 'waskita' },
  { imgSrc: wika, name: 'wika' }
];

const LogosSlider = () => {
  useEffect(() => {
    const logosSlide = document.querySelector('.logos-slide');
    const copy = logosSlide.cloneNode(true);
    document.querySelector('.logos').appendChild(copy);
  }, []);

  return (
    <div className="logos">
      <div className="logos-slide">
        {Logos.map((logo, index) => (
          <img
            key={index}
            src={logo.imgSrc}
            alt={logo.name}
            className={`logo-${logo.name}`}
          />
        ))}
      </div>
    </div>
  );
};

export default LogosSlider;
