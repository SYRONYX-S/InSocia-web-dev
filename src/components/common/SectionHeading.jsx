import React from 'react';
import PropTypes from 'prop-types';

const SectionHeading = ({
  title,
  subtitle,
  description,
  align = 'center',
  className = '',
  titleClassName = '',
  subtitleClassName = '',
  descriptionClassName = '',
  children,
  centered = false,
  light = false,
  ...rest
}) => {
  const alignmentClasses = {
    center: 'text-center mx-auto',
    left: 'text-left',
    right: 'text-right ml-auto',
  };

  return (
    <div 
      className={`max-w-3xl mb-12 ${alignmentClasses[align]} ${className} ${centered ? 'text-center' : ''}`}
      {...rest}
    >
      {subtitle && (
        <h3 
          className={`text-primary-600 font-semibold text-sm uppercase tracking-wider mb-2 ${subtitleClassName}`}
        >
          {subtitle}
        </h3>
      )}
      
      <h2 
        className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-neutral-800'} ${titleClassName}`}
        data-aos="fade-up"
      >
        {title}
      </h2>
      
      {description && (
        <p 
          className={`text-neutral-600 text-lg leading-relaxed ${descriptionClassName} ${light ? 'text-neutral-200' : ''}`}
          data-aos="fade-up" 
          data-aos-delay="100"
        >
          {description}
        </p>
      )}

      {children}
    </div>
  );
};

SectionHeading.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  align: PropTypes.oneOf(['center', 'left', 'right']),
  className: PropTypes.string,
  titleClassName: PropTypes.string,
  subtitleClassName: PropTypes.string,
  descriptionClassName: PropTypes.string,
  children: PropTypes.node,
  centered: PropTypes.bool,
  light: PropTypes.bool,
};

export default SectionHeading; 