import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiUsers, FiTarget, FiGlobe, FiTrendingUp, FiGrid, FiAward } from 'react-icons/fi';

const FocusAreaCTA = () => {
  return (
    <div className="relative">
      {/* Static background decoratives */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute w-[400px] h-[400px] -top-20 -left-20 bg-gradient-to-br from-secondary-500/8 to-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute w-[300px] h-[300px] bottom-0 right-0 bg-gradient-to-tl from-primary-500/8 to-secondary-500/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        {/* Premium CTA Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl shadow-secondary-500/5">
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary-600/5 to-primary-600/5 rounded-3xl"></div>
          
          {/* Content */}
          <div className="relative z-10 px-8 py-16 md:px-12 md:py-20 lg:px-16 lg:py-24 text-center">
            
            {/* Premium badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary-500/20 to-primary-500/20 border border-secondary-400/30 rounded-full px-6 py-3 mb-8">
              <FiAward className="w-4 h-4 text-secondary-400" />
              <span className="text-sm font-semibold text-secondary-300 uppercase tracking-wider">Ready to Create Impact</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Ready to <span className="block bg-clip-text text-transparent bg-gradient-to-r from-secondary-400 via-primary-400 to-secondary-400">
                Transform Communities
              </span> Together?
            </h2>
            
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
              Join us in creating evidence-based solutions that drive sustainable development across our strategic focus areas. Together, we can build a more equitable and sustainable future.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/projects" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-secondary-600 to-primary-600 hover:from-secondary-700 hover:to-primary-700 rounded-xl transition-all duration-300 shadow-lg hover:shadow-secondary-500/25 group"
              >
                <span>Explore Projects</span>
                <FiArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/30 rounded-xl transition-all duration-300"
              >
                Partner With Us
              </Link>
            </div>
            
            {/* Enhanced Impact Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { number: '6', label: 'Strategic Focus Areas', icon: FiGrid, color: 'from-secondary-400 to-primary-400' },
                { number: '25+', label: 'Active Projects', icon: FiTarget, color: 'from-primary-400 to-secondary-400' },
                { number: '18', label: 'Countries Served', icon: FiGlobe, color: 'from-secondary-400 to-primary-400' },
                { number: '100K+', label: 'Lives Impacted', icon: FiTrendingUp, color: 'from-primary-400 to-secondary-400' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-6 text-center group hover:bg-white/15 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary-500/20 to-primary-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300 border border-secondary-400/20">
                    <stat.icon className="w-6 h-6 text-secondary-400" />
                  </div>
                  <p className="text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</p>
                  <p className="text-sm text-white/70 font-medium leading-tight">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Additional feature highlights */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="flex items-center gap-3 text-left backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="w-10 h-10 bg-gradient-to-br from-secondary-500/30 to-primary-500/30 rounded-lg flex items-center justify-center border border-secondary-400/20">
                  <FiTarget className="w-5 h-5 text-secondary-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1">Evidence-Based</h3>
                  <p className="text-xs text-white/70">Research-driven solutions</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-left backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="w-10 h-10 bg-gradient-to-br from-secondary-500/30 to-primary-500/30 rounded-lg flex items-center justify-center border border-secondary-400/20">
                  <FiUsers className="w-5 h-5 text-secondary-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1">Collaborative</h3>
                  <p className="text-xs text-white/70">Community-centered approach</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-left backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="w-10 h-10 bg-gradient-to-br from-secondary-500/30 to-primary-500/30 rounded-lg flex items-center justify-center border border-secondary-400/20">
                  <FiTrendingUp className="w-5 h-5 text-secondary-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1">Sustainable</h3>
                  <p className="text-xs text-white/70">Long-term impact focus</p>
                </div>
              </div>
            </div>
          </div>

          {/* Animated border effect */}
          <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-secondary-400/0 via-secondary-400/10 to-secondary-400/0 blur-sm"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FocusAreaCTA; 