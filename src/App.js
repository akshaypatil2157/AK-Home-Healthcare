// import React, { useState } from "react";
// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import HeroSection from "./components/HeroSection";
// import ServicesComponent from "./components/Services";
// import CareerPortal from "./components/CareerPortal";

// // Pages
// import ServicesPage from "./components/Services";
// import HomeNursingCare from "./components/HomeNursingCare";
// import MedicalEquipment from "./components/MedicalEquipment";
// import MotherBabyCare from "./components/MotherBabycare";
// import HomePhysiotherapy from "./components/HomePhysiotherapy";
// import HomeIcuServices from "./components/HomeIcuServices";
// import ElderlyCareServices from "./components/ElderlyCareServices";
// import BookAppointment from "./components/BookAppointment";

// import "./App.css";

// // Layout wrapper for Navbar & Footer
// const Layout = () => {
//   const [activePage, setActivePage] = useState("home");

//   return (
//     <div className="app-container">
//       <Navbar activePage={activePage} setActivePage={setActivePage} />

//       <Outlet context={{ activePage, setActivePage }} />

//       <footer className="footer">
//         <div className="footer-cols">
//           <div className="footer-col">
//             <h4>RECOVERY PROGRAMS</h4>
//             <ul>
//               <li>Stroke Care</li>
//               <li>Paralysis Care</li>
//               <li>Trauma Care</li>
//               <li>Spine Care</li>
//             </ul>
//           </div>
//           <div className="footer-col">
//             <h4>OUR SERVICES</h4>
//             <ul>
//               <li>Physiotherapy</li>
//               <li>Assisted Living</li>
//               <li>Attendant</li>
//               <li>Nursing</li>
//             </ul>
//           </div>
//           <div className="footer-col">
//             <h4>COMPANY</h4>
//             <ul>
//               <li>About Us</li>
//               <li>Careers at AK Home Health Care</li>
//               <li>Contact Us</li>
//             </ul>
//           </div>
//         </div>
//         <div className="footer-bottom">
//           <p>© 2026 AK Home Health Care. All Rights Reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// // Main Home Component
// const Home = ({ activePage, setActivePage }) => {
//   return (
//     <main className="main-content">
//       {activePage === "home" ? (
//         <>
//           <HeroSection onApplyClick={() => setActivePage("careers")} />
//           <ServicesComponent />
//         </>
//       ) : (
//         <CareerPortal />
//       )}
//     </main>
//   );
// };

// // Router Configuration
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <Home activePage="home" setActivePage={() => {}} />,
//       },
//       { path: "/services", element: <ServicesPage /> },
//       { path: "/home-nursing-care", element: <HomeNursingCare /> },
//       {path: "/MedicalEquipment", element: <MedicalEquipment /> },
//       {path: "/motherbabycare", element: <MotherBabyCare /> },
//       {path: "/homephysiotherapy", element: <HomePhysiotherapy /> },
//       { path: "/book-appointment", element: <BookAppointment /> },
//       {path: "/HomeIcuServices", element: <HomeIcuServices /> },
//       {path: "/HomeICUServices", element: <HomeIcuServices /> },
//       {path: "/elderly-care-services", element: <ElderlyCareServices /> },
//       {path: "/CareerPortal", element: <CareerPortal /> },

      
//     ],
//   },
// ]);

// function App() {
  
//   return <RouterProvider router={router} />;
// }

// export default App;