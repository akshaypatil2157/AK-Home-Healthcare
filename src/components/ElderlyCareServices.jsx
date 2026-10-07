import React from 'react';
import elder from '../images/elder.jpg'; // Replace with your elderly care image path
import { useNavigate } from 'react-router-dom';
const ElderlyCareServices = () => {
  return (
    <div className="elderly-care-container">
      {/* Top Banner / Hero Section */}
      <section className="elderly-hero">
        <div className="elderly-hero-overlay">
          <h1>Expert Elderly Care Services In Mumbai</h1>
          <p className="hero-subtitle">Where Comfort Meets Expert Care</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about-elderly-section">
        <div className="about-content-wrapper">
          {/* Image Column */}
          <div className="about-image-card">
            <img 
              src={elder}
              alt="Elderly Caregiver with Senior Citizen" 
            />
          </div>

          {/* Text Column */}
          <div className="about-text-content">
            <h2>About Our Elderly Care Services In Mumbai</h2>
            <p>
              At 2050 Healthcare, we understand the unique needs of aging individuals and provide comprehensive elder care 
              services in Mumbai tailored to promote independence and enhance quality of life. Our dedicated team of elderly 
              caregivers, senior citizen care takers, and geriatric nursing professionals ensures that seniors receive top-notch 
              medical support, companionship, and assistance with daily activities in the comfort of their homes.
            </p>
            <p>
              With Mumbai's fast-paced lifestyle, finding reliable full-time elderly care at home can be challenging. That's where 
              we step in - offering stay-at-home elder care, post-hospitalization recovery, dementia care, and much more. 
              Whether your loved one requires private caregivers for elderly or specialized nursing care of elderly patients, our 
              professional team is here to support them every step of the way.
            </p>

            {/* Action Area */}
            <div className="cta-wrapper">
              {/* <button className="book-btn">
                Book An Appointment <span className="arrow-icon">→</span>
              </button> */}
              <a href="tel:+91 9146961077" className="phone-link">
                <span className="phone-icon">📞</span> +91 9146961077
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ElderlyCareServices;