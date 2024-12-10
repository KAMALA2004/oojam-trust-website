import React from 'react';
import '../styles/Causes.css';

const Causes = () => {
  return (
    <div className="causes-page">
      <h1 className="causes-header">Our Causes</h1>

      <div className="causes-grid">
        
        <div className="cause-card">
          <div className="whatsapp-icon-container">
            <a 
              href="https://api.whatsapp.com/send?phone=917373878768&text=I%20would%20like%20to%20donate%20for%20feeding%20a%20homeless%20person."
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                src={`${process.env.PUBLIC_URL}/assets/whats.png`} 
                alt="WhatsApp" 
                className="whatsapp-icon"
              />
            </a>
          </div>
          <img 
            src="https://www.orfonline.org/public/uploads/posts/image/img-homeless.jpg" 
            alt="Feed a Homeless Person" 
            className="cause-image"
          />
          <div className="cause-details">
            <h3 className="cause-title1">Feed a Homeless Person (Egg Biryani)</h3>
            <p className="cause-price">₹ 70/Person</p>
            <p className="cause-description">
              Help feed the homeless by providing them with a warm meal. Every contribution counts.
            </p>
          </div>
          <div className="donate-overlay">
            <button className="donate-now-button">
              <a 
                href="https://api.whatsapp.com/send?phone=917373878768&text=I%20would%20like%20to%20donate%20for%20feeding%20a%20homeless%20person."
                target="_blank" 
                rel="noopener noreferrer"
              >
                Donate Now
              </a>
            </button>
          </div>
        </div>

        <div className="cause-card">
          <div className="whatsapp-icon-container">
            <a 
              href="https://api.whatsapp.com/send?phone=917373878768&text=I%20would%20like%20to%20donate%20a%20slipper."
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                src={`${process.env.PUBLIC_URL}/assets/whats.png`} 
                alt="WhatsApp" 
                className="whatsapp-icon"
              />
            </a>
          </div>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNIYbTxADsXTpv48p09Fa22mqmjhng0YSZFQ&s" 
            alt="Donate a Slipper" 
            className="cause-image"
          />
          <div className="cause-details">
            <h3 className="cause-title1">Donate a Slipper</h3>
            <p className="cause-price">₹ 150/Child</p>
            <p className="cause-description">
              Provide a slipper to a child in need. Your small contribution can make a big difference.
            </p>
          </div>
          <div className="donate-overlay">
            <button className="donate-now-button">
              <a 
                href="https://api.whatsapp.com/send?phone=917373878768&text=I%20would%20like%20to%20donate%20a%20slipper."
                target="_blank" 
                rel="noopener noreferrer"
              >
                Donate Now
              </a>
            </button>
          </div>
        </div>

        <div className="cause-card">
          <div className="whatsapp-icon-container">
            <a 
              href="https://api.whatsapp.com/send?phone=917373878768&text=I%20would%20like%20to%20donate%20for%20crowdfunding%20education."
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                src={`${process.env.PUBLIC_URL}/assets/whats.png`} 
                alt="WhatsApp" 
                className="whatsapp-icon"
              />
            </a>
          </div>
          <img 
            src="https://ketto.gumlet.io/assets/images/education-fundraising/img-1.png?w=480&dpr=2.6" 
            alt="Crowdfund Education" 
            className="cause-image"
          />
          <div className="cause-details">
            <h3 className="cause-title1">Crowdfund Education</h3>
            <p className="cause-price">Support children's education</p>
            <p className="cause-description">
              Donate to help underprivileged children get access to quality education. Every contribution helps.
            </p>
          </div>
          <div className="donate-overlay">
            <button className="donate-now-button">
              <a 
                href="https://api.whatsapp.com/send?phone=917373878768&text=I%20would%20like%20to%20donate%20for%20crowdfunding%20education."
                target="_blank" 
                rel="noopener noreferrer"
              >
                Donate Now
              </a>
            </button>
          </div>
        </div>

        <div className="cause-card">
          <div className="whatsapp-icon-container">
            <a 
              href="https://api.whatsapp.com/send?phone=917373878768&text=I%20would%20like%20to%20donate%20for%20an%20orphanage."
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                src={`${process.env.PUBLIC_URL}/assets/whats.png`} 
                alt="WhatsApp" 
                className="whatsapp-icon"
              />
            </a>
          </div>
          <img 
            src="https://serudsindia.org/wp-content/uploads/2022/07/Orphan-Group-600-min.jpg" 
            alt="Donate for Orphanage" 
            className="cause-image"
          />
          <div className="cause-details">
            <h3 className="cause-title1">Donate for Orphanage</h3>
            <p className="cause-price">₹ 500/Month</p>
            <p className="cause-description">
              Help support an orphanage by contributing to the children's care and education.
            </p>
          </div>
          <div className="donate-overlay">
            <button className="donate-now-button">
              <a 
                href="https://api.whatsapp.com/send?phone=917373878768&text=I%20would%20like%20to%20donate%20for%20an%20orphanage."
                target="_blank" 
                rel="noopener noreferrer"
              >
                Donate Now
              </a>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Causes;
