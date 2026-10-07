import React from "react";
import { useNavigate } from "react-router-dom";
import icuImage from "../images/ICU.jpg"; // Replace with your ICU image path

const HomeIcuServices = () => {
  const navigate = useNavigate();

  return (
    <div className="icu-services-page">
      {/* HERO SECTION */}
      <section className="icu-hero">
        <div className="icu-hero-overlay">
          <h1>Home ICU Services In Mumbai</h1>
          <h2>Comprehensive Care At Your Door</h2>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="icu-about">
        {/* LEFT IMAGE */}
        <div className="icu-about-image">
          <img
            src={icuImage}
            alt="Home ICU Services In Mumbai"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="icu-about-content">
          <h2>About Home ICU Services In Mumbai</h2>

          <p>
            Facing a critical illness or recovering from surgery can be an exhausting experience, especially when frequent medical attention is needed. At AK Home Healthcare, we bring Home ICU Services in Mumbai to help you manage these challenges with ease. Our ICU Care at Home in Mumbai offers the same level of critical care you'd receive in a hospital ICU, all within the comfort of your home.
          </p>

          <p>
            Our ICU Setup Service at Home in Mumbai provides specialized care for patients recovering from surgery, managing chronic conditions, or in need of elderly care. With AK Home Healthcare, you can expect continuous monitoring and expert treatment 24/7, ensuring that critical care is never out of reach.
          </p>

          <p>
            Using cutting-edge medical equipment like ventilators, cardiac monitors, and infusion pumps, we ensure that every aspect of your care is carefully managed, just as it would be in a hospital setting. Our goal is to provide ICU and Critical Care at Home in Mumbai so patients can recover safely and comfortably.
          </p>

          {/* APPOINTMENT & PHONE SECTION */}
          <div className="icu-appointment">
            {/* <button
              onClick={() => navigate("/book-appointment")}
              className="icu-book-btn"
            >
              <span>Book An Appointment</span>
              <span className="icu-arrow">→</span>
            </button> */}

            <a href="tel:+919146961077" className="icu-phone">
              <span className="icu-phone-icon">☎</span>
              <span>+91 9146961077</span>
            </a>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      {/* <section className="special-appointment">
        <div className="special-appointment-content">
          <h2>Need Hospital-Grade ICU Setup At Home?</h2>
          <p>
            Get 24/7 critical care monitoring and advanced medical support in the comfort of your home.
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

export default HomeIcuServices;