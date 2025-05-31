import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroCarousel from "./components/HeroCarousel";
import "./App.css";
import ServiceSection from "./components/ServiceSection";
import Section2 from "./components/section2";
import Testimonials from "./components/testimonials";
import Lastsection from "./components/lastsection";
import Footer from "./components/Footer";
import Work from "./pages/work";
import Services from "./pages/services";
import About from "./pages/about";
import Contact from "./pages/contact";
import CaseStudy1 from "./pages/casestudy1";
import CaseStudy2 from "./pages/casestudy2";
import CaseStudy3 from "./pages/casestudy3";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <Router>
      <ScrollToTop/>
      <div className="app">
        <Header logoText="LUMINOSA" />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroCarousel />
                <ServiceSection />
                <Section2 />
                <Testimonials />
                <Lastsection />
              </>
            }
          />
          <Route path="/work" element={<Work />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/casestudy1" element={<CaseStudy1 />} />
          <Route path="/casestudy2" element={<CaseStudy2 />} />
          <Route path="/casestudy3" element={<CaseStudy3 />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
