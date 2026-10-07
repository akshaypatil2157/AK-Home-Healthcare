import React from "react";
import { useNavigate } from "react-router-dom";

import equipmentImage from "../images/equipment.png"; // Replace with your medical equipment image path

const MedicalEquipment = () => {
  const navigate = useNavigate();

  return (
    <div className="medical-equipment-page">
      {/* HERO SECTION */}
      <section className="equipment-hero">
        <div className="equipment-hero-overlay">
          <h1>Rent Or Buy Medical Equipment For Home In Mumbai</h1>
          <h2>Your Healthcare, Your Way</h2>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="equipment-about">
        {/* LEFT IMAGE */}
        <div className="equipment-about-image">
          <img src={equipmentImage} alt="Medical Equipment For Home" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="equipment-about-content">
          <h2>About Medical Equipment For Home In Mumbai</h2>

          <p>
            Finding reliable medical equipment for home care in Mumbai is now easier than ever. At AK Home Healthcare, we provide high-quality medical equipment that helps you or your loved ones recover comfortably at home.
          </p>

          <p>
            Whether it's for short-term recovery after surgery or long-term care, we offer a wide range of medical devices to meet your needs. From oxygen concentrators to ventilators, our medical equipment for home use in Mumbai is designed to provide you with the best care in a familiar environment.
          </p>

          <p>
            You can choose to rent or buy medical equipment based on your preferences, with the added benefit of fast delivery right to your doorstep. Our goal is to make healthcare accessible and convenient by providing the equipment you need when you need it most.
          </p>

          {/* APPOINTMENT & PHONE SECTION */}
          <div className="equipment-appointment">
            {/* <button
              onClick={() => navigate("/book-appointment")}
              className="equipment-book-btn"
            >
              <span>Book An Appointment</span>
              <span className="equipment-arrow">→</span>
            </button> */}

            <a href="tel:+919146961077" className="equipment-phone">
              <span className="equipment-phone-icon">☎</span>
              <span>+91 9146961077</span>
            </a>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      {/* <section className="special-appointment">
        <div className="special-appointment-content">
          <h2>Need Medical Equipment At Home?</h2>
          <p>
            Get top-quality healthcare equipment delivered and set up directly at your home.
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

export default MedicalEquipment;