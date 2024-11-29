import React, { useEffect, useRef, useState } from 'react';
import '../MonsterProfile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';  
import AOS from 'aos';      
import concretePump from '../assets/MiniLongBoomPump.png';
import kiri_minilb from '../assets/hbt100new.png';
import depan_minilb from '../assets/depan_minilb.png';
import miringkanan_minilb from '../assets/miringkanan_minilb.png';
import kanan_minilb from '../assets/kanan_minilb.png';
import belakang_minilb from '../assets/belakang_minilb.png';
import MonsterStatus from '../components/MonsterStatus';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OverviewSectionHhbt from '../components/OverviewSectionHhbt';
import ReactPlayer from 'react-player/lazy';
import project from '../assets/hbtaaaaa.png';
import bgrigi from '../assets/bgrigi.png';
import FacetDetails from '../components/FaceDetails';
import AbilityImages from '../components/AbilityImages';
import minisketch from '../assets/dimensiseratus.png';

const Hbtdelapan = () => {
    const imageRef = useRef(null);
    const textRef = useRef(null);

    // Images array for the slider
    const images = [kiri_minilb, depan_minilb, miringkanan_minilb, kanan_minilb, belakang_minilb];
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    useEffect(() => {
        // Initialize AOS animations
        AOS.init({ duration: 1000 });
        
        // Intersection Observer for additional animations
        const observerOptions = { threshold: 0.5 };
        const handleIntersection = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-visible');
                    observer.unobserve(entry.target);
                }
            });
        };
        const observer = new IntersectionObserver(handleIntersection, observerOptions);

        if (imageRef.current) observer.observe(imageRef.current);
        if (textRef.current) observer.observe(textRef.current);

        return () => {
            if (imageRef.current) observer.unobserve(imageRef.current);
            if (textRef.current) observer.unobserve(textRef.current);
        };
    }, []);

    // Function to handle thumbnail click
    const handleThumbnailClick = (index) => {
        setActiveImageIndex(index);
    };

    return (
        <div className="portfolio-page">
            <Header />

            <div
                className="bgrigi-background"
                style={{
                    backgroundImage: `url(${bgrigi})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div
                    className="portfolio-background"
                    style={{
                        backgroundImage: `url(${project})`,
                        width: '100%',
                        height: '750px',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'relative',
                    }}
                ></div>
                <div className="profile-container d-flex">
                    <div className="left-section">
                        <div className="side-label">STATIONERY PUMP</div>
                    </div>
                    

                    <div className="content-section" ref={textRef}>
                        <div className="badge badge-agility1">STATIONERY PUMP</div>
                        <h1 className="monster-name">HBT 80</h1>
                        <h4 className="monster-tagline">
                        EFFICIENTLY WORK IN NARROW SITES WITH COMPACT DESIGN 
                        </h4>
                        <p className="monster-description">
                        A machine used to transfer liquid concrete to hard-to-reach areas at construction sites. It ensures faster, more efficient concrete placement, especially for high-rise buildings or large projects.
                        </p>
                        <a href="/" className="read-history">MORE</a>
                    </div>

                    <div
                        className="images-section"
                        ref={imageRef}
                        data-aos="fade-up" // AOS animation for the images-section
                    >
                        <img src={images[activeImageIndex]} alt="Concrete Pump" className="mains-image" />
                        <div className="thumbnails-container" data-aos="fade-up" data-aos-delay="200">
                            {images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`Thumbnail ${index + 1}`}
                                    className={`thumbnails-image ${index === activeImageIndex ? 'active' : ''}`}
                                    onClick={() => handleThumbnailClick(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className="baru1"><MonsterStatus /></div>
                <br />
                
                <div className="minisketch-container" data-aos="fade-in" data-aos-duration="1000">
                    <img src={minisketch} alt="Mini Sketch" className="minisketch-image" />
                </div>
                <br />
                <br />
                <div className="baru2"><OverviewSectionHhbt /></div>
            </div>
            <div className="baru"><FacetDetails /></div>
            <br />
            <br />
            <br />

           
            <div className="baru3"><AbilityImages /></div>
            <br />
            <br />
            <br />
            <div className="video-container">
                <ReactPlayer
                    url="https://youtu.be/eUszitYK1P4?si=ULKEzwS8XJvWlxt0"
                    width="50%"
                    height="400px"
                    className="youtube-video"
                />
            </div>
            <br />
            <br />
            <br />

            <Footer />
        </div>
    );
};

export default Hbtdelapan;
