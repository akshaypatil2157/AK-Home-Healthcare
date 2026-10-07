import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Navbar = ({ activePage, setActivePage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const handleNavClick = (page) => {
    if (setActivePage) setActivePage(page);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleCareersClick = () => {
    handleNavClick("careers");
    navigate("/CareerPortal"); // Navigates to Career Portal route
  };

  return (
    <header className="navbar-container">
      <nav className="navbar">
        <div className="nav-brand" onClick={() => { handleNavClick("home"); navigate("/"); }}>
          <img
            src="/AK_Logo.jpeg"
            alt="AK Home Health Care"
            className="logo-image"
          />
        </div>

        <button 
          className="mobile-toggle" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>

        <ul className={`nav-menu ${mobileMenuOpen ? "open" : ""}`}>
          <li 
            className="nav-item dropdown"
            onMouseEnter={() => toggleDropdown("rehab")}
            onMouseLeave={() => toggleDropdown(null)}
          >
            <button className="nav-link dropdown-toggle">
              Rehab & Recovery ▾
            </button>
            {activeDropdown === "rehab" && (
              <ul className="dropdown-menu">
                <li><a href="#stroke">Stroke Care</a></li>
                <li><a href="#spine">Spine Care</a></li>
                <li><a href="#trauma">Trauma Care</a></li>
                <li><a href="#post-op">Postoperative Care</a></li>
              </ul>
            )}
          </li>

          {/* <li 
            className="nav-item dropdown"
            onMouseEnter={() => toggleDropdown("Eldercare")}
            onMouseLeave={() => toggleDropdown(null)}
          >
            <button className="nav-link dropdown-toggle">
              Elder Care ▾
            </button>
            {activeDropdown === "Eldercare" && (
              <ul className="dropdown-menu">
                <li><a href="#caregiver">Assisted Living</a></li>
                <li><a href="#attendant">Alzheimer-Dementia Care</a></li>
                <li><a href="#nursing">Senior Care Home</a></li>
              </ul>
            )}
          </li> */}

          <li 
            className="nav-item dropdown"
            onMouseEnter={() => toggleDropdown("homecare")}
            onMouseLeave={() => toggleDropdown(null)}
          >
            <button className="nav-link dropdown-toggle">
              Home Care ▾
            </button>
            {activeDropdown === "homecare" && (
              <ul className="dropdown-menu">
                <li><a href="#caregiver">Caregiver</a></li>
                <li><a href="#attendant">Attendant</a></li>
                <li><a href="#nursing">Nursing</a></li>
                <li><a href="#icu">ICU at Home</a></li>
              </ul>
            )}
          </li>

          <li 
            className="nav-item dropdown"
            onMouseEnter={() => toggleDropdown("services")}
            onMouseLeave={() => toggleDropdown(null)}
          >
            <button className="nav-link dropdown-toggle">
              Our Centers ▾
            </button>
            {activeDropdown === "services" && (
              <ul className="dropdown-menu">
                <li><a href="#mumbai">Mumbai</a></li>
                <li><a href="#pune">Pune</a></li>
              </ul>
            )}
          </li>

          <li 
            className="nav-item dropdown"
            onMouseEnter={() => toggleDropdown("company")}
            onMouseLeave={() => toggleDropdown(null)}
          >
            <button className="nav-link dropdown-toggle">
              Company ▾
            </button>
            {activeDropdown === "company" && (
              <ul className="dropdown-menu">
                <li>
                  <button onClick={handleCareersClick} className="dropdown-btn">
                    Careers at AK Home Health Care
                  </button>
                </li>
                <li><a href="#about">About Us</a></li>
              </ul>
            )}
          </li>

          <li className="nav-item nav-btn-item">
            <button 
              className={`nav-cta-btn ${activePage === "careers" ? "active" : ""}`}
              onClick={handleCareersClick}
            >
              Careers / Join Us
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;