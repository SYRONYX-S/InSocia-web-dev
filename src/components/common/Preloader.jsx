import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Start with entrance animation
    const entranceTimer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    const timer = setTimeout(() => {
      // Start the closing animation
      setIsClosing(true);
      
      // Remove the preloader after the transition completes
      setTimeout(() => {
      setLoading(false);
      }, 800); // Wait for transition to complete
    }, 1200); // Reduced from 1500ms to 1200ms since we add transition time

    return () => {
      clearTimeout(entranceTimer);
      clearTimeout(timer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-all duration-700 ease-out ${
        isClosing 
          ? 'opacity-0 scale-95 backdrop-blur-sm' 
          : isVisible 
            ? 'opacity-100 scale-100' 
            : 'opacity-0 scale-105'
      }`}
    >
      <div className="relative">
        {/* Loading animation */}
        <div 
          className={`w-16 h-16 relative transition-all duration-500 ease-out ${
            isClosing 
              ? 'scale-75 opacity-80' 
              : isVisible 
                ? 'scale-100 opacity-100' 
                : 'scale-90 opacity-60'
          }`}
        >
          {/* Outer ring */}
          <div className="absolute inset-0 border-t-4 border-r-4 border-primary-500/70 rounded-full animate-spin" 
               style={{ animationDuration: '1.2s' }}></div>
          
          {/* Inner ring */}
          <div className="absolute inset-3 border-b-4 border-l-4 border-secondary-500/70 rounded-full animate-spin" 
               style={{ animationDuration: '1.8s', animationDirection: 'reverse' }}></div>
          
          {/* Center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader; 