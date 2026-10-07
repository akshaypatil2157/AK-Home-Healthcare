import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import CareerPortal from "./components/CareerPortal";
import HomeNursingCare from "./components/HomeNursingCare";
import HomePhysiotherapy from "./components/HomePhysiotherapy";
import HomeIcuServices from "./components/HomeIcuServices";
import ElderlyCareServices from "./components/ElderlyCareServices";
import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("home"); // 'home' | 'careers'

  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar activePage={activePage} setActivePage={setActivePage} />

        <main className="main-content">
          <Routes>
            {/* Main Homepage Route */}
            <Route
              path="/"
              element={
                activePage === "home" ? (
                  <>
                    <HeroSection onApplyClick={() => setActivePage("careers")} />
                    <Services />
                  </>
                ) : (
                  <CareerPortal />
                )
              }
            />

            {/* Standalone Route for Home Nursing Care */}
            <Route path="/home-nursing-care" element={<HomeNursingCare />} />
            <Route path="/HomeNursingCare" element={<HomeNursingCare />} />
            <Route path="/home-physiotherapy" element={<HomePhysiotherapy />} />
            <Route path="/HomePhysiotherapy" element={<HomePhysiotherapy />} />
            <Route path="/HomeICUServices" element={<HomeIcuServices />} />
            <Route path="/elderly-care-services" element={<ElderlyCareServices />} />
            <Route path="/CareerPortal" element={<CareerPortal />} />
            
            
          </Routes>
        </main>

        <footer className="footer">
          <div className="footer-cols">
            <div className="footer-col">
              <h4>RECOVERY PROGRAMS</h4>
              <ul>
                <li>Stroke Care</li>
                <li>Paralysis Care</li>
                <li>Trauma Care</li>
                <li>Spine Care</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>OUR SERVICES</h4>
              <ul>
                <li>Physiotherapy</li>
                <li>Assisted Living</li>
                <li>Attendant</li>
                <li>Nursing</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>COMPANY</h4>
              <ul>
                <li>About Us</li>
                <li>Careers at AK Home Health Care</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 AK Home Health Care. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import HeroSection from "./components/HeroSection";
// import Services from "./components/Services";
// import CareerPortal from "./components/CareerPortal";
// import HomeNursingCare from "./components/HomeNursingCare";
// import "./App.css";

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="app-container">
//         <Navbar />

//         <main className="main-content">
//           <Routes>
//             {/* Home Route */}
//             <Route
//               path="/"
//               element={
//                 <>
//                   <HeroSection />
//                   <Services />
//                 </>
//               }
//             />

//             {/* Careers Route */}
//             <Route path="/careers" element={<CareerPortal />} />

//             {/* Home Nursing Care Routes */}
//             <Route path="/home-nursing-care" element={<HomeNursingCare />} />
//             <Route path="/HomeNursingCare" element={<HomeNursingCare />} />
//           </Routes>
//         </main>

//         <footer className="footer">
//           <div className="footer-cols">
//             <div className="footer-col">
//               <h4>RECOVERY PROGRAMS</h4>
//               <ul>
//                 <li>Stroke Care</li>
//                 <li>Paralysis Care</li>
//                 <li>Trauma Care</li>
//                 <li>Spine Care</li>
//               </ul>
//             </div>
//             <div className="footer-col">
//               <h4>OUR SERVICES</h4>
//               <ul>
//                 <li>Physiotherapy</li>
//                 <li>Assisted Living</li>
//                 <li>Attendant</li>
//                 <li>Nursing</li>
//               </ul>
//             </div>
//             <div className="footer-col">
//               <h4>COMPANY</h4>
//               <ul>
//                 <li>About Us</li>
//                 <li>Careers at AK Home Health Care</li>
//                 <li>Contact Us</li>
//               </ul>
//             </div>
//           </div>
//           <div className="footer-bottom">
//             <p>© 2026 AK Home Health Care. All Rights Reserved.</p>
//           </div>
//         </footer>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;