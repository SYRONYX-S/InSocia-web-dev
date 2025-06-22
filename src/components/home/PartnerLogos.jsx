import React from 'react';
import SectionLayout from '../../layouts/SectionLayout';
import { motion } from 'framer-motion';

const PartnerLogos = () => {
  // Updated to use actual partner logos from images/partners directory
  const partners = [
    {
      id: 'partner1',
      name: 'Impact',
      logo: '/images/partners/impact-dash.png',
      type: 'NGO'
    },
    {
      id: 'partner2',
      name: 'CIGI',
      logo: '/images/partners/cigi.png',
      type: 'Research Institute'
    },
    {
      id: 'partner3',
      name: 'MSSRF',
      logo: '/images/partners/mssrf.png',
      type: 'Government'
    },
    {
      id: 'partner4',
      name: 'People\'s Foundation',
      logo: '/images/partners/peoples-foundation.png',
      type: 'NGO'
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-neutral-50 via-primary-50/30 to-neutral-50 relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent"></div>
      
      <div className="relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          {/* Section header with centered design */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-100/80 backdrop-blur-sm text-primary-700 rounded-full mb-3">
              Partnerships for Impact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-neutral-900">
              Our <span className="text-primary-600">Partners</span> in Development
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              We collaborate with diverse organizations to create sustainable solutions for complex social challenges.
            </p>
          </motion.div>
          
          {/* Horizontal curved band with logos - unique layout */}
          <motion.div 
            variants={itemVariants}
            className="relative py-10 px-6 md:px-10 backdrop-blur-md bg-white/70 rounded-full border border-neutral-200/50 mb-12 overflow-hidden"
          >
            {/* Abstract decorative element */}
            <div className="absolute -top-24 right-1/4 w-48 h-48 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 left-1/4 w-48 h-48 bg-gradient-to-r from-secondary-500/20 to-primary-500/20 rounded-full blur-3xl"></div>
            
            <div className="relative flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
              {partners.map((partner) => (
                <div 
                  key={partner.id}
                  className="grayscale hover:grayscale-0 transition-all duration-500 transform hover:scale-110"
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="h-10 md:h-14 brightness-[0.3] hover:brightness-100 filter contrast-[1.2] hover:contrast-100 opacity-70 hover:opacity-100 transition-all duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Partner categories - tabular presentation */}
          <motion.div variants={itemVariants} className="mb-8">
            <h3 className="text-xl font-semibold text-neutral-900 text-center mb-6">Partnership Types</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="backdrop-blur-md bg-white/70 p-5 rounded-xl border border-neutral-200/50 text-center">
                <div className="w-12 h-12 rounded-full bg-primary-100/80 flex items-center justify-center text-primary-600 mx-auto mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-neutral-900 font-semibold mb-2">Research Institutions</h4>
                <p className="text-neutral-600 text-sm">Academic and research organizations contributing to evidence-based approaches</p>
              </div>
              
              <div className="backdrop-blur-md bg-white/70 p-5 rounded-xl border border-neutral-200/50 text-center">
                <div className="w-12 h-12 rounded-full bg-secondary-100/80 flex items-center justify-center text-secondary-600 mx-auto mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="text-neutral-900 font-semibold mb-2">NGOs & Foundations</h4>
                <p className="text-neutral-600 text-sm">Non-profit organizations that help implement grassroots initiatives</p>
              </div>
              
              <div className="backdrop-blur-md bg-white/70 p-5 rounded-xl border border-neutral-200/50 text-center">
                <div className="w-12 h-12 rounded-full bg-primary-100/80 flex items-center justify-center text-primary-600 mx-auto mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-neutral-900 font-semibold mb-2">Private Sector</h4>
                <p className="text-neutral-600 text-sm">Businesses and corporations providing resources and expertise</p>
              </div>
            </div>
          </motion.div>
          
          {/* Call to action for partnership */}
          <motion.div variants={itemVariants} className="text-center">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 backdrop-blur-sm rounded-lg transition-colors duration-300"
            >
              Become a Partner
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerLogos; 