
import { useEffect, useRef } from "react"
import "./section2.css"

const Section2 = () => {
  const sectionRef = useRef(null)
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

  const setCardRef = (el, index) => {
    cardsRef.current[index] = el
  }

  const cardData = [
    ["card1.png", "LOGICAL", "STRATEGIES"],
    ["card2.png", "LIVELY", "COLLABORATION"],
    ["card3.png", "LONG-TERM", "VALUE"],
    ["card4.png", "EMPATHY-", "DRIVEN"]
  ]

  return ( 
    <section className="luminosa-section" ref={sectionRef}>
      <div className="container">
        <div className="paragragh">
          <p className="subtitle">WHY CHOOSE US OVER THE NEXT GUYS?</p>
          <h2 className="title">
            Because Your Future is
            <br />
            Bright with Luminosa
          </h2>
          <p className="description">
            We understand that choosing the right digital partner is about more than just skills—it's about trust,
            communication, and a shared vision for success. At Luminosa, we bring a thoughtful, strategic approach to
            every project, ensuring your business shines bright.
          </p>
        </div>

        <div className="cards-grid">
          {cardData.map(([img, line1, line2], i) => (
            <div
              className="value-card"
              key={i}
              ref={(el) => setCardRef(el, i)}
            >
              <img src={`/images/${img}`} alt="" className="card-background" />
              <h3 className="card-title2">
                {line1}
                <br />
                {line2}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Section2
