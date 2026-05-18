import React from 'react';
import masle from '../assets/masle.jpeg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-12">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-[#38BDF8] rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-blue-700 rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20 w-full">
        
        {/* Left Column: Text Content */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-2 leading-tight">
            Hi, I'm <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-blue-500">
              Md Masleuddin
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-300 mb-6">
            Software Engineer
          </h2>

          <p className="text-sm sm:text-base text-gray-400 mb-8 max-w-xl leading-relaxed font-medium">
            Currently building and maintaining backend microservices at HSBC in Pune. 
            I specialize in engineering robust architectures with Java and Spring Boot, 
            alongside crafting high-performance, scalable web applications using React.js, Next.js, and Node.js.
          </p>

          {/* Call To Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#38BDF8] text-[#0B0F19] font-bold text-base hover:bg-white transition-all duration-300 shadow-[0_0_15px_rgba(56,189,248,0.4)] hover:shadow-[0_0_25px_rgba(56,189,248,0.6)] text-center"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/5 text-white font-bold text-base border border-white/10 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 text-center"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Column: Animated Image Section */}
        <div className="flex-1 relative flex justify-center lg:justify-end w-full max-w-sm lg:max-w-none">
          
          {/* Animated Glow Border Wrapper - Circle on Mobile, Rounded Rectangle on Desktop */}
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full lg:rounded-[2rem] z-10 group">
            
            {/* The Animated Glowing Edge */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#38BDF8] to-blue-600 rounded-full lg:rounded-[2.2rem] blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

            {/* Actual Image Container */}
            <div className="relative w-full h-full rounded-full lg:rounded-[2rem] overflow-hidden bg-[#0B0F19] border border-white/10">
              
              <img 
                src={masle}
                alt="Md Masleuddin" 
                className="w-full h-full object-cover object-center group-hover:grayscale-0 transition-all duration-500 ease-out transform group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-40"></div>
            </div>
            
            {/* Clean 8.68 CGPA Badge */}
            <div className="absolute -bottom-2 -right-2 lg:-bottom-4 lg:-right-4 px-5 py-2 bg-[#0B0F19]/90 border border-[#38BDF8]/30 backdrop-blur-md rounded-xl shadow-xl z-20">
              <p className="text-[#38BDF8] text-sm font-bold tracking-wide">
                8.68 CGPA
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;