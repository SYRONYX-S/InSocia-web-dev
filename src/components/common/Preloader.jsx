import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="relative flex flex-col items-center">
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-radial from-primary-600/20 to-transparent rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-radial from-primary-600/10 to-transparent rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 bg-gradient-radial from-primary-600/5 to-transparent rounded-full animate-pulse" style={{ animationDelay: '600ms' }}></div>
        </div>
        
        {/* Modern spinner */}
        <div className="relative w-16 h-16 mb-6">
          <div className="absolute inset-0 rounded-full border-2 border-neutral-800"></div>
          <div className="absolute inset-2 rounded-full border-2 border-neutral-700"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <span className="absolute top-0 left-1/2 w-1 h-8 bg-primary-500 rounded-full origin-bottom animate-spin" style={{ transformOrigin: '0.125rem 100%' }}></span>
          </div>
          <div className="absolute top-0 left-0 w-full h-full animate-spin" style={{ animationDuration: '3s' }}>
            <span className="absolute top-0 left-1/2 w-0.5 h-8 bg-secondary-500 rounded-full origin-bottom"></span>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="w-3 h-3 bg-primary-500 rounded-full"></span>
          </div>
        </div>
        
        {/* Company name with typewriter effect */}
        <h2 className="text-xl font-medium text-white overflow-hidden border-r-2 border-primary-400 whitespace-nowrap animate-typewriter" style={{ maxWidth: '280px' }}>
          InSocia Development Consultancy
        </h2>
        
        {/* Loading text */}
        <div className="mt-4 text-xs text-neutral-400">
          <span className="inline-flex items-center">
            LOADING
            <span className="ml-2 flex space-x-1">
              <span className="w-1 h-1 bg-primary-400 rounded-full animate-ping" style={{ animationDelay: '0ms' }}></span>
              <span className="w-1 h-1 bg-primary-400 rounded-full animate-ping" style={{ animationDelay: '200ms' }}></span>
              <span className="w-1 h-1 bg-primary-400 rounded-full animate-ping" style={{ animationDelay: '400ms' }}></span>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Preloader; 