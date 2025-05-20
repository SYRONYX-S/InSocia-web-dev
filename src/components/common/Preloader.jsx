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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="relative">
        {/* Simple, sleek loading animation */}
        <div className="w-12 h-12 relative">
          {/* Outer ring */}
          <div className="absolute inset-0 border-t-2 border-r-2 border-primary-500/60 rounded-full animate-spin" 
               style={{ animationDuration: '1s' }}></div>
          
          {/* Inner ring */}
          <div className="absolute inset-2 border-b-2 border-l-2 border-secondary-500/60 rounded-full animate-spin" 
               style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}></div>
          
          {/* Center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader; 