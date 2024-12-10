import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css';

function About() {
  return (
    <section className="about-section">
      {/* Video Section */}
      <h1 className="main-heading">ABOUT US</h1>
      <div className="video-container">
        {/* Video Items */}
        {["about-video1.mp4", "about-video2.mp4", "about-video3.mp4"].map((video, index) => (
          <div key={index} className="video-item">
            <video className="about-video" autoPlay loop muted>
              <source src={`/assets/${video}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="video-overlay">
              <Link to="/donation" className="join-us-btn">Join Us</Link>
            </div>
          </div>
        ))}
      </div>

      {/* Content Section */}
      <div className="content-container">
        
        <p className="description">
          We believe that we can save lives. Donate to the poor and deserving people in need.
          Oojam Trust is the largest global charity and crowdfunding community in the world.
          We are trusted by our clients and have a reputation for offering the best services in the field.
        </p>
        <h2 className="ceo-name">D NISAND</h2>
        <p className="ceo-position">CEO & CO-Founder</p>

        {/* Stats Section */}
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-icon">&#128176;</div>
            <h3 className="stat-number">4850</h3>
            <p className="stat-label">Total Campaigns</p>
          </div>
          <div className="stat-card">
            <div className="stat-icon">&#128176;</div>
            <h3 className="stat-number">3456</h3>
            <p className="stat-label">Raised Funds</p>
          </div>
          <div className="stat-card">
            <div className="stat-icon">&#128101;</div>
            <h3 className="stat-number">480</h3>
            <p className="stat-label">Satisfied Donors</p>
          </div>
          <div className="stat-card">
            <div className="stat-icon">&#128100;</div>
            <h3 className="stat-number">2068</h3>
            <p className="stat-label">Happy Volunteers</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="cta-container">
          <Link to="/donation" className="cta-button">Donate Now</Link>
        </div>

        {/* Quote Section */}
        <div className="quote-container1">
          <p className="quote-text">"The best way to find yourself is to lose yourself in the service of others." - Mahatma Gandhi</p>
        </div>
      </div>
    </section>
  );
}

export default About;
