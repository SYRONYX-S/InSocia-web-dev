import React from 'react';
import { motion } from 'framer-motion';
import SectionLayout from '../../layouts/SectionLayout';

const MissionStatement = () => {
  // Simpler animation variants with improved performance
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <SectionLayout bgColor="bg-transparent" className="pb-20 relative z-10">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={container}
      >
        {/* Main heading with improved contrast and semantic structure */}
        <motion.div variants={item} className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-5 text-white">
            Our <span className="text-primary-400">Mission</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-200 mx-auto">
            At InSocia Development Consultancy, we create equitable societies through innovative policy approaches and rigorous research.
          </p>
        </motion.div>
        
        {/* Redesigned mission values layout - horizontal strip for better visual impact */}
        <motion.div 
          variants={item}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12"
        >
          <div className="backdrop-blur-md bg-neutral-800/30 p-6 rounded-xl border border-neutral-700/40 text-center">
            <div className="bg-primary-900/30 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-primary-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Research</h3>
            <p className="text-neutral-300 text-sm md:text-base">Conducting rigorous, evidence-based research to inform policy decisions and create lasting social impact.</p>
          </div>
          
          <div className="backdrop-blur-md bg-neutral-800/30 p-6 rounded-xl border border-neutral-700/40 text-center">
            <div className="bg-secondary-900/30 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-secondary-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Innovation</h3>
            <p className="text-neutral-300 text-sm md:text-base">Developing creative solutions to complex social challenges by embracing new methodologies and technologies.</p>
          </div>
          
          <div className="backdrop-blur-md bg-neutral-800/30 p-6 rounded-xl border border-neutral-700/40 text-center">
            <div className="bg-primary-900/30 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-primary-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Action</h3>
            <p className="text-neutral-300 text-sm md:text-base">Implementing practical solutions that create lasting impact through collaborative partnerships and community engagement.</p>
          </div>
        </motion.div>
        
        {/* Strategic objectives section - added for SEO and content improvement */}
        <div className="mb-14">
          <motion.h3 
            variants={item} 
            className="text-2xl md:text-3xl font-semibold mb-8 text-center text-white"
          >
            Our Strategic <span className="text-primary-400">Objectives</span>
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              variants={item}
              className="backdrop-blur-md bg-neutral-800/30 p-5 rounded-xl border border-neutral-700/40"
            >
              <div className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-900/30 flex items-center justify-center text-primary-400 mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-white">Sustainable Development</h4>
                  <p className="text-neutral-300">Promoting environmental, social, and economic sustainability through our development initiatives.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={item}
              className="backdrop-blur-md bg-neutral-800/30 p-5 rounded-xl border border-neutral-700/40"
            >
              <div className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-900/30 flex items-center justify-center text-primary-400 mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                  </svg>
                </span>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-white">Community Empowerment</h4>
                  <p className="text-neutral-300">Building capacity within communities to shape and participate in their own development agendas.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={item}
              className="backdrop-blur-md bg-neutral-800/30 p-5 rounded-xl border border-neutral-700/40"
            >
              <div className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-900/30 flex items-center justify-center text-primary-400 mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                </span>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-white">Evidence-Based Advocacy</h4>
                  <p className="text-neutral-300">Advocating for policies informed by rigorous research and community involvement.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={item}
              className="backdrop-blur-md bg-neutral-800/30 p-5 rounded-xl border border-neutral-700/40"
            >
              <div className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-900/30 flex items-center justify-center text-primary-400 mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </span>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-white">Knowledge Sharing</h4>
                  <p className="text-neutral-300">Disseminating insights and best practices to foster collaborative learning and innovation.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Mission statement callout - simplified for performance */}
        <motion.div
          variants={item}
          className="backdrop-blur-md bg-neutral-800/30 p-7 rounded-xl border border-neutral-700/40 relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold mb-3 text-white">Our Collaborative Approach</h3>
            <p className="text-neutral-200 mb-0 md:text-lg">
              Our institute serves as a collaborative platform where data-driven insights meet practical implementation to address complex social challenges and create sustainable change across communities.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </SectionLayout>
  );
};

export default MissionStatement; 