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
        className="flex flex-col min-h-screen relative bg-white noise-texture"
      >
        {/* Premium background effects */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Main gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-neutral-50/80 to-blue-50/30"></div>
          
          {/* Subtle orbs/blobs */}
          <div className="absolute top-0 right-0 w-[45%] h-[35%] rounded-full bg-gradient-radial from-primary-50/30 to-transparent blur-3xl opacity-50 transform translate-x-[25%] -translate-y-[30%]"></div>
          <div className="absolute bottom-[10%] left-0 w-[40%] h-[35%] rounded-full bg-gradient-radial from-secondary-50/20 to-transparent blur-3xl opacity-40 transform -translate-x-[30%]"></div>
          <div className="absolute top-[40%] right-[20%] w-[25%] h-[20%] rounded-full bg-gradient-radial from-purple-50/20 to-transparent blur-3xl opacity-40"></div>
          
          {/* Subtle grid pattern */}
          <div 
            className="absolute inset-0 opacity-[0.015]" 
            style={{ 
              backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
              backgroundSize: '60px 60px' 
            }}
          ></div>
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