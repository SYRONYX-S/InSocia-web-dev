import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingButtons = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const buttonRef = useRef(null);
  
  // New improved scrollToTop function
  const handleScrollToTop = () => {
    // Prevent any default behavior
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      
      // Show button when scrolled down enough
      if (scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Animation variants with consistent transitions
  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      transition: {
        duration: 0.3,
        ease: "easeInOut" 
      }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      {/* Back to top button - Completely revised implementation */}
      <div className="fixed right-5 bottom-20 z-50">
        <AnimatePresence mode="wait">
          {showBackToTop && (
            <motion.button
              ref={buttonRef}
              onClick={handleScrollToTop}
              className="w-12 h-12 rounded-full bg-neutral-900/80 backdrop-blur-sm text-white shadow-md border border-white/5 flex items-center justify-center hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] focus:outline-none"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={buttonVariants}
              aria-label="Back to top"
              style={{ pointerEvents: 'auto' }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 10l7-7m0 0l7 7m-7-7v18" 
                />
              </svg>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
      
      {/* Contact button - Keep separate from back to top */}
      <div className="fixed right-5 bottom-5 z-50">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
        >
          <Link 
            to="/contact" 
            aria-label="Contact us"
            className="w-12 h-12 rounded-full bg-neutral-900/80 backdrop-blur-sm text-white shadow-md border border-white/5 flex items-center justify-center hover:shadow-[0_0_15px_rgba(124,58,237,0.5)] transition-shadow duration-300"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default FloatingButtons; 