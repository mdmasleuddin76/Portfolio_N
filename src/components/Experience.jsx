import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Software Engineer",
      company: "HSBC",
      location: "Pune",
      duration: "Jul 2025 - Present",
      status: "Current",
      highlights: [
        "Developing and maintaining backend microservices using Java, Spring Boot and internal frameworks.",
        "Implemented a user-whitelisting mechanism to enable controlled feature access for selected users.",
        "Developed automated reporting functionality to share operational reports with business stakeholders.",
        "Contributing to DevOps activities for microservices deployment using Kubernetes and GCP.",
        "Resolved SAST (Static Application Security Testing) issues to strengthen code security and maintain compliance.",
        "Collaborating with cross-functional teams to enhance service performance and ensure seamless system integration."
      ]
    },
    {
      id: 2,
      role: "Software Engineer Intern",
      company: "Nikah Forever",
      location: "New Delhi",
      duration: "Dec 2024 - Mar 2025",
      status: "Completed",
      highlights: [
        "Migrated 500,000 images to DigitalOcean Storage, optimizing data storage and reducing server load.",
        "Redesigned backend architecture to serve images efficiently from DigitalOcean, improving performance.",
        "Implemented Master-Slave database architecture to enhance scalability and ensure high availability.",
        "Set up automated backups with zero downtime, ensuring continuous data integrity and disaster recovery."
      ]
    },
    {
      id: 3,
      role: "Software Engineer Intern",
      company: "Stealth Startup",
      location: "Malviya Nagar, Saket",
      duration: "Jun 2024 - Jul 2024",
      status: "Completed",
      highlights: [
        "Engineered web applications using Next.js and TypeScript, enhancing user experience and optimized functionality.",
        "Developed robust and scalable backend services with Node.js, ensuring seamless integration and performance.",
        "Utilized Docker and Docker Compose for application containerization, and set up CI/CD pipelines using GitHub Actions.",
        "Managed horizontal load balancing by running multiple VMs, and explored AWS, Azure, and GCP to optimize infrastructure costs by 20%."
      ]
    }
  ];

  return (
    <section id="experience" className="relative py-20 px-6 lg:px-12 max-w-5xl mx-auto overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full mix-blend-screen filter blur-[150px] pointer-events-none animate-[pulse_10s_ease-in-out_infinite]"></div>

      <div className="relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16 flex items-center gap-4">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Professional <span className="text-[#38BDF8]">Experience</span>
          </h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-[#38BDF8]/50 to-transparent max-w-xs"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12 pb-4">
          
          {/* Glowing Timeline Line Overlay */}
          <div className="absolute top-0 bottom-0 left-[-1px] w-[2px] bg-gradient-to-b from-[#38BDF8] via-purple-500/50 to-transparent shadow-[0_0_10px_#38BDF8] opacity-50"></div>

          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8 md:pl-12 group">
              
              {/* Timeline Node / Dot */}
              <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#0B0F19] border-2 border-[#38BDF8] transition-all duration-300 group-hover:bg-[#38BDF8] group-hover:scale-150 group-hover:shadow-[0_0_15px_#38BDF8]"></div>

              {/* Experience Card */}
              <div className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm transition-all duration-300 ease-out hover:bg-white/[0.04] hover:border-[#38BDF8]/30 hover:shadow-[0_8px_30px_rgba(56,189,248,0.05)] hover:-translate-y-1">
                
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-wide mb-1 transition-colors duration-300 group-hover:text-[#38BDF8]">
                      {exp.role}
                    </h3>
                    <p className="text-gray-400 font-medium text-sm md:text-base flex items-center gap-2">
                      <span className="text-gray-200">{exp.company}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                      <span>{exp.location}</span>
                    </p>
                  </div>
                  
                  {/* Date & Status Badge - NOW HIGHLIGHTED */}
                  <div className="flex flex-col md:items-end gap-2">
                    <span className="text-xs font-bold tracking-widest uppercase text-[#38BDF8] bg-[#38BDF8]/10 px-4 py-1.5 rounded-md border border-[#38BDF8]/30 shadow-[0_0_10px_rgba(56,189,248,0.1)] transition-all duration-300 group-hover:bg-[#38BDF8]/20 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                      {exp.duration}
                    </span>
                    {exp.status === "Current" && (
                      <span className="text-[10px] font-bold tracking-widest uppercase text-emerald-400 flex items-center gap-1.5 mt-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        Active
                      </span>
                    )}
                  </div>
                </div>

                {/* Bullets Section */}
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-[#38BDF8] mt-0.5 flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="text-gray-400 text-sm leading-relaxed font-medium">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;