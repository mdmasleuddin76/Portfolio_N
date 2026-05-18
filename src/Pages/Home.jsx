import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import About from '../components/About';
import Skills from '../components/Skills';
import Documents from '../components/Documents';

// Reusable wrapper for smooth scroll animations
const FadeInSection = ({ children }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {children}
    </div>
  );
};

const Home = () => {
  // State to track which section is currently active
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // This observer purely handles which section is currently in the middle of the screen
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      // Triggers when a section crosses the top 30% of the viewport
      { rootMargin: '-30% 0px -70% 0px' } 
    );

    // Grab all components that have an ID (like id="about", id="experience")
    const sections = document.querySelectorAll('section[id], div[id="home"]');
    sections.forEach((section) => sectionObserver.observe(section));

    return () => sectionObserver.disconnect();
  }, []);

  return (
    <>
      {/* Pass the active section state to the Header */}
      <Header activeSection={activeSection} />
      
      <main className="overflow-hidden">
        {/* Make sure your Hero component has id="home" inside it! */}
        <FadeInSection>
          <Hero />
        </FadeInSection>
        
        <FadeInSection>
            <About />
        </FadeInSection>
        
        <FadeInSection>
          <Skills />
        </FadeInSection>

        <FadeInSection>
          <Experience />
        </FadeInSection>

        <FadeInSection>
          <Projects />
        </FadeInSection>

        <FadeInSection>
          <Documents />
        </FadeInSection>

        <FadeInSection>
          <Contact />
        </FadeInSection>
      </main>
      <Footer />
    </>
  );
};

export default Home;