import React from 'react';
import { Link } from 'react-router-dom';
import { defaultAnimations } from '../../utils/animations';
import { FiArrowRight, FiCheckCircle, FiTrendingUp, FiUsers, FiTarget, FiZap } from 'react-icons/fi';

const ServiceCTA = () => {
  return (
    <div>
      {/* Premium Section Title */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-400/30 rounded-full px-6 py-3 mb-8">
          <FiZap className="w-4 h-4 text-primary-400" />
          <span className="text-sm font-semibold text-primary-300 uppercase tracking-wider">Ready to Start</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
          Transform Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400">Impact</span> Today
        </h2>
        <p className="text-xl text-neutral-200 max-w-4xl mx-auto leading-relaxed">
          Partner with us to drive meaningful social development through evidence-based solutions and collaborative innovation.
        </p>
      </div>

      <div className="relative mt-12">
        {/* Enhanced gradient background effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-primary-400 to-secondary-500 rounded-3xl blur-xl opacity-20"></div>
        <div className="absolute -inset-1 bg-gradient-to-br from-primary-500/50 to-secondary-500/50 rounded-3xl blur-lg opacity-10"></div>
        
        {/* Main content with enhanced glassmorphism */}
        <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
          {/* Enhanced top section */}
          <div className="p-8 md:p-12 border-b border-white/10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                  Drive Sustainable Change with Expert Guidance
                </h3>
                <p className="text-lg text-neutral-200 mb-8 leading-relaxed">
                  Our comprehensive approach combines rigorous research, innovative solutions, and proven implementation strategies to create lasting social impact.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/contact"
                    className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary-500/25"
                  >
                    Start Your Journey
                    <FiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  <Link 
                    to="/projects"
                    className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/30"
                  >
                    View Projects
                    <FiTarget className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
              
              {/* Enhanced feature cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-primary-400/30 transition-all duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-secondary-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <FiUsers className="w-6 h-6 text-primary-400" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-300 transition-colors">Expert Team</h4>
                    <p className="text-neutral-300 text-sm group-hover:text-neutral-200 transition-colors">
                      Seasoned professionals with diverse expertise in social development
                    </p>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-primary-400/30 transition-all duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-secondary-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <FiTrendingUp className="w-6 h-6 text-primary-400" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-300 transition-colors">Proven Impact</h4>
                    <p className="text-neutral-300 text-sm group-hover:text-neutral-200 transition-colors">
                      Track record of successful outcomes across multiple domains
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced bottom section with modern stats */}
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { number: '25+', label: 'Projects Completed', icon: FiCheckCircle },
              { number: '18', label: 'Countries Served', icon: FiTarget },
              { number: '40+', label: 'Partner Organizations', icon: FiUsers },
              { number: '100K+', label: 'Lives Impacted', icon: FiTrendingUp }
            ].map((stat, index) => (
              <div key={index} className="group p-6 md:p-8 text-center border-r border-white/10 last:border-r-0 hover:bg-white/5 transition-all duration-300">
                <stat.icon className="w-6 h-6 text-primary-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">{stat.number}</p>
                <p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCTA; 