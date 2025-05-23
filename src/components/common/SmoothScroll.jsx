import React, { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

const SmoothScroll = ({ children }) => {
  const lenisRef = useRef(null);

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