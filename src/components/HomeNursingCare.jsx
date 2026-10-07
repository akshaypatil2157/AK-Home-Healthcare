import React from "react";
import { useNavigate } from "react-router-dom";
import nursingImage from "../images/nursingcare.png";

const HomeNursingCare = () => {
  const navigate = useNavigate();

  return (
    <div className="home-nursing-page">

      {/* HERO SECTION */}
      <section className="nursing-hero">

        <div className="nursing-hero-overlay">

          <h1>
            Quality Home Nursing Care Services In Mumbai
          </h1>

          <h2>
            Healing At Home
          </h2>

        </div>

      </section>


      {/* ABOUT SECTION */}
      <section className="nursing-about">

        {/* LEFT IMAGE */}
        <div className="nursing-about-image">

          <img
            src={nursingImage}
            alt="Home Nursing Care"
          />

        </div>


        {/* RIGHT CONTENT */}
        <div className="nursing-about-content">

          <h2>
            About Home Nursing Care Services In Mumbai
          </h2>

          <p>
            At AK Home Healthcare, we know that home is where the heart is,
            and it’s also where the best healing happens. Our Home Nursing
            Care services in Mumbai are designed to offer you high-quality
            medical and emotional care in the comfort of your own home.
          </p>

          <p>
            Whether you’re recovering from surgery, managing a chronic
            condition, or just need extra assistance with day-to-day
            activities, our professional nurses are here to support you.
            Our services are personalized to suit your individual health
            needs, ensuring a smooth and comfortable recovery process.
          </p>

          <p>
            Additionally, we offer nurse for injection at home service to
            make sure you can receive your injections safely and conveniently
            at home. Our injection at home service helps you stay on track
            with your treatment without the need for frequent hospital visits.
          </p>


          {/* APPOINTMENT BUTTON */}
          <div className="nursing-appointment">

            {/* <button
              onClick={() => navigate("/book-appointment")}
              className="nursing-book-btn"
            >
              <span>Book An Appointment</span>

              <span className="nursing-arrow">
                →
              </span>
            </button> */}


            {/* PHONE */}
            <a
              href="tel:+919146961077"
              className="nursing-phone"
            >

              <span className="nursing-phone-icon">
                ☎
              </span>

              <span>
                +91 9146961077
              </span>

            </a>

          </div>

        </div>

      </section>


      {/* BOOK APPOINTMENT SECTION */}
      {/* <section className="special-appointment">

        <div className="special-appointment-content">

          <h2>
            Need Professional Nursing Care At Home?
          </h2>

          <p>
            Get personalized home nursing care from our trained
            healthcare professionals.
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

export default HomeNursingCare;