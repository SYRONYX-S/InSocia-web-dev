import React from 'react';
import { Link } from 'react-router-dom';
import SectionLayout from '../../layouts/SectionLayout';
import Button from '../common/Button';

const ServiceCTA = () => {
  return (
    <SectionLayout>
      <div className="container mx-auto px-4">
        <div 
          className="relative overflow-hidden rounded-2xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-900 to-secondary-900 opacity-95"></div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-white/10 to-transparent opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-white/10 to-transparent opacity-20"></div>
            
            {/* Animated grid pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{ 
                backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
                backgroundSize: '40px 40px' 
              }}></div>
            </div>
          </div>
          
          <div className="relative z-10 px-8 py-16 md:px-12 md:py-20 lg:px-16 lg:py-24 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 text-white">
              Ready to Transform Your Social Impact?
            </h2>
            
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10">
              Partner with InSocia Development Consultancy to design and implement effective solutions to complex social challenges
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Button 
                to="/contact" 
                size="lg" 
                className="bg-white text-primary-900 hover:bg-primary-50 hover:text-primary-800 shadow-lg shadow-primary-900/30 group"
              >
                <span className="relative z-10 flex items-center">
                  Request a Consultation
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Button>
              
              <Button 
                to="/projects" 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white/10"
              >
                View Our Projects
              </Button>
            </div>
            
            {/* Feature badges */}
            <div className="mt-16 flex flex-wrap justify-center gap-4">
              <div className="glass-effect rounded-full px-6 py-3 text-white/90 font-medium text-sm">
                Evidence-Based Approach
              </div>
              <div className="glass-effect rounded-full px-6 py-3 text-white/90 font-medium text-sm">
                Tailored Solutions
              </div>
              <div className="glass-effect rounded-full px-6 py-3 text-white/90 font-medium text-sm">
                Impact Measurement
              </div>
              <div className="glass-effect rounded-full px-6 py-3 text-white/90 font-medium text-sm">
                Innovative Methodologies
              </div>
              <div className="glass-effect rounded-full px-6 py-3 text-white/90 font-medium text-sm">
                Sustainable Outcomes
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default ServiceCTA; 