import React from 'react';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "RPL 2026 Engine",
      category: "Real-Time Application",
      description: "A comprehensive Cricbuzz-style cricket engine. Engineered to handle high-frequency, real-time match statistics and live score updates using persistent data volumes and high-speed caching.",
      techStack: ["TypeScript", "Node.js", "MongoDB", "Redis", "Docker"],
      liveLink: "#",
      githubLink: "#",
      theme: "from-blue-400 to-cyan-400",
      glow: "bg-cyan-500",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "MindCare With AI",
      category: "AI / Machine Learning",
      description: "An AI-driven mental health platform featuring a LLAMA 2 chatbot for empathetic NLP responses. Integrates BiLSTM/RNN models for predictive analysis and a real-time risk escalation system.",
      techStack: ["Python", "LLAMA 2", "BiLSTM", "NLP", "Azure"],
      liveLink: "#",
      githubLink: "#",
      theme: "from-purple-400 to-pink-400",
      glow: "bg-purple-500",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Split & Track",
      category: "Full Stack Utility",
      description: "A smart financial utility that simplifies group expenses. Features an automated debt-simplification algorithm to calculate exactly who owes whom, alongside detailed personal expense tracking.",
      techStack: ["React.js", "Node.js", "Express", "MongoDB"],
      liveLink: "#",
      githubLink: "#",
      theme: "from-emerald-400 to-teal-400",
      glow: "bg-emerald-500",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "EdTech LMS Platform",
      category: "Web Platform",
      description: "A secure Learning Management System built for seamless course delivery. Includes integrated payment gateways, a comprehensive admin dashboard for content management, and robust user authentication.",
      techStack: ["React.js", "Node.js", "Payments", "MongoDB"],
      liveLink: "#",
      githubLink: "#",
      theme: "from-amber-400 to-orange-400",
      glow: "bg-amber-500",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    }
  ];

  return (
    <section id="projects" className="relative py-20 px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#38BDF8]/5 rounded-full filter blur-[150px] pointer-events-none -translate-y-1/2"></div>

      <div className="relative z-10">
        
        {/* Section Heading */}
        <div className="mb-14 flex items-center gap-4">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Featured <span className="text-[#38BDF8]">Projects</span>
          </h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-[#38BDF8]/50 to-transparent max-w-xs"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              className="group relative flex flex-col p-6 lg:p-8 bg-white/[0.02] rounded-2xl border border-white/5 transition-all duration-300 ease-out hover:bg-white/[0.04] hover:border-white/10 hover:-translate-y-1 overflow-hidden"
            >
              {/* Subtle Glowing Orb in Background on Hover */}
              <div className={`absolute -top-24 -right-24 w-48 h-48 ${project.glow} rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

              {/* Card Header: Category, Title, and Icon */}
              <div className="flex justify-between items-start mb-5 relative z-10">
                <div>
                  <span className={`text-xs font-bold tracking-widest uppercase mb-2 block bg-clip-text text-transparent bg-gradient-to-r ${project.theme}`}>
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
                {/* Sleek Icon Container */}
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-all duration-300">
                  {project.icon}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1 relative z-10">
                {project.description}
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                {project.techStack.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-[#0B0F19] border border-white/5 rounded text-gray-300 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Links (Sleek text links instead of bulky buttons) */}
              <div className="flex items-center gap-6 mt-auto pt-4 border-t border-white/5 relative z-10">
                <a 
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors group/link"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span>View Live</span>
                  <span className="transform transition-transform group-hover/link:translate-x-1">&rarr;</span>
                </a>
                
                <a 
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  <span>Source Code</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;