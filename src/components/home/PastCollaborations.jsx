import React from 'react';
import SectionLayout from '../../layouts/SectionLayout';
import { motion } from 'framer-motion';

const PastCollaborations = () => {
  // Updated to include past collaboration logos from images/partners directory
  const pastCollaborations = [
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
    },
    {
      id: 'partner5',
      name: 'IIMAD',
      logo: '/images/partners/iimad.png',
      type: 'Research Institute'
    },
    {
      id: 'partner6',
      name: 'Magic Bus',
      logo: '/images/partners/magic-bus.png',
      type: 'NGO'
    },
    {
      id: 'partner7',
      name: 'StepBeta',
      logo: '/images/partners/stepbeta.png',
      type: 'Private Sector'
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
      <div className="absolute inset-0 opacity-5"></div>
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent"></div>
      
      <div className="relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Past Collaborations Section */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-100/80 backdrop-blur-sm text-primary-700 rounded-full mb-3">
              Partnerships for Impact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-neutral-900">
              Past <span className="text-primary-600">Collaborations</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              We've worked with diverse organizations to create sustainable solutions for complex social challenges.
            </p>
          </motion.div>
          
          {/* Horizontal curved band with logos - original design */}
          <motion.div 
            variants={itemVariants}
            className="relative py-10 px-6 md:px-10 backdrop-blur-md bg-white/70 rounded-full border border-neutral-200/50 overflow-hidden"
          >
            {/* Abstract decorative element */}
            <div className="absolute -top-24 right-1/4 w-48 h-48 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 left-1/4 w-48 h-48 bg-gradient-to-r from-secondary-500/20 to-primary-500/20 rounded-full blur-3xl"></div>
            
            <div className="relative flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-10 partner-logos-container">
              {pastCollaborations.map((partner) => (
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
        </motion.div>
      </div>
    </section>
  );
};

export default PastCollaborations; 