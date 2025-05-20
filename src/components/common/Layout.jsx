import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      {/* Global Background (same style as hero section) with parallax effect */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 to-neutral-950"></div>
        
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/40 to-neutral-950/60 opacity-80"></div>
        
        {/* Orbs/blobs */}
        <div className="absolute -top-[20%] -right-[5%] w-[60%] h-[60%] rounded-full bg-gradient-radial from-secondary-500/20 to-transparent blur-3xl"></div>
        <div className="absolute top-[30%] -left-[5%] w-[40%] h-[40%] rounded-full bg-gradient-radial from-primary-500/20 to-transparent blur-3xl"></div>
        
        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-neutral-950 to-transparent"></div>
        
        {/* Grain texture */}
        <div className="absolute inset-0 mix-blend-overlay opacity-30" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}></div>

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ 
            backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
            backgroundSize: '40px 40px' 
          }}></div>
        </div>
      </div>

      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 