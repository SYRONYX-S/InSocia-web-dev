import React from 'react';
import { focusAreas } from '../../data/focusAreas';
import SectionLayout from '../../layouts/SectionLayout';
import { motion } from 'framer-motion';

const FocusAreasList = () => {
  return (
    <SectionLayout>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-xl group hover:shadow-xl transition-all duration-500 bg-white"
            >
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary-900/20 to-primary-900/60 z-10"></div>
                <img
                  src={`/images/focus-areas/${area.image}`}
                  alt={area.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80";
                  }}
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-heading font-bold mb-3 text-neutral-800 group-hover:text-primary-700 transition-colors">
                  {area.title}
                </h3>
                <p className="text-neutral-600 mb-5">
                  {area.shortDescription}
                </p>
                
                <div className="border-t border-neutral-200 pt-4 mt-4">
                  <a 
                    href={`#${area.id}`} 
                    className="inline-flex items-center font-semibold text-primary-700 group-hover:text-primary-500 transition-colors"
                  >
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};

export default FocusAreasList; 