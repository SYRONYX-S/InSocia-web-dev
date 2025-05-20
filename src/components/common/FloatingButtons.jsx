import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingButtons = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isHovered, setIsHovered] = useState(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.9 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    },
    tap: {
      scale: 0.95,
      transition: { 
        duration: 0.1 
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0,
      width: 0,
      x: -5
    },
    visible: { 
      opacity: 1,
      width: "auto",
      x: 0,
      transition: { 
        duration: 0.2, 
        ease: "easeOut" 
      }
    }
  };

  // CSS for noise texture overlay
  const noiseTexture = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E"), linear-gradient(135deg, rgba(30,30,30,0.7), rgba(15,15,15,0.75))`,
    backgroundSize: '100px 100px, 100% 100%',
  };

  return (
    <>
      {/* Back to top button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed right-5 bottom-20 z-50 rounded-full p-3.5 bg-neutral-900/70 backdrop-blur-md text-white shadow-md border border-white/5 transition-all duration-500 overflow-hidden"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onMouseEnter={() => setIsHovered('top')}
            onMouseLeave={() => setIsHovered(null)}
            aria-label="Back to top"
            style={noiseTexture}
          >
            <div className="relative flex items-center justify-center overflow-hidden">
              <motion.div 
                className="absolute inset-0 rounded-full bg-primary-500/10 opacity-0"
                animate={{
                  opacity: isHovered === 'top' ? 0.3 : 0,
                  scale: isHovered === 'top' ? 1.2 : 1
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut"
                }}
              />
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
              <AnimatePresence>
                {isHovered === 'top' && (
                  <motion.span 
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="ml-1.5 text-sm font-medium whitespace-nowrap overflow-hidden"
                  >
                    Top
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </motion.button>
        )}
      </AnimatePresence>
      
      {/* Contact button */}
      <motion.div
        className="fixed right-5 bottom-5 z-50"
        initial="hidden"
        animate="visible"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        onMouseEnter={() => setIsHovered('contact')}
        onMouseLeave={() => setIsHovered(null)}
      >
        <Link 
          to="/contact" 
          aria-label="Contact us"
          className="flex items-center justify-center rounded-full p-3.5 bg-neutral-900/70 backdrop-blur-md text-white shadow-md border border-white/5 transition-all duration-500 overflow-hidden"
          style={noiseTexture}
        >
          <div className="relative flex items-center justify-center overflow-hidden">
            <motion.div 
              className="absolute inset-0 rounded-full bg-secondary-500/10 opacity-0"
              animate={{
                opacity: isHovered === 'contact' ? 0.3 : 0,
                scale: isHovered === 'contact' ? 1.2 : 1
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut"
              }}
            />
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
            <AnimatePresence>
              {isHovered === 'contact' && (
                <motion.span 
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="ml-1.5 text-sm font-medium whitespace-nowrap overflow-hidden"
                >
                  Contact
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </Link>
      </motion.div>
    </>
  );
};

export default FloatingButtons; 