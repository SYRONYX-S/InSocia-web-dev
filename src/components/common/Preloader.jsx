import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="relative">
        {/* Loading animation */}
        <div className="w-16 h-16 relative">
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