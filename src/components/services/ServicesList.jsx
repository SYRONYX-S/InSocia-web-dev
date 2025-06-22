import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { defaultAnimations, getStaggeredAnimation } from '../../utils/animations';
import { services } from '../../data/services';
import { 
  FiSearch, 
  FiUsers, 
  FiTrendingUp, 
  FiBox, 
  FiClipboard, 
  FiActivity, 
  FiCheckCircle, 
  FiBarChart2, 
  FiArrowRight,
  FiFileText,
  FiSettings,
  FiBookOpen,
  FiZap,
  FiTarget,
  FiGlobe
} from 'react-icons/fi';

const iconMap = {
  research: <FiSearch className="w-8 h-8 text-primary-600" />,
  policy: <FiFileText className="w-8 h-8 text-primary-600" />,
  project: <FiTarget className="w-8 h-8 text-primary-600" />,
  implementation: <FiSettings className="w-8 h-8 text-primary-600" />,
  monitoring: <FiBarChart2 className="w-8 h-8 text-primary-600" />,
  knowledge: <FiBookOpen className="w-8 h-8 text-primary-600" />,
  incubation: <FiZap className="w-8 h-8 text-primary-600" />,
};

// Helper function to generate anchor IDs from service titles
const generateAnchorId = (title) => {
  return title.toLowerCase()
    .replace(/\s+&\s+/g, '-')
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '');
};

const ServicesList = () => {
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div
          key={service.id}
          id={generateAnchorId(service.title)}
          className="group relative scroll-mt-32"
          {...getStaggeredAnimation(index)}
          onMouseEnter={() => setHoveredService(service.id)}
          onMouseLeave={() => setHoveredService(null)}
        >
          {/* Premium Card Design with light theme */}
          <div className="relative backdrop-blur-md bg-white/80 rounded-2xl p-8 border border-neutral-200/50 hover:border-primary-400/50 transition-all duration-500 h-full group-hover:shadow-xl group-hover:shadow-primary-200/30">
            
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Icon Container */}
            <div className="relative z-10 flex items-center justify-between mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100/80 to-secondary-100/80 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 border border-primary-200/50">
                {iconMap[service.icon] || <FiActivity className="w-8 h-8 text-primary-600" />}
              </div>
              <div className="text-right">
                <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Service</span>
                <div className="text-sm font-semibold text-neutral-600">#{service.id.toString().padStart(2, '0')}</div>
              </div>
            </div>

            {/* Title */}
            <h3 className="relative z-10 text-xl lg:text-2xl font-bold text-neutral-900 group-hover:text-primary-700 transition-colors duration-300 mb-4 leading-tight">
              {service.title}
            </h3>

            {/* Short Description */}
            <p className="relative z-10 text-neutral-600 group-hover:text-neutral-700 transition-colors duration-300 mb-6 leading-relaxed text-sm lg:text-base">
              {service.shortDescription}
            </p>

            {/* Features Preview */}
            {service.features && (
              <div className="relative z-10 mb-6">
                <div className="grid grid-cols-1 gap-2">
                  {service.features?.slice(0, 3).map((feature, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-2 text-xs text-neutral-500 group-hover:text-neutral-600 transition-colors duration-300"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-500/70"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Hover Details */}
            <div className={`relative z-10 overflow-hidden transition-all duration-500 ${
              hoveredService === service.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="border-t border-neutral-200/50 pt-4 mb-4">
                <p className="text-xs text-neutral-500 leading-relaxed">
                  {service.description.length > 120 
                    ? `${service.description.substring(0, 120)}...` 
                    : service.description
                  }
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="relative z-10 flex items-center justify-between mt-auto pt-4">
              <button 
                onClick={() => {
                  const element = document.getElementById(`service-detail-${generateAnchorId(service.title)}`);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-all duration-300 font-medium text-sm group/link"
              >
                <span>Explore Service</span>
                <FiArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
              </button>
              
              {/* Service indicator */}
              <div className="flex items-center gap-1">
                {Array.from({ length: 3 }).map((_, idx) => (
                  <div 
                    key={idx}
                    className="w-1 h-1 rounded-full bg-primary-500/50 group-hover:bg-primary-500/80 transition-colors duration-300"
                  ></div>
                ))}
              </div>
            </div>

            {/* Animated border effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/0 via-primary-500/20 to-primary-500/0 blur-sm"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesList; 