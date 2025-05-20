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
    <section className="relative overflow-hidden bg-gradient-to-b from-neutral-900 to-neutral-950 text-white min-h-screen flex items-center" style={{ marginTop: 0 }}>
      {/* Premium animated background */}
      <div className="absolute inset-0 z-0">
        {/* Dark gradient overlay */}
        <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-primary-900/40 to-neutral-950/60 opacity-80"></div>
        
        {/* Orbs/blobs */}
        <div className="absolute -top-[20%] -right-[5%] w-[60%] h-[60%] rounded-full bg-gradient-radial from-secondary-500/20 to-transparent blur-3xl"></div>
        <div className="absolute top-[30%] -left-[5%] w-[40%] h-[40%] rounded-full bg-gradient-radial from-primary-500/20 to-transparent blur-3xl"></div>
        
        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-neutral-950 to-transparent"></div>
        
        {/* Grain texture - intensified to match navbar */}
        <div className="absolute inset-0 mix-blend-overlay opacity-30" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}></div>
      </div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: '40px 40px' 
        }}></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 z-5 overflow-hidden">
        <motion.div 
          className="absolute top-[10%] left-[10%] w-16 h-16 bg-primary-500/20 rounded-full blur-xl"
          animate={{ 
            y: [0, 20, 0],
            opacity: [0.6, 0.8, 0.6]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute top-[15%] right-[20%] w-24 h-24 bg-secondary-500/20 rounded-full blur-xl"
          animate={{ 
            y: [0, -30, 0],
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute bottom-[20%] left-[15%] w-32 h-32 bg-primary-400/10 rounded-full blur-xl"
          animate={{ 
            y: [0, 15, 0],
            x: [0, 10, 0],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute bottom-[10%] right-[30%] w-20 h-20 bg-secondary-400/15 rounded-full blur-xl"
          animate={{ 
            y: [0, -20, 0],
            x: [0, -15, 0],
            opacity: [0.3, 0.5, 0.3]
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
              Advancing <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400">Equitable</span> Social <br className="hidden md:block" />Policies
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
                className="relative inline-flex items-center justify-center px-8 py-3.5 font-bold bg-primary-600 hover:bg-primary-500 text-white rounded-md group overflow-hidden shadow-lg shadow-primary-900/30 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-xl"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary-600 to-primary-700"></span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary-500 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10">Explore Our Work</span>
              </Link>
              
              <Link 
                to="/contact" 
                className="relative inline-flex items-center justify-center px-8 py-3.5 font-bold border border-white/30 text-white rounded-md overflow-hidden group transition-all duration-300 hover:border-white/50 backdrop-blur-sm transform hover:translate-y-[-2px]"
              >
                <span className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors duration-300"></span>
                <span className="absolute inset-0 w-full h-full opacity-0 overflow-hidden">
                  <span className="absolute -inset-[2px] bg-gradient-to-r from-primary-500/20 via-white/20 to-secondary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></span>
                </span>
                <span className="relative">Partner With Us</span>
              </Link>
            </motion.div>
            
            {/* Stats with animated counting */}
            <motion.div 
              className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8"
              variants={itemVariants}
            >
              <motion.div 
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg px-4 py-5 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:bg-white/10"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="text-3xl font-bold text-white">25+</p>
                <p className="text-sm text-white/70 mt-1">Projects</p>
              </motion.div>
              <motion.div 
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg px-4 py-5 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:bg-white/10"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="text-3xl font-bold text-white">18</p>
                <p className="text-sm text-white/70 mt-1">Countries</p>
              </motion.div>
              <motion.div 
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg px-4 py-5 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:bg-white/10"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="text-3xl font-bold text-white">40+</p>
                <p className="text-sm text-white/70 mt-1">Partners</p>
              </motion.div>
              <motion.div 
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg px-4 py-5 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:bg-white/10"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="text-3xl font-bold text-white">100K+</p>
                <p className="text-sm text-white/70 mt-1">Lives Impacted</p>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Sophisticated Image Section */}
          <motion.div 
            className="hidden lg:block lg:col-span-5 self-stretch"
            variants={itemVariants}
          >
            <div className="relative h-full min-h-[500px] flex items-center">
              {/* Decorative elements */}
              <div className="absolute -top-24 -left-12 w-64 h-64 rounded-full bg-gradient-to-r from-primary-500/10 to-secondary-500/10 blur-3xl parallax opacity-60" data-speed="1"></div>
              <div className="absolute -bottom-20 -right-16 w-72 h-72 rounded-full bg-gradient-to-r from-secondary-500/15 to-primary-500/10 blur-3xl parallax opacity-70" data-speed="1.5"></div>
              
              {/* Framed image with mask effect */}
              <motion.div 
                className="relative z-10 w-full h-full rounded-xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                {/* Border gradient effect */}
                <div className="absolute inset-0 p-0.5 rounded-xl bg-gradient-to-br from-secondary-400/60 via-white/10 to-primary-400/60 opacity-60"></div>
                
                <div className="absolute inset-0.5 rounded-xl overflow-hidden">
                  <div className="h-full w-full">
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-sm z-10"></div>
                    
                    {/* Replace with appropriate image related to social development */}
                    <div className="h-full w-full bg-cover bg-center" 
                      style={{ 
                        backgroundImage: `url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2784&q=80')`,
                      }}>
                    </div>
                    
                    {/* Overlay elements for visual interest */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/30 to-transparent"></div>
                    <div className="absolute inset-0 opacity-30 mix-blend-overlay" 
                      style={{ 
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
                      }}>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating design elements */}
              <div className="absolute -right-12 top-1/3 w-24 h-24 bg-secondary-500/10 rounded-full backdrop-blur-md border border-white/10 parallax" data-speed="2"></div>
              <div className="absolute -left-8 bottom-1/4 w-16 h-16 bg-primary-500/10 rounded-full backdrop-blur-md border border-white/10 parallax" data-speed="1.3"></div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 