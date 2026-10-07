// import React, { useState } from "react";
// import emailjs from "@emailjs/browser";

// const BookAppointment = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     service: "",
//     requiredBy: "",
//     location: "",
//     appointmentDate: "",
//   });

//   const [status, setStatus] = useState({
//     loading: false,
//     success: false,
//     error: "",
//   });

//   // Handle Input Changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Handle Form Submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus({ loading: true, success: false, error: "" });

//     // Map form state to template variables
//     const templateParams = {
//       to_email: "ampatil138@gmail.com",
//       name: formData.name,
//       email: formData.email,
//       phone: formData.phone,
//       service: formData.service,
//       requiredBy: formData.requiredBy,
//       location: formData.location,
//       appointmentDate: formData.appointmentDate,
//     };

//     try {
//       // Send Email via EmailJS
//       const response = await emailjs.send(
//         "service_273dvak",      // Service ID
//         "template_4q9esne",     // Template ID
//         templateParams,
//         "rU445AC1MBjX8hz95"      // Public Key
//       );

//       if (response.status === 200) {
//         setStatus({
//           loading: false,
//           success: true,
//           error: "",
//         });

//         // Clear Form Fields
//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           service: "",
//           requiredBy: "",
//           location: "",
//           appointmentDate: "",
//         });
//       }
//     } catch (err) {
//       console.error("EmailJS Error:", err);
//       setStatus({
//         loading: false,
//         success: false,
//         error: "Failed to send email. Please check your credentials and network connection.",
//       });
//     }
//   };

//   return (
//     <div className="book-page">
//       <div className="book-form-card">
//         <h2>Book An Appointment</h2>

//         {status.success ? (
//           <div
//             className="alert-success"
//             style={{
//               padding: "15px",
//               backgroundColor: "#d4edda",
//               color: "#155724",
//               borderRadius: "5px",
//               textAlign: "center",
//             }}
//           >
//             Appointment booked successfully! We will contact you soon.
//           </div>
//         ) : (
//           <form onSubmit={handleSubmit}>
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />

//             <div className="two-inputs">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />

//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone Number"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <select
//               name="service"
//               value={formData.service}
//               onChange={handleChange}
//               required
//             >
//               <option value="">Select Service</option>
//               <option value="Home Nursing Care">Home Nursing Care</option>
//               <option value="Bedside Caregiver">Bedside Caregiver</option>
//               <option value="Elderly Care">Elderly Care</option>
//               <option value="Physiotherapy">Physiotherapy</option>
//               <option value="Palliative Care">Palliative Care</option>
//             </select>

//             <select
//               name="requiredBy"
//               value={formData.requiredBy}
//               onChange={handleChange}
//               required
//             >
//               <option value="">Service Required By</option>
//               <option value="Today">Today</option>
//               <option value="Tomorrow">Tomorrow</option>
//               <option value="Within 1 Week">Within 1 Week</option>
//               <option value="Within 1 Month">Within 1 Month</option>
//             </select>

//             <select
//               name="location"
//               value={formData.location}
//               onChange={handleChange}
//               required
//             >
//               <option value="">Select Location</option>
//               <option value="Mumbai">Mumbai</option>
//               <option value="Pune">Pune</option>
//             </select>

//             <input
//               type="date"
//               name="appointmentDate"
//               value={formData.appointmentDate}
//               onChange={handleChange}
//               required
//             />

//             {status.error && (
//               <p className="error-text" style={{ color: "red", marginTop: "10px" }}>
//                 {status.error}
//               </p>
//             )}

//             <button
//               type="submit"
//               className="book-now-btn"
//               disabled={status.loading}
//             >
//               {status.loading ? "Sending..." : "Book Now"}
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BookAppointment;

import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const BookAppointment = () => {
  // 1. Initialize EmailJS with your Public Key on mount
  useEffect(() => {
    emailjs.init("rU445AC1MBjX8hz95");
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    requiredBy: "",
    location: "",
    appointmentDate: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: "" });

    // 2. Map form state to match your exact EmailJS template tags
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
        "service_273dvak", // Service ID
        "template_4q9esne", // Template ID
        templateParams,
        "rU445AC1MBjX8hz95" // Public Key
      );

      if (response.status === 200) {
        setStatus({
          loading: false,
          success: true,
          error: "",
        });

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
      console.error("EmailJS Error details:", err);
      setStatus({
        loading: false,
        success: false,
        error: err.text || "Failed to send email. Check browser console for details.",
      });
    }
  };

  return (
    <div className="book-page">
      <div className="book-form-card">
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
            }}
          >
            Appointment booked successfully! We will contact you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <div className="two-inputs">
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

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select Service</option>
              <option value="Home Nursing Care">Home Nursing Care</option>
              <option value="Bedside Caregiver">Bedside Caregiver</option>
              <option value="Elderly Care">Elderly Care</option>
              <option value="Physiotherapy">Physiotherapy</option>
              <option value="Palliative Care">Palliative Care</option>
            </select>

            <select
              name="requiredBy"
              value={formData.requiredBy}
              onChange={handleChange}
              required
            >
              <option value="">Service Required By</option>
              <option value="Today">Today</option>
              <option value="Tomorrow">Tomorrow</option>
              <option value="Within 1 Week">Within 1 Week</option>
              <option value="Within 1 Month">Within 1 Month</option>
            </select>

            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            >
              <option value="">Select Location</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Pune">Pune</option>
            </select>

            <input
              type="date"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleChange}
              required
            />

            {status.error && (
              <p className="error-text" style={{ color: "red", marginTop: "10px" }}>
                {status.error}
              </p>
            )}

            <button
              type="submit"
              className="book-now-btn"
              disabled={status.loading}
            >
              {status.loading ? "Sending..." : "Book Now"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default BookAppointment;