import React from 'react';
import { defaultAnimations } from '../utils/animations';

const SectionHeading = ({ title, description }) => {
  return (
    <div className="max-w-4xl mx-auto text-center mb-20">
      <h2 
        className="text-3xl md:text-4xl font-bold mb-6 text-white"
        {...defaultAnimations.fadeIn}
      >
        {title}
      </h2>
      <p 
        className="text-xl text-neutral-300"
        {...defaultAnimations.fadeIn}
      >
        {description}
      </p>
    </div>
  );
};

export default SectionHeading; 