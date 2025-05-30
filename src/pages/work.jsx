import React from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import "../components/HeroCarousel.css"
import Lastsection from "../components/lastsection"

const Work = () => {
  const slide = {
    image: "public/images/workbg.png",
    title: "Illuminating Our Success Stories",
    description:
      "From re-engineering legacy systems to crafting cutting-edge digital experiences, each project showcases our commitment to delivering impactful, scalable solutions. Explore our latest case studies to see how we've helped businesses shine brighter.",
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

      {/* Hero Section */}
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
                <p className="font-ag">All Case Studies</p>
                <h1 className="slide-title">{slide.title}</h1>
                <p className="slide-description">
                  {slide.description.split("\n").map((line, idx) => (
                    <span key={idx}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
                <div className="slide-buttons">
                  <button className="btn btn-primary" style={{ backgroundColor: "rgb(255, 255, 255)", color: "black", padding: "13px 24px", borderRadius: "10px", fontSize: "18px" }}>Schedule a Call</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="case-studies-section" style={{ padding: "4rem 2rem" }}>
        <h1 className="text-center text-lg font-bold uppercase " style={{  fontSize: '14px',color: "rgba(133, 34, 0, 1)" }}>
          Our Case Studies
        </h1>
        <h3 className="text-center text-lg font-normal uppercase " style={{ fontFamily: "Work Sans", fontSize: '24px',color: "rgb(0, 0, 0)" }}>
          Our Work Speaks for Itself
        </h3>

        <div className="case-studies-grid" style={{ margin: "80PX", display: "grid", gap: "2rem", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
          {caseStudies.map((study, index) => (
            <div className="case-card" key={index} style={{ borderRadius: "20px", overflow: "hidden", backgroundColor: "#fff", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", padding: "1rem" }}>
              <img src={study.image} alt={study.title} style={{ width: "100%", borderRadius: "16px" }} />
              <div style={{ marginTop: "1rem", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {study.tags.map((tag, i) => (
                  <span key={i} style={{ backgroundColor: "rgb(163, 72, 11)", color: "#fff", padding: "4px 10px", borderRadius: "12px", fontSize: "12px" }}>
                    {tag}
                  </span>
                ))}
              </div>
              <h4 style={{ fontWeight: "700", marginTop: "1rem" }}>{study.title}</h4>
              <p style={{ fontSize: "14px", marginTop: "0.5rem" }}>{study.description}</p>
              <Link to={study.link} style={{ marginTop: "1rem", display: "inline-block", fontWeight: "bold", color: "#d32f2f" }}>
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </section>
      <Lastsection/>
      
      
      
    </>
  )
}

export default Work
