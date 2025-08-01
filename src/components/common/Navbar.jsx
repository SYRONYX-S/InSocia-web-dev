import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState(null);
  const location = useLocation();
  const topBarRef = useRef(null);
  const navbarRef = useRef(null);

  // Helper function to get the correct path
  const getPath = (path) => {
    return path;
  };
  
  // Navigation structure with dropdowns - 4 main items with all pages covered
  const navItems = [
    { name: 'Home', path: getPath('/') },
    { 
      name: 'About Us', 
      path: getPath('/about'),
      dropdown: [
        { name: 'About InSocia', path: getPath('/about') },
        { name: 'Our Team', path: getPath('/about#our-team') },
        { name: 'Careers', path: getPath('/careers') },
        { name: 'divider', isDivider: true },
        { name: 'Projects', path: getPath('/projects') },
        { name: 'News & Insights', path: getPath('/news') },
      ]
    },
    { 
      name: 'Services', 
      path: getPath('/services'),
      dropdown: [
        { name: 'Services Overview', path: getPath('/services') },
        { name: 'Focus Areas', path: getPath('/focus-areas') },
      ]
    },
    { 
      name: 'Resources', 
      path: getPath('/resources'),
      dropdown: [
        { name: 'Resources Overview', path: getPath('/resources') },
        { name: 'Knowledge Hub', path: getPath('/resources#knowledge-hub') },
        { name: 'Data Repository', path: getPath('/resources#data-repository') },
        { name: 'Methodology Center', path: getPath('/resources#methodology-center') },
        { name: 'Policy Innovation Lab', path: getPath('/resources#policy-lab') },
        { name: 'Training Resources', path: getPath('/resources#training') },
      ]
    }
  ];
  
  // Handle scroll effect - simplified logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY <= 50) {
        setShowTopBar(true);
        setScrolled(false);
      } else {
        setShowTopBar(false);
        setScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu and dropdowns when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileActiveDropdown(null);
  }, [location]);
  
  // Handle desktop dropdown toggle
  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  // Handle mobile dropdown toggle
  const toggleMobileDropdown = (index) => {
    if (mobileActiveDropdown === index) {
      setMobileActiveDropdown(null);
    } else {
      setMobileActiveDropdown(index);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeDropdown !== null && !event.target.closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [activeDropdown]);
  
  // Animation variants - optimized for performance
  const topBarVariants = {
    visible: { 
      opacity: 1, 
      height: 'auto',
      y: 0,
      transition: { duration: 0.2, ease: "easeOut" } 
    },
    hidden: { 
      opacity: 0, 
      height: 0,
      y: -10,
      transition: { duration: 0.2, ease: "easeIn" } 
    }
  };
  
  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0, transition: { duration: 0.2 } },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.2 } }
  };
  
  // CSS for animated gradient effect on branding
  const brandingGradientStyle = {
    position: 'relative',
    textShadow: '0 0 10px rgba(103, 103, 255, 0.3), 0 0 20px rgba(120, 0, 255, 0.2)',
    transition: 'text-shadow 0.3s ease',
  };
  
  const hoverBrandingGradientStyle = {
    textShadow: '0 0 15px rgba(103, 103, 255, 0.7), 0 0 25px rgba(120, 0, 255, 0.5)',
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex flex-col font-['Playfair_Display',ui-serif,Georgia,serif]">
      {/* Add CSS for logo icon swaying animation */}
      <style>
        {`
          @keyframes logo-sway {
            0% { transform: rotate(4deg); }
            50% { transform: rotate(-4deg); }
            100% { transform: rotate(4deg); }
          }
          
          .logo-icon-sway {
            animation: logo-sway 3s ease-in-out infinite;
            transform-origin: center bottom;
          }
        `}
      </style>

      {/* Top Contact Bar */}
      <AnimatePresence initial={false}>
        {showTopBar && (
          <motion.div
            ref={topBarRef}
            key="top-bar"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={topBarVariants}
            className="bg-gradient-to-r from-neutral-900/95 to-neutral-950/95 backdrop-blur-md text-white shadow-md w-full border-b border-neutral-700/20 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-2 flex justify-between items-center">
              <div className="flex items-center space-x-6 text-sm">
                <a href="mailto:connect@insocia.in" className="flex items-center text-neutral-300 hover:text-primary-400 transition-colors group">
                  <svg className="w-3.5 h-3.5 mr-1.5 text-primary-400 group-hover:text-primary-300 transition-colors" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                  connect@insocia.in
                </a>
                <a href="tel:+917012345678" className="flex items-center text-neutral-300 hover:text-primary-400 transition-colors group">
                  <svg className="w-3.5 h-3.5 mr-1.5 text-primary-400 group-hover:text-primary-300 transition-colors" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                  +91 701 234 5678
                </a>
              </div>
              <div className="hidden md:flex items-center space-x-4 text-sm">
                <span className="flex items-center text-neutral-300">
                  <svg className="w-3.5 h-3.5 mr-1.5 text-primary-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path></svg>
                  Mon-Fri: 9:00 AM - 5:00 PM
                </span>
                <div className="flex items-center space-x-3">
                  <a href="#" aria-label="Facebook" className="text-neutral-400 hover:text-primary-400 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.75 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg>
                  </a>
                  <a href="https://www.linkedin.com/company/insocia-consultancy" aria-label="LinkedIn" className="text-neutral-400 hover:text-primary-400 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                  </a>
                  <a href="#" aria-label="Twitter" className="text-neutral-400 hover:text-primary-400 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Main Navbar - Increased size and consistent sizing */}
      <div
        ref={navbarRef} 
        className="w-full sticky top-0 transition-all duration-300"
      >
        <nav className="relative py-6 shadow-lg backdrop-blur-md rounded-bl-[40px] rounded-br-[40px] z-10">
          {/* Light theme background */}
          <div className="absolute inset-0 -z-10 overflow-hidden rounded-bl-[40px] rounded-br-[40px]">
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 to-neutral-50/95"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-50/50 to-neutral-50/50 opacity-80"></div>
            <div className="absolute -top-[100%] -right-[10%] w-[50%] h-[100%] rounded-full bg-gradient-radial from-secondary-500/8 to-transparent blur-3xl"></div>
            <div className="absolute top-[50%] -left-[20%] w-[40%] h-[100%] rounded-full bg-gradient-radial from-primary-500/8 to-transparent blur-3xl"></div>
            <div className="absolute inset-0 mix-blend-overlay opacity-20" style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundSize: '200px 200px',
            }}></div>
            <div className="absolute inset-0 opacity-40">
              <div className="absolute inset-0" style={{ 
                backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)`,
                backgroundSize: '40px 40px' 
              }}></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-400/50 to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-6 flex justify-between items-center">
            {/* Logo - Using split SVG logos */}
            <Link to="/" className="flex items-center z-10 group">
              <div className="flex items-center space-x-1">
                {/* Icon part with swaying animation */}
                <img 
                  src="/images/logo-icon.svg" 
                  alt="InSocia Icon" 
                  className="h-12 w-auto transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg logo-icon-sway"
                />
                {/* Text part - static */}
                <img 
                  src="/images/logo-text.svg" 
                  alt="InSocia Text" 
                  className="h-12 w-auto transition-all duration-300 group-hover:drop-shadow-lg"
                />
              </div>
            </Link>
            
            {/* Desktop Navigation with Dropdowns - Larger links */}
            <div className="hidden lg:flex items-center space-x-2 z-10">
              {navItems.map((item, index) => (
                <div key={item.name} className="relative dropdown-container">
                  {item.dropdown ? (
                    <>
                      <button
                        className={`px-4 py-3 text-base font-medium transition-colors duration-200 flex items-center relative ${
                          location.pathname === item.path || 
                          (item.dropdown && item.dropdown.some(dropItem => dropItem.path === location.pathname))
                            ? 'text-primary-600' 
                            : 'text-neutral-800 hover:text-primary-600'
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleDropdown(index);
                        }}
                      >
                        {item.name}
                        <svg 
                          className={`ml-1.5 w-4 h-4 transition-transform duration-200 ${activeDropdown === index ? 'rotate-180' : ''}`} 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === index && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.15 }}
                            className="absolute top-full left-0 mt-2 w-52 bg-white/95 backdrop-blur-md rounded-lg shadow-xl border border-neutral-200/50 overflow-hidden"
                          >
                            {item.dropdown.map((dropItem, idx) => {
                              if (dropItem.isDivider) {
                                return (
                                  <div key={dropItem.name} className="my-1 border-t border-neutral-200"></div>
                                );
                              }
                              return (
                                <Link
                                  key={dropItem.name}
                                  to={dropItem.path}
                                  className={`block px-5 py-3 text-sm transition-colors duration-200 ${
                                    location.pathname === dropItem.path
                                      ? 'text-primary-800 bg-primary-500/10'
                                      : 'text-neutral-700 hover:text-primary-600 hover:bg-neutral-50'
                                  }`}
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  {dropItem.name}
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={`px-4 py-3 text-base font-medium transition-colors duration-200 relative ${
                        location.pathname === item.path 
                          ? 'text-primary-600' 
                          : 'text-neutral-800 hover:text-primary-600'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* CTA Button - Colorful and attractive */}
              <Link
                to="/contact"
                className="cta-btn ml-6 px-6 py-3 text-base"
              >
                <span className="relative z-10 flex items-center">
                  Get in Touch
                  <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <button
              className="lg:hidden focus:outline-none text-neutral-800 z-10"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-5">
                <span className={`absolute block h-0.5 w-full bg-current rounded-full transition-all duration-200 ${isOpen ? 'top-2 rotate-45' : 'top-0'}`}></span>
                <span className={`absolute block h-0.5 w-full bg-current rounded-full transition-all duration-200 ${isOpen ? 'opacity-0' : 'top-2'}`}></span>
                <span className={`absolute block h-0.5 w-full bg-current rounded-full transition-all duration-200 ${isOpen ? 'top-2 -rotate-45' : 'top-4'}`}></span>
              </div>
            </button>
          </div>
          
          {/* Mobile Navigation with Fixed Dropdowns */}
          <AnimatePresence>
            {isOpen && (
              <motion.div 
                variants={mobileMenuVariants}
                initial="hidden" 
                animate="visible" 
                exit="hidden"
                className="lg:hidden overflow-hidden z-10"
              >
                <div className="container mx-auto px-4 py-3 mt-2 shadow-lg relative">
                  {/* Mobile menu background - Light theme */}
                  <div className="absolute inset-0 -z-10 overflow-hidden rounded-xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/95 to-neutral-50/95"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-50/60 to-neutral-50/80 opacity-80"></div>
                    <div className="absolute -top-[50%] -right-[10%] w-[40%] h-[80%] rounded-full bg-gradient-radial from-secondary-500/8 to-transparent blur-2xl"></div>
                    <div className="absolute top-[30%] -left-[20%] w-[35%] h-[60%] rounded-full bg-gradient-radial from-primary-500/8 to-transparent blur-2xl"></div>
                    <div className="absolute inset-0 mix-blend-overlay opacity-20" style={{ 
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                      backgroundSize: '150px 150px',
                    }}></div>
                    <div className="absolute inset-0 border border-primary-400/20 rounded-xl"></div>
                  </div>
                  
                  <div className="flex flex-col divide-y divide-neutral-200 relative z-10">
                    {navItems.map((item, index) => (
                      <div key={item.name} className="py-1">
                        {item.dropdown ? (
                          <div>
                            <button
                              className={`w-full text-left px-4 py-4 text-lg font-semibold flex justify-between items-center relative ${
                                location.pathname === item.path || 
                                (item.dropdown && item.dropdown.some(dropItem => dropItem.path === location.pathname))
                                  ? 'text-primary-600' 
                                  : 'text-neutral-800'
                              }`}
                              onClick={() => toggleMobileDropdown(index)}
                            >
                              {item.name}
                              <svg 
                                className={`w-5 h-5 transition-transform duration-200 ${mobileActiveDropdown === index ? 'rotate-180' : ''}`} 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2"
                              >
                                <path d="M6 9l6 6 6-6" />
                              </svg>
                              {(location.pathname === item.path || 
                                (item.dropdown && item.dropdown.some(dropItem => dropItem.path === location.pathname))) && (
                                <span className="absolute left-0 top-1/2 w-1 h-8 bg-primary-400 transform -translate-y-1/2"></span>
                              )}
                            </button>
                            
                            <AnimatePresence>
                              {mobileActiveDropdown === index && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="ml-4 mt-2 border-l-2 border-primary-500/40 bg-neutral-50 rounded-r-lg overflow-hidden"
                                >
                                  {item.dropdown.map((dropItem, idx) => {
                                    if (dropItem.isDivider) {
                                      return (
                                        <div key={dropItem.name} className="mx-2 my-2 border-t border-neutral-300"></div>
                                      );
                                    }
                                    return (
                                      <Link
                                        key={dropItem.name}
                                        to={dropItem.path}
                                        className={`block px-5 py-3 text-base transition-colors duration-200 ${
                                          location.pathname === dropItem.path
                                            ? 'text-primary-600 font-medium'
                                            : 'text-neutral-700 hover:text-primary-600'
                                        }`}
                                        onClick={() => {
                                          setIsOpen(false);
                                          setMobileActiveDropdown(null);
                                        }}
                                      >
                                        {dropItem.name}
                                      </Link>
                                    );
                                  })}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <Link
                            to={item.path}
                            className={`block px-4 py-4 text-lg font-semibold relative ${
                              location.pathname === item.path
                                ? 'text-primary-600' 
                                : 'text-neutral-800'
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                            {location.pathname === item.path && (
                              <span className="absolute left-0 top-1/2 w-1 h-8 bg-primary-400 transform -translate-y-1/2"></span>
                            )}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 pb-2 mt-3 border-t border-neutral-200">
                    <Link
                      to="/contact"
                      onClick={() => setIsOpen(false)}
                      className="cta-btn block w-full text-center px-4 py-4 group"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        Get in Touch
                        <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
};

export default Navbar; 