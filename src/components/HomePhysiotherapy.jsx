import React from "react";
import { useNavigate } from "react-router-dom";
import physiotherapyImage from "../images/Physio.jpg"; // Replace with your physiotherapy image path

const HomePhysiotherapy = () => {
  const navigate = useNavigate();

  return (
    <div className="physiotherapy-page">
      {/* HERO SECTION */}
      <section className="physio-hero">
        <div className="physio-hero-overlay">
          <h1>Your Path To Healing</h1>
          <h2>Expert Home Physiotherapy In Mumbai</h2>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="physio-about">
        {/* LEFT IMAGE */}
        <div className="physio-about-image">
          <img
            src={physiotherapyImage}
            alt="Expert Home Physiotherapy in Mumbai"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="physio-about-content">
          <h2>About Home Physiotherapy In Mumbai</h2>

          <p>
            AK Home Healthcare brings professional home physiotherapy in Mumbai directly to your doorstep, offering high-quality physiotherapy treatments for all ages. Our team of expert physiotherapy doctors in Mumbai specializes in injury recovery, chronic pain management, post-surgical rehabilitation, and elderly care.
          </p>

          <p>
            With personalized care plans and the comfort of home, we ensure a smooth recovery journey for each of our patients. Whether you need to regain strength after an injury, manage persistent pain, or undergo rehabilitation post-surgery, our services aim to enhance your mobility and independence in the comfort of your own home.
          </p>

          <p>
            As a trusted provider of physiotherapy at home in Mumbai, AK Home Healthcare offers expert physiotherapy care tailored to your unique needs. We utilize advanced techniques and equipment to provide effective care right where you live. Choose AK Home Healthcare for a seamless blend of comfort and professional care.
          </p>

          {/* APPOINTMENT & PHONE SECTION */}
          <div className="physio-appointment">
            {/* <button
              onClick={() => navigate("/book-appointment")}
              className="physio-book-btn"
            >
              <span>Book An Appointment</span>
              <span className="physio-arrow">→</span>
            </button> */}

            <a href="tel:+919146961077" className="physio-phone">
              <span className="physio-phone-icon">☎</span>
              <span>+91 9146961077</span>
            </a>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      {/* <section className="special-appointment">
        <div className="special-appointment-content">
          <h2>Need Professional Physiotherapy At Home?</h2>
          <p>
            Get personalized physiotherapy treatments from certified specialists at home.
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

export default HomePhysiotherapy;