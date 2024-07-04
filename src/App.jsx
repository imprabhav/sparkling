import { useState, useEffect } from "react";
import { Element } from "react-scroll";

import {
  Contact,
  Footer,
  Navbar,
  Hero,
  Facilities,
  LearnMore,
  Activities,
  Gallery,
  Reviews,
  Loader,
} from "./components/index.js";

function App() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollTop = window.scrollY;
      const percentage = (scrollTop / scrollHeight) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div
            className="progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          />
          <Navbar />
          <Element name="hero">
            <Hero />
          </Element>
          <Element name="facilities">
            <Facilities />
          </Element>
          <Element name="about">
            <LearnMore />
          </Element>
          <Element name="activities">
            <Activities />
          </Element>
          <Element name="gallery">
            <Gallery />
          </Element>
          <Element name="contact">
            <Contact />
          </Element>
          <Element name="reviews">
            <Reviews />
          </Element>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
