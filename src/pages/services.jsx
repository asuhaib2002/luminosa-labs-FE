import React from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import "../components/HeroCarousel.css"
import ServiceSection from "../components/ServiceSection"
import ServiceCard from "../components/ServiceCard"
import LastSection from "../components/lastsection"

const Services = () => {
  const slide = {
    image: "/images/servicebg.png",
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

      <ServiceSection />

      <ServiceCard
        image="/images/box.svg"
        title="Product Development"
        description="From MVPs to full-scale platforms, we create reliable, scalable, and high-performing software that evolves with your business. Whether you're launching a new product or refining an existing one, we ensure reliability and future-readiness at every stage."
        benefits={[
          "Faster time to market",
          "Scalable architecture for long-term growth",
          "User-friendly interfaces designed for engagement"
        ]}
        audience={[
          "Startups looking to build and launch MVPs",
          "Businesses needing scalable digital products",
          "Enterprises looking to digitize operations"
        ]}
        services={[
          "MVP Development",
          "Web & Mobile App Development",
          "SaaS Solutions",
          "Custom Software Development",
          "API Development & Integrations",
          "Performance Optimization"
        ]}
        whiteImage="/images/whitebg.png"
      />

      <ServiceCard
        image="/images/laptop.svg"
        title="Software Re-Engineering"
        description="Transform your legacy systems with modern, logical solutions that boost efficiency, enhance performance,and reduce technical debt. Our approach ensures seamless scalability while keeping your business ahead of the curve."
        benefits={[
          "Reduced maintenance costs",
          "Improved performance and security",
          "Future-proofed infrastructure"
        ]}
        audience={[
          "Businesses with outdated systems causing inefficiencies",
          "Enterprises struggling with technical debt",
          "Organizations looking to modernize operations"
        ]}
        services={[
          "Legacy System Migration",
          "Code Refactoring & Optimization",
          "Database Modernization",
          "Cloud Enablement",
          "Security & Compliance Upgrades",
          "Scalability Enhancements"
        ]}
        whiteImage="/images/whitebg.png"
      />

      <ServiceCard
        image="/images/brain2.svg"
        title="AI & CHATBOTS"
        description="Revolutionize customer interactions with intelligent AI-powered solutions. Our bots go beyond automation— they provide real-time support, smart responses, and a human touch that enhances engagement and user experience."
        benefits={[
          "Increased efficiency and reduced manual effort",
          "Scalable solutions that evolve with your business",
          "Enhanced customer engagement with real-time responses"
        ]}
        audience={[
          "Businesses wanting 24/7 customer engagement",
          "Companies looking to automate repetitive processes",
          "Enterprises leveraging AI for data-driven decision-making"
        ]}
        services={[
          "AI-Powered Chatbots",
          "Conversational AI",
          "Workflow Automation",
          "Voice Assistants & Speech Recognition",
          "Personalized Recommendations",
          "Multichannel Deployment"
        ]}
        whiteImage="/images/whitebg.png"
      />

      <ServiceCard
         image="/images/pen2.svg"
         title="Design & Branding"
         description="We craft digital experiences with intention. From intuitive UX/UI design to strategic branding, we create visuals that connect, engage, and leave a lasting impression—ensuring your brand stands out in a competitive market."
         benefits={[
          "Stronger brand recognition",
          "Higher engagement and conversion rates",
          "Intuitive and accessible designs for all users"
        ]}
        audience={[
          "Startups needing brand and UX guidance",
          "Businesses looking for a design refresh",
          "Enterprises optimizing digital experiences"
        ]}
        services={[
          "UX/UI Design",
          "Brand Identity & Visual Design",
          "Web & App Design",
          "Prototyping & Wireframing",
          "Usability Testing & Research",
          "Motion & Micro-Interactions"
        ]}
        whiteImage="/images/whitebg.png"
      />
      <LastSection />
    </>
  )
}
export default Services