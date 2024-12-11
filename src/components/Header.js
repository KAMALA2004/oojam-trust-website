import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './logo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the sidebar visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Function to handle clicks outside the sidebar
    const handleClickOutside = (event) => {
        if (isMenuOpen && !event.target.closest('.sidebar') && !event.target.closest('.menu-icon')) {
            setIsMenuOpen(false);
        }
    };

    // Add event listener when the component mounts and clean it up when it unmounts
    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <header className="header">
            <div className="header-content">
                {/* Logo and Heading aligned to the left */}
                <div className="logo-container">
                    <img src={logo} alt="Oojam Trust Logo" className="logo" />
                    <h1 className="header-title">Oojam Trust</h1>
                </div>

                {/* Hamburger icon visible on mobile */}
                <button onClick={toggleMenu} className="menu-icon">
                    &#9776;
                </button>

                {/* Normal Navigation Menu (for large screens) */}
                <nav className="nav-menu">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/donation">Donate</Link></li>
                    </ul>
                </nav>
            </div>

            {/* Sidebar Menu visible when isMenuOpen is true */}
            <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
                <div className="sidebar-content">
                    <button onClick={toggleMenu} className="close-btn">×</button>
                    <h2 className="sidebar-title">Oojam Trust</h2>
                    <nav className="sidebar-nav">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><Link to="/donation">Donate</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
