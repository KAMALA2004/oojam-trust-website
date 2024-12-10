import React from 'react';
import logo from './logo.png'; // Use import for better compatibility

// Inline CSS in a JSX file using a style object
const footerStyle = {
  backgroundColor: '#F9A602', // Bright orange background
  color: 'white',
  padding: '40px 20px',
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif',
};

const emailSection = {
  color: 'white',
};

const phoneSection = {
  color: 'white',
};

const contentStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  maxWidth: '1200px',
  margin: '0 auto',
};

const sectionStyle = {
  flex: 1,
  marginBottom: '20px',
};

const logoStyle = {
  maxWidth: '150px',
  marginBottom: '10px',
};

const linkStyle = {
  color: 'white', // Soft white for links
  textDecoration: 'none',
  fontSize: '16px',
  display: 'block',
  margin: '5px 0',
  transition: 'color 0.3s',
};

const socialLinkStyle = {
  color: 'white',
  display: 'block',
  margin: '5px 0',
  textDecoration: 'none',
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={contentStyle}>
        <div style={sectionStyle}>
          <img src={logo} alt="Oojam Trust Logo" style={logoStyle} />
          <p>&copy; 2024 Oojam Trust | All Rights Reserved</p>
        </div>
        <div style={sectionStyle}>
          <h4>Contact Us</h4>
          <p style={emailSection}>
            Email: <a href="mailto:contact@oojamtrust.com" style={linkStyle}>contact@oojamtrust.com</a>
          </p>
          <p style={phoneSection}>
            Phone: <a href="+91 7373878768" style={linkStyle}>+91 7373878768</a>
          </p>
        </div>
        <div style={sectionStyle}>
          <h4>Quick Links</h4>
          <ul style={{ padding: 0, listStyleType: 'none' }}>
            <li><a href="/about" style={linkStyle}>About Us</a></li>
            <li><a href="/contact" style={linkStyle}>Contact</a></li>
            <li><a href="/donation" style={linkStyle}>Donate</a></li>
            <li><a href="/gallery" style={linkStyle}>Gallery</a></li>
          </ul>
        </div>
        <div style={sectionStyle}>
          <h4>Follow Us</h4>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>Twitter</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>Instagram</a>
        </div>
      </div>
      <div style={{ marginTop: '20px', fontSize: '14px' }}>
        <p>&copy; 2024 Oojam Trust. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
