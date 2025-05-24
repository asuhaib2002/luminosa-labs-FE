import "./Testimonials.css"

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonial-card">
          <div className="quote-icon">
            <div className="quote-icon">
            <img src="public/images/colon.svg" alt="Quote Icon" width={48} height={48} />
          </div>
          </div>
          <p className="testimonial-text">
            "Luminosa transformed our messy codebase into a scalable architecture. Our app is now 3x faster and our
            development velocity has increased significantly."
          </p>
          <div className="testimonial-author">
            <p className="author-name">ALEX JOHNSON</p>
            <p className="author-title">CTO, TechStart</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
