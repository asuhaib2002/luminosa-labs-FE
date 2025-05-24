
import { useState } from "react"
import "./Header.css"

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
           <img src="public/images/lum.svg" alt="" className="logo-img" />
           <span className="logo-text">LUMINOSA</span>
          </div>

        <nav className={`nav-desktop ${mobileMenuOpen ? "hidden" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#work" className="nav-link">
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
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link">SERVICES</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">ABOUT</a>
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
            <li className="mobile-nav-item"><a href="#work" onClick={toggleMobileMenu}>WORK</a></li>
            <li className="mobile-nav-item"><a href="#services" onClick={toggleMobileMenu}>SERVICES</a></li>
            <li className="mobile-nav-item"><a href="#about" onClick={toggleMobileMenu}>ABOUT</a></li>
            <li className="mobile-nav-item">
              <a href="#contact" className="contact-btn" onClick={toggleMobileMenu}>CONTACT US</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
