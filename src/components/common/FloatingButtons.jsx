import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp, FiMail } from 'react-icons/fi';

const FloatingButtons = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const buttonRef = useRef(null);
  
  // New improved scrollToTop function
  const handleScrollToTop = (e) => {
    // Prevent any default behavior and stop event propagation
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
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
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: "easeInOut" 
      }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="fixed right-5 bottom-5 z-50">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex flex-col gap-3"
      >
        {/* Back to top button */}
        <AnimatePresence mode="wait">
          {showBackToTop && (
            <motion.button
              ref={buttonRef}
              onClick={handleScrollToTop}
              className="group relative w-14 h-14 rounded-full overflow-hidden backdrop-blur-md bg-white/90 border border-neutral-200/50 shadow-lg hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={buttonVariants}
              aria-label="Back to top"
              style={{ pointerEvents: 'auto' }}
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
              </div>
              
              <FiArrowUp className="w-6 h-6 text-primary-600 group-hover:text-primary-700 transition-colors duration-300 relative z-10" />
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-primary-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150" />
            </motion.button>
          )}
        </AnimatePresence>
        
        {/* Contact button */}
        <motion.div variants={itemVariants}>
          <Link 
            to="/contact" 
            aria-label="Contact us"
            className="group relative w-14 h-14 rounded-full overflow-hidden bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 shadow-lg hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
            </div>
            
            <FiMail className="w-5 h-5 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
            
            {/* Pulse effect */}
            <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
            
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-primary-400/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FloatingButtons; 