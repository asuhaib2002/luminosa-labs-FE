"use client"

import { useEffect, useRef } from "react"
import "./ServiceSection.css"

const ServiceSection = () => {
  const cardsRef = useRef([])

  useEffect(() => {
    const handleScroll = () => {
      const centerY = window.innerHeight / 2

      cardsRef.current.forEach((card) => {
        if (!card) return

        const rect = card.getBoundingClientRect()
        const cardCenterY = rect.top + rect.height / 2
        const distance = Math.abs(centerY - cardCenterY)
        const maxDistance = window.innerHeight / 2

        const scale = 1.1 - Math.min(distance / maxDistance, 1) * 0.15
        const opacity = 1 - Math.min(distance / maxDistance, 1) * 0.2

        card.style.transform = `scale(${scale})`
        card.style.opacity = opacity
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const setCardRef = (index) => (el) => {
    cardsRef.current[index] = el
  }

  return (
    <section className="service-section">
      <div className="container">
        <div className="firstparagraph">
          <p className="subtitle">WHAT DO WE DO?</p>
          <h2 className="title">
            Light the Way with
            <br />
            Smart, Scalable Solutions
          </h2>
          <p className="description">
            We blend creativity with technology to develop solutions that drive growth and elevate brands. Our services
            cover every step of the digital journey, ensuring your business not only meets but exceeds its goals.
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card" ref={setCardRef(0)}>
            <div className="icon-circle">
              <img src="/images/product.svg" alt="Product Development" className="service-icon" />
            </div>
            <h3 className="service-title">
              PRODUCT
              <br />
              DEVELOPMENT
            </h3>
            <p className="service-description">
              From MVPs to full-scale platforms, we build reliable, future-ready software that scales effortlessly with
              your business.
            </p>
          </div>

          <div className="service-card" ref={setCardRef(1)}>
            <div className="icon-circle">
              <img src="/images/Inline.svg" alt="Software Re-engineering" className="service-icon" />
            </div>
            <h3 className="service-title">
              SOFTWARE RE-
              <br />
              ENGINEERING
            </h3>
            <p className="service-description">
              We modernize legacy systems with logical solutions that enhance performance and reduce technical debt.
            </p>
          </div>

          <div className="service-card" ref={setCardRef(2)}>
            <div className="icon-circle">
              <img src="/images/brain.svg" alt="AI & Chatbots" className="service-icon" />
            </div>
            <h3 className="service-title">
              AI &<br />
              CHATBOTS
            </h3>
            <p className="service-description">
              We transform customer interactions with intelligent bots that offer real-time support and a human touch.
            </p>
          </div>

          <div className="service-card" ref={setCardRef(3)}>
            <div className="icon-circle">
              <img src="/images/pen.svg" alt="Design & Branding" className="service-icon" />
            </div>
            <h3 className="service-title">
              DESIGN &<br />
              BRANDING
            </h3>
            <p className="service-description">
              We design with intention, creating digital experiences that connect, engage, and leave a lasting impression.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceSection
