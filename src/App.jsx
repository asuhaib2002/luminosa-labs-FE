import Header from "./components/Header"
import HeroCarousel from "./components/HeroCarousel"
import "./App.css"
import ServiceSection from "./components/ServiceSection"
import Section2 from "./components/section2"
import Testimonials from "./components/testimonials"
import Lastsection from "./components/lastsection"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="app">
      <main>
        <Header />
        <HeroCarousel />
        <ServiceSection />
        <Section2 />
        <Testimonials />
        <Lastsection />
      </main>
      <Footer />
    </div>
  )
}

export default App
