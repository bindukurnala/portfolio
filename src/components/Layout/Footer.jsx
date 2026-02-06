import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            padding: '2rem 0',
            textAlign: 'center',
            marginTop: 'auto',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            color: '#6b7280'
        }}>
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Bindu Madhurya Kurnala. All rights reserved.</p>
                <p style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>Built with React & Vite</p>
            </div>
        </footer>
    );
};

export default Footer;
