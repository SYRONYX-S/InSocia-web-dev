import React from 'react';
import { focusAreas } from '../../data/focusAreas';
import SectionLayout from '../../layouts/SectionLayout';

const FocusAreaDetail = () => {
  return (
    <div className="py-16 bg-neutral-50">
      {focusAreas.map((area) => (
        <div 
          key={area.id} 
          id={area.id} 
          className="py-16 scroll-mt-20"
        >
          <SectionLayout>
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div 
                  className="relative"
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-gradient">
                    <img
                      src={`/images/focus-areas/${area.image}`}
                      alt={area.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80";
                      }}
                    />
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -z-10 -top-8 -left-8 w-64 h-64 rounded-full bg-gradient-radial from-primary-500/10 to-transparent blur-3xl"></div>
                  <div className="absolute -z-10 -bottom-8 -right-8 w-64 h-64 rounded-full bg-gradient-radial from-secondary-500/10 to-transparent blur-3xl"></div>
                </div>
                
                <div data-aos="fade-left">
                  <div className="inline-flex items-center px-4 py-2 rounded-full backdrop-blur-md bg-primary-50 border border-primary-100 text-sm font-semibold text-primary-700 mb-6">
                    Focus Area {area.id}
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-neutral-800">
                    {area.title}
                  </h2>
                  
                  <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
                    {area.description}
                  </p>
                  
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <h3 className="text-xl font-semibold mb-4 font-heading text-neutral-800">
                      Key Initiatives
                    </h3>
                    <ul className="space-y-3">
                      {area.keyInitiatives.map((initiative, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="flex-shrink-0 h-6 w-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span className="text-neutral-700">{initiative}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </SectionLayout>
        </div>
      ))}
    </div>
  );
};

export default FocusAreaDetail; 
 