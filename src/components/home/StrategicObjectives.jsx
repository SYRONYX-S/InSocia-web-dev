import React from 'react';
import { motion } from 'framer-motion';
import SectionLayout from '../../layouts/SectionLayout';
import { FiTarget } from 'react-icons/fi';

const StrategicObjectives = () => {
  // Animation variants
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
    <SectionLayout bgColor="bg-transparent" className="py-16 md:py-20 relative z-10">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={container}
      >
        {/* Strategic objectives section */}
        <div className="mb-14">
          <motion.div variants={item} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/20 rounded-full px-6 py-3 mb-8">
              <FiTarget className="w-4 h-4 text-primary-600" />
              <span className="text-sm font-semibold text-primary-700 uppercase tracking-wider">Strategic Objectives</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-neutral-900 leading-tight">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">Approach</span> to Change
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              variants={item}
              className="backdrop-blur-md bg-white/70 p-5 rounded-xl border border-neutral-200/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-200/30 hover:scale-[1.01] group"
            >
              <div className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100/70 flex items-center justify-center text-primary-600 mr-4 mt-1 transition-all duration-300 group-hover:bg-primary-200/80 group-hover:text-primary-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-neutral-900 group-hover:text-primary-700 transition-colors duration-300">Sustainable Development</h3>
                  <p className="text-neutral-600 group-hover:text-neutral-700 transition-colors duration-300">Promoting environmental, social, and economic sustainability through our development initiatives.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={item}
              className="backdrop-blur-md bg-white/70 p-5 rounded-xl border border-neutral-200/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-200/30 hover:scale-[1.01] group"
            >
              <div className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100/70 flex items-center justify-center text-primary-600 mr-4 mt-1 transition-all duration-300 group-hover:bg-primary-200/80 group-hover:text-primary-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-neutral-900 group-hover:text-primary-700 transition-colors duration-300">Community Empowerment</h3>
                  <p className="text-neutral-600 group-hover:text-neutral-700 transition-colors duration-300">Building capacity within communities to shape and participate in their own development agendas.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={item}
              className="backdrop-blur-md bg-white/70 p-5 rounded-xl border border-neutral-200/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-200/30 hover:scale-[1.01] group"
            >
              <div className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100/70 flex items-center justify-center text-primary-600 mr-4 mt-1 transition-all duration-300 group-hover:bg-primary-200/80 group-hover:text-primary-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-neutral-900 group-hover:text-primary-700 transition-colors duration-300">Evidence-Based Advocacy</h3>
                  <p className="text-neutral-600 group-hover:text-neutral-700 transition-colors duration-300">Advocating for policies informed by rigorous research and community involvement.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={item}
              className="backdrop-blur-md bg-white/70 p-5 rounded-xl border border-neutral-200/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-200/30 hover:scale-[1.01] group"
            >
              <div className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100/70 flex items-center justify-center text-primary-600 mr-4 mt-1 transition-all duration-300 group-hover:bg-primary-200/80 group-hover:text-primary-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-neutral-900 group-hover:text-primary-700 transition-colors duration-300">Knowledge Sharing</h3>
                  <p className="text-neutral-600 group-hover:text-neutral-700 transition-colors duration-300">Disseminating insights and best practices to foster collaborative learning and innovation.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </SectionLayout>
  );
};

export default StrategicObjectives; 