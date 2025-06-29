import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck, FiUsers, FiTarget, FiGlobe } from 'react-icons/fi';

const PartnersCTA = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-lg"
              >
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                  <FiUsers className="w-4 h-4 text-primary-400" />
                  <span className="text-primary-300 font-medium text-sm">Join Our Network</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Become Our 
                  <span className="block bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                    Partner
                  </span>
                </h2>
                
                <p className="text-xl text-white/70 mb-10 leading-relaxed">
                  We're always looking to collaborate with organizations that share our vision of creating equitable and sustainable societies. Join our network of partners to leverage collective expertise and resources for greater impact.
                </p>
                
                <div className="space-y-6 mb-10">
                  {[
                    'Collaborate on innovative projects and initiatives',
                    'Access a network of expertise and resources',
                    'Create greater impact through collective action'
                  ].map((benefit, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <FiCheck className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-white/80 text-lg">{benefit}</p>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Link 
                    to="/contact" 
                    className="primary-btn"
                  >
                    Start Partnership
                    <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative p-8 md:p-12 lg:p-16 flex items-center justify-center"
            >
              <div className="text-center max-w-md">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-white mb-4">Our Partnership Approach</h3>
                  <p className="text-white/70 text-lg leading-relaxed">
                    We believe in building long-term, strategic relationships based on mutual trust, shared values, and complementary strengths.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6 mb-8">
                  {[
                    { icon: FiUsers, title: 'Collaborative', desc: 'Joint planning and execution' },
                    { icon: FiTarget, title: 'Strategic', desc: 'Aligned goals and objectives' },
                    { icon: FiGlobe, title: 'Impactful', desc: 'Measurable social outcomes' }
                  ].map((approach, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-left"
                    >
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                          <approach.icon className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-white">{approach.title}</h4>
                      </div>
                      <p className="text-white/70">{approach.desc}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-wrap justify-center gap-3">
                  {['Government', 'NGOs', 'Private Sector', 'Academia'].map((sector, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white/90 text-sm font-medium"
                    >
                      {sector}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersCTA; 