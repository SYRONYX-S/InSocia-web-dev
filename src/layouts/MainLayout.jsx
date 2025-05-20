import React, { useEffect } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Preloader from '../components/common/Preloader';
import FloatingButtons from '../components/common/FloatingButtons';
import AOS from 'aos';
import { motion, AnimatePresence } from 'framer-motion';

const MainLayout = ({ children }) => {
  useEffect(() => {
    // Reinitialize AOS on component mount
    AOS.refresh();

    // Add smooth scroll behavior
    const handleLinkClick = (e) => {
      const isHashLink = e.target.hash && e.target.origin === window.location.origin;
      if (isHashLink) {
        e.preventDefault();
        const targetId = e.target.hash.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
          });
          
          // Update URL hash without scrolling
          window.history.pushState(null, null, e.target.hash);
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col min-h-screen relative"
      >
        {/* Global fixed background (hero-style background) */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          {/* Dark gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 to-neutral-950"></div>
          
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/40 to-neutral-950/60 opacity-80"></div>
          
          {/* Orbs/blobs with parallax effect */}
          <div className="absolute -top-[20%] -right-[5%] w-[60%] h-[60%] rounded-full bg-gradient-radial from-secondary-500/20 to-transparent blur-3xl parallax-bg" data-speed="0.1"></div>
          <div className="absolute top-[30%] -left-[5%] w-[40%] h-[40%] rounded-full bg-gradient-radial from-primary-500/20 to-transparent blur-3xl parallax-bg" data-speed="0.05"></div>
          <div className="absolute bottom-[10%] right-[15%] w-[25%] h-[25%] rounded-full bg-gradient-radial from-primary-600/15 to-transparent blur-3xl parallax-bg" data-speed="0.15"></div>
          <div className="absolute top-[60%] right-[25%] w-[15%] h-[15%] rounded-full bg-gradient-radial from-secondary-600/10 to-transparent blur-2xl parallax-bg" data-speed="0.2"></div>
          
          {/* Subtle sparkling stars effect */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="stars-container absolute inset-0 opacity-30 parallax-bg" data-speed="0.07">
              {/* Star layers */}
              <div className="stars-small"></div>
              <div className="stars-medium"></div>
              <div className="stars-large"></div>
            </div>
          </div>
          
          {/* Bottom gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-neutral-950 to-transparent"></div>
          
          {/* Grain texture */}
          <div className="absolute inset-0 mix-blend-overlay opacity-30" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}></div>

          {/* Animated grid pattern with parallax effect */}
          <div className="absolute inset-0 opacity-5 parallax-bg" data-speed="0.03">
            <div className="absolute inset-0" style={{ 
              backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
              backgroundSize: '40px 40px' 
            }}></div>
          </div>
        </div>
        
        <Preloader />
        <Navbar />
        
        <main className="flex-grow relative z-10">
          {children}
        </main>
        
        {/* Floating action buttons */}
        <FloatingButtons />
        
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default MainLayout; 