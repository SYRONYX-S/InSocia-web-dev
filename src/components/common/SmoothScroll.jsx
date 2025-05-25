import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';

const SmoothScroll = ({ children }) => {
  const lenisRef = useRef(null);
  const location = useLocation();

  // Handle scroll restoration on route changes
  useEffect(() => {
    const { pathname, hash } = location;
    
    // If there's a hash, scroll to that element
    if (hash) {
      // Wait for the component to render, then scroll to the hash
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          if (lenisRef.current) {
            // If Lenis is active, use its scrollTo method
            lenisRef.current.scrollTo(element, {
              offset: -100, // Account for fixed header
              duration: 1.2,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
            });
          } else {
            // Fallback to native scroll behavior
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start',
              inline: 'nearest'
            });
            // Adjust for fixed header
            setTimeout(() => {
              window.scrollBy(0, -100);
            }, 100);
          }
        }
      }, 100);
    } else {
      // No hash, scroll to top
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, {
          duration: 0.3,
          immediate: false
        });
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    // Check if the browser is Safari on MacOS
    const isSafariOnMac = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && /Mac/.test(navigator.platform);

    if (!isSafariOnMac) {
      // Initialize Lenis only for non-Safari browsers
      lenisRef.current = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        smoothTouch: false, // Disable smooth scrolling on touch devices for better performance
        touchMultiplier: 2,
        infinite: false,
      });

      function raf(time) {
        lenisRef.current?.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenisRef.current?.destroy();
      };
    }
  }, []);

  return <>{children}</>;
};

export default React.memo(SmoothScroll); 