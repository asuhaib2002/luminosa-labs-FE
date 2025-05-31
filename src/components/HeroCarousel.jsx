import { useState, useEffect } from "react"
import "./HeroCarousel.css"
import Header from "./Header"

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      image: "public/images/bg1.png", // Replace with your own image
      title: "Limitless Vision. Logical Solutions. Luminous Results.",
      description:
        "At Luminosa, we go beyond building software—we create intuitive, scalable, and high-performing digital experiences. From dynamic apps to smart AI, our solutions light the way for your business to stand out in this crowded market.",
    },
    {
      id: 2,
      image: "public/images/bg2.png", // Replace with your own image
      title: "Innovative Technology. Exceptional Results.",
      description:
        "Transform your business with cutting-edge solutions that drive growth and innovation. Our expert team delivers scalable applications that exceed expectations.",
    },
    {
      id: 3,
      image: "public/images/bg3.png", // Replace with your own image
      title: "Smart Solutions. Bright Future.",
      description:
        "Partner with us to build the future of your business. We combine creativity with technology to deliver solutions that make a lasting impact.",
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
        {slides.map((slide) => (
          <div key={slide.id} className="carousel-slide">
            <div className="slide-image-container">
              <div className="slide-overlay"></div>
              <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="slide-image" />
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
