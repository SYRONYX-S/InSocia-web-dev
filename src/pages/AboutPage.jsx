import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiSearch, 
  FiTarget, 
  FiBarChart2, 
  FiHeart, 
  FiBriefcase, 
  FiUsers, 
  FiTrendingUp, 
  FiGlobe, 
  FiMic,
  FiArrowRight,
  FiCheckCircle
} from 'react-icons/fi';
import AboutHero from '../components/about/AboutHero';
import OurValues from '../components/about/OurValues';
import TeamSection from '../components/about/TeamSection';
import SectionLayout from '../layouts/SectionLayout';
// AOS for animations will be initialized in App.js globally

const AboutPage = () => {
  const services = [
    {
      id: 1,
      title: "Policy Research & Analysis",
      description: "Comprehensive research and sectoral analysis, delivering actionable insights into complex policy landscapes with regulatory assessments and strategic forecasting.",
      icon: FiSearch,
      features: ["Regulatory assessments", "Risk analysis", "Strategic forecasting"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "CSR Impact Evaluation",
      description: "Systematic evaluation of Corporate Social Responsibility initiatives to measure effectiveness and maximize social return on investment.",
      icon: FiTarget,
      features: ["CSR program assessment", "Impact measurement frameworks", "ROI analysis"],
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "ESG Evaluation and Rating",
      description: "Comprehensive ESG reporting and ratings using trusted methodologies to support better financial decisions and sustainability goals.",
      icon: FiBarChart2,
      features: ["ESG reporting", "Performance assessment", "Sustainability ratings"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      id: 4,
      title: "Philanthropic Program Assessment",
      description: "Evaluation of philanthropic funds and programs to ensure optimal resource allocation and maximum community benefit.",
      icon: FiHeart,
      features: ["Grant program review", "Beneficiary assessment", "Resource optimization"],
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 5,
      title: "Government Project Evaluation",
      description: "Independent evaluation of government projects and initiatives to assess effectiveness, efficiency, and social impact.",
      icon: FiBriefcase,
      features: ["Performance evaluation", "Cost-benefit analysis", "Policy recommendations"],
      color: "from-orange-500 to-amber-500"
    },
    {
      id: 6,
      title: "Project Management Services",
      description: "End-to-end management for social initiatives, from program design to execution with strategic planning and risk management.",
      icon: FiUsers,
      features: ["Project planning", "Implementation management", "Progress monitoring"],
      color: "from-teal-500 to-cyan-500"
    },
    {
      id: 7,
      title: "Monitoring & Evaluation (M&E)",
      description: "Robust M&E frameworks and reporting tools supporting real-time progress tracking and evidence-based program improvement.",
      icon: FiTrendingUp,
      features: ["M&E framework design", "Data collection systems", "Impact measurement"],
      color: "from-violet-500 to-purple-500"
    },
    {
      id: 8,
      title: "Social Impact Research",
      description: "Rigorous social research including Insocia FR (Field Research) and Insocia GR (Ground Research) methodologies for evidence-based insights.",
      icon: FiGlobe,
      features: ["Baseline studies", "Community needs analysis", "Impact assessments"],
      color: "from-blue-500 to-indigo-500"
    },
    {
      id: 9,
      title: "Advocacy & Policy Development",
      description: "Strategic advocacy campaigns and policy reform initiatives with roadmap development, policy briefs, and coalition building.",
      icon: FiMic,
      features: ["Advocacy strategies", "Policy brief creation", "Campaign implementation"],
      color: "from-emerald-500 to-green-500"
    }
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Insocia Consultancy",
    "url": "https://insocia.in", // Replace with actual domain
    "logo": "https://insocia.in/images/logo.png", // Replace with actual logo URL
    "description": "Insocia Consultancy is dedicated to advancing equitable social policies through rigorous research, innovative solutions, and impactful action. Learn about our story, mission, vision, and the team driving social change.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "AECS Layout, Sanjayanagara, Bengaluru, Karnataka 560094",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560094",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "connect@insocia.in",
      "telephone": "+91-701-234-5678",
      "contactType": "general inquiries"
    },
    "sameAs": [
      "https://www.linkedin.com/company/insocia-consultancy"
    ]
    // "sameAs": [ // Add social media links if available
    //   "https://www.facebook.com/insocia",
    //   "https://www.twitter.com/insocia",
    //   "https://www.linkedin.com/company/insocia"
    // ]
  };

  return (
    <>
      <Helmet>
        <title>About Us | Insocia Consultancy</title>
        <meta 
          name="description" 
          content="Discover Insocia's commitment to creating equitable societies. Explore our story, mission, vision, core values, and the dedicated team behind our impactful social development work." 
        />
        <meta 
          name="keywords" 
          content="about Insocia, social development consultancy, our mission, our vision, our values, Insocia team, policy research, social impact" 
        />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      <AboutHero />
      
      {/* Why Insocia Section */}
      <SectionLayout bgColor="bg-transparent" className="py-16 md:py-24">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/15 to-secondary-500/15 border border-primary-400/30 rounded-full px-6 py-3 mb-8">
              <FiCheckCircle className="w-4 h-4 text-primary-600" />
              <span className="text-sm font-semibold text-primary-700 uppercase tracking-wider">Why Choose Us</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-neutral-900 leading-tight">
              Why <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">Insocia?</span>
            </h2>
            
            <p className="responsive-desc text-lg md:text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Our commitment to excellence, innovation, and impact sets us apart in the development consulting landscape.
            </p>
          </motion.div>
        </div>

        {/* Why Insocia Grid */}
        <div className="flex flex-wrap justify-center gap-8 mb-16 responsive-grid-small">
          {[
            {
              title: "Evidence-Based",
              description: "All recommendations rooted in rigorous research and best-in-class analytics.",
              icon: FiSearch,
              color: "from-blue-500 to-cyan-500"
            },
            {
              title: "Multidisciplinary Team", 
              description: "Expertise across research, policy, management, and impact.",
              icon: FiUsers,
              color: "from-green-500 to-emerald-500"
            },
            {
              title: "Stakeholder-Centric",
              description: "We elevate the needs and voices of communities in every project.",
              icon: FiHeart,
              color: "from-purple-500 to-indigo-500"
            },
            {
              title: "Results-Focused",
              description: "Tangible, measurable outcomes define our approach.",
              icon: FiTrendingUp,
              color: "from-orange-500 to-amber-500"
            },
            {
              title: "Uncompromising Ethics",
              description: "Integrity and transparency guide all our work.",
              icon: FiCheckCircle,
              color: "from-teal-500 to-cyan-500"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden w-full sm:w-8/12 md:w-5/12 lg:w-[30%]"
            >
              <div className="relative backdrop-blur-md bg-white/80 rounded-2xl border border-neutral-200/50 hover:border-primary-400/50 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-primary-200/30 overflow-hidden h-full p-8">
                
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-neutral-900 group-hover:text-primary-700 transition-colors duration-300 mb-4">
                    {item.title}
                  </h3>
                  
                  <p className="text-neutral-600 group-hover:text-neutral-700 transition-colors duration-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/0 via-primary-500/20 to-primary-500/0 blur-sm"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionLayout>

      {/* Who We Serve Section */}
      <SectionLayout bgColor="bg-gradient-to-br from-neutral-50 to-neutral-100/50" className="py-16 md:py-24">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/15 to-secondary-500/15 border border-primary-400/30 rounded-full px-6 py-3 mb-8">
              <FiGlobe className="w-4 h-4 text-primary-600" />
              <span className="text-sm font-semibold text-primary-700 uppercase tracking-wider">Our Clients</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-neutral-900 leading-tight">
              Who We <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">Serve</span>
            </h2>
            
            <p className="responsive-desc text-lg md:text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed mb-12">
              We partner with diverse organizations across sectors to drive meaningful social change and sustainable development.
            </p>
          </motion.div>
        </div>

        {/* Target Audiences Grid */}
        <div className="flex flex-wrap justify-center gap-8 mb-16 responsive-grid-small">
          {[
            {
              title: "Corporates",
              description: "Enhance the social and business value of your CSR and ESG initiatives with evidence-based, action-oriented evaluation.",
              icon: FiBriefcase,
              color: "from-blue-500 to-cyan-500",
              features: ["CSR Impact Assessment", "ESG Evaluation & Rating", "Sustainability Strategy"]
            },
            {
              title: "Government Agencies",
              description: "Improve programs and policy with independent reviews and data-backed insights.",
              icon: FiSearch,
              color: "from-green-500 to-emerald-500",
              features: ["Policy Analysis", "Program Evaluation", "Impact Assessment"]
            },
            {
              title: "NGOs & Nonprofits",
              description: "Amplify your mission with rigorous impact assessment, advocacy strategies, and institutional strengthening.",
              icon: FiHeart,
              color: "from-purple-500 to-indigo-500",
              features: ["Impact Measurement", "Advocacy Support", "Capacity Building"]
            },
            {
              title: "Philanthropy",
              description: "Maximize the effectiveness and transparency of your giving through robust, independent evaluation and reporting.",
              icon: FiTarget,
              color: "from-orange-500 to-amber-500",
              features: ["Grant Assessment", "Impact Evaluation", "Strategic Advisory"]
            }
          ].map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden w-full md:w-5/12"
            >
              <div className="relative backdrop-blur-md bg-white/80 rounded-2xl border border-neutral-200/50 hover:border-primary-400/50 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-primary-200/30 overflow-hidden h-full p-8">
                
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${audience.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <audience.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-neutral-900 group-hover:text-primary-700 transition-colors duration-300 mb-4">
                    {audience.title}
                  </h3>
                  
                  <p className="text-neutral-600 group-hover:text-neutral-700 transition-colors duration-300 leading-relaxed mb-6">
                    {audience.description}
                  </p>

                  {/* Key Services */}
                  <div className="space-y-2">
                    {audience.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <FiCheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0" />
                        <span className="text-sm text-neutral-600 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/0 via-primary-500/20 to-primary-500/0 blur-sm"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionLayout>

      {/* Core Competencies Section */}
      <SectionLayout bgColor="bg-transparent" className="py-16 md:py-24">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/15 to-secondary-500/15 border border-primary-400/30 rounded-full px-6 py-3 mb-8">
              <FiTrendingUp className="w-4 h-4 text-primary-600" />
              <span className="text-sm font-semibold text-primary-700 uppercase tracking-wider">Our Expertise</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-neutral-900 leading-tight">
              Core <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">Competencies</span>
            </h2>
            
            <p className="responsive-desc text-lg md:text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Our diverse expertise spans multiple disciplines, enabling comprehensive solutions for complex development challenges.
            </p>
          </motion.div>
        </div>

        {/* Core Competencies Grid */}
        <div className="flex flex-wrap justify-center gap-6 mb-16 responsive-grid-small">
          {[
            {
              title: "Social Research Methodologies",
              icon: FiSearch,
              color: "from-blue-500 to-cyan-500"
            },
            {
              title: "Policy Analysis & Development",
              icon: FiBarChart2,
              color: "from-green-500 to-emerald-500"
            },
            {
              title: "Impact Measurement & Evaluation",
              icon: FiTrendingUp,
              color: "from-purple-500 to-indigo-500"
            },
            {
              title: "Project Management & Implementation",
              icon: FiBriefcase,
              color: "from-orange-500 to-amber-500"
            },
            {
              title: "Stakeholder Engagement & Consultation",
              icon: FiUsers,
              color: "from-teal-500 to-cyan-500"
            },
            {
              title: "Data Analysis & Visualization",
              icon: FiBarChart2,
              color: "from-pink-500 to-rose-500"
            },
            {
              title: "Advocacy Strategy & Campaign Design",
              icon: FiMic,
              color: "from-violet-500 to-purple-500"
            }
          ].map((competency, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden w-full sm:w-8/12 md:w-5/12 lg:w-[30%]"
            >
              <div className="relative backdrop-blur-md bg-white/80 rounded-xl border border-neutral-200/50 hover:border-primary-400/50 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-primary-200/30 overflow-hidden h-full p-6">
                
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 flex items-center gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${competency.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md flex-shrink-0`}>
                    <competency.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-primary-700 transition-colors duration-300 leading-tight">
                    {competency.title}
                  </h3>
                </div>

                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-500/0 via-primary-500/10 to-primary-500/0 blur-sm"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionLayout>
      
      {/* Services Introduction Section */}
      <SectionLayout bgColor="bg-transparent" className="py-16 md:py-24">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/15 to-secondary-500/15 border border-primary-400/30 rounded-full px-6 py-3 mb-8">
              <FiBriefcase className="w-4 h-4 text-primary-600" />
              <span className="text-sm font-semibold text-primary-700 uppercase tracking-wider">Our Services</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-neutral-900 leading-tight">
              Comprehensive Professional <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">Services</span>
            </h2>
            
                          <p className="responsive-desc text-lg md:text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Through our comprehensive range of professional services, we are committed to fostering institutional excellence, 
              promoting transparent governance, and building sustainable pathways for inclusive economic growth and social empowerment.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden"
            >
              <div className="relative backdrop-blur-md bg-white/80 rounded-2xl border border-neutral-200/50 hover:border-primary-400/50 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-primary-200/30 overflow-hidden h-full p-8">
                
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-neutral-900 group-hover:text-primary-700 transition-colors duration-300 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-neutral-600 group-hover:text-neutral-700 transition-colors duration-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Key Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <FiCheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0" />
                        <span className="text-sm text-neutral-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/0 via-primary-500/20 to-primary-500/0 blur-sm"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="backdrop-blur-md bg-gradient-to-br from-primary-50/80 to-secondary-50/80 rounded-3xl border border-primary-200/50 p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">
              Ready to Create Meaningful Impact?
            </h3>
            <p className="responsive-desc text-lg text-neutral-600 mb-8 leading-relaxed">
              Partner with us to unlock greater social impact through rigorous research, independent evaluation, and strategic advocacy. 
              Let's build evidence-based solutions that drive transformative change.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/services"
                className="primary-btn"
              >
                <span>Explore Our Services</span>
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-white/80 hover:bg-white border border-neutral-300 hover:border-primary-400 text-neutral-700 hover:text-primary-700 font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg backdrop-blur-sm"
              >
                <span>Discuss Your Project</span>
              </Link>
            </div>
            
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Evidence-Based", desc: "Research-driven solutions" },
                { label: "Multidisciplinary", desc: "Expert team approach" },
                { label: "Results-Focused", desc: "Measurable outcomes" },
                { label: "Ethical Standards", desc: "Integrity & transparency" }
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-sm font-semibold text-primary-700 mb-1">{item.label}</div>
                  <div className="text-xs text-neutral-600">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </SectionLayout>

      <OurValues />
      <TeamSection />

      {/* Consider adding a CTA section if it fits the flow */}
      {/* 
      <SectionLayout className="py-16 md:py-24 bg-neutral-800/50">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Work With Us</h2>
          <p className="text-neutral-300 mb-8 max-w-xl mx-auto">
            Interested in collaborating or learning more about our projects? We'd love to hear from you.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </SectionLayout> 
      */}
    </>
  );
};

export default AboutPage; 