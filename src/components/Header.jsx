// src/components/Header.jsx

import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ logoText = "LUMINOSA" }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
       <img src="public/images/lum.svg" alt="Logo" className="logo-img" />
       <span className="logo-text">{logoText}</span>
       </Link>

        <nav className={`nav-desktop ${mobileMenuOpen ? "hidden" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/work" className="nav-link">
                WORK
                <svg
                  className="dropdown-arrow"
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                >
                  <path
                    d="M1 1.5L6 6.5L11 1.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </li>
            <li className="nav-link">
            <Link to="/services" onClick={toggleMobileMenu}>SERVICES</Link>

            </li>
            <li className="nav-link">
              <Link to="/about" onClick={toggleMobileMenu}>ABOUT</Link>
            </li>
            <li className="nav-item">
              <a href="#contact" className="contact-btn">CONTACT US</a>
            </li>
          </ul>
        </nav>

        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span className={`hamburger ${mobileMenuOpen ? "open" : ""}`}></span>
        </button>

        <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
          <ul className="mobile-nav-list">
            <li className="mobile-nav-item">
              <Link to="/work" onClick={toggleMobileMenu}>WORK</Link>
            </li>
            <li className="mobile-nav-item">
              <Link to="/services" onClick={toggleMobileMenu}>SERVICES</Link>
            </li>
            <li className="mobile-nav-item">
              <Link to="/about" onClick={toggleMobileMenu}>About</Link>
            </li>
            <li className="mobile-nav-item">
              <a href="#contact" className="contact-btn" onClick={toggleMobileMenu}>CONTACT US</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
