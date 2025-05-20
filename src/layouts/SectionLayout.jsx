import React from 'react';
import PropTypes from 'prop-types';

const SectionLayout = ({ 
  children, 
  className = '', 
  bgColor = 'bg-transparent',
  containerClass = '',
  id
}) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${bgColor} ${className}`}>
      <div className={`mx-auto px-4 md:px-6 max-w-[1500px] ${containerClass}`}>
        {children}
      </div>
    </section>
  );
};

SectionLayout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  bgColor: PropTypes.string,
  containerClass: PropTypes.string
};

export default SectionLayout; 