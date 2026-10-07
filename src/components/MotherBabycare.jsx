import React from "react";
import { useNavigate } from "react-router-dom";
import motherBabyImage from "../images/babymother.png"; // Replace with your mother & baby image path

const MotherBabyCare = () => {
  const navigate = useNavigate();

  return (
    <div className="mother-baby-page">
      {/* HERO SECTION */}
      <section className="mother-baby-hero">
        <div className="mother-baby-hero-overlay">
          <h1>Home Mother & Baby Care In Mumbai</h1>
          <h2>Your Trusted Partner For Newborn Care</h2>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="mother-baby-about">
        {/* LEFT IMAGE */}
        <div className="mother-baby-about-image">
          <img
            src={motherBabyImage}
            alt="Mother and Baby Care at Home"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="mother-baby-about-content">
          <h2>About Mother & Baby Care At Home In Mumbai</h2>

          <p>
            The arrival of a newborn can be an exciting and overwhelming experience. The early days are filled with joy, but they also bring challenges such as postpartum recovery and adjusting to the needs of a newborn. At AK Home Healthcare, we understand these challenges and are here to provide expert Mother & Baby Care at Home in Mumbai.
          </p>

          <p>
            From postpartum recovery to breastfeeding difficulties and newborn routines, new mothers often need assistance during this time. Our Home Mother & Baby Care services in Mumbai are designed to address these challenges, providing personalized care that supports both mother and baby.
          </p>

          <p>
            We make sure that you have the right guidance and expertise at home to navigate this important phase with confidence and ease.
          </p>

          {/* APPOINTMENT & PHONE SECTION */}
          <div className="mother-baby-appointment">
            {/* <button
              onClick={() => navigate("/book-appointment")}
              className="mother-baby-book-btn"
            >
              <span>Book An Appointment</span>
              <span className="mother-baby-arrow">→</span>
            </button> */}

            <a href="tel:+919146961077" className="mother-baby-phone">
              <span className="mother-baby-phone-icon">☎</span>
              <span>+91 9146961077</span>
            </a>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      {/* <section className="special-appointment">
        <div className="special-appointment-content">
          <h2>Need Dedicated Mother & Baby Care At Home?</h2>
          <p>
            Get expert postnatal and newborn care from our trained healthcare professionals.
          </p>
          <button
            onClick={() => navigate("/book-appointment")}
            className="special-book-btn"
          >
            Book An Appointment →
          </button>
        </div>
      </section> */}
    </div>
  );
};

export default MotherBabyCare;