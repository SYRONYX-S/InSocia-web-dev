import React, { useEffect, useRef, createContext, useContext } from 'react';
import Lenis from '@studio-freight/lenis';

// Create context to expose Lenis instance to other components
export const SmoothScrollContext = createContext({ lenis: null });

// Hook to access Lenis instance
export const useSmoothScroll = () => useContext(SmoothScrollContext);

const SmoothScroll = ({ children }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis smooth scrolling with premium feel settings
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Create animation frame loop
    function raf(time) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);

    // Handle parallax effect with Lenis
    const handleParallaxEffect = () => {
      const parallaxElements = document.querySelectorAll('.parallax-bg');
      
      lenisRef.current.on('scroll', ({ scroll }) => {
        parallaxElements.forEach(element => {
          const speed = parseFloat(element.getAttribute('data-speed')) || 0.1;
          const yPos = -(scroll * speed);
          element.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });
      });
    };
    
    // Initialize parallax effect
    setTimeout(handleParallaxEffect, 100);

    // Handle anchor links for smooth scrolling to sections
    const handleAnchorLinks = () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          if (targetId !== '#') {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
              lenisRef.current.scrollTo(targetElement, {
                offset: -100, // Offset to account for fixed header
                duration: 1.5,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
              });
            }
          }
        });
      });
    };

    // Set up observer to handle dynamically added anchor links
    const observer = new MutationObserver(handleAnchorLinks);
    observer.observe(document.body, { 
      childList: true, 
      subtree: true 
    });
    
    // Initial setup for existing anchor links
    handleAnchorLinks();

    // Handle resize events to update Lenis
    const resizeObserver = new ResizeObserver(() => {
      lenisRef.current?.resize();
    });

    resizeObserver.observe(document.body);

    // Cleanup
    return () => {
      lenisRef.current?.destroy();
      resizeObserver.disconnect();
      observer.disconnect();
    };
  }, []);

  return (
    <SmoothScrollContext.Provider value={{ lenis: lenisRef.current }}>
      {children}
    </SmoothScrollContext.Provider>
  );
};

export default SmoothScroll; 