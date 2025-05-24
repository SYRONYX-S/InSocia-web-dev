import React from 'react';
import { Link } from 'react-router-dom';
import { defaultAnimations, getStaggeredAnimation } from '../../utils/animations';
import { services } from '../../data/services';

const ServicesList = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
            {...defaultAnimations.fadeIn}
          >
            Our Services
          </h2>
          <p 
            className="text-xl text-neutral-300"
            {...defaultAnimations.fadeIn}
          >
            Comprehensive development services tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative"
              {...getStaggeredAnimation(index)}
            >
              <div className="relative bg-neutral-800/30 backdrop-blur-sm rounded-xl p-8 border border-neutral-700/30 hover:border-primary-500/30 transition-all duration-300">
                <div className="w-16 h-16 bg-primary-500/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                  <i className={`${service.icon} text-2xl text-primary-400`}></i>
                </div>
                <h3 className="text-2xl font-semibold text-white group-hover:text-primary-400 transition-colors mb-4">
                  {service.title}
                </h3>
                <p className="text-neutral-300 mb-6">
                  {service.shortDescription}
                </p>
                <Link 
                  to={`/services/${service.id}`}
                  className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors"
                >
                  Learn More
                  <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList; 