import React from "react";
import { FaHeartbeat, FaSchool, FaUtensils } from 'react-icons/fa'; // Importing the icons
import { useNavigate } from "react-router-dom"; // Importing useNavigate
import '../styles/PossibleCauses.css'; // Ensure this CSS file has the updated styles

const PossibleCauses = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="possible-causes">
      <h2>Possible Causes to Donate To</h2>
      <p className="subtitle">Make an Impact Today!</p>
      <div className="causes">
        <div className="cause-card">
          <div className="icon">
            <FaHeartbeat size={50} color="#f04f47" /> {/* Heartbeat icon for Medical Aid */}
          </div>
          <h3>Medical Aid</h3>
          <p>Providing essential medical services to those in need.</p>
          <button onClick={() => navigate('/donation')}>Donate Now</button> {/* Navigate to Donate */}
        </div>

        <div className="cause-card">
          <div className="icon">
            <FaSchool size={50} color="#4b9cd3" /> {/* School icon for Education */}
          </div>
          <h3>Education for All</h3>
          <p>Empowering communities through quality education and resources.</p>
          <button onClick={() => navigate('/donation')}>Donate Now</button> {/* Navigate to Donate */}
        </div>

        <div className="cause-card">
          <div className="icon">
            <FaUtensils size={50} color="#f2b67d" /> {/* Utensils icon for Food */}
          </div>
          <h3>Food for the Needy</h3>
          <p>Fighting hunger by providing food and nutrition to families in need.</p>
          <button onClick={() => navigate('/donation')}>Donate Now</button> {/* Navigate to Donate */}
        </div>
      </div>
    </div>
  );
};

export default PossibleCauses;
