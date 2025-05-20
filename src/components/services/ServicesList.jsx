import React from 'react';
import SectionLayout from '../../layouts/SectionLayout';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaSearch, 
  FaTasks, 
  FaChartLine, 
  FaUserFriends, 
  FaLightbulb, 
  FaBalanceScale 
} from 'react-icons/fa';
import { services } from '../../data/services';

const ServicesList = () => {
  // Map of service icons
  const getServiceIcon = (iconName) => {
    const iconMap = {
      'research': <FaSearch className="text-3xl" />,
      'program': <FaTasks className="text-3xl" />,
      'monitoring': <FaChartLine className="text-3xl" />,
      'capacity': <FaUserFriends className="text-3xl" />,
      'strategy': <FaLightbulb className="text-3xl" />,
      'impact': <FaBalanceScale className="text-3xl" />
    };
    
    return iconMap[iconName] || <FaSearch className="text-3xl" />;
  };

  return (
    <SectionLayout className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
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
              <div className="p-8 flex flex-col h-full">
                <div className="mb-6">
                  {/* Blob background for icon */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary-100 rounded-2xl transform rotate-3 animate-blob opacity-70"></div>
                    <div className="relative w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 z-10">
                      {getServiceIcon(service.icon)}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-heading font-bold mb-4 text-neutral-800 group-hover:text-primary-700 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-neutral-600 mb-6 flex-grow">
                  {service.shortDescription}
                </p>
                
                <div className="border-t border-neutral-200 pt-4 mt-auto">
                  <Link 
                    to={`/services#${service.id}`} 
                    className="inline-flex items-center font-semibold text-primary-700 group-hover:text-primary-500 transition-colors"
                  >
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};

export default ServicesList; 