import React from "react";
import { FaHandsHelping, FaDonate, FaBullhorn } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import '../styles/Goals.css';

const Goals = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="goals">
      {/* Call to Action Section */}
      <div className="cta-section">
        <p className="cta-text">Ready to make an impact? Join us!</p>
        <button 
          className="cta-btn"
          onClick={() => navigate('/contact')} // Navigate to Causes page
        >
          Get Involved
        </button>
      </div>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay">
          <h1 className="hero-title">Our Goals</h1>
          <p className="hero-subtitle">Join us in making a difference!</p>
        </div>
      </div>

      {/* Goals Section */}
      <div className="goals-container">
        <div className="goal">
          <div className="goal-icon">
            <FaHandsHelping size={50} color="#4caf50" />
          </div>
          <h3>Sponsor Projects</h3>
          <p>Support various charitable initiatives and empower communities.</p>
          <button
            className="learn-more-btn"
            onClick={() => navigate('/about')} // Navigate to About
          >
            Learn More
          </button>
        </div>
        <div className="goal">
          <div className="goal-icon">
            <FaDonate size={50} color="#ff5722" />
          </div>
          <h3>Donate to New Causes</h3>
          <p>Help us reach new heights with your generous donation.</p>
          <button
            className="learn-more-btn"
            onClick={() => navigate('/about')} // Navigate to About
          >
            Learn More
          </button>
        </div>
        <div className="goal">
          <div className="goal-icon">
            <FaBullhorn size={50} color="#2196f3" />
          </div>
          <h3>Spread Awareness</h3>
          <p>Educate people on causes that matter and create a positive impact.</p>
          <button
            className="learn-more-btn"
            onClick={() => navigate('/about')} // Navigate to About
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Goals;
