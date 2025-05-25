// src/pages/Work.jsx

import React from "react"
import Header from "../components/Header"
import "../components/HeroCarousel.css" 

const About = () => {
  const slide = {
    image: "public/images/aboutbg.png", 
    title: "Limitless Vision. Logical Solutions. Luminous Results.",
    description:
      "At Luminosa, we go beyond building software—we create intuitive, scalable, and high-performing digital experiences. From dynamic apps to smart AI, our solutions light the way for your business to stand out in this crowded market.",
  }

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
                <h1 className="slide-title">{slide.title}</h1>
                <p className="slide-description">{slide.description}</p>
                <div className="slide-buttons">
                  <button className="btn btn-primary">Get Started</button>
                  <button className="btn btn-secondary">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <main className="work-content">
        <section>
          <h1>Our Work</h1>
          <p>Explore some of our best projects and collaborations.</p>
        </section>
      </main>
    </>
  )
}

export default About
