import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    'Home', 'About', 'Skills', 'Experience', 'Projects', 'Documents', 'Contact'
  ];

  useEffect(() => {
    // 1. Handle the blurry background when scrolling down
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // 2. The FIX: Use Intersection Observer for perfect highlighting
    const observerOptions = {
      root: null,
      // This margin means: "Highlight the section when it reaches the top 20% to 40% of the screen"
      rootMargin: '-20% 0px -60% 0px', 
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // If the section is actively crossing our view, set it as active
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Grab all our sections by ID and tell the observer to watch them
    navLinks.forEach((link) => {
      const element = document.getElementById(link.toLowerCase());
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []); // Run once on mount

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-gradient-to-br from-[#0B0F19]/95 to-[#111827]/95 backdrop-blur-md border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        {/* Custom Image Logo */}
        <a href="#home" className="flex-shrink-0 cursor-pointer transition-transform duration-300 hover:scale-105">
          <img 
            src={logo}
            alt="Masleuddin Logo" 
            className="h-14 md:h-16 w-auto object-contain drop-shadow-[0_0_10px_rgba(56,189,248,0.4)]"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => {
            const linkId = link.toLowerCase();
            const isActive = activeSection === linkId;

            return (
              <a 
                key={link}
                href={`#${linkId}`}
                className="relative group py-2 text-sm font-semibold tracking-wide transition-colors duration-300"
              >
                {/* Text Color Change */}
                <span className={isActive ? "text-[#38BDF8] drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]" : "text-gray-400 group-hover:text-white"}>
                  {link}
                </span>

                {/* Animated Bottom Line for Active State */}
                <span 
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#38BDF8] transition-all duration-300 ease-out shadow-[0_0_8px_#38BDF8] ${
                    isActive ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-30"
                  }`}
                ></span>
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-gray-400 hover:text-[#38BDF8] transition-colors focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out absolute w-full bg-gradient-to-br from-[#0B0F19] to-[#111827] border-b border-white/10 ${
        isMobileMenuOpen ? 'max-h-96 opacity-100 shadow-xl' : 'max-h-0 opacity-0'
      }`}>
        <ul className="flex flex-col px-8 py-6 space-y-6">
          {navLinks.map((link) => {
            const linkId = link.toLowerCase();
            const isActive = activeSection === linkId;

            return (
              <li key={link}>
                <a 
                  href={`#${linkId}`} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-lg font-medium transition-colors duration-300 ${
                    isActive ? 'text-[#38BDF8]' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;