/**
 * Animation utilities for AOS (Animate On Scroll) library
 */

// Default animation configurations
export const defaultAnimations = {
  fadeIn: {
    'data-aos': 'fade-up',
    'data-aos-duration': '800',
    'data-aos-once': 'true',
  },
  fadeLeft: {
    'data-aos': 'fade-right',
    'data-aos-duration': '800',
    'data-aos-once': 'true', 
  },
  fadeRight: {
    'data-aos': 'fade-left',
    'data-aos-duration': '800',
    'data-aos-once': 'true',
  },
  zoomIn: {
    'data-aos': 'zoom-in',
    'data-aos-duration': '800',
    'data-aos-once': 'true',
  },
  slideUp: {
    'data-aos': 'slide-up',
    'data-aos-duration': '800',
    'data-aos-once': 'true',
  },
};

// Animation configuration for staggered children
export const getStaggeredAnimation = (index, baseDelay = 100) => {
  return {
    'data-aos': 'fade-up',
    'data-aos-delay': (index * baseDelay).toString(),
    'data-aos-duration': '800',
    'data-aos-once': 'true',
  };
};

// Animation configurations for different sections
export const sectionAnimations = {
  hero: {
    container: {
      'data-aos': 'fade-up',
      'data-aos-duration': '1000',
      'data-aos-once': 'true',
    },
    heading: {
      'data-aos': 'fade-up',
      'data-aos-duration': '1000',
      'data-aos-delay': '200',
      'data-aos-once': 'true',
    },
    description: {
      'data-aos': 'fade-up',
      'data-aos-duration': '1000',
      'data-aos-delay': '400',
      'data-aos-once': 'true',
    },
    cta: {
      'data-aos': 'fade-up',
      'data-aos-duration': '1000',
      'data-aos-delay': '600',
      'data-aos-once': 'true',
    },
  },
  features: {
    heading: {
      'data-aos': 'fade-up',
      'data-aos-duration': '800',
      'data-aos-once': 'true',
    },
    item: (index) => ({
      'data-aos': 'fade-up',
      'data-aos-duration': '800',
      'data-aos-delay': (index * 100).toString(),
      'data-aos-once': 'true',
    }),
  },
  content: {
    image: {
      'data-aos': 'fade-right',
      'data-aos-duration': '1000',
      'data-aos-once': 'true',
    },
    content: {
      'data-aos': 'fade-left',
      'data-aos-duration': '1000',
      'data-aos-delay': '200',
      'data-aos-once': 'true',
    },
  },
}; 