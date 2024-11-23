import React, { useState, useEffect } from 'react';
import '../styles/SlidingBanner.css';
import { useNavigate } from "react-router-dom"; 
const SlidingBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const images = [
    {
      src: 'https://thumbs.dreamstime.com/b/happy-indian-children-desert-village-jaisalmer-india-rajasthan-72116875.jpg', // Replace with actual image URLs
      alt: 'Image 1',
      text: '“A journey of a thousand miles begins with a single step.”',
    },
    {
      src: 'https://serudsindia.org/wp-content/uploads/2021/01/children-in-Seruds-Child-care-Institution.jpg', // Replace with actual image URLs
      alt: 'Image 2',
      text: '“Change begins with awareness and action.”',
    },
    {
      src: 'https://cdn.givind.org/static/images/program/feed-nutritious-meals-to-a-poor-rural-child.jpg', // Replace with actual image URLs
      alt: 'Image 3',
      text: '“Together, we can make a difference.”',
    },
    {
      src: 'https://images.deccanherald.com/deccanherald%2Fimport%2Fsites%2Fdh%2Ffiles%2Farticleimages%2F2022%2F07%2F11%2Ffile76hgz29pnq119u6l53ku-904403-1603153600-1-1042053-1634636149-1052100-1637269992-1125469-1657506595.jpg?auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=400&dpr=2', // Replace with actual image URLs
      alt: 'Image 4',
      text: '“Your donation is a gift of hope.”',
    },
  ];

  // Next slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className="sliding-banner">
      <div className="sliding-banner-image">
        <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
        <div className="sliding-banner-overlay"></div> {/* Full overlay on image */}
      </div>
      <div className="sliding-banner-text">
        <p>{images[currentIndex].text}</p>
        <button className="discover-btn" onClick={() => navigate('/about')}>Discover More</button>
      </div>
    </div>
  );
};

export default SlidingBanner;
