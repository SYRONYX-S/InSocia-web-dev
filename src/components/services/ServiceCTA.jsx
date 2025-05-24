import React from 'react';
import { defaultAnimations } from '../../utils/animations';

const ServiceCTA = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-500/10 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>

          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl blur opacity-25"></div>
            <div className="relative bg-neutral-800/50 backdrop-blur-sm rounded-2xl p-12 border border-neutral-700/50">
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 
                      className="text-3xl md:text-4xl font-bold mb-6 text-white"
                      {...defaultAnimations.fadeIn}
                    >
                      Transform Your Development Initiatives
                    </h2>
                    <p 
                      className="text-xl text-neutral-300 mb-8"
                      {...defaultAnimations.fadeIn}
                    >
                      Partner with us to create sustainable impact and drive positive change in your community. Our comprehensive services and proven methodologies ensure successful outcomes.
                    </p>
                    <div 
                      className="space-y-4"
                      {...defaultAnimations.fadeIn}
                    >
                      <div className="flex items-center gap-3 text-neutral-300">
                        <div className="w-6 h-6 rounded-full bg-primary-500/10 flex items-center justify-center">
                          <i className="fas fa-check text-xs text-primary-400"></i>
                        </div>
                        <span>Expert consultation and strategic planning</span>
                      </div>
                      <div className="flex items-center gap-3 text-neutral-300">
                        <div className="w-6 h-6 rounded-full bg-primary-500/10 flex items-center justify-center">
                          <i className="fas fa-check text-xs text-primary-400"></i>
                        </div>
                        <span>Data-driven decision making</span>
                      </div>
                      <div className="flex items-center gap-3 text-neutral-300">
                        <div className="w-6 h-6 rounded-full bg-primary-500/10 flex items-center justify-center">
                          <i className="fas fa-check text-xs text-primary-400"></i>
                        </div>
                        <span>Proven track record of success</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl blur opacity-25"></div>
                    <div className="relative bg-neutral-800/50 backdrop-blur-sm rounded-xl p-8 border border-neutral-700/50">
                      <h3 className="text-2xl font-semibold text-white mb-6">Get Started Today</h3>
                      <div className="space-y-4">
                        <a
                          href="/contact"
                          className="w-full inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-primary-500 rounded-xl hover:bg-primary-600 transition-colors duration-300 group"
                        >
                          Schedule a Consultation
                          <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                        </a>
                        <a
                          href="/about"
                          className="w-full inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-neutral-700/50 rounded-xl hover:bg-neutral-700 transition-colors duration-300 group"
                        >
                          Learn More About Us
                          <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA; 