
import React from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import "../components/HeroCarousel.css"


const Services = () => {
   const slide = {
    image: "public/images/servicebg.png", 
    title: "Where Innovation Meets Impact",
    description:
      "Scalable solutions. Intelligent design. Future-ready technology. At Luminosa Labs, we go beyond software—we create transformative digital experiences that power businesses forward. From AI-driven automation to full-scale platform development, we bring logic, creativity, and strategy together to help you shine in a competitive market.",
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
                <p className="font-ag">All Services</p>
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
                  <button className="btn btn-primary">Schedule a Call</button>
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

export default Services
