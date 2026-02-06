import React from 'react';
import { Award, Code, Globe, Zap } from 'lucide-react';
import './Bio.css';

const Bio = () => {
    return (
        <section className="bio-section">
            <div className="container">
                <h2 className="section-title">Professional Summary</h2>

                <div className="bio-container glass-card">
                    <p className="bio-text">
                        I am a results-driven <strong>Integration Developer</strong> with over <strong>8 years</strong> of expertise in enabling secure, reliable, and seamless data exchange for global enterprises. My passion lies in architecting complex integration solutions using <strong>WebMethods, AWS, and Azure IPaaS</strong>.
                    </p>
                    <p className="bio-text">
                        Currently working at <strong>JPMorgan Chase & Co.</strong>, I design large-scale payment APIs and ensure compliance with strict banking regulations. Prior to this, I acted as an Integration Consultant at CGI and Software AG, delivering mission-critical solutions for telecommunications and banking clients like Standard Chartered.
                    </p>

                    <div className="bio-stats">
                        <div className="stat-item">
                            <Code className="stat-icon" />
                            <span className="stat-number">8+</span>
                            <span className="stat-label">Years Exp</span>
                        </div>
                        <div className="stat-item">
                            <Globe className="stat-icon" />
                            <span className="stat-number">15+</span>
                            <span className="stat-label">Large Projects</span>
                        </div>
                        <div className="stat-item">
                            <Award className="stat-icon" />
                            <span className="stat-number">5</span>
                            <span className="stat-label">Certifications</span>
                        </div>
                        <div className="stat-item">
                            <Zap className="stat-icon" />
                            <span className="stat-number">100%</span>
                            <span className="stat-label">Commitment</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Bio;
