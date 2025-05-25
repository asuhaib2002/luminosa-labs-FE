import React from "react"
import "./ServiceCard.css"

const ServiceCard = ({ image, title, description, benefits, audience, services, whiteImage }) => {
  return (
    <div className="service-card-container">
      <div className="service-card-header">
        <img src={image} alt="icon" className="service-image" />
        <h2 className="service-t">{title}</h2>
        <p className="service-d">{description}</p>

        <div className="service-lists">
          <div className="service-benefits">
            <h4>Key Benefits</h4>
            <ul>
              {benefits.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="service-audience">
            <h4>Who is it For?</h4>
            <ul>
              {audience.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="service-white-section">
        <img src={whiteImage} alt="white curved bg" className="white-bg-image" />
        <div className="white-content-overlay">
          <h4>What This Includes:</h4>
          <ul>
            {services.map((service, index) => (
              <li key={index}>+ {service}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
