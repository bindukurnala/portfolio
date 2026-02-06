import React from 'react';
import { Mail, Phone, Linkedin, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page container">
            <h2 className="section-title">Get In Touch</h2>
            <p className="contact-intro">
                Interested in discussing integration architectures, cloud solutions, or new opportunities?
                I'm always open to connecting with fellow professionals.
            </p>

            <div className="contact-layout">
                <div className="contact-info glass-card">
                    <div className="contact-item">
                        <Mail className="contact-icon" />
                        <div>
                            <h3>Email Me</h3>
                            <a href="mailto:bindu.kurnala@gmail.com">bindu.kurnala@gmail.com</a>
                        </div>
                    </div>

                    <div className="contact-item">
                        <Phone className="contact-icon" />
                        <div>
                            <h3>Call Me</h3>
                            <a href="tel:+14255539230">+1 425.553.9230</a>
                        </div>
                    </div>

                    <div className="contact-item">
                        <Linkedin className="contact-icon" />
                        <div>
                            <h3>Connect</h3>
                            <a href="https://linkedin.com/in/bindumadhurya" target="_blank" rel="noopener noreferrer">
                                linkedin.com/in/bindumadhurya
                            </a>
                        </div>
                    </div>

                    <div className="contact-item">
                        <MapPin className="contact-icon" />
                        <div>
                            <h3>Location</h3>
                            <p>USA</p>
                        </div>
                    </div>
                </div>

                <form className="contact-form glass-card" onSubmit={(e) => e.preventDefault()}>
                    <h3>Send a Message</h3>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" placeholder="Your Name" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="your@email.com" />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea rows="5" placeholder="Let's build something together..."></textarea>
                    </div>
                    <button className="btn btn-primary submit-btn">
                        Send Message <Send size={18} />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
