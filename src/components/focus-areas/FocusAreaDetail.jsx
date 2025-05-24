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
        <div className="absolute w-[400px] h-[400px] -top-20 -left-20 bg-gradient-to-br from-secondary-500/8 to-primary-500/2 rounded-full blur-3xl"></div>
        <div className="absolute w-[300px] h-[300px] bottom-0 right-0 bg-gradient-to-tl from-primary-500/8 to-secondary-500/2 rounded-full blur-3xl"></div>
      </div>

      {focusAreas.map((area, index) => {
        const isEven = index % 2 === 0;
        
        return (
          <motion.div
            key={area.id}
            id={generateAnchorId(area.title)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative z-10 scroll-mt-32"
          >
            {/* Alternating Layout */}
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
              
              {/* Image Section */}
              <motion.div 
                className={`relative group ${!isEven ? 'lg:col-start-2' : ''}`}
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-gradient-to-br from-white/5 to-white/1 backdrop-blur-sm">
                  <img
                    src={`/images/focus-areas/${area.image}`}
                    alt={area.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 to-transparent"></div>
                  
                  {/* Area number overlay */}
                  <div className="absolute top-6 left-6 w-16 h-16 bg-gradient-to-br from-secondary-500/90 to-primary-500/90 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 shadow-lg">
                    <span className="text-lg font-bold text-white">#{area.id.toString().padStart(2, '0')}</span>
                  </div>
                </div>
                
                {/* Floating decorative elements */}
                <div className={`absolute -z-10 ${isEven ? '-top-8 -left-8' : '-top-8 -right-8'} w-32 h-32 rounded-full bg-gradient-to-br from-secondary-500/15 to-primary-500/10 blur-2xl`}></div>
                <div className={`absolute -z-10 ${isEven ? '-bottom-8 -right-8' : '-bottom-8 -left-8'} w-24 h-24 rounded-full bg-gradient-to-tl from-primary-500/15 to-secondary-500/10 blur-2xl`}></div>
              </motion.div>
              
              {/* Content Section */}
              <motion.div 
                className={`space-y-8 ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {/* Premium badge */}
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-secondary-500/20 to-primary-500/20 border border-secondary-400/30 rounded-full px-6 py-3">
                  <FiTarget className="w-5 h-5 text-secondary-400" />
                  <span className="text-sm font-semibold text-secondary-300 uppercase tracking-wider">Focus Area {area.id}</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary-400 to-primary-400">
                    {area.title}
                  </span>
                </h2>
                
                <p className="text-xl md:text-2xl text-neutral-200 leading-relaxed">
                  {area.description}
                </p>
                
                {/* Impact Metrics - Horizontal Layout */}
                <div className="flex gap-6">
                  <div className="flex items-center gap-3 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl px-6 py-4">
                    <FiUsers className="w-8 h-8 text-secondary-400" />
                    <div>
                      <p className="text-lg font-semibold text-white">Community</p>
                      <p className="text-sm text-white/60">Focused</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl px-6 py-4">
                    <FiTrendingUp className="w-8 h-8 text-secondary-400" />
                    <div>
                      <p className="text-lg font-semibold text-white">Sustainable</p>
                      <p className="text-sm text-white/60">Impact</p>
                    </div>
                  </div>
                </div>
                
                {/* Key Initiatives - Streamlined */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <FiCheckCircle className="w-6 h-6 text-secondary-400" />
                    <h3 className="text-2xl font-bold text-white">Key Initiatives</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {area.keyInitiatives.map((initiative, idx) => (
                      <div key={idx} className="flex items-start gap-3 group">
                        <div className="w-8 h-8 bg-gradient-to-br from-secondary-500/30 to-primary-500/30 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 border border-secondary-400/20 group-hover:scale-110 transition-transform duration-300">
                          <FiCheckCircle className="w-4 h-4 text-secondary-400" />
                        </div>
                        <span className="text-neutral-300 group-hover:text-neutral-200 transition-colors duration-300 leading-relaxed font-medium">
                          {initiative}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <button className="inline-flex items-center gap-3 bg-gradient-to-r from-secondary-600 to-primary-600 hover:from-secondary-700 hover:to-primary-700 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-secondary-500/25 group text-lg">
                    <span>Learn More</span>
                    <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Subtle separator line for visual break */}
            {index < focusAreas.length - 1 && (
              <div className="flex justify-center mt-20">
                <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default FocusAreaDetail; 
 