import React from 'react';
import '../styles/Donation.css';

const Donation = () => {
  return (
    <div className="donation-page">
      {/* Container for the left and right columns (Causes and Recommended Causes) */}
      <div className="causes-container">
        {/* Left Column: Causes Details */}
        <section className="causes-section">
          <h2 className="causes-title">Causes Details</h2>
          <div className="cause-card">
            <img
              src="https://images.gofundme.com/ZHFi3Ljp9U1r-0ywDy-H2A3ykjc=/720x405/https://d2g8igdw686xgo.cloudfront.net/47137852_1594045893915045_r.jpeg"
              alt="Cause"
              className="cause-image"
            />
            <div className="cause-details">
              <h3 className="cause-title">Provide Food for the Needy</h3>
              <p className="cause-price">₹ 300/ Meal</p>
              <div className="cause-image-gallery">
                <img src="https://s3.ap-south-1.amazonaws.com/rzp-prod-merchant-assets/payment-link/description/20190122164349_838A3181_D5P3M1bwCyu0x7.jpg" alt="Cause Image 1" />
                <img src="https://www.nohungrychild.in/images/Hungry_child.jpg" alt="Cause Image 2" />
                <img src="https://give.do/blog/wp-content/uploads/2023/06/Malnutrition-scaled.jpg" alt="Cause Image 3" />
              </div>
              <p className="cause-description">
                Help feed the hungry by providing food to those in need. Your contribution will go towards offering meals to the underprivileged, ensuring that no one has to go to bed hungry. Together, we can make a difference and support those struggling to meet their daily needs. Every meal counts and brings hope to someone in need.
              </p>
            </div>
          </div>
        </section>

        {/* Right Column: Recommended Causes */}
        <section className="recommended-causes">
          <h2 className="recommended-title">Recommended Causes</h2>
          {[
            {
              img: "https://i.pinimg.com/736x/f6/30/f5/f630f59522a51342deb053591d8cedb3.jpg",
              title: "Support for Education",
              price: "₹ 800/ Contribution",
            },
            {
              img: "https://cimages.milaap.org/milaap/image/upload/v1488178289/production/images/campaign/11726/DSC08465_1488178287.jpg",
              title: "Food for Hunger",
              price: "₹ 300/ Contribution",
            },
            {
              img: "https://intelehealth.org/wp-content/uploads/2022/07/unnamed-6.jpg",
              title: "Medical Aid for Poor",
              price: "₹ 500/ Contribution",
            },
            {
              img: "https://images.indiegogo.com/file_attachments/513219/files/20140416120227-IMG_4708.jpg?1397674947",
              title: "Help Orphanage Homes",
              price: "₹ 700/ Contribution",
            },
          ].map((cause, index) => (
            <div key={index} className="recommended-cause-card">
              <img
                src={cause.img}
                alt="Recommended Cause"
                className="recommended-cause-image"
              />
              <div className="recommended-cause-details">
                <h3 className="recommended-cause-title">{cause.title}</h3>
                <p className="recommended-cause-price">{cause.price}</p>
              </div>
              <a
                href="https://api.whatsapp.com/send?phone=917373878768&text=Hi%2C%20I%20am%20interested%20in%20donating."
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="donate-button">Donate</button>
              </a>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Donation;
