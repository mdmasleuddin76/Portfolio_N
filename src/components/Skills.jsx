import React from 'react';

const Skills = () => {
  // Organizing your resume skills into logical categories
  const skillCategories = [
    {
      title: "Languages",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: "text-[#38BDF8]",
      bgColor: "bg-[#38BDF8]/20",
      borderColor: "group-hover:border-[#38BDF8]/40",
      shadow: "hover:shadow-[0_8px_30px_rgba(56,189,248,0.15)]",
      skills: ["Java", "JavaScript", "TypeScript", "Python", "C", "C++"]
    },
    {
      title: "Frameworks & Libraries",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      color: "text-purple-400",
      bgColor: "bg-purple-500/20",
      borderColor: "group-hover:border-purple-500/40",
      shadow: "hover:shadow-[0_8px_30px_rgba(168,85,247,0.15)]",
      skills: ["Spring Boot", "React.js", "Next.js", "Node.js", "Express.js"]
    },
    {
      title: "Databases & Cloud",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/20",
      borderColor: "group-hover:border-emerald-500/40",
      shadow: "hover:shadow-[0_8px_30px_rgba(16,185,129,0.15)]",
      skills: ["MongoDB", "SQL", "AWS", "Azure", "Google Cloud"]
    },
    {
      title: "Tools & DevOps",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      color: "text-amber-400",
      bgColor: "bg-amber-500/20",
      borderColor: "group-hover:border-amber-500/40",
      shadow: "hover:shadow-[0_8px_30px_rgba(251,191,36,0.15)]",
      skills: ["Docker", "Docker Compose", "Kubernetes", "GitHub Actions", "Git", "GitHub"]
    }
  ];

  return (
    <section id="skills" className="relative py-12 px-6 lg:px-12 overflow-hidden max-w-7xl mx-auto">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#38BDF8]/10 rounded-full mix-blend-screen filter blur-[150px] -translate-y-1/2 pointer-events-none animate-[pulse_8s_ease-in-out_infinite]"></div>

      <div className="relative z-10">
        
        {/* Section Heading (Reduced bottom margin) */}
        <div className="mb-8 flex items-center gap-4">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Technical <span className="text-[#38BDF8]">Skills</span>
          </h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-[#38BDF8]/50 to-transparent max-w-xs"></div>
        </div>

        {/* Skills Grid (Reduced gap) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              /* Reduced padding to p-4 sm:p-5 */
              className={`p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 ease-out hover:bg-white/10 hover:-translate-y-1 group cursor-default ${category.borderColor} ${category.shadow}`}
            >
              {/* Card Header (Reduced margins and icon size) */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-full ${category.bgColor} flex items-center justify-center ${category.color} transition-transform duration-300 group-hover:scale-110`}>
                  {category.icon}
                </div>
                <h3 className="text-white font-semibold text-base">{category.title}</h3>
              </div>

              {/* Skills Pills (Reduced gap, padding, and text size) */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1.5 bg-[#0B0F19] rounded-md border border-white/5 text-gray-300 text-xs font-medium transition-all duration-300 hover:text-white hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:-translate-y-0.5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;