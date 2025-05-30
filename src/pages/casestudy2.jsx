import React from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import "../components/HeroCarousel.css"
import './CaseStudy.css';


const CaseStudy2 = () => {
  const slide = {
    image: "/images/bg3.png",
    title: "From Startup Struggles to Scalable Success",
    description:
      "We re-engineered a confidential UAE-based product, building a solid backend foundation that fueled growth to 150K customers and record-breaking sales. ",
  }
   const caseStudies = [
    {
      title: "From Bottlenecks to Breakthroughs",
      description:
        "We helped StyIz overcome serious technical hurdles, re-engineering their platform into a fast, scalable SaaS solution that fueled 45% year-over-year growth.",
      tags: ["Product Development", "Re-Engineering"],
      image: "/images/case1.png",
      link: "/casestudy1",
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
                <p className="date">5 min Read • October 10, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="case-study-content">
        <div className="case-study-container">
      <div className="header-section">
        <div className="left-content">
          <p className="seamless-text">Built to Scale</p>
          <h1 className="main-title">Turning technical chaos into scalable clarity.</h1>
        </div>
        <div className="right-content">
          <h3 className="overview-title">OVERVIEW</h3>
          <p className="overview-text">
            The product in focus is a confidential yet well-known service provider in the UAE, offering its solutions in more than 20 cities worldwide. Despite its growing market demand and potential, the technical foundation of the product was weak, hampering its ability to scale efficiently.

          </p>
        </div>
      </div>

      <div className="content-grid">
        <div className="content-card">
          <h1 className="card-title">CHALLENGE</h1>
          <p className="card-text">
            A fast-growing UAE startup was crippled by an unreliable, unstructured backend that caused system failures and financial transaction errors, eroding customer trust.
          </p>
        </div>

        <div className="content-card">
          <h3 className="card-title">OUR SOLUTION</h3>
          <p className="card-text">
           Luminosa rebuilt the backend from the ground up, introduced a centralized Order Management Service and Wallet System, and executed a complex modular data migration with zero data loss.
          </p>
        </div>

        <div className="content-card">
          <h3 className="card-title">KEY IMPACT</h3>
          <p className="card-text">
            The platform now supports over 150K users, with MoM sales at an all-time high and customer complaints related to transactions nearly eliminated.
          </p>
        </div>
      </div>
    </div>
        </section>
         <div className="detailed-challenge-section2">
        <h2 className="detailed-challenge-title2">THE CHALLENGE</h2>
        <p>Before our intervention, Stylz was plagued with several technical and architectural issues:</p>
        <ul className="challenge-list">
          <li>
            <strong>Tightly Coupled Codebase:</strong> The existing backend (BE) was not modular, making feature updates
            and bug fixes cumbersome.
          </li>
          <li>
            <strong>Poor Maintainability:</strong> Lack of a clear architectural pattern meant that even minor
            modifications risked breaking core functionalities.
          </li>
          <li>
            <strong>Performance Bottlenecks:</strong> The slow response times of the backend caused significant lag on
            both the web and mobile applications.
          </li>
          <li>
            <strong>Lack of Documentation:</strong> No formal documentation existed for the legacy system, making
            onboarding and debugging highly inefficient.
          </li>
        </ul>
      </div>
      <section className="solution-section">
        <div className="solution-header">
          <h2 className="solution-subtitle">OUR SOLUTION</h2>
          <h1 className="solution-title">
            We rebuilt the backend from scratch to create a scalable, unified system that restored trust and unlocked long-term growth
          </h1>
        </div>

        <div className="solution-timeline">
          <div className="timeline-step">
            <h3 className="step-title">Backend Re-architecture</h3>
            <h4 className="step-subtitle">New Backend Architecture</h4>
            <p className="step-description">
              We built a completely new backend from the ground up using a modular, scalable approach that ensures long-term maintainability.
            </p>    
            <p className="step-description">
             At Luminosa, we believe a strong backend unlocks product potential—and this one was built to grow with the business.
            </p>
          </div>

          <div className="timeline-step">
            <h3 className="step-title">LOGIC RE-ENGINEERING</h3>
            <h4 className="step-subtitle">Centralized Order System</h4>
            <p className="step-description">
              We rewrote all core logic for memberships, bookings, and transactions, replacing fragmented modules with a centralized Order Management Service.
            </p>
            <p className="step-description">
             This made financial flows consistent, reliable, and easier to expand in the future.
            </p>
          </div>

          <div className="timeline-step">
            <h3 className="step-title">BACKEND RE-ARCHITECTURE</h3>
            <h4 className="step-subtitle">Introducing a Wallet System</h4>
            <p className="step-description">
              We implemented an internal wallet system to track purchases and debits for each customer, reducing financial inconsistencies and improving trust in the platform.
            </p>
          </div>

          <div className="timeline-step">
            <h3 className="step-title">DATA MIGRATION</h3>
            <h4 className="step-subtitle">Migrating 100K+ Customer Records</h4>
            <p className="step-description">
            With a completely new database structure, we couldn’t rely on basic migration.
            </p>
             <p className="step-description">
              We executed a precise, modular migration—one module at a time—ensuring zero data loss and full integrity across over 100,000 customer records.            </p>
          </div>
        </div>
      </section>
      <div className="impact-section">
      <p className="key-impact">KEY IMPACT</p>
      <h2 className="impact-heading">
        From instability to innovation—building a platform 
        <br />  that scales, performs, and earns user trust
      </h2>

      <div className="impact-grid">
        <div className="impact-card">
          <h3>
              <img src="/public/images/tick.svg" alt="Check icon" />
              System Stability & Performance
            </h3>
          <p>
           The new backend eliminated previous performance bottlenecks, significantly improving system reliability and speed.
          </p>
          <p>
           The system is now highly scalable, capable of handling increased transaction volumes.
          </p>
        </div>

        <div className="impact-card">
          <h3> 
             <img src="/public/images/tick.svg" alt="Check icon" />
            Developer Velocity & Team Efficiency</h3>
          <p>
            The new modular architecture and clean codebase significantly reduced onboarding time and enabled the client’s development team to ship new features faster with fewer bugs.
          </p>
        </div>

        <div className="impact-card">
          <h3>
             <img src="/public/images/tick.svg" alt="Check icon" />
             Business Growth & Customer Acquisition</h3>
          <p>
            With a robust and scalable system, the product has grown to over 150K customers.
          </p>
          <p>
            Sales through our new order system have reached all-time highs Month-over-Month (MoM) for the past year.
          </p>
        </div>

        <div className="impact-card">
          <h3> 
             <img src="/public/images/tick.svg" alt="Check icon" />
            Improved Financial Accuracy</h3>
          <p>
            The new Order Management Service and Wallet System streamlined financial transactions, eliminating errors in order processing and membership recharges.
          </p>
          <p>
            Customer complaints related to payments and transactions dropped to near zero.
          </p>
        </div>
      </div>
    </div>
     <div className="conclusion-container">
      <div className="conclusion-background2">
        <div className="conclusion-content">
          <h3>CONCLUSION</h3>
          <p>
            By applying strategic software engineering principles and leveraging our expertise in Django,
            React, and MySQL, Luminosa successfully transformed Stylz from a struggling platform into a
            robust, scalable, and high-performing SaaS product. This project reinforced the importance
            of understanding business logic, re-engineering systems with scalability in mind, and
            maintaining a strong focus on user experience.
          </p>
          <p>
            With the new architecture in place, Stylz is now well-positioned for future growth,
            innovation, and market leadership in Saudi Arabia's beauty and wellness industry.
          </p>
        </div>
      </div>
    </div>
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

export default CaseStudy2;