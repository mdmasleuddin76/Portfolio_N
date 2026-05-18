import React from 'react';
import Resume from '../assets/Resume.pdf';
import Certificate from '../assets/Cert.pdf';
import Pat from '../assets/Pat.pdf';
import Pat_im from '../assets/Pat_im.png';
import Cert_im from '../assets/Cert_im.png';
import Resume_im from '../assets/Resume_im.png';

const Documents = () => {
  const documentsData = [
    {
      id: 1,
      title: "Curriculum Vitae",
      subtitle: "Updated Resume",
      // Replace this URL with an actual screenshot image of your resume
      previewImg: Resume_im, 
      link: Resume,
      hoverColor: "group-hover:border-[#38BDF8]/50 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.15)]",
      iconColor: "text-[#38BDF8]"
    },
    {
      id: 2,
      title: "Internship Certificate",
      subtitle: "Software Engineering",
      // Replace with a screenshot of your certificate
      previewImg: Cert_im, 
      link: Certificate, // Add your certificate link here
      hoverColor: "group-hover:border-purple-500/50 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]",
      iconColor: "text-purple-400"
    },
    {
      id: 3,
      title: "Pat on the Back",
      subtitle: "HSBC Award",
      // Replace with a screenshot of your award
      previewImg: Pat_im, 
      link: Pat, // Add your award link here
      hoverColor: "group-hover:border-amber-500/50 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]",
      iconColor: "text-amber-400"
    }
  ];

  return (
    <section id="documents" className="relative py-20 px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#38BDF8]/5 rounded-full filter blur-[150px] pointer-events-none -translate-y-1/2"></div>

      <div className="relative z-10">
        
        {/* Section Heading */}
        <div className="mb-12 flex items-center justify-center gap-4 text-center">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#38BDF8]/50"></div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Documents & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-blue-500">Awards</span>
          </h2>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#38BDF8]/50"></div>
        </div>

        {/* Minimalist Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {documentsData.map((doc) => (
            <a 
              key={doc.id}
              href={doc.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex flex-col bg-[#080b13] rounded-2xl border border-white/10 transition-all duration-300 ease-out hover:-translate-y-1 overflow-hidden cursor-pointer ${doc.hoverColor}`}
            >
              
              {/* Document Preview Thumbnail Section */}
              <div className="relative h-48 w-full bg-white/5 border-b border-white/10 overflow-hidden">
                {/* The actual preview image */}
                <img 
                  src={doc.previewImg} 
                  alt={doc.title} 
                  className="w-full h-full object-cover opacity-60 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:opacity-40"
                />
                
                {/* Hover Overlay: "View PDF" Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white font-medium backdrop-blur-md">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span className="text-sm">Open File</span>
                  </div>
                </div>
              </div>

              {/* Minimal Text Section */}
              <div className="p-5 flex justify-between items-center bg-white/[0.02]">
                <div>
                  <p className={`text-[10px] font-bold tracking-widest uppercase mb-1 ${doc.iconColor}`}>
                    {doc.subtitle}
                  </p>
                  <h3 className="text-white font-semibold text-lg">
                    {doc.title}
                  </h3>
                </div>
                
                {/* Small Arrow Icon */}
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-colors">
                  <svg className="w-4 h-4 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>

            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Documents;