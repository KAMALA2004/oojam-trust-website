import React from "react";
import { useNavigate } from "react-router-dom"; // Importing useNavigate
import '../styles/Quote.css';

const Quote = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="quote-container">
      <div className="quote">
        <h2>"Your kindness can change the world."</h2>
        <p className="attribution">- Anonymous</p>
        <button className="donate-button" onClick={() => navigate('/donation')}>Donate Now</button> {/* Navigate to Donate */}
      </div>
    </div>
  );
};

export default Quote;
