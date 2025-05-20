import React from 'react';
import { motion } from 'framer-motion';
import SectionLayout from '../../layouts/SectionLayout';

const PartnerLogos = () => {
  // Placeholder logos - replace with actual partner logos
  const partners = [
    {
      id: 'partner1',
      name: 'Impact',
      logo: 'https://via.placeholder.com/150x80?text=Impact'
    },
    {
      id: 'partner2',
      name: 'ID Log',
      logo: 'https://via.placeholder.com/150x80?text=ID+Log'
    },
    {
      id: 'partner3',
      name: 'CIGI',
      logo: 'https://via.placeholder.com/150x80?text=CIGI'
    },
    {
      id: 'partner4',
      name: 'People\'s Foundation',
      logo: 'https://via.placeholder.com/150x80?text=People\'s+Foundation'
    },
    {
      id: 'partner5',
      name: 'Globex',
      logo: 'https://via.placeholder.com/150x80?text=Globex'
    },
    {
      id: 'partner6',
      name: 'GreenLife',
      logo: 'https://via.placeholder.com/150x80?text=GreenLife'
    }
  ];
  
  // Simple animation variant
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <SectionLayout bgColor="bg-neutral-900" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">
            Our <span className="text-primary-400">Trusted Partners</span>
          </h2>
          <p className="text-lg text-neutral-200 max-w-2xl mx-auto">
            Collaborating with leading organizations to create sustainable impact
          </p>
        </motion.div>
        
        {/* Performance-optimized marquee */}
        <div className="relative bg-neutral-800 rounded-lg p-1 overflow-hidden">
          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-12 z-10 bg-gradient-to-r from-neutral-800 to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-12 z-10 bg-gradient-to-l from-neutral-800 to-transparent pointer-events-none"></div>
          
          {/* Simple marquee container */}
          <div className="overflow-hidden py-8">
            <div className="flex space-x-10 animate-marquee">
              {/* Using a single row with doubled logos for performance */}
              {[...partners, ...partners].map((partner, index) => (
                <div 
                  key={`${partner.id}-${index}`} 
                  className="flex-shrink-0 transition-opacity duration-300 hover:opacity-100"
                  title={partner.name}
                >
                  <div className="bg-neutral-700/50 hover:bg-neutral-700 border border-neutral-600 rounded-md p-4 transition-colors duration-300">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`}
                      className="h-12 w-auto object-contain filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partner highlight section - added for SEO and content value */}
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-neutral-800 rounded-lg p-6 border border-neutral-700">
              <h3 className="text-xl font-semibold mb-3 text-white">Government & Institutional Partners</h3>
              <p className="text-neutral-300">
                We work closely with government agencies, international organizations, and research institutions to 
                develop evidence-based policies and intervention strategies that address critical social challenges.
              </p>
            </div>
            <div className="bg-neutral-800 rounded-lg p-6 border border-neutral-700">
              <h3 className="text-xl font-semibold mb-3 text-white">Implementation & Funding Partners</h3>
              <p className="text-neutral-300">
                Our partnerships with NGOs, foundations, and corporate social responsibility initiatives help us 
                implement sustainable solutions and scale impact across communities.
              </p>
            </div>
          </div>
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-10">
          <a 
            href="/partnerships" 
            className="inline-flex items-center text-primary-400 hover:text-primary-300 font-medium transition-colors duration-300"
          >
            <span>Become a Partner</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </SectionLayout>
  );
};

export default PartnerLogos; 