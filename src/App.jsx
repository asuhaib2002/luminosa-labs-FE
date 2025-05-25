import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroCarousel from "./components/HeroCarousel";
import "./App.css";
import ServiceSection from "./components/ServiceSection";
import Section2 from "./components/section2";
import Testimonials from "./components/testimonials";
import Lastsection from "./components/lastsection";
import Footer from "./components/Footer";
import Work from "./pages/Work";
import Services from "./pages/services";
import About from "./pages/about";


function App() {
  return (
    <Router>
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
          
          
        
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
