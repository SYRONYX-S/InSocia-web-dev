import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  useEffect(() => {
    // Set a CSS custom property for the viewport height
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // Initial set
    setVh();

    // Update on resize and orientation change
    window.addEventListener('resize', setVh);
    window.addEventListener('orientationchange', setVh);

    return () => {
      window.removeEventListener('resize', setVh);
      window.removeEventListener('orientationchange', setVh);
    };
  }, []);

  return (
    <section className="relative bg-section-light overflow-hidden hero-section min-h-screen">
      {/* Static floating elements - Light theme */}
      <div className="absolute inset-0 z-5 overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-16 h-16 bg-primary-500/15 rounded-full blur-xl"></div>
        <div className="absolute bottom-[20%] left-[15%] w-32 h-32 bg-primary-400/10 rounded-full blur-xl"></div>
        <div className="absolute top-[30%] right-[20%] w-24 h-24 bg-secondary-400/8 rounded-full blur-xl"></div>
      </div>
      
      {/* Content */}
      <div className="w-full px-4 md:px-6 relative z-10 flex items-center min-h-screen mt-16 sm:mt-0">
        <div className="max-w-[1500px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 lg:pr-8">
              <div className="inline-flex items-center px-4 py-2 rounded-md glass-card-hero text-sm font-semibold text-neutral-700 mb-8">
                <span className="flex h-2 w-2 mr-2">
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                </span>
                DRIVING SOCIAL CHANGE
              </div>
              
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-neutral-900">
                Driving Social Change Through <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">Evidence-Based</span> Solutions
              </h1>
              
              <p className="responsive-desc text-xl md:text-2xl text-neutral-600 mb-8 leading-relaxed max-w-2xl">
                Insocia partners with corporations, governments, NGOs, and philanthropic organizations to unlock greater social impact through rigorous research, independent evaluation, and strategic advocacy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/services" 
                  className="relative inline-flex items-center justify-center px-8 py-3.5 font-medium rounded-lg transition-colors duration-300 group overflow-hidden bg-primary-600 hover:bg-primary-700 shadow-sm"
                >
                  <span className="relative z-10 flex items-center text-white">
                    Explore Our Services
                    <svg className="ml-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </Link>
                
                <Link 
                  to="/projects" 
                  className="relative inline-flex items-center justify-center px-8 py-3.5 font-medium rounded-lg transition-colors duration-300 group overflow-hidden glass-card border border-neutral-300 hover:border-neutral-400"
                >
                  <span className="relative z-10 flex items-center text-neutral-800">
                    View Impact Stories
                    <svg className="ml-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </Link>
              </div>
              
              {/* Stats - Fixed Partners card hover color */}
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 hero-stats">
                <div className="glass-card rounded-lg px-3 py-4 relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-primary-200/50 hover:-translate-y-1 hover:bg-white/80 group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-600 to-primary-400 transition-all duration-300 group-hover:opacity-100 group-hover:shadow-md group-hover:shadow-primary-400/30"></div>
                  <div className="relative z-10">
                    <p className="text-2xl lg:text-3xl font-bold text-neutral-900 transition-all duration-300 group-hover:text-primary-700 group-hover:scale-105">25+</p>
                    <p className="text-sm text-neutral-600 mt-1 transition-colors duration-300 group-hover:text-neutral-700">Projects</p>
                  </div>
                </div>
                
                <div className="glass-card rounded-lg px-3 py-4 relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-primary-200/50 hover:-translate-y-1 hover:bg-white/80 group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-300 group-hover:opacity-100 group-hover:shadow-md group-hover:shadow-primary-400/30"></div>
                  <div className="relative z-10">
                    <p className="text-2xl lg:text-3xl font-bold text-neutral-900 transition-all duration-300 group-hover:text-primary-700 group-hover:scale-105">18</p>
                    <p className="text-sm text-neutral-600 mt-1 transition-colors duration-300 group-hover:text-neutral-700">Countries</p>
                  </div>
                </div>
                
                <div className="glass-card rounded-lg px-3 py-4 relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-primary-200/50 hover:-translate-y-1 hover:bg-white/80 group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-600 to-secondary-500 transition-all duration-300 group-hover:opacity-100 group-hover:shadow-md group-hover:shadow-primary-400/30"></div>
                  <div className="relative z-10">
                    <p className="text-2xl lg:text-3xl font-bold text-neutral-900 transition-all duration-300 group-hover:text-primary-700 group-hover:scale-105">40+</p>
                    <p className="text-sm text-neutral-600 mt-1 transition-colors duration-300 group-hover:text-neutral-700">Partners</p>
                  </div>
                </div>
                
                <div className="glass-card rounded-lg px-3 py-4 relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-primary-200/50 hover:-translate-y-1 hover:bg-white/80 group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 to-secondary-400 transition-all duration-300 group-hover:opacity-100 group-hover:shadow-md group-hover:shadow-primary-400/30"></div>
                  <div className="relative z-10">
                    <p className="text-2xl lg:text-3xl font-bold text-neutral-900 transition-all duration-300 group-hover:text-primary-700 group-hover:scale-105">100K+</p>
                    <p className="text-sm text-neutral-600 mt-1 transition-colors duration-300 group-hover:text-neutral-700">Lives Impacted</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Hero Visual Section - Redesigned for animation and relevance */}
            <div className="hidden lg:block lg:col-span-5">
              <style>
                {`
                  @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0px); }
                  }
                  .animate-float { animation: float 6s ease-in-out infinite; }

                  @keyframes pulse-glow {
                    0%, 100% { box-shadow: 0 0 30px rgba(237, 87, 43, 0.4), 0 0 60px rgba(237, 87, 43, 0.3); }
                    50% { box-shadow: 0 0 50px rgba(237, 87, 43, 0.6), 0 0 100px rgba(237, 87, 43, 0.4); }
                  }
                  .animate-pulse-glow { animation: pulse-glow 4s ease-in-out infinite; }

                  @keyframes orbit-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                  }
                  .animate-orbit-slow { animation: orbit-slow 25s linear infinite; }

                  @keyframes orbit-fast {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                  }
                  .animate-orbit-fast { animation: orbit-fast 20s linear infinite; }

                  @keyframes tree-lifecycle {
                    /* Phase 1: Start hidden and ready */
                    0% { 
                      stroke-dasharray: 2000;
                      stroke-dashoffset: 2000;
                      opacity: 1;
                      transform: scale(1);
                      fill: transparent;
                      stroke: #ed572b;
                    }
                    
                    /* Phase 2: Draw outline (0-20%) */
                    20% { 
                      stroke-dashoffset: 0;
                      opacity: 1;
                      transform: scale(1);
                      fill: transparent;
                      stroke: #ed572b;
                    }
                    
                    /* Phase 3: Fill the shape (20-30%) */
                    30% {
                      stroke-dashoffset: 0;
                      opacity: 1;
                      transform: scale(1);
                      fill: #ed572b;
                      stroke: #ed572b;
                    }
                    
                    /* Phase 4: Gentle swaying - only rotating, base stays fixed (30-60%) */
                    35% {
                      transform: scale(1) rotate(1.5deg);
                      transform-origin: center bottom;
                    }
                    40% {
                      transform: scale(1) rotate(-1.5deg);
                      transform-origin: center bottom;
                    }
                    45% {
                      transform: scale(1) rotate(1deg);
                      transform-origin: center bottom;
                    }
                    50% {
                      transform: scale(1) rotate(-1deg);
                      transform-origin: center bottom;
                    }
                    55% {
                      transform: scale(1) rotate(0.5deg);
                      transform-origin: center bottom;
                    }
                    60% {
                      transform: scale(1) rotate(0deg);
                      transform-origin: center bottom;
                    }
                    
                    /* Phase 5: Unfill (60-70%) */
                    70% {
                      stroke-dashoffset: 0;
                      opacity: 1;
                      transform: scale(1);
                      fill: transparent;
                      stroke: #ed572b;
                    }
                    
                    /* Phase 6: Undraw outline (70-90%) */
                    90% { 
                      stroke-dasharray: 2000;
                      stroke-dashoffset: 2000;
                      opacity: 1;
                      transform: scale(1);
                      fill: transparent;
                      stroke: #ed572b;
                    }
                    
                    /* Phase 7: Brief pause before restart (90-100%) */
                    100% { 
                      stroke-dasharray: 2000;
                      stroke-dashoffset: 2000;
                      opacity: 1;
                      transform: scale(1);
                      fill: transparent;
                      stroke: #ed572b;
                    }
                  }
                  
                  .tree-sprouting path {
                    stroke: #ed572b;
                    stroke-width: 2;
                    fill: transparent;
                    transform-origin: center bottom;
                    animation: tree-lifecycle 10s ease-in-out infinite;
                  }
                  
                  /* Staggered growth for different parts */
                  .tree-sprouting path:nth-child(1) { 
                    animation-delay: 0s; /* Main trunk */
                  }
                  .tree-sprouting path:nth-child(2) { 
                    animation-delay: 0.8s; /* Top leaf cluster */
                  }
                  .tree-sprouting path:nth-child(3) { 
                    animation-delay: 1.2s; /* Left branch */
                  }
                  .tree-sprouting path:nth-child(4) { 
                    animation-delay: 1.6s; /* Bottom leaves */
                  }
                  .tree-sprouting path:nth-child(5) { 
                    animation-delay: 2s; /* Right branch */
                  }

                  @keyframes scale-pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                  }
                  .animate-scale-pulse { animation: scale-pulse 4s ease-in-out infinite; }
                `}
              </style>
              <div className="relative w-full h-[500px] flex items-center justify-center">
                {/* Orbit Paths - More subtle */}
                <div className="absolute w-[380px] h-[380px] border border-primary-500/8 rounded-full animate-orbit-slow"></div>
                <div className="absolute w-[280px] h-[280px] border border-dashed border-secondary-500/6 rounded-full animate-orbit-fast"></div>

                {/* Central Core - Enhanced and Bigger */}
                <div className="relative w-60 h-60 bg-white backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl animate-pulse-glow border border-primary-500/20 transform -translate-y-8">
                  <div className="w-52 h-52 bg-white rounded-full flex items-center justify-center shadow-inner">
                    <div className="relative w-28 h-28">
                      <svg 
                        className="w-full h-full tree-sprouting" 
                        viewBox="0 0 192.4 244.81" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M192.4,143.35c-6.77,23.93-21.77,43.96-42.23,56.47-11.75,7.17-24.53,11.37-37.47,12.51-.41,5.93-.84,12.02-1.27,18.27-.68,9.66-.43,4.63-.95,14.21l-17.81-.95c.51-9.75.27-4.79.95-14.51,1.27-17.81,2.52-34.03,2.82-49.65-3.47.35-6.96.54-10.42.54-14.62,0-29.02-3.3-42.1-9.8C22.17,159.64,6.61,141.32,0,118.82l17.14-5.01c5.17,17.65,17.49,32.08,34.71,40.63,13.62,6.8,29.05,9.26,44.42,7.28-.49-11.42-1.71-22.74-4.11-34.33-7.55-36.3-25.39-59.99-56.2-74.53l7.63-16.13c29.62,14,49.51,35.9,60.37,66.68,9.01-25.99,12.24-53.41,9.18-79.46l17.73-2.08c4.3,36.63-2.65,75.67-19.63,110.59,3.41,20.76,3.55,40.63,2.52,61.78,9.37-1.19,18.57-4.47,27.1-9.66,16.62-10.15,28.83-26.5,34.38-46.08l17.16,4.85Z"/>
                        <path d="M77.63,0c2.76,0,10.58,5.06,12.87,7.06,9.06,7.91,10.16,17.49,6.22,28.53-4.67,13.08-9.85,12.44-20.27,4.73-11.77-8.72-12.64-25.22-4.08-36.64C73.44,2.24,75.78,0,77.63,0Z"/>
                        <path d="M44.85,94.89c2.7-.56,11.39,2.77,14.05,4.26,10.49,5.88,13.54,15.02,11.96,26.64-1.88,13.76-7.08,14.2-18.86,8.79-13.32-6.11-17.56-22.08-11.53-35.02.76-1.62,2.58-4.3,4.39-4.68Z"/>
                        <path d="M43.23,216.98c-.49-2.7,3.04-11.22,4.59-13.81,6.1-10.25,15.24-13.03,26.72-11.16,13.59,2.22,13.89,7.39,8.23,18.93-6.4,13.04-22.35,16.83-35.01,10.52-1.59-.79-4.2-2.67-4.52-4.47Z"/>
                        <path d="M149.12,129.51c1.94,1.71,4.31,10.09,4.68,12.91,1.48,11.15-3.66,18.56-13.25,23.89-11.36,6.3-14.61,2.66-17.16-9.2-2.88-13.4,6.7-25.53,19.77-28.26,1.64-.34,4.67-.48,5.96.67Z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Satellite Nodes - Adjusted positions relative to centered hub */}
                <div className="absolute top-[20px] left-[160px] animate-float" style={{animationDelay: '0s'}}>
                  <div className="w-32 glass-card-hero p-2.5 rounded-lg shadow-lg flex items-center space-x-2 animate-scale-pulse" style={{animationDelay: '0.5s'}}>
                    <div className="w-7 h-7 rounded-lg bg-primary-500/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-neutral-800">Research</p>
                      <p className="text-xs text-neutral-600">Data-driven</p>
                    </div>
                  </div>
                </div>

                <div className="absolute right-[20px] top-[180px] animate-float" style={{animationDelay: '1.5s'}}>
                  <div className="w-32 glass-card-hero p-2.5 rounded-lg shadow-lg flex items-center space-x-2 animate-scale-pulse" style={{animationDelay: '1s'}}>
                    <div className="w-7 h-7 rounded-lg bg-primary-500/10 flex items-center justify-center">
                       <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2M9 5a2 2 0 012 2h2a2 2 0 012-2" /></svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-neutral-800">Policy</p>
                      <p className="text-xs text-neutral-600">Impactful</p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-[60px] left-[160px] animate-float" style={{animationDelay: '3s'}}>
                  <div className="w-32 glass-card-hero p-2.5 rounded-lg shadow-lg flex items-center space-x-2 animate-scale-pulse" style={{animationDelay: '1.5s'}}>
                    <div className="w-7 h-7 rounded-lg bg-primary-500/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.354a1.76 1.76 0 011.17-2.148l6.355-2.147a1.76 1.76 0 012.147 1.17l.57 1.696" /></svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-neutral-800">Advocacy</p>
                      <p className="text-xs text-neutral-600">Strategic</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute left-[20px] top-[180px] animate-float" style={{animationDelay: '4.5s'}}>
                  <div className="w-32 glass-card-hero p-2.5 rounded-lg shadow-lg flex items-center space-x-2 animate-scale-pulse" style={{animationDelay: '2s'}}>
                    <div className="w-7 h-7 rounded-lg bg-primary-500/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-neutral-800">Analytics</p>
                      <p className="text-xs text-neutral-600">Actionable</p>
                    </div>
                  </div>
                </div>

                {/* Subtle Impact Indicators - Adjusted for centered position */}
                <div className="absolute top-[80px] right-[100px] w-8 h-8 glass-card-hero rounded-full flex items-center justify-center animate-float" style={{animationDelay: '2s'}}>
                  <div className="w-3 h-3 bg-green-500/30 rounded-full"></div>
                </div>

                <div className="absolute bottom-[140px] right-[140px] w-6 h-6 glass-card-hero rounded-full flex items-center justify-center animate-float" style={{animationDelay: '5s'}}>
                  <div className="w-2 h-2 bg-secondary-500/40 rounded-full"></div>
                </div>

                <div className="absolute top-[120px] left-[100px] w-7 h-7 glass-card-hero rounded-full flex items-center justify-center animate-float" style={{animationDelay: '3.5s'}}>
                  <div className="w-2.5 h-2.5 bg-primary-500/30 rounded-full"></div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Hero); 