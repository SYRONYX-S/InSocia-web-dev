import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Preloader from '../components/common/Preloader';
import FloatingButtons from '../components/common/FloatingButtons';
import AOS from 'aos';

const MainLayout = ({ children }) => {
  React.useEffect(() => {
    // Reinitialize AOS on component mount
    AOS.refresh();
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Global fixed background (hero-style background) */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Base dark background */}
        <div className="absolute inset-0 bg-neutral-950"></div>
        
        {/* Random gradient spots for more dynamic, less linear look */}
        <div className="absolute inset-0" style={{
          transform: 'skewY(-5deg) scale(1.5)',
          transformOrigin: 'top left'
        }}>
          {/* Main tilted gradient with more vibrant colors and position */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/40 via-neutral-900 to-primary-800/30"></div>
          
          {/* Purple/violet accent in top right */}
          <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-gradient-radial from-secondary-800/30 to-transparent blur-3xl"></div>
          
          {/* Blue accent in bottom left */}
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-radial from-primary-700/25 to-transparent blur-3xl"></div>
          
          {/* Additional purple accent for variance */}
          <div className="absolute top-[40%] left-[25%] w-[30%] h-[30%] rounded-full bg-gradient-radial from-secondary-600/15 to-transparent blur-2xl"></div>
          
          {/* Light color highlights */}
          <div className="absolute top-[15%] right-[35%] w-[10%] h-[10%] rounded-full bg-gradient-radial from-white/5 to-transparent blur-xl"></div>
          <div className="absolute bottom-[35%] right-[15%] w-[8%] h-[8%] rounded-full bg-gradient-radial from-white/7 to-transparent blur-lg"></div>
          <div className="absolute top-[60%] left-[10%] w-[6%] h-[6%] rounded-full bg-gradient-radial from-white/4 to-transparent blur-lg"></div>
        </div>
        
        {/* Extra grainy texture for ultra grainy look */}
        <div className="absolute inset-0 mix-blend-overlay opacity-70" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px',
        }}></div>
        
        {/* Second grain layer for ultra grainy effect */}
        <div className="absolute inset-0 mix-blend-soft-light opacity-40" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}></div>
        
        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-neutral-950 to-transparent"></div>
        
        {/* Grid pattern - MOVED TO TOP LAYER above all gradients */}
        <div className="absolute inset-0 opacity-15 z-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: `linear-gradient(to right, #4b5563 1px, transparent 1px), linear-gradient(to bottom, #4b5563 1px, transparent 1px)`,
            backgroundSize: '40px 40px' 
          }}></div>
        </div>
      </div>
      
      <Preloader />
      <Navbar />
      
      <main className="flex-grow relative z-10">
        {children}
      </main>
      
      <FloatingButtons />
      <Footer />
    </div>
  );
};

export default MainLayout; 