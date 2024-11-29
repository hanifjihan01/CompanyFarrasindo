import React, { useEffect, useRef } from 'react';
import '../MonsterProfile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import concretePump from '../assets/semigambar.png'; 
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
import OverviewSection from '../components/OverviewSection';
import AbilityImages from '../components/AbilityImages';
import OverviewSectionMLB from '../components/OverviewSectionMLB';
import OverviewSectionSLB from '../components/OverviewSectionSLB';
import bgrigi from '../assets/bgrigi.png';

import ReactPlayer from 'react-player/lazy';
import OverviewSectionSemi from '../components/OverviewSectionSemi';

const SemiLongBoom = () => {
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
            >
            </div>

            <div className="profile-container d-flex">
                <div className="left-section">
                    <div className="side-label">CONCRETE PUMP</div>
                </div>

                <div className="content-section" ref={textRef}>
                    <div className="badge badge-agility">CONCRETE PUMP</div>
                    <h1 className="monster-name">SEMI LONG BOOM 26 M</h1>
                    <h4 className="monster-tagline">
                        CHASES DOWN LOW HEALTH ENEMIES WITH INCREASED SPEED
                    </h4>
                    <p className="monster-description">
                        Bloodseeker forces difficult decisions on his enemies. Able to drive his foes to a retreat by
                        bathing a large area with a damaging ritual, his gruesome ultimate asks his opponents to hold still,
                        or die.
                    </p>
                    <a href="/" className="read-history">MORE</a>

              

              
                </div>

                <div className="image-section" ref={imageRef}>
                    <img src={concretePump} alt="Concrete Pump" className="monster-image" />
                </div>

        
               
            </div> 
            <div className="baru1">  <MonsterStatus /></div>
            <br />
            <br />
            <div className="baru2"><OverviewSectionSemi /></div>
            </div>
            <div className="baru"> <FacetDetails /> </div>
            <br />
            <br />
            <br />
            <h2 className="newportfolio">PORTFOLIO</h2>
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

            <div className="baru4"><Footer /></div>
            
            </div>
    
    );
};

export default SemiLongBoom;
