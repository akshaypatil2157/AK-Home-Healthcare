// import React, { useState } from "react";

// const JobApplication = () => {

//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     education: "",
//     experience: "",
//     position: "",
//     location: "",
//     skills: "",
//     message: "",
//     resume: null,
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {

//     const { name, value, files } = e.target;

//     setFormData({
//       ...formData,
//       [name]: files ? files[0] : value,
//     });
//   };


//   const handleSubmit = (e) => {

//     e.preventDefault();

//     console.log("Job Application:", formData);

//     setSubmitted(true);
//   };


//   return (
//     <div className="job-page">

//       {/* ================= HEADER ================= */}

//       <header className="job-header">

//         <div className="job-header-left">

//           <button
//             className="back-button"
//             onClick={() => {
//               window.location.href = "/";
//             }}
//           >
//             ←
//           </button>

//           <span>
//             AK Home Health Care
//           </span>

//         </div>


//         <a
//           href="tel:+919146961077"
//           className="job-phone"
//         >
//           ☎ +91 9146961077
//         </a>

//       </header>


//       {/* ================= PAGE TITLE ================= */}

//       <section className="job-page-title">

//         <h1>
//           Join Our Healthcare Team
//         </h1>

//         <p>
//           Build your career with AK Home Health Care
//         </p>

//       </section>


//       {/* ================= FORM AREA ================= */}

//       <section className="job-form-section">

//         <div className="job-form-wrapper">


//           {/* LEFT INFORMATION */}

//           <div className="job-info">

//             <h2>
//               Make a Difference With Us
//             </h2>

//             <p>
//               We are looking for caring, skilled and
//               dedicated professionals to join our
//               healthcare team.
//             </p>


//             <div className="job-points">

//               <div>
//                 ✓ Professional Work Environment
//               </div>

//               <div>
//                 ✓ Career Growth Opportunities
//               </div>

//               <div>
//                 ✓ Supportive Team
//               </div>

//               <div>
//                 ✓ Healthcare Industry Experience
//               </div>

//               <div>
//                 ✓ Meaningful Work
//               </div>

//             </div>

//           </div>


//           {/* ================= APPLICATION FORM ================= */}

//           <div className="job-card">

//             {submitted ? (

//               <div className="job-success">

//                 <div className="success-icon">
//                   ✓
//                 </div>

//                 <h2>
//                   Application Submitted!
//                 </h2>

//                 <p>
//                   Thank you for applying. Our HR team
//                   will contact you shortly.
//                 </p>

//                 <button
//                   onClick={() => {
//                     window.location.href = "/";
//                   }}
//                   className="back-home-button"
//                 >
//                   Go To Main Website
//                 </button>

//               </div>

//             ) : (

//               <>

//                 <h2>
//                   Job Application
//                 </h2>

//                 <p className="form-subtitle">
//                   Please fill in your details below.
//                 </p>


//                 <form
//                   onSubmit={handleSubmit}
//                   className="job-form"
//                 >


//                   {/* NAME */}

//                   <div className="form-field">

//                     <label>
//                       Full Name *
//                     </label>

//                     <input
//                       type="text"
//                       name="name"
//                       placeholder="Enter your full name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                     />

//                   </div>


//                   {/* MOBILE */}

//                   <div className="form-field">

//                     <label>
//                       Mobile Number *
//                     </label>

//                     <input
//                       type="tel"
//                       name="phone"
//                       placeholder="Enter mobile number"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       required
//                     />

//                   </div>


//                   {/* EMAIL */}

//                   <div className="form-field">

//                     <label>
//                       Email Address *
//                     </label>

//                     <input
//                       type="email"
//                       name="email"
//                       placeholder="Enter email address"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                     />

//                   </div>


//                   {/* EDUCATION */}

//                   <div className="form-field">

//                     <label>
//                       Education *
//                     </label>

//                     <select
//                       name="education"
//                       value={formData.education}
//                       onChange={handleChange}
//                       required
//                     >

//                       <option value="">
//                         Select Education
//                       </option>

//                       <option value="10th">
//                         10th
//                       </option>

//                       <option value="12th">
//                         12th
//                       </option>

//                       <option value="Diploma">
//                         Diploma
//                       </option>

//                       <option value="Graduate">
//                         Graduate
//                       </option>

//                       <option value="Post Graduate">
//                         Post Graduate
//                       </option>

//                     </select>

//                   </div>


//                   {/* EXPERIENCE */}

//                   <div className="form-field">

//                     <label>
//                       Experience
//                     </label>

//                     <select
//                       name="experience"
//                       value={formData.experience}
//                       onChange={handleChange}
//                     >

//                       <option value="">
//                         Select Experience
//                       </option>

//                       <option value="Fresher">
//                         Fresher
//                       </option>

//                       <option value="0-1 Years">
//                         0 - 1 Years
//                       </option>

//                       <option value="1-3 Years">
//                         1 - 3 Years
//                       </option>

//                       <option value="3-5 Years">
//                         3 - 5 Years
//                       </option>

//                       <option value="5+ Years">
//                         5+ Years
//                       </option>

//                     </select>

//                   </div>


//                   {/* POSITION */}

//                   <div className="form-field">

//                     <label>
//                       Position Applying For *
//                     </label>

//                     <select
//                       name="position"
//                       value={formData.position}
//                       onChange={handleChange}
//                       required
//                     >

//                       <option value="">
//                         Select Position
//                       </option>

//                       <option value="Nurse">
//                         Nurse
//                       </option>

//                       <option value="Caregiver">
//                         Caregiver
//                       </option>

//                       <option value="Physiotherapist">
//                         Physiotherapist
//                       </option>

//                       <option value="Doctor">
//                         Doctor
//                       </option>

//                       <option value="Home Healthcare Staff">
//                         Home Healthcare Staff
//                       </option>

//                       <option value="Other">
//                         Other
//                       </option>

//                     </select>

//                   </div>


//                   {/* LOCATION */}

//                   <div className="form-field">

//                     <label>
//                       Preferred Location
//                     </label>

//                     <select
//                       name="location"
//                       value={formData.location}
//                       onChange={handleChange}
//                     >

//                       <option value="">
//                         Select Location
//                       </option>

//                       <option value="Mumbai">
//                         Mumbai
//                       </option>

//                       <option value="Pune">
//                         Pune
//                       </option>

//                       <option value="Delhi NCR">
//                         Delhi NCR
//                       </option>

//                       <option value="Bangalore">
//                         Bangalore
//                       </option>

//                       <option value="Hyderabad">
//                         Hyderabad
//                       </option>

//                     </select>

//                   </div>


//                   {/* SKILLS */}

//                   <div className="form-field full-width">

//                     <label>
//                       Skills
//                     </label>

//                     <input
//                       type="text"
//                       name="skills"
//                       placeholder="Example: Patient Care, Nursing, Physiotherapy"
//                       value={formData.skills}
//                       onChange={handleChange}
//                     />

//                   </div>


//                   {/* RESUME */}

//                   <div className="form-field full-width">

//                     <label>
//                       Upload Resume *
//                     </label>

//                     <input
//                       type="file"
//                       name="resume"
//                       accept=".pdf,.doc,.docx"
//                       onChange={handleChange}
//                       required
//                     />

//                     <small>
//                       Accepted formats: PDF, DOC, DOCX
//                     </small>

//                   </div>


//                   {/* MESSAGE */}

//                   <div className="form-field full-width">

//                     <label>
//                       Additional Information
//                     </label>

//                     <textarea
//                       name="message"
//                       rows="4"
//                       placeholder="Tell us about yourself..."
//                       value={formData.message}
//                       onChange={handleChange}
//                     />

//                   </div>


//                   {/* SUBMIT */}

//                   <button
//                     type="submit"
//                     className="job-submit"
//                   >
//                     Submit Application
//                   </button>

//                 </form>

//               </>

//             )}

//           </div>

//         </div>

//       </section>


//       {/* ================= FOOTER ================= */}

//       <footer className="job-footer">

//         <button
//           onClick={() => {
//             window.location.href = "/";
//           }}
//         >
//           ← Go To Main Website
//         </button>

//       </footer>

//     </div>
//   );
// };

// export default JobApplication;

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Undo2 } from 'lucide-react';

const JobApplication = () => {
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

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  // Convert uploaded file to Base64 format for EmailJS attachment
  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      let base64Resume = "";

      // If user uploaded a resume file, convert it to base64
      if (formData.resume) {
        base64Resume = await convertFileToBase64(formData.resume);
      }

      // Parameters passed to EmailJS template
      const templateParams = {
        to_email: "ampatil138@gmail.com",
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        education: formData.education,
        experience: formData.experience,
        position: formData.position,
        location: formData.location,
        skills: formData.skills,
        message: formData.message,
        // Passing base64 data allows EmailJS to attach the file
        content: base64Resume, 
      };

      // REPLACE WITH YOUR ACTUAL EMAILJS KEYS
      await emailjs.send(
        "service_273dvak",   // Service ID from EmailJS
        "template_n9pdzsg",  // Template ID from EmailJS
        templateParams,
        "rU445AC1MBjX8hz95"    // Public Key from EmailJS
      );

      setSubmitted(true);
    } catch (error) {
      console.error("EmailJS Send Error:", error);
      setErrorMessage("Failed to send application. Please verify your EmailJS keys.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="job-page">
      {/* HEADER */}
      <header className="job-header">
        <div className="job-header-left">
          <button
            className="back-button"
            onClick={() => (window.location.href = "/")}
          >
            <Undo2 />
          </button>
          <span>AK Home Health Care</span>
        </div>
        <a href="tel:+919146961077" className="job-phone">
          ☎ +91 9146961077
        </a>
      </header>

      {/* PAGE TITLE */}
      <section className="job-page-title">
        <h1>Join Our Healthcare Team</h1>
        <p>Build your career with AK Home Health Care</p>
      </section>

      {/* FORM SECTION */}
      <section className="job-form-section">
        <div className="job-form-wrapper">
          <div className="job-info">
            <h2>Make a Difference With Us</h2>
            <p>
              We are looking for caring, skilled and dedicated professionals to
              join our healthcare team.
            </p>
            <div className="job-points">
              <div>✓ Professional Work Environment</div>
              <div>✓ Career Growth Opportunities</div>
              <div>✓ Supportive Team</div>
              <div>✓ Healthcare Industry Experience</div>
              <div>✓ Meaningful Work</div>
              <div>✓ Competitive Compensation</div>
              <div>✓ Flexible Work Schedules</div>
              <div>✓ Ongoing Training & Skill Development</div>
              <div>✓ Compassionate Community Culture</div>
              <div>✓ Employee Recognition Programs</div>
            </div>
          </div>

          <div className="job-card">
            {submitted ? (
              <div className="job-success">
                <div className="success-icon">✓</div>
                <h2>Application Submitted!</h2>
                <p>
                  Thank you for applying. Our HR team will contact you shortly.
                </p>
                {/* <button
                  onClick={() => (window.location.href = "/")}
                  className="back-home-button"
                >
                  Go To Main Website
                </button> */}
              </div>
            ) : (
              <>
                <h2>Job Application</h2>
                <p className="form-subtitle">Please fill in your details below.</p>

                <form onSubmit={handleSubmit} className="job-form">
                  <div className="form-field">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label>Mobile Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter mobile number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter email address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label>Education *</label>
                    <select
                      name="education"
                      value={formData.education}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Education</option>
                      <option value="10th">10th</option>
                      <option value="12th">12th</option>
                      <option value="Diploma">Diploma</option>
                      <option value="Graduate">Graduate</option>
                      <option value="Post Graduate">Post Graduate</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label>Experience</label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                    >
                      <option value="">Select Experience</option>
                      <option value="Fresher">Fresher</option>
                      <option value="0-1 Years">0 - 1 Years</option>
                      <option value="1-3 Years">1 - 3 Years</option>
                      <option value="3-5 Years">3 - 5 Years</option>
                      <option value="5+ Years">5+ Years</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label>Position Applying For *</label>
                    <select
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Position</option>
                      <option value="Nurse">Nurse</option>
                      <option value="Caregiver">Caregiver</option>
                      <option value="Physiotherapist">Physiotherapist</option>
                      <option value="Doctor">Doctor</option>
                      <option value="Home Healthcare Staff">
                        Home Healthcare Staff
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label>Preferred Location</label>
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                    >
                      <option value="">Select Location</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Pune">Pune</option>
                      <option value="Delhi NCR">Delhi NCR</option>
                      <option value="Bangalore">Bangalore</option>
                      <option value="Hyderabad">Hyderabad</option>
                    </select>
                  </div>

                  <div className="form-field full-width">
                    <label>Skills</label>
                    <input
                      type="text"
                      name="skills"
                      placeholder="Example: Patient Care, Nursing, Physiotherapy"
                      value={formData.skills}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-field full-width">
                    <label>Upload Resume *</label>
                    <input
                      type="file"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleChange}
                      required
                    />
                    <small>Accepted formats: PDF, DOC, DOCX</small>
                  </div>

                  <div className="form-field full-width">
                    <label>Additional Information</label>
                    <textarea
                      name="message"
                      rows="4"
                      placeholder="Tell us about yourself..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  {errorMessage && (
                    <p style={{ color: "#ff4d4d", margin: "10px 0" }}>
                      {errorMessage}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="job-submit"
                    disabled={loading}
                  >
                    {loading ? "Submitting Application..." : "Submit Application"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* <footer className="job-footer">
        <button onClick={() => (window.location.href = "/")}>
          ← Go To Main Website
        </button>
      </footer> */}
    </div>
  );
};

export default JobApplication;