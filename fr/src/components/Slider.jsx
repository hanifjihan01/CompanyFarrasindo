import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import '../index.css';

import t2 from '../assets/t2baru.jpg';
import t3 from '../assets/t4baru.jpg';
import t5 from '../assets/T12.jpg';
import t7 from '../assets/t7.jpg';
import t10 from '../assets/t10baru.jpg';
import t11 from '../assets/T8.jpg';
import no2 from '../assets/no2.png';
import t1 from '../assets/t1baru.jpg';

const slides = [
  {
    image: t1,
    boldText: "",
    smallText: "",
  },
  {
    image: t3,
    boldText: "",
    smallText: "",
  },
  {
    image: t11,
    boldText: "",
    smallText: "",
  },
  {
    image: t10,
    boldText: "",
    smallText: "",
  },
  {
    image: t5,
    boldText: "",
    smallText: "",
  }
];

const SliderComponent = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="swiper-container-wrapper">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop
        onSwiper={(swiper) => {
          setSwiperRef(swiper);
          setActiveIndex(swiper.activeIndex % slides.length);
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex % slides.length)}
        className="swiper-container"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <img src={slide.image} alt={`Slide ${index + 1}`} className="slide-image" />
            <div className="slide-content">
              <h1 className="bold-text" dangerouslySetInnerHTML={{ __html: slide.boldText }}></h1>
              {slide.smallText && <p className="small-text" dangerouslySetInnerHTML={{ __html: slide.smallText }}></p>}
            </div>
            <div className="slider-navigation">
              {slides.map((navSlide, navIndex) => (
                <button
                  key={navIndex}
                  className={`slider-nav-button ${activeIndex === navIndex ? 'active' : ''}`}
                  onClick={() => swiperRef?.slideTo(navIndex)}
                >
                </button>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderComponent;
