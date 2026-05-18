import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative py-16 px-6 lg:px-12 overflow-hidden max-w-7xl mx-auto">
      
      {/* Subtle Background Glow with Breathing Animation */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-900/20 rounded-full mix-blend-screen filter blur-[150px] -translate-y-1/2 pointer-events-none animate-[pulse_6s_ease-in-out_infinite]"></div>

      <div className="relative z-10">
        
        {/* Section Heading */}
        <div className="mb-10 flex items-center gap-4">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            About <span className="text-[#38BDF8]">Me</span>
          </h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-[#38BDF8]/50 to-transparent max-w-xs"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          
          {/* Left Column: Biography (Kept Exactly as You Wrote It) */}
          <div className="flex-1 space-y-4 text-gray-400 text-sm md:text-base leading-relaxed font-medium">
            <p>
              Hello! I'm Md Masleuddin, a Software Engineer currently based in Pune. My tech journey began with a deep curiosity about how systems work beneath the surface, leading me to a B.Tech in Computer Engineering from Jamia Millia Islamia.
            </p>
            <p>
              Today, I build robust, secure backend microservices at HSBC using Java and Spring Boot. Alongside my backend focus, I leverage strong full-stack skills to build scalable web applications with React.js and Next.js.
            </p>
            <p>
              Whether resolving critical security vulnerabilities or designing seamless user experiences, my goal is always to engineer high-performance, reliable solutions.
            </p>
          </div>

          {/* Right Column: Glassmorphism Cards with Premium Hover Animations */}
          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Card 1: Education (Cyan Glow Hover) */}
            <div className="col-span-1 sm:col-span-2 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 ease-out hover:bg-white/10 hover:border-[#38BDF8]/40 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(56,189,248,0.15)] group cursor-default">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#38BDF8]/20 flex items-center justify-center text-[#38BDF8] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#38BDF8]/30">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base transition-colors duration-300 group-hover:text-[#38BDF8]">Education</h3>
                  <p className="text-[#38BDF8] text-xs">Graduated May 2025</p>
                </div>
              </div>
              <h4 className="text-gray-200 font-medium text-sm mb-1">B.Tech in Computer Engineering</h4>
              <p className="text-gray-400 text-xs mb-3">Jamia Millia Islamia, New Delhi</p>
              <div className="inline-block px-2 py-1 bg-[#0B0F19] rounded border border-white/5 text-[#38BDF8] text-xs font-bold transition-all duration-300 group-hover:border-[#38BDF8]/50 group-hover:shadow-[0_0_10px_rgba(56,189,248,0.2)]">
                CGPA: 8.68
              </div>
            </div>

            {/* Card 2: Focus (Purple Glow Hover) */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 ease-out hover:bg-white/10 hover:border-purple-500/40 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(168,85,247,0.15)] group cursor-default">
              <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:bg-purple-500/30">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-sm mb-1 transition-colors duration-300 group-hover:text-purple-400">Backend & Microservices</h3>
              <p className="text-gray-400 text-xs leading-relaxed">Building scalable APIs, secure databases, and resolving complex architectural issues.</p>
            </div>

            {/* Card 3: Location (Emerald Glow Hover) */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 ease-out hover:bg-white/10 hover:border-emerald-500/40 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(16,185,129,0.15)] group cursor-default">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:bg-emerald-500/30">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-sm mb-1 transition-colors duration-300 group-hover:text-emerald-400">Current Base</h3>
              <p className="text-gray-400 text-xs leading-relaxed">Living and working in Pune, Maharashtra, India.</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;