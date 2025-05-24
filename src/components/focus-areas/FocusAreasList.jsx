import React, { useState } from 'react';
import { focusAreas } from '../../data/focusAreas';
import { motion } from 'framer-motion';
import { FiArrowRight, FiUsers, FiTarget, FiTrendingUp } from 'react-icons/fi';

const FocusAreasList = () => {
  const [hoveredArea, setHoveredArea] = useState(null);

  // Helper function to generate anchor IDs from titles
  const generateAnchorId = (title) => {
    return title.toLowerCase()
      .replace(/\s+&\s+/g, '-')
      .replace(/\s+/g, '-')
      .replace(/[^\w-]/g, '');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {focusAreas.map((area, index) => (
        <motion.div
          key={area.id}
          id={generateAnchorId(area.title)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.4, 
            delay: index * 0.1,
            ease: [0.25, 0.1, 0.25, 1]
          }}
          viewport={{ once: true }}
          className="group relative overflow-hidden scroll-mt-32"
          onMouseEnter={() => setHoveredArea(area.id)}
          onMouseLeave={() => setHoveredArea(null)}
        >
          {/* Premium Card Design */}
          <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-secondary-400/30 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-secondary-500/10 overflow-hidden">
            
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary-600/5 to-primary-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Image Section with Overlay */}
            <div className="relative h-40 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-900/80 z-10"></div>
              <img
                src={`/images/focus-areas/${area.image}`}
                alt={area.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                }}
              />
              
              {/* Area number badge */}
              <div className="absolute top-3 right-3 z-20 w-7 h-7 bg-gradient-to-br from-secondary-500/20 to-primary-500/20 backdrop-blur-md rounded-full flex items-center justify-center border border-secondary-400/30">
                <span className="text-xs font-bold text-secondary-300">#{area.id.toString().padStart(2, '0')}</span>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="relative z-10 p-5">
              {/* Title and Icon */}
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg lg:text-xl font-bold text-white group-hover:text-secondary-300 transition-colors duration-300 leading-tight flex-1">
                  {area.title}
                </h3>
                <div className="w-8 h-8 bg-gradient-to-br from-secondary-500/20 to-primary-500/20 rounded-lg flex items-center justify-center ml-3 group-hover:scale-110 transition-all duration-300 border border-secondary-400/20">
                  <FiTarget className="w-4 h-4 text-secondary-400" />
                </div>
              </div>

              {/* Description */}
              <p className="text-neutral-300 group-hover:text-neutral-200 transition-colors duration-300 mb-4 leading-relaxed text-sm flex-grow">
                {area.shortDescription}
              </p>

              {/* Impact Stats Preview */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="bg-white/5 rounded-lg p-2 border border-white/10">
                  <FiUsers className="w-3 h-3 text-secondary-400 mb-1" />
                  <p className="text-xs text-white/60 uppercase tracking-wider">Impact Focus</p>
                  <p className="text-xs font-semibold text-white">Community</p>
                </div>
                <div className="bg-white/5 rounded-lg p-2 border border-white/10">
                  <FiTrendingUp className="w-3 h-3 text-secondary-400 mb-1" />
                  <p className="text-xs text-white/60 uppercase tracking-wider">Approach</p>
                  <p className="text-xs font-semibold text-white">Sustainable</p>
                </div>
              </div>

              {/* Hover Details */}
              <div className={`overflow-hidden transition-all duration-500 ${
                hoveredArea === area.id ? 'max-h-24 opacity-100 mb-3' : 'max-h-0 opacity-0'
              }`}>
                <div className="border-t border-white/10 pt-3">
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {area.description?.length > 80 
                      ? `${area.description.substring(0, 80)}...` 
                      : area.description || "Comprehensive approach to sustainable development in this critical sector."}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="flex items-center justify-between pt-3 border-t border-white/10">
                <a 
                  href={`#${generateAnchorId(area.title)}`}
                  className="inline-flex items-center gap-2 text-secondary-400 hover:text-secondary-300 transition-all duration-300 font-medium text-sm group/link"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(generateAnchorId(area.title));
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                  }}
                >
                  <span>View Details</span>
                  <FiArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform duration-300" />
                </a>
                
                {/* Focus indicator */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: 3 }).map((_, idx) => (
                    <div 
                      key={idx}
                      className="w-1 h-1 rounded-full bg-secondary-400/40 group-hover:bg-secondary-400/80 transition-colors duration-300"
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Animated border effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-secondary-400/0 via-secondary-400/20 to-secondary-400/0 blur-sm"></div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FocusAreasList; 