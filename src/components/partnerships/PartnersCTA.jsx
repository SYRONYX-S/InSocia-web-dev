import React from 'react';
import { Link } from 'react-router-dom';
import SectionLayout from '../../layouts/SectionLayout';
import Button from '../common/Button';

const PartnersCTA = () => {
  return (
    <SectionLayout backgroundColor="bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden" data-aos="fade-up">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="max-w-lg">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-neutral-800">
                  Become Our Partner
                </h2>
                
                <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
                  We're always looking to collaborate with organizations that share our vision of creating equitable and sustainable societies. Join our network of partners to leverage collective expertise and resources for greater impact.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mt-1 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-neutral-700">Collaborate on innovative projects and initiatives</p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mt-1 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-neutral-700">Access a network of expertise and resources</p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mt-1 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-neutral-700">Create greater impact through collective action</p>
                  </div>
                </div>
                
                <Button 
                  to="/contact" 
                  size="lg"
                  className="bg-primary-600 hover:bg-primary-700 text-white shadow-md inline-flex items-center group"
                >
                  <span className="relative z-10 flex items-center">
                    Contact Us
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </Button>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-600 opacity-90"></div>
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                alt="Partnership" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8 max-w-md">
                  <h3 className="text-2xl font-heading font-bold text-white mb-4">Our Partnership Approach</h3>
                  <p className="text-white/90 text-lg mb-6">
                    We believe in building long-term, strategic relationships based on mutual trust, shared values, and complementary strengths.
                  </p>
                  <div className="flex justify-center gap-4">
                    <div className="glass-effect rounded-full px-4 py-2 text-white/90 text-sm">
                      Government
                    </div>
                    <div className="glass-effect rounded-full px-4 py-2 text-white/90 text-sm">
                      NGOs
                    </div>
                    <div className="glass-effect rounded-full px-4 py-2 text-white/90 text-sm">
                      Private Sector
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default PartnersCTA; 