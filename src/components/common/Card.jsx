import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({
  title,
  content,
  icon,
  image,
  imageAlt,
  link,
  linkText = 'Read More',
  className = '',
  children,
  ...rest
}) => {
  const cardContent = (
    <>
      {image && (
        <div className="h-48 overflow-hidden">
          <img
            src={image}
            alt={imageAlt || title}
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        {icon && (
          <div className="flex justify-center mb-4">
            {icon}
          </div>
        )}
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-neutral-600">{content}</p>
        {children}
        {link && linkText && (
          <div className="mt-4">
            {link.startsWith('http') ? (
              <a
                href={link}
                className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                {linkText}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            ) : (
              <Link
                to={link}
                className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center"
              >
                {linkText}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            )}
          </div>
        )}
      </div>
    </>
  );

  // If link is provided, make the card clickable
  if (link && !link.startsWith('http')) {
    return (
      <Link
        to={link}
        className={`block bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg ${className}`}
        data-aos="fade-up"
        {...rest}
      >
        {cardContent}
      </Link>
    );
  }

  // External link
  if (link && link.startsWith('http')) {
    return (
      <a
        href={link}
        className={`block bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg ${className}`}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {cardContent}
      </a>
    );
  }

  // No link, just a card
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}
      data-aos="fade-up"
      {...rest}
    >
      {cardContent}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  icon: PropTypes.node,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  link: PropTypes.string,
  linkText: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Card; 