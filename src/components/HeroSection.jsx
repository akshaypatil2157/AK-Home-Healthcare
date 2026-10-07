import React, { useState } from "react";
//import { submitLeadForm } from "../firebase";

import strokeImage from "../images/frontb.jpg";

const HeroSection = ({ onApplyClick }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    education: "",
    experience: "",
    position: "",
    location: "",
    skills: "",
    message: "",
    resume: null,
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: "",
  });

  const [showJobForm, setShowJobForm] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  // Apply Now button
  const handleApplyClick = () => {
    setShowJobForm(true);

    // Smooth scroll to application form
    setTimeout(() => {
      document.getElementById("job-application-form")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  // Submit Job Application
  const handleJobSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.education ||
      !formData.position
    ) {
      setStatus({
        loading: false,
        success: false,
        error: "Please fill all required fields.",
      });

      return;
    }

    setStatus({
      loading: true,
      success: false,
      error: "",
    });

    try {
      // Currently displaying successful submission.
      // Firebase resume upload can be connected separately.
      console.log("Job Application:", formData);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStatus({
        loading: false,
        success: true,
        error: "",
      });

      setFormData({
        name: "",
        phone: "",
        email: "",
        education: "",
        experience: "",
        position: "",
        location: "",
        skills: "",
        message: "",
        resume: null,
      });

      // Reset file input
      const fileInput = document.getElementById("resume");
      if (fileInput) {
        fileInput.value = "";
      }
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: "Failed to submit application. Please try again.",
      });
    }
  };

  return (
    <>
      <section
        className="hero-section"
        style={{
          backgroundImage: `url(${strokeImage})`,
        }}
      >
        <div className="hero-banner">

          {/* LEFT SIDE */}
          <div className="hero-left">

            <h1 className="hero-title">
              Patient Care at Home
            </h1>

            <div className="rating-badge">
              <span className="rating-score">
                4.6 ★★★★★
              </span>

              <span className="rating-count">
                (12280+ Google Reviews)
              </span>
            </div>

            <div className="highlights-row">

              <div className="highlight-item">
                <strong>Insurance Coverage</strong>{" "}
                Across Centers
              </div>

              <div className="highlight-item">
                <strong>50K+</strong>{" "}
                Successful Recoveries
              </div>

              <div className="highlight-item">
                <strong>NABH & QAI</strong>{" "}
                Accreditation
              </div>

            </div>

          </div>


          {/* RIGHT SIDE */}
          <div className="hero-right">

            <div className="lead-card">

              <h3>
                Get in touch with our recovery expert!
              </h3>

              {status.success ? (

                <div className="alert-success">
                  Thank you! Your application has been
                  submitted successfully.
                </div>

              ) : (

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                  className="lead-form"
                >

                  <div className="form-group">
                    <label>NAME</label>

                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Full Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>


                  <div className="form-group">
                    <label>MOBILE NUMBER</label>

                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter Mobile Number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>


                  <div className="form-group">
                    <label>LOCATION</label>

                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                    >
                      <option value="">
                        Select Location
                      </option>

                      <option value="Mumbai">
                        Mumbai
                      </option>

                      <option value="Pune">
                        Pune
                      </option>
                    </select>
                  </div>
                          {status.error && <p className="error-text">{status.error}</p>}
                      <button type="submit" className="submit-btn" disabled={status.loading}> 
                          {status.loading ? "Submitting..." : "COMPLETE YOUR ASSESSMENT"} 
                      </button>
                </form>

              )}

            </div>

          </div>

        </div>


        {/* =====================================================
            JOB BANNER
        ===================================================== */}

        {/* <div className="job-banner">

          <span>
            Looking for a job at AK Home Health Care?
          </span>

          <button
            className="apply-link-btn"
            onClick={handleApplyClick}
          >
            Apply Now ›
          </button>

        </div> */}

      </section>


      {/* =====================================================
          JOB APPLICATION FORM
      ===================================================== */}

      {showJobForm && (

        <section
          id="job-application-form"
          className="job-application-section"
        >

          <div className="job-application-container">

            {/* LEFT CONTENT */}

            <div className="job-application-info">

              <h2>
                Join Our Healthcare Team
              </h2>

              <p>
                We are always looking for caring,
                skilled and dedicated professionals
                to join our team.
              </p>

              <div className="job-benefits">

                <div>
                  ✓ Professional Work Environment
                </div>

                <div>
                  ✓ Growth Opportunities
                </div>

                <div>
                  ✓ Healthcare Industry Experience
                </div>

                <div>
                  ✓ Supportive Team
                </div>

              </div>

            </div>


            {/* RIGHT FORM */}

            <div className="job-form-card">

              <h2>
                Job Application
              </h2>

              <p className="job-form-subtitle">
                Fill in your details and upload your
                resume.
              </p>


              <form
                className="job-application-form"
                onSubmit={handleJobSubmit}
              >

                {/* FULL NAME */}

                <div className="job-form-group">

                  <label>
                    Full Name *
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                </div>


                {/* MOBILE */}

                <div className="job-form-group">

                  <label>
                    Mobile Number *
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter mobile number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />

                </div>


                {/* EMAIL */}

                <div className="job-form-group">

                  <label>
                    Email Address *
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                </div>


                {/* EDUCATION */}

                <div className="job-form-group">

                  <label>
                    Education *
                  </label>

                  <select
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                    required
                  >

                    <option value="">
                      Select Education
                    </option>

                    <option value="10th">
                      10th
                    </option>

                    <option value="12th">
                      12th
                    </option>

                    <option value="Diploma">
                      Diploma
                    </option>

                    <option value="Graduate">
                      Graduate
                    </option>

                    <option value="Post Graduate">
                      Post Graduate
                    </option>

                    <option value="Other">
                      Other
                    </option>

                  </select>

                </div>


                {/* EXPERIENCE */}

                <div className="job-form-group">

                  <label>
                    Experience
                  </label>

                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                  >

                    <option value="">
                      Select Experience
                    </option>

                    <option value="Fresher">
                      Fresher
                    </option>

                    <option value="0-1 Years">
                      0 - 1 Years
                    </option>

                    <option value="1-3 Years">
                      1 - 3 Years
                    </option>

                    <option value="3-5 Years">
                      3 - 5 Years
                    </option>

                    <option value="5+ Years">
                      5+ Years
                    </option>

                  </select>

                </div>


                {/* POSITION */}

                <div className="job-form-group">

                  <label>
                    Position Applying For *
                  </label>

                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                  >

                    <option value="">
                      Select Position
                    </option>

                    <option value="Nurse">
                      Nurse
                    </option>

                    <option value="Caregiver">
                      Caregiver
                    </option>

                    <option value="Physiotherapist">
                      Physiotherapist
                    </option>

                    <option value="Doctor">
                      Doctor
                    </option>

                    <option value="Home Healthcare Staff">
                      Home Healthcare Staff
                    </option>

                    <option value="Other">
                      Other
                    </option>

                  </select>

                </div>


                {/* LOCATION */}

                <div className="job-form-group">

                  <label>
                    Preferred Location
                  </label>

                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                  >

                    <option value="">
                      Select Location
                    </option>

                    <option value="Mumbai">
                      Mumbai
                    </option>

                    <option value="Pune">
                      Pune
                    </option>

                    <option value="Delhi NCR">
                      Delhi NCR
                    </option>

                    <option value="Bangalore">
                      Bangalore
                    </option>

                    <option value="Hyderabad">
                      Hyderabad
                    </option>

                  </select>

                </div>


                {/* SKILLS */}

                <div className="job-form-group">

                  <label>
                    Skills
                  </label>

                  <input
                    type="text"
                    name="skills"
                    placeholder="Example: Patient Care, Nursing, Physiotherapy"
                    value={formData.skills}
                    onChange={handleChange}
                  />

                </div>


                {/* RESUME */}

                <div className="job-form-group">

                  <label>
                    Upload Resume *
                  </label>

                  <input
                    id="resume"
                    type="file"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleChange}
                    required
                  />

                  <small>
                    Accepted formats: PDF, DOC, DOCX
                  </small>

                </div>


                {/* MESSAGE */}

                <div className="job-form-group">

                  <label>
                    Additional Information
                  </label>

                  <textarea
                    name="message"
                    placeholder="Tell us something about yourself..."
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                  />

                </div>


                {/* ERROR */}

                {status.error && (

                  <p className="job-error">
                    {status.error}
                  </p>

                )}


                {/* SUBMIT */}

                <button
                  type="submit"
                  className="job-submit-btn"
                  disabled={status.loading}
                >

                  {status.loading
                    ? "Submitting Application..."
                    : "Submit Application"
                  }

                </button>


                {/* CLOSE */}

                <button
                  type="button"
                  className="job-close-btn"
                  onClick={() => setShowJobForm(false)}
                >
                  Close
                </button>

              </form>

            </div>

          </div>

        </section>

      )}

    </>
  );
};

export default HeroSection;
// import React, { useState } from "react";
// import emailjs from "@emailjs/browser";
// import strokeImage from "../images/frontb.jpg";

// const HeroSection = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     location: "",
//   });

//   const [status, setStatus] = useState({
//     loading: false,
//     success: false,
//     error: "",
//   });

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Handle Lead Form Submission
//   const handleLeadSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.name || !formData.phone || !formData.location) {
//       setStatus({
//         loading: false,
//         success: false,
//         error: "Please fill in all details (Name, Mobile Number, Location).",
//       });
//       return;
//     }

//     setStatus({ loading: true, success: false, error: "" });

//     // Only parameters matching the screenshot
//     const templateParams = {
//       to_email: "ampatil138@gmail.com",
//       name: formData.name,       // Maps to {{name}} in EmailJS
//       phone: formData.phone,     // Maps to {{phone}} in EmailJS
//       location: formData.location, // Maps to {{location}} in EmailJS
//     };

//     try {
//       await emailjs.send(
//         "service_273dvak",
//         "template_4q9esne",
//         templateParams,
//         "rU445AC1MBjX8hz95"
//       );

//       setStatus({
//         loading: false,
//         success: true,
//         error: "",
//       });

//       setFormData({
//         name: "",
//         phone: "",
//         location: "",
//       });
//     } catch (err) {
//       console.error("EmailJS Error:", err);
//       setStatus({
//         loading: false,
//         success: false,
//         error: "Failed to send email. Please try again.",
//       });
//     }
//   };

//   return (
//     <section
//       className="hero-section"
//       style={{ backgroundImage: `url(${strokeImage})` }}
//     >
//       <div className="hero-banner">
//         {/* LEFT SIDE */}
//         <div className="hero-left">
//           <h1 className="hero-title">Patient Care at Home</h1>

//           <div className="rating-badge">
//             <span className="rating-score">4.6 ★★★★★</span>
//             <span className="rating-count">(12280+ Google Reviews)</span>
//           </div>

//           <div className="highlights-row">
//             <div className="highlight-item">
//               <strong>Insurance Coverage</strong> Across Centers
//             </div>
//             <div className="highlight-item">
//               <strong>50K+</strong> Successful Recoveries
//             </div>
//             <div className="highlight-item">
//               <strong>NABH & QAI</strong> Accreditation
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SIDE (Form from screenshot) */}
//         <div className="hero-right">
//           <div className="lead-card">
//             <h3>Get in touch with our recovery expert!</h3>

//             {status.success ? (
//               <div className="alert-success">
//                 Thank you! Your details have been sent successfully.
//               </div>
//             ) : (
//               <form onSubmit={handleLeadSubmit} className="lead-form">
//                 <div className="form-group">
//                   <label>NAME</label>
//                   <input
//                     type="text"
//                     name="name"
//                     placeholder="Enter Full Name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label>MOBILE NUMBER</label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     placeholder="Enter Mobile Number"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label>LOCATION</label>
//                   <select
//                     name="location"
//                     value={formData.location}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="">Select Location</option>
//                     <option value="Mumbai">Mumbai</option>
//                     <option value="Pune">Pune</option>
//                   </select>
//                 </div>

//                 {status.error && (
//                   <p className="error-text">{status.error}</p>
//                 )}

//                 <button
//                   type="submit"
//                   className="submit-btn"
//                   disabled={status.loading}
//                 >
//                   {status.loading
//                     ? "Submitting..."
//                     : "COMPLETE YOUR ASSESSMENT"}
//                 </button>
//               </form>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;