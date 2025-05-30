import React from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import "../components/HeroCarousel.css"
import './CaseStudy.css';


const CaseStudy3 = () => {
  const slide = {
    image: "/images/car.png",
    title: "Designing Safe Rides for Women, by Women",
    description:
      "We built a women-first ride-hailing platform focused on safety, trust, and affordability—empowering women to travel confidently through real-time tracking, secure driver screening, and a supportive community-driven experience.",
  }
   const caseStudies = [
    {
      title: "From Startup Struggles to Scalable Success",
      description:
        "We re-engineered a confidential UAE-based product, building a solid backend foundation that fueled growth to 150K customers and record-breaking sales.",
      tags: ["Product Development", "Re-Engineering"],
      image: "/images/case2.png",
      link: "/casestudy2",
    },
    {
      title: "Redefining Safe and Empowering Rides for Women",
      description:
        "We built a women-first ride-hailing platform focused on safety, trust, and affordability—empowering women to travel confidently through real-time tracking, secure driver screening, and a supportive community-driven experience.",
      tags: ["Product Development", "Design & Branding"],
      image: "/images/case3.png",
      link: "/casestudy3",
    },
  ]

  return (
    <>
      <Header logoText="LUMINOSA" />
      <section className="hero-carousel">
        <div className="carousel-container" style={{ transform: "translateX(0%)" }}>
          <div className="carousel-slide">
            <div className="slide-image-container">
              <div className="slide-overlay"></div>
              <img
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                className="slide-image"
              />
            </div>
            <div className="slide-content-wrapper">
              <div className="slide-content">
                <div className="tags">
               <span className="tag">Product Development</span>
               <span className="tag">Re-Engineering</span>
               </div>
               <p className="font-ag">Case Study</p>
                <h1 className="slide-title">{slide.title}</h1>
                <p className="slide-description">{slide.description}</p>
                <p className="date" style={{ fontStyle:"italic"}}>5 min Read • January 20, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="case-study-content">
        <div className="case-study-container">
      <div className="header-section">
        <div className="left-content">
          <p className="seamless-text">OVERARCHING PROBLEM</p>
          <p className="overview-text">
           Women often feel unsafe while using public and ride-hailing transport due to unreliable drivers, lack of security features, and limited options designed for their needs. There was a need for a platform that prioritized safety, trust, and convenience, giving women the confidence to travel freely.
          </p>
        </div>
        <div className="right-content">
          <h3 className="overview-title">our considerations</h3>
          <p className="overview-text">
            Safety Concerns – Ensuring secure rides with vetted drivers and real-time tracking.
            Trust & Community – Building a service that women could rely on for daily commutes.
            Affordability – Making transportation accessible without high costs.

          </p>
        </div>
      </div>
    </div>
        </section>

        <section className="our-solution">
      <div className="image-container">
        <img src="images/app.png" alt="Ride-hailing App Preview" />
      </div>
      <div className="text-container">
        <h2>OUR SOLUTION</h2>
        <ul>
          <li>
            <strong>Women-First Approach</strong> – Designed a ride-hailing service exclusively for women, ensuring a safer travel experience.
          </li>
          <li>
            <strong>Reliable & Secure Rides</strong> – Established strict driver screening and safety measures to build trust.
          </li>
          <li>
            <strong>Community-Driven Model</strong> – Encouraged a supportive network where women feel comfortable and connected.
          </li>
          <li>
            <strong>Affordable Options</strong> – Provided cost-effective ride choices to make safe transport accessible to more women.
          </li>
          <li>
            <strong>Seamless Experience</strong> – Built an easy-to-use platform with a smooth booking and ride experience.
          </li>
        </ul>
      </div>
    </section>

    <section className="case-studies-section" style={{ padding: "4rem 2rem" }}>
  <h2 className="text-left text-lg font-bold uppercase " style={{  fontSize: '16px',color: "rgba(133, 34, 0, 1)" }}>
    EXPLORE OUR CASE STUDIES
  </h2>
  <h3 className="text-left mb-10" style={{ color: "#000", fontSize: "36px", fontWeight: "400" }}>
    Read More
  </h3>

  <div className="case-studies-grid">
    {caseStudies.map((study, index) => (
      <div className="case-card" key={index}>
        <img src={study.image} alt={study.title} className="case-image" />
        <div className="case-tags">
          {study.tags.map((tag, i) => (
            <span key={i} className="case-tag">{tag}</span>
          ))}
        </div>
        <h4 className="case-title">{study.title}</h4>
        <p className="case-desc">{study.description}</p>
        <Link to={study.link} className="read-more-link">Read More →</Link>
      </div>
    ))}
  </div>
</section>


        
    </>
  )
};

export default CaseStudy3;