import React from 'react';
import './Hero.css'; // Make sure you have Hero.css for styling
import visual from '../Assets/img_data/images.jpg'; // Import your image asset - adjust path as needed

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-container">
                <div className="hero-left">
                    <h1 className="hero-title">Welcome to Educonnect</h1>
                    <p className="hero-subtitle">Connect with teachers and students in Bangladesh</p>
                </div>
                <div className="hero-right">
                    <img src={visual} alt="Educonnect Hero Image" className="hero-image" />
                </div>
            </div>
        </section>
    );
};

export default Hero;