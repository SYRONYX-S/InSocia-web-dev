import React from 'react';
import SectionLayout from '../../layouts/SectionLayout';
import { motion } from 'framer-motion';

const PartnerLogos = () => {
  // Updated to include new partner logos from images/partners directory
  const pastCollaborations = [
    {
      id: 'partner1',
      name: 'Impact',
      logo: '/images/partners/impact-dash.png',
      type: 'NGO'
    },
    {
      id: 'partner2',
      name: 'CIGI',
      logo: '/images/partners/cigi.png',
      type: 'Research Institute'
    },
    {
      id: 'partner3',
      name: 'MSSRF',
      logo: '/images/partners/mssrf.png',
      type: 'Government'
    },
    {
      id: 'partner4',
      name: 'People\'s Foundation',
      logo: '/images/partners/peoples-foundation.png',
      type: 'NGO'
    },
    {
      id: 'partner5',
      name: 'IIMAD',
      logo: '/images/partners/iimad.png',
      type: 'Research Institute'
    },
    {
      id: 'partner6',
      name: 'Magic Bus',
      logo: '/images/partners/magic-bus.png',
      type: 'NGO'
    },
    {
      id: 'partner7',
      name: 'StepBeta',
      logo: '/images/partners/stepbeta.png',
      type: 'Private Sector'
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-neutral-50 via-primary-50/30 to-neutral-50 relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent"></div>
      
      <div className="relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Past Collaborations Section */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-100/80 backdrop-blur-sm text-primary-700 rounded-full mb-3">
              Partnerships for Impact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-neutral-900">
              Past <span className="text-primary-600">Collaborations</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              We've worked with diverse organizations to create sustainable solutions for complex social challenges.
            </p>
          </motion.div>
          
          {/* Horizontal curved band with logos - original design */}
          <motion.div 
            variants={itemVariants}
            className="relative py-10 px-6 md:px-10 backdrop-blur-md bg-white/70 rounded-full border border-neutral-200/50 mb-16 overflow-hidden"
          >
            {/* Abstract decorative element */}
            <div className="absolute -top-24 right-1/4 w-48 h-48 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 left-1/4 w-48 h-48 bg-gradient-to-r from-secondary-500/20 to-primary-500/20 rounded-full blur-3xl"></div>
            
            <div className="relative flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-10 partner-logos-container">
              {pastCollaborations.map((partner) => (
                <div 
                  key={partner.id}
                  className="grayscale hover:grayscale-0 transition-all duration-500 transform hover:scale-110"
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="h-10 md:h-14 brightness-[0.3] hover:brightness-100 filter contrast-[1.2] hover:contrast-100 opacity-70 hover:opacity-100 transition-all duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Strategic Partners Section */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900">
              Our Strategic <span className="text-primary-600">Partners</span>
            </h2>
            <p className="responsive-desc text-lg text-neutral-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Insocia believes in the power of collaboration to amplify social impact. We work with 
              specialized partners who share our commitment to evidence-based solutions and 
              community empowerment.
            </p>
          </motion.div>

          {/* Partner Details */}
          <motion.div variants={itemVariants} className="space-y-16">
            {/* Partner 1: TrashTrek Ecosolutions */}
            <div className="backdrop-blur-md bg-white/80 rounded-2xl border border-neutral-200/50 p-8 md:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-1">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">Partner 1: TrashTrek Ecosolutions</h3>
                  <div className="w-full h-32 bg-neutral-100/50 rounded-xl border border-neutral-200/50 flex items-center justify-center mb-4 p-6">
                    <img 
                      src="/images/partners/trash-trek.webp" 
                      alt="TrashTrek Ecosolutions" 
                      className="h-full w-auto object-contain max-w-full"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-sm text-neutral-600 mb-2">
                    <strong>Website:</strong> <a href="https://trashtrekes.com/" className="text-primary-600 hover:text-primary-700" target="_blank" rel="noopener noreferrer">https://trashtrekes.com/</a>
                  </p>
                  <p className="text-sm text-neutral-600 mb-4">
                    <strong>Partnership Focus:</strong> Environmental Sustainability & Waste Management
                  </p>
                </div>
                
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-neutral-900 mb-3">Description</h4>
                    <p className="text-neutral-600 leading-relaxed">
                      TrashTrek Ecosolutions (<a href="https://trashtrekes.com/" className="text-primary-600 hover:text-primary-700" target="_blank" rel="noopener noreferrer">https://trashtrekes.com/</a>) is our 
                      environmental sustainability partner, specializing in comprehensive waste management 
                      solutions, community engagement, and environmental awareness programs. Together 
                      with TrashTrek, we evaluate environmental initiatives, conduct waste management 
                      impact assessments, and develop evidence-based strategies for sustainable waste 
                      processing systems across communities and organizations.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-neutral-900 mb-3">Joint Services</h4>
                    <ul className="space-y-2">
                      {[
                        "Environmental impact evaluation of waste management programs",
                        "CSR assessment for corporate environmental initiatives", 
                        "Policy research on waste management and circular economy",
                        "Community engagement evaluation in environmental projects",
                        "Monitoring & evaluation of sustainability programs"
                      ].map((service, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary-500 mt-2 flex-shrink-0"></div>
                          <span className="text-neutral-600">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Partner 2: TutKiD */}
            <div className="backdrop-blur-md bg-white/80 rounded-2xl border border-neutral-200/50 p-8 md:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-1">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">Partner 2: TutKiD</h3>
                  <div className="w-full h-32 bg-neutral-100/50 rounded-xl border border-neutral-200/50 flex items-center justify-center mb-4 p-6">
                    <img 
                      src="/images/partners/tutkid.webp" 
                      alt="TutKiD" 
                      className="h-full w-auto object-contain max-w-full"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-sm text-neutral-600 mb-4">
                    <strong>Partnership Focus:</strong> Education & Child Development
                  </p>
                </div>
                
                <div className="lg:col-span-2">
                  <div>
                    <h4 className="text-lg font-semibold text-neutral-900 mb-3">Description</h4>
                    <p className="text-neutral-600 leading-relaxed">
                      TutKiD is our education and child development partner, focused on 
                      innovative learning solutions and educational program delivery. Through this strategic 
                      partnership, we combine rigorous evaluation methodologies with practical educational 
                      implementation to assess learning outcomes, evaluate educational interventions, and 
                      develop evidence-based strategies that improve educational access and quality for 
                      children.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Call to action for partnership */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <a 
              href="/contact" 
              className="secondary-btn text-base backdrop-blur-sm px-6 py-3"
            >
              Become a Partner
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerLogos; 