import React, { useState, useEffect } from 'react';
import { FiX, FiAlertTriangle, FiChrome, FiMonitor } from 'react-icons/fi';

const SafariBrowserWarning = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if user is on Safari and if warning was previously dismissed
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const wasDismissed = localStorage.getItem('safari-warning-dismissed') === 'true';
    
    if (isSafari && !wasDismissed) {
      // Show warning after a brief delay
      setTimeout(() => {
        setIsVisible(true);
        document.body.classList.add('safari-warning-visible');
      }, 1500);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    document.body.classList.remove('safari-warning-visible');
    // Remember user's choice for this session
    localStorage.setItem('safari-warning-dismissed', 'true');
  };

  const handleDontShowAgain = () => {
    handleDismiss();
    // Remember permanently (for 30 days)
    const expiry = new Date().getTime() + (30 * 24 * 60 * 60 * 1000);
    localStorage.setItem('safari-warning-dismissed', 'true');
    localStorage.setItem('safari-warning-expiry', expiry.toString());
  };

  // Check if permanently dismissed and not expired
  useEffect(() => {
    const expiry = localStorage.getItem('safari-warning-expiry');
    if (expiry && new Date().getTime() > parseInt(expiry)) {
      localStorage.removeItem('safari-warning-dismissed');
      localStorage.removeItem('safari-warning-expiry');
    }
  }, []);

  // Cleanup effect to remove class when component unmounts
  useEffect(() => {
    return () => {
      document.body.classList.remove('safari-warning-visible');
    };
  }, []);

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg transform transition-transform duration-300 ease-out">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <FiAlertTriangle className="w-5 h-5 text-amber-100" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4">
                <p className="text-sm font-medium">
                  ⚠️ You're using Safari browser. Our website may experience performance issues.
                </p>
                <div className="flex items-center space-x-2 text-xs">
                  <span>Try:</span>
                  <div className="flex items-center space-x-1">
                    <FiChrome className="w-3 h-3" />
                    <span>Chrome</span>
                  </div>
                  <span>or</span>
                  <div className="flex items-center space-x-1">
                    <FiMonitor className="w-3 h-3" />
                    <span>Firefox</span>
                  </div>
                  <span>for best experience</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 ml-4">
            <button
              onClick={handleDontShowAgain}
              className="text-xs bg-white/20 hover:bg-white/30 text-white px-2 py-1 rounded transition-colors duration-200"
            >
              Don't show again
            </button>
            <button
              onClick={handleDismiss}
              className="flex-shrink-0 p-1 hover:bg-white/20 rounded transition-colors duration-200"
              aria-label="Dismiss warning"
            >
              <FiX className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafariBrowserWarning; 