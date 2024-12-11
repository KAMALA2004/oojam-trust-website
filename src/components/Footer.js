import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import logo from './logo.png';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#F9A602', color: 'white', padding: '40px 20px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Logo and Copyright */}
        <div style={{ flex: 1, marginBottom: '20px', textAlign: 'center' }}>
          <img src={logo} alt="Oojam Trust Logo" style={{ maxWidth: '150px', marginBottom: '10px' }} />
          <p style={{ color: 'white' }}>&copy; 2024 Oojam Trust | All Rights Reserved</p>
        </div>

        {/* Contact Information */}
        <div style={{ flex: 1, marginBottom: '20px', textAlign: 'center' }}>
          <h4 style={{ borderBottom: '2px solid white', display: 'inline-block', paddingBottom: '5px' }}>Contact Us</h4>
          <div style={{ marginTop: '10px' }}>
            <p style={{ color: 'white', marginBottom: '5px' }}>
              Email: <a href="mailto:contact@oojamtrust.com" style={{ color: 'white', textDecoration: 'none' }}>contact@oojamtrust.com</a>
            </p>
            <p style={{ color: 'white', marginBottom: '5px' }}>
              Phone: <a href="tel:+11234567890" style={{ color: 'white', textDecoration: 'none' }}>+1 (123) 456-7890</a>
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div style={{ flex: 1, marginBottom: '20px', textAlign: 'center' }}>
          <h4 style={{ borderBottom: '2px solid white', display: 'inline-block', paddingBottom: '5px' }}>Quick Links</h4>
          <ul style={{ padding: 0, listStyleType: 'none' }}>
            <li style={{ margin: '10px 0' }}>
              <Link to="/about" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>About Us</Link>
            </li>
            <li style={{ margin: '10px 0' }}>
              <Link to="/contact" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>Contact</Link>
            </li>
            <li style={{ margin: '10px 0' }}>
              <Link to="/donation" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>Donate</Link>
            </li>
            <li style={{ margin: '10px 0' }}>
              <Link to="/gallery" style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }}>Gallery</Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div style={{ flex: 1, marginBottom: '20px', textAlign: 'center' }}>
          <h4 style={{ borderBottom: '2px solid white', display: 'inline-block', paddingBottom: '5px' }}>Follow Us</h4>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '10px' }}>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '24px' }}>
              <FaTwitter />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '24px' }}>
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '24px' }}>
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;
