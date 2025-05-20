import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  // Parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.querySelectorAll('.parallax').forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="relative overflow-hidden text-white min-h-screen flex items-center" style={{ marginTop: 0 }}>
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-grid-pattern z-0"></div>
      
      {/* Grainy texture overlay */}
      <div className="absolute inset-0 bg-noise-texture mix-blend-soft-light opacity-20 z-0"></div>
      
      {/* Floating elements - more subtle */}
      <div className="absolute inset-0 z-5 overflow-hidden">
        <motion.div 
          className="absolute top-[10%] left-[10%] w-16 h-16 bg-primary-500/10 rounded-full blur-xl"
          animate={{ 
            y: [0, 20, 0],
            opacity: [0.4, 0.5, 0.4]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute top-[15%] right-[20%] w-24 h-24 bg-secondary-500/10 rounded-full blur-xl"
          animate={{ 
            y: [0, -30, 0],
            opacity: [0.3, 0.4, 0.3]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute bottom-[20%] left-[15%] w-32 h-32 bg-primary-400/5 rounded-full blur-xl"
          animate={{ 
            y: [0, 15, 0],
            x: [0, 10, 0],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute bottom-[10%] right-[30%] w-20 h-20 bg-secondary-400/10 rounded-full blur-xl"
          animate={{ 
            y: [0, -20, 0],
            x: [0, -15, 0],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ 
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
      </div>
      
      {/* Content */}
      <motion.div 
        className="container mx-auto px-6 lg:px-8 relative z-10 pt-28"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            className="lg:col-span-7 lg:pr-8"
            variants={itemVariants}
          >
            <motion.div 
              className="inline-flex items-center px-4 py-2 rounded-md backdrop-blur-md border border-white/10 text-sm font-semibold text-white/90 mb-8 bg-white/5"
              variants={itemVariants}
            >
              <span className="flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              EMPOWERING SUSTAINABLE CHANGE
            </motion.div>
            
            <motion.h1 
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
              variants={itemVariants}
            >
              Advancing <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400">Equitable</span> Social Policies
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed max-w-2xl"
              variants={itemVariants}
            >
              We partner with governments, NGOs, and international agencies to design evidence-based solutions for sustainable social development.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-5"
              variants={itemVariants}
            >
              <Link 
                to="/about" 
                className="relative inline-flex items-center justify-center px-8 py-3.5 font-medium rounded-lg transition-all duration-300 group overflow-hidden"
              >
                <span className="absolute inset-0 bg-primary-600/90 rounded-lg group-hover:bg-primary-500/90 transition-colors duration-300"></span>
                <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 overflow-hidden">
                  <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-500 to-primary-400 opacity-50"></span>
                </span>
                <span className="relative z-10 flex items-center text-white">
                  Explore Our Work
                  <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>
              
              <Link 
                to="/contact" 
                className="relative inline-flex items-center justify-center px-8 py-3.5 font-medium rounded-lg transition-all duration-300 group overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-lg group-hover:bg-white/10 transition-colors duration-300 border border-white/20 group-hover:border-white/40"></span>
                <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 overflow-hidden">
                  <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-500/30 to-secondary-500/30 opacity-30"></span>
                </span>
                <span className="relative z-10 flex items-center text-white">
                  Partner With Us
                  <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>
            </motion.div>
            
            {/* Stats with animated counting */}
            <motion.div 
              className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8"
              variants={itemVariants}
            >
              <motion.div 
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg px-4 py-5 relative overflow-hidden group hover:bg-white/10"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-600 to-primary-400 opacity-50"></div>
                <div className="relative z-10">
                  <p className="text-3xl font-bold text-white group-hover:text-primary-300 transition-colors duration-300">25+</p>
                  <p className="text-sm text-white/70 mt-1">Projects</p>
                </div>
                <div className="absolute bottom-0 right-0 w-12 h-12 bg-primary-600/10 rounded-full -mr-4 -mb-4 blur-md opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
              </motion.div>
              
              <motion.div 
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg px-4 py-5 relative overflow-hidden group hover:bg-white/10"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500 opacity-50"></div>
                <div className="relative z-10">
                  <p className="text-3xl font-bold text-white group-hover:text-primary-300 transition-colors duration-300">18</p>
                  <p className="text-sm text-white/70 mt-1">Countries</p>
                </div>
                <div className="absolute bottom-0 right-0 w-12 h-12 bg-secondary-600/10 rounded-full -mr-4 -mb-4 blur-md opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
              </motion.div>
              
              <motion.div 
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg px-4 py-5 relative overflow-hidden group hover:bg-white/10"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary-500 to-primary-500 opacity-50"></div>
                <div className="relative z-10">
                  <p className="text-3xl font-bold text-white group-hover:text-primary-300 transition-colors duration-300">40+</p>
                  <p className="text-sm text-white/70 mt-1">Partners</p>
                </div>
                <div className="absolute bottom-0 right-0 w-12 h-12 bg-primary-500/10 rounded-full -mr-4 -mb-4 blur-md opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
              </motion.div>
              
              <motion.div 
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg px-4 py-5 relative overflow-hidden group hover:bg-white/10"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 to-secondary-400 opacity-50"></div>
                <div className="relative z-10">
                  <p className="text-3xl font-bold text-white group-hover:text-primary-300 transition-colors duration-300">100K+</p>
                  <p className="text-sm text-white/70 mt-1">Lives Impacted</p>
                </div>
                <div className="absolute bottom-0 right-0 w-12 h-12 bg-secondary-500/10 rounded-full -mr-4 -mb-4 blur-md opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* REFINED HERO IMAGE SECTION - FRAMER INSPIRED */}
          <motion.div 
            className="hidden lg:block lg:col-span-5"
            variants={itemVariants}
          >
            <div className="relative z-10 h-[480px]">
              {/* Main visual container */}
              <motion.div
                className="absolute right-0 h-[340px] w-[400px] overflow-hidden rounded-lg shadow-lg border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Main image with dark filter */}
                <div className="relative h-full w-full">
                  <img 
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80" 
                    alt="Policy analysis meeting" 
                    className="h-full w-full object-cover transition-transform duration-10000 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent"></div>
                  
                  {/* Info card on the image */}
                  <motion.div 
                    className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/10 shadow-xl"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary-500/20 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2M9 5a2 2 0 012 2h2a2 2 0 012-2" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-white/70">Professional Solutions</p>
                        <p className="text-sm font-semibold text-white mt-0.5">Evidence-Based Policy Design</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Top data card */}
              <motion.div 
                className="absolute top-0 left-0 w-64 bg-white/10 backdrop-blur-md rounded-lg overflow-hidden shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
              >
                <div className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xs font-medium text-white/90">Policy Impact</div>
                    <motion.div 
                      className="h-6 w-6 rounded-full flex items-center justify-center bg-primary-500/20"
                      whileHover={{ scale: 1.2, backgroundColor: "rgba(99, 102, 241, 0.3)" }}
                    >
                      <svg className="w-3.5 h-3.5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                      </svg>
                    </motion.div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="relative w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "75%" }}
                        transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
                      ></motion.div>
                      <motion.div 
                        className="absolute top-0 right-1/4 w-1 h-full bg-white/50 opacity-0"
                        animate={{ 
                          opacity: [0, 1, 0],
                          x: [0, 80, 0]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3
                        }}
                      ></motion.div>
                    </div>
                    <div className="relative w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-secondary-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "65%" }}
                        transition={{ delay: 1, duration: 1, ease: "easeOut" }}
                      ></motion.div>
                      <motion.div 
                        className="absolute top-0 right-[35%] w-1 h-full bg-white/50 opacity-0"
                        animate={{ 
                          opacity: [0, 1, 0],
                          x: [0, 65, 0]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                          delay: 0.5
                        }}
                      ></motion.div>
                    </div>
                    <div className="relative w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-blue-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "85%" }}
                        transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
                      ></motion.div>
                      <motion.div 
                        className="absolute top-0 right-[15%] w-1 h-full bg-white/50 opacity-0"
                        animate={{ 
                          opacity: [0, 1, 0],
                          x: [0, 55, 0]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                          delay: 1
                        }}
                      ></motion.div>
                    </div>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-3 gap-1 text-center text-[10px] text-white/70">
                    <div>Research</div>
                    <div>Analysis</div>
                    <div>Implementation</div>
                  </div>
                </div>
              </motion.div>
              
              {/* Bottom analysis card */}
              <motion.div 
                className="absolute bottom-6 left-10 w-48 bg-white/10 backdrop-blur-md rounded-lg overflow-hidden shadow-lg border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.7 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                }}
              >
                <div className="p-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <motion.div 
                      className="w-2 h-2 rounded-full bg-secondary-400"
                      animate={{ 
                        scale: [1, 1.3, 1],
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                    ></motion.div>
                    <div className="text-xs font-medium text-white/90">Project Analytics</div>
                  </div>
                  
                  <div className="flex items-end h-16 mt-2 space-x-1">
                    {[40, 65, 35, 75, 50, 80, 45].map((height, i) => (
                      <motion.div
                        key={i}
                        className={`flex-1 rounded-sm ${i % 2 === 0 ? 'bg-white/20' : 'bg-primary-500/50'}`}
                        style={{ height: `${height}%` }}
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ 
                          delay: 1 + (i * 0.1), 
                          duration: 0.5, 
                          ease: "easeOut" 
                        }}
                        whileHover={{ 
                          backgroundColor: i % 2 === 0 ? 'rgba(255, 255, 255, 0.3)' : 'rgba(79, 70, 229, 0.6)'
                        }}
                      ></motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              {/* Connection lines with animated pulses */}
              <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                {/* Line from top card to main image */}
                <line 
                  x1="120" 
                  y1="80" 
                  x2="200" 
                  y2="120" 
                  stroke="rgba(255,255,255,0.2)" 
                  strokeWidth="1" 
                  strokeDasharray="3,3"
                />
                <motion.circle 
                  cx="160" 
                  cy="100" 
                  r="3" 
                  fill="rgba(99, 102, 241, 0.6)"
                  animate={{
                    r: [3, 5, 3],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                />
                
                {/* Line from bottom card to main image */}
                <line 
                  x1="110" 
                  y1="400" 
                  x2="250" 
                  y2="320" 
                  stroke="rgba(255,255,255,0.2)" 
                  strokeWidth="1" 
                  strokeDasharray="3,3"
                />
                <motion.circle 
                  cx="180" 
                  cy="360" 
                  r="3" 
                  fill="rgba(99, 102, 241, 0.6)"
                  animate={{
                    r: [3, 5, 3],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                    delay: 0.5
                  }}
                />
              </svg>
              
              {/* Floating small elements */}
              <motion.div 
                className="absolute top-[35%] left-[15%] w-20 backdrop-blur-md bg-white/5 rounded-md py-1 px-2 text-center border border-white/10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              >
                <p className="text-xs font-medium text-white/90">Policy Design</p>
              </motion.div>
              
              <motion.div 
                className="absolute top-[25%] right-[15%] w-18 h-18 rounded-full bg-transparent backdrop-blur-sm flex items-center justify-center"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6, duration: 0.5, type: "spring" }}
                whileHover={{ scale: 1.1 }}
              >
                <svg className="w-6 h-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 