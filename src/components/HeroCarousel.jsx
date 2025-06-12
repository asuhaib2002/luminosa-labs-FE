import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import "./HeroCarousel.css"
import Header from "./Header"

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      image: "/images/bg1.png", // Replace with your own image
      title: "Limitless Vision. Logical Solutions. Luminous Results.",
      description:
        "At Luminosa, we go beyond building software—we create intuitive, scalable, and high-performing digital experiences. From dynamic apps to smart AI, our solutions light the way for your business to stand out in this crowded market.",
    },
    {
      id: 2,
      image: "/images/bg2.png", // Replace with your own image
      title: "From Bottlenecks to Breakthroughs",
      description:
      "We helped Styles overcome serious technical hurdles, re-engineering their platform into a fast, scalable SaaS solution that fueled 45% year-over-year growth. ", 
    },
    {
      id: 3,
      image: "/images/bg3.png", 
      title: "From Startup Struggles to Scalable Success",
      description:
        "We re-engineered a confidential UAE-based product, building a solid backend foundation that fueled growth to 150K customers and record-breaking sales.",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero-carousel">
      <div className="carousel-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, idx) => (
          <div key={slide.id} className="carousel-slide">
            <div className="slide-image-container">
              <div className="slide-overlay"></div>
              <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="slide-image" />
            </div>
            <div className="slide-content-wrapper">
              <div className="slide-content">
                 {(idx === 1 || idx === 2) && (
          <>
            <p className="font-ag">Case Study</p>
            <div className="tags2">
              <span className="tag1">Product Development</span>
              <span className="tag1">Re-Engineering</span>
            </div>
          </>
        )}
                <h1 className="slide-title">{slide.title}</h1>
                <p className="slide-description">{slide.description}</p>
                {idx === 1 ? (
  <div className="slide-buttons">
    <Link to="/casestudy1" className="btn btn-primary">Read Case Study 1</Link>
  </div>
) : idx === 2 ? (
  <div className="slide-buttons">
    <Link to="/casestudy2" className="btn btn-primary">Read Case Study 2</Link>
  </div>
) : (
  <div className="slide-buttons">
    <Link to="/contact" className="btn btn-primary">Contact Us</Link>
    <Link to="/about" className="btn btn-secondary">Learn More</Link>
  </div>
)}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-arrow carousel-arrow-left" onClick={prevSlide}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15 18l-6-6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button className="carousel-arrow carousel-arrow-right" onClick={nextSlide}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`carousel-indicator ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </section>
  )
}

export default HeroCarousel
