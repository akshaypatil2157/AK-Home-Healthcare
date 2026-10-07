// import React, { useState, useRef } from "react";
// import { MoveRight } from 'lucide-react';
// //import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import bedsideImage from "../images/bedside-care.png";


// const Services = () => {
//   const navigate = useNavigate(); // Initialize navigation
//   const [showAppointment, setShowAppointment] = useState(false);
//   const [openFaq, setOpenFaq] = useState(null);

//   const appointmentRef = useRef(null);

//   const faqs = [
//     {
//       q: "How long does it take to recover in a stroke rehab?",
//       a: "Recovery time varies based on stroke severity, ranging from a few weeks to several months of dedicated inpatient and outpatient therapy."
//     },
//     {
//       q: "Does the Stroke Care Program help in preventing a second stroke?",
//       a: "Yes, our multidisciplinary team incorporates lifestyle modifications, medical management, and physical therapy to minimize recurrent stroke risks."
//     },
//     {
//       q: "Can AK Home Health Care take care of medications for recovery after brain stroke?",
//       a: "Our 24x7 doctor and nursing care ensures accurate medication administration and constant health monitoring."
//     }
//   ];

//   const handleAppointmentClick = () => {
//     setShowAppointment(true);

//     // Scroll to appointment section after it appears
//     setTimeout(() => {
//       appointmentRef.current?.scrollIntoView({
//         behavior: "smooth",
//         block: "start"
//       });
//     }, 100);
//   };
  

//   return (
//     <div className="services-page">

//       {/* ================= ABOUT SECTION ================= */}

//       <section className="about-care-section">

//         <div className="about-care-image">
//           <img
//             src={bedsideImage}
//             alt="Bedside Caregiver Services"
//           />
//         </div>

//         <div className="about-care-content">

//           <h2>
//             About Bedside Caretaker Services in Mumbai
//           </h2>

//           <p>
//             Managing healthcare needs for your loved ones in a busy city like
//             Mumbai can be challenging, especially when it involves recovery
//             after surgery, long-term illnesses, or providing specialized care
//             like dementia care. At AK Home Healthcare, we understand the
//             complexities of caregiving, which is why we offer personalized
//             Bedside Caregiver services at home to ensure your loved one
//             receives the best care in the comfort of their own home.
//           </p>

//           <p>
//             For patients with dementia, we create tailored nursing care plans
//             that cover personal hygiene assistance and 24 Hours Attendant
//             services. Our caregivers are trained to provide dignified and
//             compassionate care for dementia patients, offering 24 Hours
//             Caretaker support when continuous care is needed.
//           </p>

//           <ul className="check-list">
//             <li>✔ Doctor-led, 24x7 stroke recovery care</li>
//             <li>✔ Milestone-based progress you can see and measure</li>
//             <li>✔ Prevention built in: reducing risks of complications</li>
//           </ul>

//         </div>
//       </section>


//       {/* ================= BOOK APPOINTMENT BUTTON ================= */}

//       <section className="appointment-section">

//         <div className="appointment-content">

//           <button
//             className="appointment-btn"
//             onClick={
//               showAppointment
//                 ? () => setShowAppointment(false)
//                 : handleAppointmentClick
//             }
//           >
//             <span>
//               {showAppointment
//                 ? "Close Appointment"
//                 : "Book An Appointment"}
//             </span>

//             <span className="appointment-arrow">
//               {showAppointment ? "−" : "→"}
//             </span>
//           </button>


//           {/* PHONE NUMBER */}

//           <a
//             href="tel:+919146961077"
//             className="appointment-phone"
//           >

//             <span className="phone-icon">

//               <svg
//                 width="32"
//                 height="32"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M22 16.92V19.92C22 20.47 21.55 20.92 21 20.92C10.51 20.92 2 12.41 2 1.92C2 1.37 2.45 0.92 3 0.92H6C6.55 0.92 7 1.37 7 1.92C7 3.17 7.2 4.37 7.57 5.49C7.67 5.81 7.59 6.16 7.35 6.4L5.65 8.1C7.15 11.05 9.87 13.77 12.82 15.27L14.52 13.57C14.76 13.33 15.11 13.25 15.43 13.35C16.55 13.72 17.75 13.92 19 13.92C19.55 13.92 20 14.37 20 14.92V17.92"
//                   stroke="currentColor"
//                   strokeWidth="1.8"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>

//             </span>

//             <span className="phone-number">
//               +91 9146961077
//             </span>

//           </a>

//         </div>


//         {/* =================================================
//             APPOINTMENT SCREEN
//         ================================================= */}

//         {showAppointment && (

//           <section
//             ref={appointmentRef}
//             className="appointment-screen"
//           >

//             {/* LEFT SIDE */}

//             <div className="appointment-info">

//               <h2>
//                 Schedule Your Appointment
//               </h2>

//               <p className="appointment-description">
//                 Making an appointment is easy and convenient.
//                 Follow these simple steps:
//               </p>


//               {/* STEP 1 */}

//               <div className="appointment-step">

//                 <div className="step-icon">
//                   👤
//                 </div>

//                 <div>
//                   <h3>
//                     Provide Your Details
//                   </h3>

//                   <p>
//                     Share your contact information so we can
//                     confirm your appointment.
//                   </p>
//                 </div>

//               </div>


//               {/* STEP 2 */}

//               <div className="appointment-step">

//                 <div className="step-icon">
//                   🩺
//                 </div>

//                 <div>
//                   <h3>
//                     Choose a Service
//                   </h3>

//                   <p>
//                     Select the service you need from our
//                     available healthcare services.
//                   </p>
//                 </div>

//               </div>


//               {/* STEP 3 */}

//               <div className="appointment-step">

//                 <div className="step-icon">
//                   ✓
//                 </div>

//                 <div>
//                   <h3>
//                     Confirm Your Booking
//                   </h3>

//                   <p>
//                     Receive a confirmation via email or SMS
//                     with all the details you need.
//                   </p>
//                 </div>

//               </div>

//             </div>


//             {/* RIGHT SIDE FORM */}

//             <div className="appointment-form-card">

//               <h2>
//                 Book An Appointment
//               </h2>

//               <form
//                 className="appointment-form"
//                 onSubmit={(e) => {
//                   e.preventDefault();

//                   alert(
//                     "Appointment request submitted successfully!"
//                   );
//                 }}
//               >

//                 {/* NAME */}

//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   required
//                 />


//                 {/* EMAIL + PHONE */}

//                 <div className="form-two-column">

//                   <input
//                     type="email"
//                     placeholder="Your Email"
//                     required
//                   />

//                   <input
//                     type="tel"
//                     placeholder="Phone Number"
//                     required
//                   />

//                 </div>


//                 {/* SERVICE */}

//                 <select required defaultValue="">
//                   <option value="" disabled>
//                     Select Service
//                   </option>

//                   <option value="Bedside Caregiver">
//                     Bedside Caregiver
//                   </option>

//                   <option value="Home Nursing">
//                     Home Nursing
//                   </option>

//                   <option value="Elder Care">
//                     Elder Care
//                   </option>

//                   <option value="Stroke Recovery">
//                     Stroke Recovery
//                   </option>

//                   <option value="Palliative Care">
//                     Palliative Care
//                   </option>

//                 </select>


//                 {/* REQUIRED BY */}

//                 <select required defaultValue="">
//                   <option value="" disabled>
//                     Service Required By
//                   </option>

//                   <option value="Immediately">
//                     Immediately
//                   </option>

//                   <option value="Within 1 Week">
//                     Within 1 Week
//                   </option>

//                   <option value="Within 1 Month">
//                     Within 1 Month
//                   </option>

//                 </select>


//                 {/* LOCATION */}

//                 <select required defaultValue="">
//                   <option value="" disabled>
//                     Select Location
//                   </option>

//                   <option value="Mumbai">
//                     Mumbai
//                   </option>

//                   <option value="Pune">
//                     Pune
//                   </option>

//                   {/* <option value="Delhi NCR">
//                     Delhi NCR
//                   </option>

//                   <option value="Bangalore">
//                     Bangalore
//                   </option>

//                   <option value="Hyderabad">
//                     Hyderabad
//                   </option> */}

//                 </select>


//                 {/* DATE */}

//                 <input
//                   type="date"
//                   required
//                 />


//                 {/* SUBMIT */}

//                 <button
//                   type="submit"
//                   className="appointment-submit-btn"
//                 >
//                   Book Now
//                 </button>

//               </form>

//             </div>

//           </section>

//         )}

//       </section>

// {/* =====================================================
//     HOME HEALTHCARE SERVICES SECTION
// ===================================================== */}

// <section className="healthcare-services-section">

//   <div className="healthcare-services-container">

//     {/* SERVICE 1 */}
//     <div className="healthcare-service-card">

//       <div className="service-top">
//         <div className="service-icon">🏠</div>
//         <h3>Home Nursing Care</h3>
//       </div>

//       <p>
//         Skilled nursing services provided at home to manage medical needs,
//         treatments, and post-operative recovery. Professional nurses offer
//         a wide range of services from wound care to medication management,
//         all tailored to your unique recovery plan. Our nurses ensure
//         continuous care with attention to every detail.
//       </p>

//       {/* <div className="service-bottom">
//         <span className="available">
//           ● &nbsp; Available in these cities
//         </span>

//         <button className="service-arrow"
//         onClick={()=>navigate('/HomeNursingCare')}
//         >↗
//         </button>
//       </div> */}

//     <div className="service-bottom">
//       <span className="available">● &nbsp; Available in these cities</span>
//       <button 
//         className="service-arrow"
//         onClick={() => navigate('/home-nursing-care')}
//       >
//         <MoveRight />
//       </button>
//     </div>

//     </div>


//     {/* SERVICE 2 */}
//     <div className="healthcare-service-card">

//       <div className="service-top">
//         <div className="service-icon">⚕️</div>
//         <h3>Medical Equipment</h3>
//       </div>

//       <p>
//         High-quality medical equipment delivered and set up at your home,
//         ensuring convenience, comfort, and proper functionality. From
//         oxygen machines to mobility aids, all devices are installed with
//         professional guidance for ease of use and optimal performance.
//       </p>

//       <div className="service-bottom">
//         <span className="available">
//           ● &nbsp; Available in these cities
//         </span>

//         <button className="service-arrow"
//         onClick={()=>navigate('/MedicalEquipment')}
//         ><MoveRight /></button>
//       </div>

//     </div>


//     {/* SERVICE 3 */}
//     <div className="healthcare-service-card">

//       <div className="service-top">
//         <div className="service-icon">👩‍🍼</div>
//         <h3>Mother & Baby Care</h3>
//       </div>

//       <p>
//         Comprehensive care for both new mothers and their infants during
//         the postnatal period, ensuring health and well-being. Services
//         include breastfeeding support, infant care guidance, and emotional
//         well-being support for mothers adjusting to life with their baby.
//       </p>

//       <div className="service-bottom">
//         <span className="available">
//           ● &nbsp; Available in these cities
//         </span>

//         <button className="service-arrow"
//          onClick={()=>navigate('/MotherBabycare')}
//         ><MoveRight /></button>
//       </div>

//     </div>


//     {/* SERVICE 4 */}
//     <div className="healthcare-service-card">

//       <div className="service-top">
//         <div className="service-icon">🧑‍⚕️</div>
//         <h3>Physiotherapy</h3>
//       </div>

//       <p>
//         Personalized therapy sessions designed to promote recovery,
//         enhance mobility, and improve overall physical function.Certified physiotherapists provide expert care, offering
//         rehabilitation and strength-building treatments tailored to
//         individual needs.
//       </p>

//       <div className="service-bottom">
//         <span className="available">
//           ● &nbsp; Available in these cities
//         </span>

//         <button className="service-arrow"
//          onClick={()=>navigate('/HomePhysiotherapy')}
//         >
//           <MoveRight />
//         </button>
//       </div>

//     </div>


//     {/* SERVICE 5 */}
//     <div className="healthcare-service-card">

//       <div className="service-top">
//         <div className="service-icon">🏥</div>
//         <h3>ICU At Home</h3>
//       </div>

//       <p>
//         Advanced medical care provided in the comfort of your home,
//         offering intensive monitoring and treatment for critical
//         conditions. Our highly trained medical staff, equipped with
//         state-of-the-art equipment, ensures a high level of             
//         care.         
//       </p>
        
//       <div className="service-bottom">
//         <span className="available">
//           ● &nbsp; Available in these cities
//         </span>

//         <button className="service-arrow"
//          onClick={()=>navigate('/HomeICUServices')}
//         ><MoveRight /></button>
//       </div>

//     </div>


//     {/* SERVICE 6 */}
//     <div className="healthcare-service-card">

//       <div className="service-top">
//         <div className="service-icon">👴</div>
//         <h3>Elderly Care</h3>
//       </div>

//       <p>
//         Our elderly care services provide personalized support at home,
//         focusing on the well-being and dignity of seniors. With skilled
//         caregivers, we assist with daily activities, medication
//         management, and emotional support.
//       </p>

//       <div className="service-bottom">
//         <span className="available">
//           ● &nbsp; Available in these cities
//         </span>

//         <button className="service-arrow"
//          onClick={()=>navigate('/elderly-care-services')}
//         >
//           <MoveRight />
//         </button>
//       </div>

//     </div>

//   </div>

// </section>

//       {/* ================= PARTNERS ================= */}

//       <section className="partners-block">

//         <h3>
//           Partnered with India's Finest Health Insurance Companies
//         </h3>

//         <div className="partner-logos">

//           <div className="logo-card">
//             Niva Bupa
//           </div>

//           <div className="logo-card">
//             SBI General
//           </div>

//           <div className="logo-card">
//             Navi General
//           </div>

//           <div className="logo-card">
//             Care Health
//           </div>

//           <div className="logo-card">
//             Star Health
//           </div>

//         </div>

//       </section>


//       {/* ================= FAQ ================= */}

//       <section className="faq-block">

//         <h3>
//           Frequently Asked Questions
//         </h3>

//         <div className="faq-list">

//           {faqs.map((faq, index) => (

//             <div
//               key={index}
//               className="faq-item"
//             >

//               <button
//                 className="faq-question"
//                 onClick={() =>
//                   setOpenFaq(
//                     openFaq === index
//                       ? null
//                       : index
//                   )
//                 }
//               >

//                 <span>
//                   {faq.q}
//                 </span>

//                 <span className="faq-icon">
//                   {openFaq === index ? "−" : "+"}
//                 </span>

//               </button>

//               {openFaq === index && (
//                 <div className="faq-answer">
//                   {faq.a}
//                 </div>
//               )}

//             </div>

//           ))}

//         </div>

//       </section>

//     </div>
//   );
// };

// export default Services;

import React, { useState, useRef, useEffect } from "react";
import { MoveRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import emailjs from "@emailjs/browser";
import bedsideImage from "../images/bedside-care.png";

const Services = () => {
  const navigate = useNavigate();
  const [showAppointment, setShowAppointment] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const appointmentRef = useRef(null);

  // Initialize EmailJS on component load
  useEffect(() => {
    emailjs.init("rU445AC1MBjX8hz95"); // Your EmailJS Public Key
  }, []);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    requiredBy: "",
    location: "",
    appointmentDate: "",
  });

  // Submission status state
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: "",
  });

  const faqs = [
    {
      q: "How long does it take to recover in a stroke rehab?",
      a: "Recovery time varies based on stroke severity, ranging from a few weeks to several months of dedicated inpatient and outpatient therapy."
    },
    {
      q: "Does the Stroke Care Program help in preventing a second stroke?",
      a: "Yes, our multidisciplinary team incorporates lifestyle modifications, medical management, and physical therapy to minimize recurrent stroke risks."
    },
    {
      q: "Can AK Home Health Care take care of medications for recovery after brain stroke?",
      a: "Our 24x7 doctor and nursing care ensures accurate medication administration and constant health monitoring."
    }
  ];

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Appointment Button Toggle & Scroll
  const handleAppointmentClick = () => {
    setShowAppointment(true);
    setTimeout(() => {
      appointmentRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }, 100);
  };

  // Handle EmailJS Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: "" });

    const templateParams = {
      to_email: "ampatil138@gmail.com",
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      requiredBy: formData.requiredBy,
      location: formData.location,
      appointmentDate: formData.appointmentDate,
    };

    try {
      const response = await emailjs.send(
        "service_273dvak",  // Service ID
        "template_4q9esne", // Template ID
        templateParams,
        "rU445AC1MBjX8hz95"  // Public Key
      );

      if (response.status === 200) {
        setStatus({
          loading: false,
          success: true,
          error: "",
        });

        // Reset form inputs
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          requiredBy: "",
          location: "",
          appointmentDate: "",
        });
      }
    } catch (err) {
      console.error("EmailJS Submission Error:", err);
      setStatus({
        loading: false,
        success: false,
        error: "Failed to send appointment request. Please try again.",
      });
    }
  };

  return (
    <div className="services-page">

      {/* ================= ABOUT SECTION ================= */}
      <section className="about-care-section">
        <div className="about-care-image">
          <img
            src={bedsideImage}
            alt="Bedside Caregiver Services"
          />
        </div>

        <div className="about-care-content">
          <h2>
            About Bedside Caretaker Services in Mumbai
          </h2>

          <p>
            Managing healthcare needs for your loved ones in a busy city like
            Mumbai can be challenging, especially when it involves recovery
            after surgery, long-term illnesses, or providing specialized care
            like dementia care. At AK Home Healthcare, we understand the
            complexities of caregiving, which is why we offer personalized
            Bedside Caregiver services at home to ensure your loved one
            receives the best care in the comfort of their own home.
          </p>

          <p>
            For patients with dementia, we create tailored nursing care plans
            that cover personal hygiene assistance and 24 Hours Attendant
            services. Our caregivers are trained to provide dignified and
            compassionate care for dementia patients, offering 24 Hours
            Caretaker support when continuous care is needed.
          </p>

          <ul className="check-list">
            <li>✔ Doctor-led, 24x7 stroke recovery care</li>
            <li>✔ Milestone-based progress you can see and measure</li>
            <li>✔ Prevention built in: reducing risks of complications</li>
          </ul>
        </div>
      </section>

      {/* ================= BOOK APPOINTMENT BUTTON ================= */}
      <section className="appointment-section">
        <div className="appointment-content">
          <button
            className="appointment-btn"
            onClick={
              showAppointment
                ? () => setShowAppointment(false)
                : handleAppointmentClick
            }
          >
            <span>
              {showAppointment
                ? "Close Appointment"
                : "Book An Appointment"}
            </span>

            <span className="appointment-arrow">
              {showAppointment ? "−" : "→"}
            </span>
          </button>

          {/* PHONE NUMBER */}
          <a
            href="tel:+919146961077"
            className="appointment-phone"
          >
            <span className="phone-icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 16.92V19.92C22 20.47 21.55 20.92 21 20.92C10.51 20.92 2 12.41 2 1.92C2 1.37 2.45 0.92 3 0.92H6C6.55 0.92 7 1.37 7 1.92C7 3.17 7.2 4.37 7.57 5.49C7.67 5.81 7.59 6.16 7.35 6.4L5.65 8.1C7.15 11.05 9.87 13.77 12.82 15.27L14.52 13.57C14.76 13.33 15.11 13.25 15.43 13.35C16.55 13.72 17.75 13.92 19 13.92C19.55 13.92 20 14.37 20 14.92V17.92"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

            <span className="phone-number">
              +91 9146961077
            </span>
          </a>
        </div>

        {/* =================================================
            APPOINTMENT SCREEN
        ================================================= */}
        {showAppointment && (
          <section
            ref={appointmentRef}
            className="appointment-screen"
          >
            {/* LEFT SIDE */}
            <div className="appointment-info">
              <h2>
                Schedule Your Appointment
              </h2>

              <p className="appointment-description">
                Making an appointment is easy and convenient.
                Follow these simple steps:
              </p>

              {/* STEP 1 */}
              <div className="appointment-step">
                <div className="step-icon">👤</div>
                <div>
                  <h3>Provide Your Details</h3>
                  <p>
                    Share your contact information so we can
                    confirm your appointment.
                  </p>
                </div>
              </div>

              {/* STEP 2 */}
              <div className="appointment-step">
                <div className="step-icon">🩺</div>
                <div>
                  <h3>Choose a Service</h3>
                  <p>
                    Select the service you need from our
                    available healthcare services.
                  </p>
                </div>
              </div>

              {/* STEP 3 */}
              <div className="appointment-step">
                <div className="step-icon">✓</div>
                <div>
                  <h3>Confirm Your Booking</h3>
                  <p>
                    Receive a confirmation via email or SMS
                    with all the details you need.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="appointment-form-card">
              <h2>Book An Appointment</h2>

              {status.success ? (
                <div
                  className="alert-success"
                  style={{
                    padding: "15px",
                    backgroundColor: "#d4edda",
                    color: "#155724",
                    borderRadius: "5px",
                    textAlign: "center",
                    marginTop: "20px"
                  }}
                >
                  Appointment request submitted successfully! We will contact you soon.
                </div>
              ) : (
                <form className="appointment-form" onSubmit={handleSubmit}>
                  {/* NAME */}
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                  {/* EMAIL + PHONE */}
                  <div className="form-two-column">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />

                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* SERVICE */}
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Select Service</option>
                    <option value="Bedside Caregiver">Bedside Caregiver</option>
                    <option value="Home Nursing">Home Nursing</option>
                    <option value="Elder Care">Elder Care</option>
                    <option value="Stroke Recovery">Stroke Recovery</option>
                    <option value="Palliative Care">Palliative Care</option>
                  </select>

                  {/* REQUIRED BY */}
                  <select
                    name="requiredBy"
                    value={formData.requiredBy}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Service Required By</option>
                    <option value="Immediately">Immediately</option>
                    <option value="Within 1 Week">Within 1 Week</option>
                    <option value="Within 1 Month">Within 1 Month</option>
                  </select>

                  {/* LOCATION */}
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Select Location</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Pune">Pune</option>
                  </select>

                  {/* DATE */}
                  <input
                    type="date"
                    name="appointmentDate"
                    value={formData.appointmentDate}
                    onChange={handleChange}
                    required
                  />

                  {/* ERROR MESSAGE */}
                  {status.error && (
                    <p style={{ color: "red", marginTop: "10px", fontSize: "14px" }}>
                      {status.error}
                    </p>
                  )}

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    className="appointment-submit-btn"
                    disabled={status.loading}
                  >
                    {status.loading ? "Sending..." : "Book Now"}
                  </button>
                </form>
              )}
            </div>
          </section>
        )}
      </section>

      {/* ================= HOME HEALTHCARE SERVICES SECTION ================= */}
      <section className="healthcare-services-section">
        <div className="healthcare-services-container">

          {/* SERVICE 1 */}
          <div className="healthcare-service-card">
            <div className="service-top">
              <div className="service-icon">🏠</div>
              <h3>Home Nursing Care</h3>
            </div>
            <p>
              Skilled nursing services provided at home to manage medical needs,
              treatments, and post-operative recovery. Professional nurses offer
              a wide range of services from wound care to medication management,
              all tailored to your unique recovery plan. Our nurses ensure
              continuous care with attention to every detail.
            </p>
            <div className="service-bottom">
              <span className="available">● &nbsp; Available in these cities</span>
              <button 
                className="service-arrow"
                onClick={() => navigate('/home-nursing-care')}
              >
                <MoveRight />
              </button>
            </div>
          </div>

          {/* SERVICE 2 */}
          <div className="healthcare-service-card">
            <div className="service-top">
              <div className="service-icon">⚕️</div>
              <h3>Medical Equipment</h3>
            </div>
            <p>
              High-quality medical equipment delivered and set up at your home,
              ensuring convenience, comfort, and proper functionality. From
              oxygen machines to mobility aids, all devices are installed with
              professional guidance for ease of use and optimal performance.
            </p>
            <div className="service-bottom">
              <span className="available">● &nbsp; Available in these cities</span>
              <button className="service-arrow" onClick={() => navigate('/MedicalEquipment')}>
                <MoveRight />
              </button>
            </div>
          </div>

          {/* SERVICE 3 */}
          <div className="healthcare-service-card">
            <div className="service-top">
              <div className="service-icon">👩‍🍼</div>
              <h3>Mother & Baby Care</h3>
            </div>
            <p>
              Comprehensive care for both new mothers and their infants during
              the postnatal period, ensuring health and well-being. Services
              include breastfeeding support, infant care guidance, and emotional
              well-being support for mothers adjusting to life with their baby.
            </p>
            <div className="service-bottom">
              <span className="available">● &nbsp; Available in these cities</span>
              <button className="service-arrow" onClick={() => navigate('/MotherBabycare')}>
                <MoveRight />
              </button>
            </div>
          </div>

          {/* SERVICE 4 */}
          <div className="healthcare-service-card">
            <div className="service-top">
              <div className="service-icon">🧑‍⚕️</div>
              <h3>Physiotherapy</h3>
            </div>
            <p>
              Personalized therapy sessions designed to promote recovery,
              enhance mobility, and improve overall physical function. Certified physiotherapists provide expert care, offering
              rehabilitation and strength-building treatments tailored to
              individual needs.
            </p>
            <div className="service-bottom">
              <span className="available">● &nbsp; Available in these cities</span>
              <button className="service-arrow" onClick={() => navigate('/HomePhysiotherapy')}>
                <MoveRight />
              </button>
            </div>
          </div>

          {/* SERVICE 5 */}
          <div className="healthcare-service-card">
            <div className="service-top">
              <div className="service-icon">🏥</div>
              <h3>ICU At Home</h3>
            </div>
            <p>
              Advanced medical care provided in the comfort of your home,
              offering intensive monitoring and treatment for critical
              conditions. Our highly trained medical staff, equipped with
              state-of-the-art equipment, ensures a high level of care.
            </p>
            <div className="service-bottom">
              <span className="available">● &nbsp; Available in these cities</span>
              <button className="service-arrow" onClick={() => navigate('/HomeICUServices')}>
                <MoveRight />
              </button>
            </div>
          </div>

          {/* SERVICE 6 */}
          <div className="healthcare-service-card">
            <div className="service-top">
              <div className="service-icon">👴</div>
              <h3>Elderly Care</h3>
            </div>
            <p>
              Our elderly care services provide personalized support at home,
              focusing on the well-being and dignity of seniors. With skilled
              caregivers, we assist with daily activities, medication
              management, and emotional support.
            </p>
            <div className="service-bottom">
              <span className="available">● &nbsp; Available in these cities</span>
              <button className="service-arrow" onClick={() => navigate('/elderly-care-services')}>
                <MoveRight />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ================= PARTNERS ================= */}
      <section className="partners-block">
        <h3>
          Partnered with India's Finest Health Insurance Companies
        </h3>

        <div className="partner-logos">
          <div className="logo-card">Niva Bupa</div>
          <div className="logo-card">SBI General</div>
          <div className="logo-card">Navi General</div>
          <div className="logo-card">Care Health</div>
          <div className="logo-card">Star Health</div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="faq-block">
        <h3>
          Frequently Asked Questions
        </h3>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className="faq-question"
                onClick={() =>
                  setOpenFaq(openFaq === index ? null : index)
                }
              >
                <span>{faq.q}</span>
                <span className="faq-icon">
                  {openFaq === index ? "−" : "+"}
                </span>
              </button>

              {openFaq === index && (
                <div className="faq-answer">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Services;