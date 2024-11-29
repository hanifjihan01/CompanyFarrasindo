import React, { useEffect, useRef } from 'react';
import '../MonsterProfile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import concretePump from '../assets/standard.png'; 
import bgrigi from '../assets/bgrigi.png';
import cp1 from '../assets/gambarslide1.jpeg'; 
import cp2 from '../assets/gambarslide2.jpeg'; 
import cp3 from '../assets/gambarslide3.jpeg'; 
import cp4 from '../assets/gambarslide4.jpeg'; 
import cp5 from '../assets/gambarslide5.jpeg'; 
import MonsterStatus from '../components/MonsterStatus';
import Header from '../components/Header';
import project from '../assets/pompamini.jpg';
import '../index.css';
import '../baru.css';
import Footer from '../components/Footer';
import FaceDetails from '../components/FaceDetails';
import FacetDetails from '../components/FaceDetails';
import AbilityImages from '../components/AbilityImages';
import ReactPlayer from 'react-player/lazy';
import OverviewSectionStandard from '../components/OverviewSectionStandard';
import minisketch from '../assets/dimensistandard.png';

const MonsterProfile = () => {
    const imageRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
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

    return (
        <div className="portfolio-page">
            <Header />

            {/* Background for sections up to OverviewSectionStandard */}
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
                        height: '650px',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'relative',
                    }}
                ></div>

                <div className="profile-container d-flex">
                    <div className="left-section">
                        <div className="side-label">CONCRETE PUMP</div>
                    </div>

                    <div className="content-section" ref={textRef}>
                        <div className="badge badge-agility">CONCRETE PUMP</div>
                        <h1 className="monster-name">STANDARD 24 M</h1>
                        <h4 className="monster-tagline">
                            CHASES DOWN LOW HEALTH ENEMIES WITH INCREASED SPEED
                        </h4>
                        <p className="monster-description">
                            A machine used to transfer liquid concrete to hard-to-reach areas at construction sites.
                            It ensures faster, more efficient concrete placement, especially for high-rise buildings
                            or large projects.
                        </p>
                        
                        <a href="/" className="read-history">more</a>
                    </div>

                    <div className="image-section" ref={imageRef}>
                        <img src={concretePump} alt="Concrete Pump" className="monster-image" />
                    </div>
                </div>

                <div className="baru1"><MonsterStatus /></div>
                <br />
                <div className="minisketch-container" data-aos="fade-in" data-aos-duration="1000">
                    <img src={minisketch} alt="Mini Sketch" className="minisketch2-image" />
                </div>
                <br />
                <div className="baru2"><OverviewSectionStandard /></div>
            </div>

            {/* Sections after OverviewSectionStandard without bgrigi background */}
            <div className="baru">
                <FacetDetails />
            </div>
            <br />
            <br />
            <br />
            
            <div className="baru3"><AbilityImages /></div>
            <br />
            <br />
            <br />

            <div className="video-container">
                <ReactPlayer 
                    url="https://youtu.be/RQ2j3N9AR0s?si=TCFKNh8qXazM8mwr" 
                    width="50%"  
                    height="400px" 
                    className="youtube-video"
                />
            </div>
            <br />
            <br />
            <br />

            <div className="baru4"><Footer /></div>
        </div>
    );
};

export default MonsterProfile;
