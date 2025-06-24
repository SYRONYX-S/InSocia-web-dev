import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiTarget, FiUsers, FiCheckCircle, FiZap } from 'react-icons/fi';

const FocusAreaCTA = () => {
  return (
    <div className="relative">
      {/* Subtle background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 rounded-3xl"></div>
      
      <div className="relative backdrop-blur-md bg-white/90 rounded-3xl border border-neutral-200/50 overflow-hidden shadow-2xl shadow-primary-200/20">
        {/* Top section */}
        <div className="p-8 md:p-12 text-center border-b border-neutral-200/50">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/15 to-secondary-500/15 border border-primary-400/30 rounded-full px-6 py-3 mb-8">
            <FiZap className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-semibold text-primary-700 uppercase tracking-wider">Ready to Collaborate</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
            Partner with Us to Drive <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">Sustainable</span> Change
          </h2>
          
                      <p className="responsive-desc text-lg md:text-xl text-neutral-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Let's work together to create evidence-based solutions that address complex development challenges across our focus areas. Your expertise combined with our collaborative approach can make a lasting difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Link 
              to="/contact" 
                              className="primary-btn"
            >
              Start Partnership
              <FiArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/services" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-neutral-700 backdrop-blur-sm bg-white/80 hover:bg-white border border-neutral-200 hover:border-neutral-300 rounded-xl transition-all duration-300"
            >
              Our Services
            </Link>
          </div>
          
          {/* Focus area highlights */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 text-left backdrop-blur-md bg-white/80 border border-neutral-200/50 rounded-xl p-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-100/80 to-secondary-100/80 rounded-lg flex items-center justify-center border border-primary-200/50">
                <FiTarget className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-neutral-900 mb-1">Evidence-Based</h3>
                <p className="text-xs text-neutral-600">Research-driven solutions</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-left backdrop-blur-md bg-white/80 border border-neutral-200/50 rounded-xl p-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-100/80 to-secondary-100/80 rounded-lg flex items-center justify-center border border-primary-200/50">
                <FiUsers className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-neutral-900 mb-1">Collaborative</h3>
                <p className="text-xs text-neutral-600">Community-centered approach</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-left backdrop-blur-md bg-white/80 border border-neutral-200/50 rounded-xl p-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-100/80 to-secondary-100/80 rounded-lg flex items-center justify-center border border-primary-200/50">
                <FiCheckCircle className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-neutral-900 mb-1">Sustainable</h3>
                <p className="text-xs text-neutral-600">Long-term impact focus</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom section with stats */}
        <div className="grid grid-cols-2 md:grid-cols-4">
          {[
            { number: '6', label: 'Focus Areas', icon: FiTarget },
            { number: '100+', label: 'Projects Delivered', icon: FiCheckCircle },
            { number: '18', label: 'Countries Served', icon: FiUsers },
            { number: '500K+', label: 'Lives Impacted', icon: FiZap }
          ].map((stat, index) => (
            <div key={index} className="group p-6 md:p-8 text-center border-r border-neutral-200/50 last:border-r-0 hover:bg-primary-50/50 transition-all duration-300">
              <stat.icon className="w-6 h-6 text-primary-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2 group-hover:text-primary-700 transition-colors">{stat.number}</p>
              <p className="text-sm text-neutral-600 group-hover:text-neutral-700 transition-colors font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FocusAreaCTA; 