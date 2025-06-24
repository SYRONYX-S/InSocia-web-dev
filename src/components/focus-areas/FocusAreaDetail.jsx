import React from 'react';
import { focusAreas } from '../../data/focusAreas';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiTarget, FiUsers, FiTrendingUp, FiArrowRight } from 'react-icons/fi';

const FocusAreaDetail = () => {
  // Helper function to generate anchor IDs from titles
  const generateAnchorId = (title) => {
    return title.toLowerCase()
      .replace(/\s+&\s+/g, '-')
      .replace(/\s+/g, '-')
      .replace(/[^\w-]/g, '');
  };

  return (
    <div className="relative space-y-32">
      {/* Static background decoratives */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute w-[400px] h-[400px] -top-20 -left-20 bg-gradient-to-br from-primary-500/8 to-secondary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute w-[300px] h-[300px] bottom-0 right-0 bg-gradient-to-tl from-secondary-500/8 to-primary-500/5 rounded-full blur-3xl"></div>
      </div>

      {focusAreas.map((area, index) => {
        const isEven = index % 2 === 0;
        
        return (
          <motion.div
            key={area.id}
            id={`${generateAnchorId(area.title)}-detail`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center scroll-mt-32"
          >
            {/* Content */}
            <motion.div 
              className={`space-y-8 ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}
              initial={{ opacity: 0, x: isEven ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {/* Premium badge */}
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-500/15 to-secondary-500/15 border border-primary-400/30 rounded-full px-6 py-3">
                <FiTarget className="w-5 h-5 text-primary-600" />
                <span className="text-sm font-semibold text-primary-700 uppercase tracking-wider">Focus Area {area.id}</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
                  {area.title}
                </span>
              </h2>
              
              <p className="responsive-desc text-xl md:text-2xl text-neutral-600 leading-relaxed">
                {area.description}
              </p>
              
              {/* Impact Metrics - Horizontal Layout */}
              <div className="flex gap-6">
                <div className="flex items-center gap-3 backdrop-blur-md bg-white/80 border border-neutral-200/50 rounded-2xl px-6 py-4">
                  <FiUsers className="w-8 h-8 text-primary-600" />
                  <div>
                    <p className="text-lg font-semibold text-neutral-900">Community</p>
                    <p className="text-sm text-neutral-600">Focused</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 backdrop-blur-md bg-white/80 border border-neutral-200/50 rounded-2xl px-6 py-4">
                  <FiTrendingUp className="w-8 h-8 text-primary-600" />
                  <div>
                    <p className="text-lg font-semibold text-neutral-900">Sustainable</p>
                    <p className="text-sm text-neutral-600">Impact</p>
                  </div>
                </div>
              </div>
              
              {/* Key Initiatives - Streamlined */}
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-6 flex items-center gap-3">
                  <FiCheckCircle className="w-5 h-5 text-primary-600" />
                  Key Initiatives
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {area.keyInitiatives?.slice(0, 4).map((initiative, idx) => (
                    <div 
                      key={idx}
                      className="flex items-start gap-3 p-4 backdrop-blur-md bg-white/70 rounded-xl border border-neutral-200/50 hover:border-primary-300/50 transition-all duration-300 group"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary-500 mt-2 group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="text-sm text-neutral-700 group-hover:text-neutral-900 transition-colors font-medium">{initiative}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Visual Element */}
            <motion.div 
              className={`relative ${isEven ? 'lg:col-start-2 lg:row-start-1' : ''}`}
              initial={{ opacity: 0, x: isEven ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="relative backdrop-blur-md bg-white/80 rounded-2xl border border-neutral-200/50 overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500">
                <div className="aspect-square relative">
                  <img
                    src={`/images/focus-areas/${area.image}`}
                    alt={area.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/30 to-transparent"></div>
                  
                  {/* Overlay content */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h4 className="text-lg font-semibold mb-2 text-white drop-shadow-lg">{area.title}</h4>
                    <p className="text-sm text-white/95 drop-shadow-md">
                      {area.shortDescription?.substring(0, 80)}...
                    </p>
                  </div>
                </div>
                
                {/* Stats overlay */}
                <div className="absolute top-4 right-4 backdrop-blur-md bg-white/90 rounded-lg px-3 py-2 border border-neutral-200/50">
                  <span className="text-xs font-medium text-neutral-700">Area #{area.id}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FocusAreaDetail; 
 