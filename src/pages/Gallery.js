import React, { useState } from 'react';
import '../styles/Gallery.css';

// Icon Imports (use FontAwesome or custom icons)
import { FaBook, FaHeart, FaMedkit, FaHome } from 'react-icons/fa';

const galleryData = [
  { 
    category: 'Educational Scholarships', 
    icon: <FaBook />,
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJNLQA-xa0HvHGJUNwOXa273TnH0HzpzO0aDGmjC500cv26vcsr84DBJOsFDoy5HA7r64&usqp=CAU',
      'https://www.globalgiving.org/pfil/24366/pict_large.jpg',
      'https://www.smilefoundationindia.org/blog/wp-content/uploads/2022/11/142875012_4213934451963824_4908626115809418460_o-1024x768.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiExb949ix2rUjI6eEMXaTznkwN8HvMnBnSWIsm91d6Nb_2unZPdXd2SNTj_5OxMygjCk&usqp=CAU',
    ],
  },
  { 
    category: 'Food Donation Drive', 
    icon: <FaHeart />,
    images: [
      'https://en-media.thebetterindia.com/uploads/2015/08/10410943_1536413906576327_7533414068352711562_n.jpg',
      'https://www.narayanseva.org/wp-content/uploads/2024/03/food-7-March-2024.jpg',
      'https://www.globalgiving.org/pfil/5067/ph_5067_93064.jpg',
      'https://thumbs.dreamstime.com/b/shantipur-west-bengal-india-march-indian-brahmachari-monk-saffron-dhoti-distributes-traditional-meal-khichdi-prasadam-175405113.jpg',
    ]
  },
  { 
    category: 'Clothing Donation Campaign', 
    icon: <FaHeart />,
    images: [
      'https://imgmedia.lbb.in/media/2019/10/5da087a73dc1e916a83ab99e_1570801575624.jpg',
      'https://content.jdmagicbox.com/comp/pune/v6/020pxx20.xx20.191108140639.v2v6/catalogue/sahwas-foundation-ambegaon-budruk-pune-ngos-bx7lioiqyz.jpg?clr=',
      'https://dkprodimages.gumlet.io/campaign/6248/atp5-01%20WINC.jpg?format=webp&w=400&dpr=2.6',
      'https://i.pinimg.com/736x/44/76/d5/4476d52a72046e623c89da2d071b6f2b.jpg',
    ]
  },
  { 
    category: 'Medical Aid & Support', 
    icon: <FaMedkit />,
    images: [
      'https://switchindia.org/images/work/rural-medical-camp-at-aasangaon05.jpg',
      'https://switchindia.org/images/work/rural-medical-camp-at-aasangaon01.jpg',
      'https://switchindia.org/images/work/maharashtra-day-medical-camp01.jpg',
      'https://gsbsmedicaltrust.org/wp-content/uploads/2023/02/26th-jan-camp-pic-2-750x465.jpg',
    ]
  },
  { 
    category: 'Shelter for the Homeless', 
    icon: <FaHome />,
    images: [
      'https://media.istockphoto.com/id/179446207/photo/slum.jpg?s=612x612&w=0&k=20&c=u3vBCfXXF1X3BEZ0RcLd8e8zw60WMsrH-Oj-Ewo3MME=',
      'https://live.staticflickr.com/640/31380480720_afeec688c6_b.jpg',
      'https://thumbs.dreamstime.com/b/poverty-12470039.jpg',
      'https://cdn.prod.www.spiegel.de/images/4ba442c1-0001-0004-0000-000000445030_w520_r1.778_fpx33.32_fpy49.98.jpg',
    ]
  }
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Images'); // Track selected category

  // Filter gallery data based on selected category
  const filteredData = selectedCategory === 'All Images' 
    ? galleryData.flatMap(item => item.images.map(image => ({ title: item.category, image })))
    : galleryData.find(item => item.category === selectedCategory)?.images.map(image => ({ title: selectedCategory, image }));

  return (
    <div className="gallery-container">
      <header>
        <nav>
          <ul className="category-list">
            <li><a href="#" onClick={() => setSelectedCategory('All Images')}>All Images</a></li>
            {galleryData.map(item => (
              <li key={item.category} className="category-item">
                <a href="#" onClick={() => setSelectedCategory(item.category)}>
                  {item.icon} {item.category}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <div className="main-content">
        {filteredData?.map((item, index) => (
          <div className="card" key={index}>
            <div className="image-container">
              <img
                src={item.image}
                alt={item.title}
                className="gallery-image loading"
                onLoad={(e) => e.target.classList.remove('loading')} // Remove blur once loaded
              />
              <div className="overlay">
                <div className="text">{item.title}</div>
              </div>
            </div>
            <a href="#" className="learn-more">Learn More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
