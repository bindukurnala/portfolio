import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import profileImg from '../../assets/profile.jpg';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="container hero-container">
                <div className="hero-content">
                    <h2 className="hero-greeting">Hello, I'm</h2>
                    <h1 className="hero-name">Bindu Madhurya Kurnala</h1>
                    <h3 className="hero-title">Integration Developer</h3>
                    <p className="hero-description">
                        Specializing in connecting systems and empowering businesses with 8+ years of expertise in
                        Application Integration (EAI), B2B, A2A, API Development, and Cloud Solutions.
                    </p>
                    <div className="hero-actions">
                        <a href="/projects" className="btn btn-primary">
                            View Work <ArrowRight size={18} />
                        </a>
                        <a href="/resume.pdf" className="btn btn-secondary" title="Download Resume">
                            Download CV <Download size={18} />
                        </a>
                    </div>
                </div>
                <div className="hero-image-wrapper">
                    <div className="hero-image-container">
                        <img
                            src={profileImg}
                            alt="Bindu Kurnala"
                            className="hero-image"
                        />
                        <div className="hero-circle circle-1"></div>
                        <div className="hero-circle circle-2"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
