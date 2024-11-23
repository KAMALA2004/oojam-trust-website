import React, { useState } from 'react';
import logo from './logo.png'; // Ensure logo is in the same directory or adjust the path
import { Link } from 'react-router-dom';
const Footer = () => {
  const [linkHovered, setLinkHovered] = useState(false);
  const [donateHovered, setDonateHovered] = useState(false);

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Logo Section */}
        <div style={styles.logoSection}>
          <img src={logo} alt="Oojam Trust Logo" style={styles.logo} />
          <p>&copy; 2024 Oojam Trust | All Rights Reserved</p>
        </div>

        {/* Links Section */}
        <div style={styles.linksSection}>
          <h4>Links</h4>
          <ul style={styles.list}>
            <li>
              <a
                href="#aboutus"
                style={{...styles.link, ...(linkHovered && styles.linkHover)}}
                onMouseEnter={() => setLinkHovered(true)}
                onMouseLeave={() => setLinkHovered(false)}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#nonprofit"
                style={{...styles.link, ...(linkHovered && styles.linkHover)}}
                onMouseEnter={() => setLinkHovered(true)}
                onMouseLeave={() => setLinkHovered(false)}
              >
                Non Profit
              </a>
            </li>
            <li>
              <a
                href="#causes"
                style={{...styles.link, ...(linkHovered && styles.linkHover)}}
                onMouseEnter={() => setLinkHovered(true)}
                onMouseLeave={() => setLinkHovered(false)}
              >
                Recent Causes
              </a>
            </li>
            <li>
              <a
                href="#fundraising"
                style={{...styles.link, ...(linkHovered && styles.linkHover)}}
                onMouseEnter={() => setLinkHovered(true)}
                onMouseLeave={() => setLinkHovered(false)}
              >
                Start a Fundraising
              </a>
            </li>
          </ul>
        </div>

        {/* Recent Causes Section */}
        <div style={styles.causesSection}>
          <h4>Recent Causes</h4>
          <ul style={styles.list}>
            <li><a href="#kids" style={styles.link}>Differently Abled Kids</a></li>
            <li><a href="#cancer" style={styles.link}>Help Child Cancer</a></li>
            <li><a href="#water" style={styles.link}>Clean Pure Water</a></li>
            <li><a href="#education" style={styles.link}>Give Them Education</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div style={styles.contactSection}>
          <h4>Contact</h4>
          <p>Email: <a href="mailto:oojamtrust@gmail.com" style={styles.link}>oojamtrust@gmail.com</a></p>
          <p>Phone: <a href="tel:+917373878768" style={styles.link}>+91 7373878768</a></p>
        </div>

        {/* Donate Button */}
        <div style={styles.donateSection}>
          <p style={styles.donateText}>Raise Money and Help Them</p>
          <Link
  to="/donation" // Specify the route path
  style={{
    ...styles.donateButton,
    ...(donateHovered && styles.donateButtonHover),
  }}
  onMouseEnter={() => setDonateHovered(true)}
  onMouseLeave={() => setDonateHovered(false)}
>
  Donate Now
</Link>

        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#F9A602',  // Bright orange background
    color: 'white',  // White text color
    padding: '40px 20px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  logoSection: {
    flex: '1',
    textAlign: 'left',
    marginBottom: '20px',
  },
  logo: {
    maxWidth: '150px',
    marginBottom: '10px',
  },
  linksSection: {
    flex: '1',
    marginBottom: '20px',
  },
  causesSection: {
    flex: '1',
    marginBottom: '20px',
  },
  contactSection: {
    flex: '1',
    marginBottom: '20px',
  },
  donateSection: {
    flex: '1',
    textAlign: 'center',
    marginBottom: '20px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  link: {
    color: 'white',  // White link color
    textDecoration: 'none',
    fontSize: '16px',
    display: 'block',
    margin: '5px 0',
    transition: 'color 0.3s',  // Smooth transition for color change
  },
  linkHover: {
    color: '#60C88B',  // Soft green on hover for better contrast
  },
  donateText: {
    fontSize: '18px',
    marginBottom: '10px',
    color: 'white',  // White text color for donate text
  },
  donateButton: {
    backgroundColor: '#4CAF50',  // Green background for button
    color: 'white',
    padding: '12px 24px',
    fontSize: '18px',
    textDecoration: 'none',
    borderRadius: '5px',
    display: 'inline-block',
    transition: 'background-color 0.3s',  // Smooth transition for background color
  },
  donateButtonHover: {
    backgroundColor: '#9F7651',  // Darker green on hover
  },
};

export default Footer;
