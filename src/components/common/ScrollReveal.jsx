import React, { useEffect, useRef } from 'react';
import { useSmoothScroll } from './SmoothScroll';

// Types of animations available
const ANIMATION_TYPES = {
  FADE: 'fade-in-on-scroll',
  REVEAL: 'reveal-on-scroll',
  SCALE: 'scale-on-scroll',
  SLIDE_LEFT: 'slide-left-on-scroll',
  SLIDE_RIGHT: 'slide-right-on-scroll',
};

const ScrollReveal = ({ 
  children, 
  type = 'reveal-on-scroll', 
  delay = '',
  threshold = 0.2,
  className = '',
  ...rest
}) => {
  const { lenis } = useSmoothScroll() || {};
  const ref = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    // Function to check if element is in viewport
    const isInViewport = () => {
      if (!ref.current) return false;
      
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      
      // Element is considered in viewport if it's top is below the threshold from the top
      // and its bottom is above the threshold from the bottom
      const thresholdPx = windowHeight * threshold;
      return (
        rect.top <= windowHeight - thresholdPx &&
        rect.bottom >= thresholdPx
      );
    };

    // Function to handle visibility changes
    const handleVisibility = () => {
      if (isInViewport()) {
        if (ref.current && !ref.current.classList.contains('is-inview')) {
          ref.current.classList.add('is-inview');
        }
      }
    };

    // Set up IntersectionObserver if available
    if ('IntersectionObserver' in window) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-inview');
              // Once revealed, no need to keep observing
              observerRef.current.unobserve(entry.target);
            }
          });
        },
        {
          threshold: [threshold],
          rootMargin: '0px 0px -100px 0px' // Adjust based on needs
        }
      );

      if (ref.current) {
        observerRef.current.observe(ref.current);
      }
    } else {
      // Fallback for browsers that don't support IntersectionObserver
      // Check on scroll and initial load
      window.addEventListener('scroll', handleVisibility);
      // Also listen to Lenis scroll events if available
      if (lenis) {
        lenis.on('scroll', handleVisibility);
      }
      // Initial check
      handleVisibility();
    }

    return () => {
      if (observerRef.current && ref.current) {
        observerRef.current.unobserve(ref.current);
      }
      
      window.removeEventListener('scroll', handleVisibility);
      
      if (lenis) {
        lenis.off('scroll', handleVisibility);
      }
    };
  }, [threshold, lenis]);

  // Combine the animation class and delay class with any additional classes
  const animationClass = ANIMATION_TYPES[type.toUpperCase()] || type;
  const delayClass = delay ? `reveal-delay-${delay}` : '';

  return (
    <div
      ref={ref}
      className={`${animationClass} ${delayClass} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default ScrollReveal; 