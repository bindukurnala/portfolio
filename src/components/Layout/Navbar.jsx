import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <Link to="/" className="nav-logo">
                    <Code2 className="logo-icon" />
                    <span>Bindu<span className="accent">.Dev</span></span>
                </Link>

                {/* Desktop Menu */}
                <ul className="nav-links desktop-only">
                    <NavLink to="/" label="Home" active={location.pathname === '/'} />
                    <NavLink to="/skills" label="Skills" active={location.pathname === '/skills'} />
                    <NavLink to="/experience" label="Experience" active={location.pathname === '/experience'} />
                    <NavLink to="/projects" label="Projects" active={location.pathname === '/projects'} />
                    <NavLink to="/contact" label="Contact" active={location.pathname === '/contact'} />
                </ul>

                {/* Mobile Menu Button */}
                <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
                    {isOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Menu */}
                <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                    <ul className="nav-links-mobile">
                        <NavLink to="/" label="Home" active={location.pathname === '/'} />
                        <NavLink to="/skills" label="Skills" active={location.pathname === '/skills'} />
                        <NavLink to="/experience" label="Experience" active={location.pathname === '/experience'} />
                        <NavLink to="/projects" label="Projects" active={location.pathname === '/projects'} />
                        <NavLink to="/contact" label="Contact" active={location.pathname === '/contact'} />
                    </ul>
                </div>
            </div>
        </nav>
    );
};

const NavLink = ({ to, label, active }) => (
    <li>
        <Link to={to} className={`nav-link ${active ? 'active' : ''}`}>
            {label}
        </Link>
    </li>
);

export default Navbar;
