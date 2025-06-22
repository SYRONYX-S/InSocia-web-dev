import React from 'react';
import { motion } from 'framer-motion';
import { FiGlobe, FiUsers, FiBriefcase, FiBook, FiArrowRight, FiTrendingUp, FiDollarSign } from 'react-icons/fi';
import SEO from '../utils/seo';
import PartnersCTA from '../components/partnerships/PartnersCTA';

const PartnershipsPage = () => {
  const partnershipTypes = [
    {
      id: 'government',
      icon: FiBriefcase,
      title: 'Government Partners',
      description: 'We collaborate with government agencies at national, state, and local levels to strengthen policy design and implementation.',
      features: [
        'Policy development and advisory services',
        'Evidence synthesis for policy formulation',
        'Strategic planning for policy implementation',
        'Regulatory framework development',
        'Stakeholder engagement protocols'
      ],
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      id: 'development-orgs',
      icon: FiGlobe,
      title: 'Development Organizations',
      description: 'Insocia works with international development agencies and multilateral organizations to advance evidence-based approaches.',
      features: [
        'Program design and evaluation',
        'Capacity building initiatives',
        'Research collaboration',
        'Knowledge sharing platforms',
        'Best practices documentation'
      ],
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      id: 'civil-society',
      icon: FiUsers,
      title: 'Civil Society Organizations',
      description: 'Our partnerships with NGOs and civil society groups ensure that our work is grounded in community realities.',
      features: [
        'Community-centered research',
        'Grassroots engagement strategies',
        'Participatory evaluation methods',
        'Advocacy support',
        'Local knowledge integration'
      ],
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      id: 'academic',
      icon: FiBook,
      title: 'Academic Institutions',
      description: 'We maintain strong connections with research institutions to advance methodological innovation.',
      features: [
        'Joint research initiatives',
        'Methodological development',
        'Student exchange programs',
        'Publication partnerships',
        'Academic consultancy'
      ],
      gradient: 'from-orange-500 to-red-600'
    },
    {
      id: 'corporate',
      icon: FiDollarSign,
      title: 'Corporate & Foundation Partners',
      description: 'InSocia engages with corporate CSR initiatives and foundations to mobilize resources for social impact.',
      features: [
        'CSR program development',
        'Impact measurement frameworks',
        'Foundation partnerships',
        'Corporate giving strategies',
        'Sustainability initiatives'
      ],
      gradient: 'from-cyan-500 to-blue-600'
    }
  ];

  const stats = [
    { number: '50+', label: 'Active Partnerships' },
    { number: '15+', label: 'Countries' },
    { number: '100+', label: 'Joint Projects' },
    { number: '5M+', label: 'Lives Impacted' }
  ];

  return (
    <>
      <SEO 
        title="Partnerships | Insocia Consultancy"
        description="Discover our partnerships with governments, NGOs, international organizations, and private sector entities working together to create sustainable social impact."
        keywords={[
          'partnerships',
          'collaborations',
          'government partners',
          'NGO partners',
          'international organizations',
          'private sector partnerships',
          'development organizations',
          'civil society',
          'academic institutions'
        ]}
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-6 text-center text-white relative z-10 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
              <FiUsers className="w-5 h-5 text-primary-400" />
              <span className="text-primary-300 font-medium">Strategic Collaborations</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Building Bridges for
              <span className="block bg-gradient-to-r from-primary-400 via-secondary-400 to-emerald-400 bg-clip-text text-transparent">
                Sustainable Impact
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/80 mb-12 leading-relaxed">
              We collaborate with diverse partners across sectors to design evidence-based solutions 
              and create lasting change in communities worldwide.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6"
                >
                  <div className="text-3xl lg:text-4xl font-bold text-primary-400 mb-2">{stat.number}</div>
                  <div className="text-white/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a 
                href="#partnerships-overview"
                className="bg-primary-600/90 hover:bg-primary-500/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 group"
              >
                Explore Partnerships
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="mailto:partnerships@insocia.in"
                className="bg-white/5 hover:bg-white/10 border border-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Partner With Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Partnerships Overview */}
      <section id="partnerships-overview" className="py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
              <FiUsers className="w-5 h-5 text-primary-400" />
              <span className="text-primary-300 font-medium">Our Approach</span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold mb-8">
              Collaborative Network for
              <span className="block bg-gradient-to-r from-primary-400 via-secondary-400 to-emerald-400 bg-clip-text text-transparent">
                Change
              </span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-white/70 leading-relaxed max-w-4xl mx-auto">
              We believe that sustainable development requires collaboration across sectors, bringing together diverse expertise and perspectives to address complex social challenges.
            </p>
          </motion.div>

          <div className="mt-20 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-start gap-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <FiUsers className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Diverse Expertise</h3>
                  <p className="text-white/70 text-lg leading-relaxed">
                    Our partnerships span government agencies, international organizations, NGOs, 
                    academic institutions, and private sector entities.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-start gap-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <FiTrendingUp className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Amplified Impact</h3>
                  <p className="text-white/70 text-lg leading-relaxed">
                    By working together, we leverage collective resources, knowledge, and networks 
                    to create greater social impact than any single organization could achieve alone.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-start gap-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <FiUsers className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Shared Values</h3>
                  <p className="text-white/70 text-lg leading-relaxed">
                    All our partnerships are built on shared commitment to evidence-based approaches, 
                    equity, and sustainable development outcomes.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl"
            >
              <h3 className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent mb-8">Partnership Principles</h3>
              <ul className="space-y-6">
                {[
                  'Evidence-driven collaboration',
                  'Mutual respect and trust',
                  'Transparent communication',
                  'Shared accountability',
                  'Long-term commitment',
                  'Inclusive participation'
                ].map((principle, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full flex-shrink-0"></div>
                    <span className="text-white/90 text-lg">{principle}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      {partnershipTypes.map((type, index) => (
        <section key={type.id} id={type.id} className="py-32">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={index % 2 === 1 ? 'lg:order-2' : ''}
              >
                <div className="flex items-center gap-6 mb-8">
                  <div className={`w-20 h-20 bg-gradient-to-r ${type.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <type.icon className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold text-white">{type.title}</h2>
                </div>
                
                <p className="text-xl text-white/70 mb-10 leading-relaxed">
                  {type.description}
                </p>

                <div className="space-y-6">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Key Collaboration Areas:</h3>
                  <ul className="space-y-4">
                    {type.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                        className="flex items-center gap-4"
                      >
                        <div className={`w-3 h-3 bg-gradient-to-r ${type.gradient} rounded-full flex-shrink-0`}></div>
                        <span className="text-white/80 text-lg">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={index % 2 === 1 ? 'lg:order-1' : ''}
              >
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 shadow-2xl">
                  <div className="mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${type.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                      <type.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-3">Partnership Benefits</h3>
                    <p className="text-white/70 text-lg">
                      Discover how our collaborative approach creates value for all stakeholders
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    {[
                      { title: 'Knowledge Exchange', desc: 'Shared expertise and best practices' },
                      { title: 'Resource Optimization', desc: 'Efficient use of combined resources' },
                      { title: 'Amplified Reach', desc: 'Extended impact through networks' }
                    ].map((benefit, benefitIndex) => (
                      <motion.div 
                        key={benefitIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: benefitIndex * 0.1 }}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
                      >
                        <h4 className="font-bold text-white text-lg mb-2">{benefit.title}</h4>
                        <p className="text-white/70">{benefit.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      <PartnersCTA />
    </>
  );
};

export default PartnershipsPage; 