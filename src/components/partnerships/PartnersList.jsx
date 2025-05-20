import React, { useState } from 'react';
import { partners } from '../../data/partners';
import { motion } from 'framer-motion';
import SectionLayout from '../../layouts/SectionLayout';

const PartnersList = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', ...new Set(partners.map(partner => partner.category))];
  
  const filteredPartners = filter === 'All' 
    ? partners 
    : partners.filter(partner => partner.category === filter);

  return (
    <SectionLayout>
      <div className="container mx-auto px-4">
        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center mb-12 border-b border-neutral-200" data-aos="fade-up">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`px-6 py-3 font-medium text-lg transition-all relative ${
                filter === category 
                  ? 'text-primary-700' 
                  : 'text-neutral-500 hover:text-neutral-800'
              }`}
              onClick={() => setFilter(category)}
            >
              {category}
              {filter === category && (
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-1 bg-primary-600"
                  layoutId="activeTab"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
        
        {/* Partners grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPartners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 group"
            >
              <div className="p-8">
                <div className="h-24 flex items-center justify-center mb-6 filter grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img
                    src={`/images/partners/${partner.logo}`}
                    alt={partner.name}
                    className="h-full object-contain"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/200x80?text=Partner+Logo";
                    }}
                  />
                </div>
                
                <div className="bg-primary-50/50 px-4 py-2 rounded-full inline-block text-sm font-medium text-primary-700 mb-4">
                  {partner.category}
                </div>
                
                <h3 className="text-xl font-heading font-bold mb-3 text-neutral-800">
                  {partner.name}
                </h3>
                
                <p className="text-neutral-600 mb-5">
                  {partner.description}
                </p>
                
                <div className="mt-auto">
                  <h4 className="text-sm font-semibold text-neutral-700 mb-2">Partner Projects:</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {partner.projects.map((project, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-full"
                      >
                        {project}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={partner.website} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-medium text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    Visit Website
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H3a1 1 0 110-2h9.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
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

export default PartnersList;