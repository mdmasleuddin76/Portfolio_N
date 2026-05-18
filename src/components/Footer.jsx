import React from 'react';

const Footer = () => {
  return (
    <footer className="relative py-10 border-t border-white/10 overflow-hidden">
      
      {/* Subtle Bottom Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 w-[300px] h-[300px] bg-[#38BDF8]/10 rounded-full filter blur-[120px] pointer-events-none -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center relative z-10">
        
        {/* Centered Copyright */}
        <p className="text-gray-500 text-xs font-medium tracking-widest uppercase">
          &copy; {new Date().getFullYear()} Md Masleuddin. All rights reserved.
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;