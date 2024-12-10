import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <header>
        <h1>Need Assistance? Get in Touch with Our Support Team</h1>
        <p>We are here to help! Please fill out the form below and we will get back to you.</p>
        
      </header>

      <section className="contact-info">
        <h2>Contact Information</h2>
        <div className="contact-details-box">
          <p><strong>Location:</strong> Oojam Trust, Chennai, India</p>
          <p><strong>Email:</strong> <a href="mailto:oojamsupport@gmail.com">oojamsupport@gmail.com</a></p>
          <p><strong>Phone:</strong> <a href="tel:+919876543210">+91 98765 43210</a></p>
          <p><strong>Working Hours:</strong> Monday to Friday, 9 AM - 6 PM</p>
        </div>
      </section>

      <section className="visit-us">
        <h2>Visit Us</h2>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.87837263611!2d80.09428217484384!3d13.106890787221014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5289d860174c39%3A0xcb14132f71ae4d8a!2sOojam%20Trust!5e0!3m2!1sen!2sin!4v1732038056059!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            title="Oojam Trust Location"
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;
