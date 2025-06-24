import React from 'react';
import { Helmet } from 'react-helmet';
import SectionLayout from '../layouts/SectionLayout';
import ServicesList from '../components/services/ServicesList';
import ServiceProcess from '../components/services/ServiceProcess';
import ServiceDetails from '../components/services/ServiceDetails';
import ServiceCTA from '../components/services/ServiceCTA';
import { Link } from 'react-router-dom';
import { FiUsers, FiBarChart2, FiTrendingUp, FiCheckCircle, FiTarget, FiZap, FiGlobe, FiAward, FiSearch, FiBriefcase, FiHeart, FiMic, FiArrowRight, FiShield, FiSettings } from 'react-icons/fi';
import SectionHeading from '../components/common/SectionHeading';

const ServicesPage = () => {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "Organization",
      "name": "Insocia Consultancy",
      "url": "https://insocia.in"
    },
    "serviceType": "Development Consultancy",
    "areaServed": "Global"
  };

  return (
    <>
      <Helmet>
        <title>Our Services | Insocia Consultancy - Evidence-Based Social Impact Solutions</title>
        <meta 
          name="description" 
          content="Comprehensive development consultancy services including research & analysis, policy design, project management, MEL, knowledge management, and NGO incubation. Transform social development through evidence-based solutions." 
        />
        <meta 
          name="keywords" 
          content="development consultancy, research analysis, policy design, project management, monitoring evaluation, knowledge management, NGO incubation, social impact, evidence-based solutions" 
        />
        <script type="application/ld+json">
          {JSON.stringify(servicesSchema)}
        </script>
      </Helmet>

      {/* Premium Hero Section - Light Theme */}
      <section className="relative bg-section-light overflow-hidden hero-section min-h-screen">
        {/* Static background effects - Light theme */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <div className="absolute w-[800px] h-[800px] -top-40 -left-40 bg-gradient-to-br from-primary-500/8 to-secondary-500/6 rounded-full blur-3xl"></div>
          <div className="absolute w-[600px] h-[600px] bottom-0 right-0 bg-gradient-to-tl from-secondary-500/8 to-primary-500/5 rounded-full blur-3xl"></div>
          <div className="absolute w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary-600/5 to-secondary-600/5 rounded-full blur-2xl"></div>
        </div>

        <div className="w-full px-4 md:px-8 relative z-10 flex items-center min-h-screen mt-16 sm:mt-0">
          {/* Centered Content - Full width like other sections */}
          <div className="max-w-6xl mx-auto text-center w-full">
            {/* Premium badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/15 to-secondary-500/15 border border-primary-400/30 rounded-full px-4 py-2 mb-6">
              <FiAward className="w-4 h-4 text-primary-600" />
              <span className="text-xs font-semibold text-primary-700 uppercase tracking-wider">Evidence-Based Solutions</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
              Transform <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-600">Social Development</span> Through Collaboration
            </h1>
            
                            <p className="responsive-desc text-lg md:text-xl text-neutral-700 mb-8 leading-relaxed max-w-4xl mx-auto">
              Insocia bridges the gap between academic research and on-the-ground implementation, transforming social development through collaborative research, innovative policy design, and impact-focused implementation.
            </p>

            {/* Key differentiators */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 max-w-5xl mx-auto">
              <div className="flex items-start gap-3 text-left backdrop-blur-md bg-white/80 border border-neutral-200/50 rounded-xl p-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-lg flex items-center justify-center border border-primary-400/30">
                  <FiTarget className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900 mb-1">Evidence-First Approach</h3>
                  <p className="text-sm text-neutral-600">Rigorous research and data-driven insights in all our work</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 text-left backdrop-blur-md bg-white/80 border border-neutral-200/50 rounded-xl p-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-lg flex items-center justify-center border border-primary-400/30">
                  <FiUsers className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900 mb-1">Collaborative Partnership</h3>
                  <p className="text-sm text-neutral-600">Co-creating solutions with stakeholders at all levels</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-left backdrop-blur-md bg-white/80 border border-neutral-200/50 rounded-xl p-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-lg flex items-center justify-center border border-primary-400/30">
                  <FiZap className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900 mb-1">Inclusive Innovation</h3>
                  <p className="text-sm text-neutral-600">Solutions accessible and beneficial to diverse communities</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-left backdrop-blur-md bg-white/80 border border-neutral-200/50 rounded-xl p-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-lg flex items-center justify-center border border-primary-400/30">
                  <FiTrendingUp className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900 mb-1">Sustainable Impact</h3>
                  <p className="text-sm text-neutral-600">Creating lasting change through systems-level interventions</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
              <Link 
                to="/contact" 
                className="primary-btn"
              >
                Partner With Us
              </Link>
              <Link 
                to="/projects" 
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-neutral-800 bg-white/90 hover:bg-white backdrop-blur-sm border border-neutral-200 hover:border-neutral-300 rounded-xl transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { number: '25+', label: 'Projects Delivered', icon: FiCheckCircle },
                { number: '18', label: 'Countries Served', icon: FiGlobe },
                { number: '40+', label: 'Partner Organizations', icon: FiUsers },
                { number: '100K+', label: 'Lives Impacted', icon: FiTrendingUp }
              ].map((stat, index) => (
                <div key={index} className="backdrop-blur-md bg-gradient-to-br from-white/90 to-white/80 border border-neutral-200/50 rounded-xl p-3 text-center group hover:bg-white transition-all duration-300">
                  <stat.icon className="w-4 h-4 text-primary-600 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-lg lg:text-xl font-bold text-neutral-900 mb-1">{stat.number}</p>
                  <p className="text-xs text-neutral-600 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services List with enhanced heading */}
      <SectionLayout bgColor="bg-transparent" id="services-overview">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/15 to-secondary-500/15 border border-primary-400/30 rounded-full px-6 py-3 mb-8">
            <FiTarget className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-semibold text-primary-700 uppercase tracking-wider">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-neutral-900 leading-tight">
            Comprehensive <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">Solutions</span> for Social Impact
          </h2>
          <p className="responsive-desc text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
            From rigorous research and policy design to implementation support and impact measurement - we provide end-to-end solutions tailored to drive sustainable social change.
          </p>
        </div>
        <ServicesList />
      </SectionLayout>

      {/* Detailed Service Sections */}
      <SectionLayout bgColor="bg-transparent" className="py-24">
        <div className="space-y-32">
          
          {/* Service 1: Policy Research & Analysis - Brand Primary Colors */}
          <div id="service-detail-policy-research-analysis" className="scroll-mt-32">
            <div className="relative">
              {/* Background Elements */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute w-96 h-96 -top-20 -right-20 bg-gradient-to-br from-primary-500/10 to-primary-600/8 rounded-full blur-3xl"></div>
                <div className="absolute w-64 h-64 -bottom-10 -left-10 bg-gradient-to-tr from-primary-600/8 to-primary-500/10 rounded-full blur-2xl"></div>
              </div>
              
              <div className="relative z-10 grid grid-cols-1 xl:grid-cols-5 gap-12 items-stretch">
                {/* Content Section */}
                <div className="xl:col-span-3 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-500/10 to-primary-600/8 backdrop-blur-md border border-primary-400/20 rounded-2xl px-6 py-3 mb-8 w-fit">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg">
                      <FiSearch className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-primary-700 uppercase tracking-wider block">Service 01</span>
                      <span className="text-sm font-medium text-neutral-600">Research & Analysis</span>
                    </div>
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
                    Policy Research & <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-700">Analysis</span>
                  </h3>
                  
                  <p className="responsive-desc text-xl text-neutral-600 mb-8 leading-relaxed">
                    We conduct comprehensive research and sectoral analysis, delivering actionable insights into complex policy landscapes. Our approach includes regulatory assessments, risk analysis, and strategic forecasting to inform robust, future-ready decision-making.
                  </p>
                  
                  {/* Key Features Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                    {[
                      { title: "Regulatory Assessments", desc: "Compliance analysis and regulatory landscape mapping" },
                      { title: "Risk Analysis", desc: "Strategic forecasting and future-ready frameworks" },
                      { title: "Policy Mapping", desc: "Stakeholder analysis and evidence synthesis" },
                      { title: "Strategic Briefs", desc: "Actionable policy recommendations and insights" }
                    ].map((item, idx) => (
                      <div key={idx} className="group relative overflow-hidden">
                        <div className="backdrop-blur-md bg-white/60 hover:bg-white/80 border border-neutral-200/50 hover:border-primary-400/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10">
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 mt-2 flex-shrink-0"></div>
                            <div>
                              <h4 className="font-semibold text-neutral-900 mb-2">{item.title}</h4>
                              <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to="/contact"
                    className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-primary-500/25 transform hover:scale-105 w-fit"
                  >
                    <span>Start Your Project</span>
                    <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
                
                {/* Visual Section */}
                <div className="xl:col-span-2 flex items-stretch">
                  <div className="relative w-full">
                    <div className="backdrop-blur-md bg-gradient-to-br from-primary-50/80 to-primary-100/60 rounded-3xl p-10 border border-primary-200/50 shadow-2xl h-full flex flex-col justify-center">
                      <div className="text-center mb-8">
                        <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                          <FiSearch className="w-12 h-12 text-white" />
                        </div>
                        <h4 className="text-2xl font-bold text-neutral-900 mb-2">Research Excellence</h4>
                        <p className="text-neutral-600">Evidence-based insights for informed decisions</p>
                      </div>
                      
                      <div className="space-y-4">
                        {[
                          "Comprehensive policy analysis reports",
                          "Regulatory compliance frameworks", 
                          "Strategic forecasting models",
                          "Stakeholder mapping documents",
                          "Evidence-based policy briefs"
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-3 bg-white/50 rounded-xl border border-primary-200/30">
                            <FiCheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                            <span className="text-sm text-neutral-700 font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service 2: CSR Impact Evaluation - Business/Growth Green Theme */}
          <div id="service-detail-csr-impact-evaluation" className="scroll-mt-32">
            <div className="relative">
              {/* Background Elements */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute w-96 h-96 -top-20 -left-20 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-3xl"></div>
                <div className="absolute w-64 h-64 -bottom-10 -right-10 bg-gradient-to-tr from-emerald-500/10 to-green-500/10 rounded-full blur-2xl"></div>
              </div>
              
              <div className="relative z-10 grid grid-cols-1 xl:grid-cols-5 gap-12 items-stretch">
                {/* Visual Section */}
                <div className="xl:col-span-2 order-2 xl:order-1 flex items-stretch">
                  <div className="relative w-full">
                    <div className="backdrop-blur-md bg-gradient-to-br from-green-50/80 to-emerald-50/80 rounded-3xl p-10 border border-green-200/50 shadow-2xl h-full flex flex-col justify-center">
                      <div className="text-center mb-8">
                        <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                          <FiTarget className="w-12 h-12 text-white" />
                        </div>
                        <h4 className="text-2xl font-bold text-neutral-900 mb-2">Impact Measurement</h4>
                        <p className="text-neutral-600">Maximize your social return on investment</p>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-4">
                        {[
                          { metric: "ROI Analysis", value: "300%" },
                          { metric: "Impact Score", value: "9.2/10" },
                          { metric: "Stakeholders", value: "500+" }
                        ].map((item, idx) => (
                          <div key={idx} className="bg-white/50 rounded-xl p-4 border border-green-200/30 text-center">
                            <div className="text-2xl font-bold text-green-600 mb-1">{item.value}</div>
                            <div className="text-sm text-neutral-600">{item.metric}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="xl:col-span-3 order-1 xl:order-2 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-md border border-green-400/20 rounded-2xl px-6 py-3 mb-8 w-fit">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                      <FiTarget className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-green-700 uppercase tracking-wider block">Service 02</span>
                      <span className="text-sm font-medium text-neutral-600">CSR Evaluation</span>
                    </div>
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
                    CSR Impact <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600">Evaluation</span>
                  </h3>
                  
                  <p className="responsive-desc text-xl text-neutral-600 mb-8 leading-relaxed">
                    Systematic evaluation of Corporate Social Responsibility initiatives to measure effectiveness, identify improvement opportunities, and maximize <strong>social return on investment</strong>. Our comprehensive approach ensures your CSR programs deliver meaningful, measurable impact.
                  </p>
                  
                  {/* Process Steps */}
                  <div className="space-y-4 mb-10">
                    {[
                      { step: "01", title: "Program Assessment", desc: "Comprehensive audit of current CSR initiatives and frameworks" },
                      { step: "02", title: "Impact Measurement", desc: "Development of KPIs and measurement frameworks for tracking" },
                      { step: "03", title: "Stakeholder Analysis", desc: "Evaluation of engagement strategies and feedback collection" },
                      { step: "04", title: "ROI Optimization", desc: "Analysis and recommendations for maximum social return" }
                    ].map((item, idx) => (
                      <div key={idx} className="group relative overflow-hidden">
                        <div className="backdrop-blur-md bg-white/60 hover:bg-white/80 border border-neutral-200/50 hover:border-green-400/50 rounded-2xl p-6 transition-all duration-300">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg flex-shrink-0">
                              {item.step}
                            </div>
                            <div>
                              <h4 className="font-semibold text-neutral-900 mb-2">{item.title}</h4>
                              <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to="/contact"
                    className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-green-500/25 transform hover:scale-105 w-fit"
                  >
                    <span>Evaluate Your CSR</span>
                    <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Service 3: ESG Evaluation and Rating - Brand Secondary Colors */}
          <div id="service-detail-esg-evaluation-and-rating" className="scroll-mt-32">
            <div className="relative">
              {/* Background Elements */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute w-96 h-96 -top-20 -right-20 bg-gradient-to-br from-secondary-500/10 to-secondary-600/8 rounded-full blur-3xl"></div>
                <div className="absolute w-64 h-64 -bottom-10 -left-10 bg-gradient-to-tr from-secondary-600/8 to-secondary-500/10 rounded-full blur-2xl"></div>
              </div>
              
              <div className="relative z-10 grid grid-cols-1 xl:grid-cols-5 gap-12 items-stretch">
                {/* Content Section */}
                <div className="xl:col-span-3 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-secondary-500/10 to-secondary-600/8 backdrop-blur-md border border-secondary-400/20 rounded-2xl px-6 py-3 mb-8 w-fit">
                    <div className="w-10 h-10 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl flex items-center justify-center shadow-lg">
                      <FiBarChart2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-secondary-700 uppercase tracking-wider block">Service 03</span>
                      <span className="text-sm font-medium text-neutral-600">ESG Rating</span>
                    </div>
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
                    ESG Evaluation & <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary-600 to-secondary-700">Rating</span>
                  </h3>
                  
                  <p className="responsive-desc text-xl text-neutral-600 mb-8 leading-relaxed">
                    We provide comprehensive ESG reporting and ratings to help organizations assess their environmental, social, and governance performance. Using trusted methodologies and publicly available data, we deliver objective insights that support better financial decisions, enhance transparency, and align with long-term sustainability goals.
                  </p>
                  
                  {/* ESG Categories */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                    {[
                      { category: "Environmental", icon: "🌱", desc: "Climate impact & resource management" },
                      { category: "Social", icon: "👥", desc: "Community engagement & workforce" },
                      { category: "Governance", icon: "⚖️", desc: "Leadership & ethical practices" }
                    ].map((item, idx) => (
                      <div key={idx} className="group relative overflow-hidden">
                        <div className="backdrop-blur-md bg-white/60 hover:bg-white/80 border border-neutral-200/50 hover:border-secondary-400/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-secondary-500/10 text-center">
                          <div className="text-3xl mb-3">{item.icon}</div>
                          <h4 className="font-semibold text-neutral-900 mb-2">{item.category}</h4>
                          <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to="/contact"
                    className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-secondary-600 to-secondary-700 hover:from-secondary-700 hover:to-secondary-800 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-secondary-500/25 transform hover:scale-105 w-fit"
                  >
                    <span>Get ESG Rating</span>
                    <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
                
                {/* Visual Section */}
                <div className="xl:col-span-2 flex items-stretch">
                  <div className="relative w-full">
                    <div className="backdrop-blur-md bg-gradient-to-br from-secondary-50/80 to-secondary-100/60 rounded-3xl p-10 border border-secondary-200/50 shadow-2xl h-full flex flex-col justify-center">
                      <div className="text-center mb-8">
                        <div className="w-24 h-24 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                          <FiBarChart2 className="w-12 h-12 text-white" />
                        </div>
                        <h4 className="text-2xl font-bold text-neutral-900 mb-2">ESG Excellence</h4>
                        <p className="text-neutral-600">Comprehensive sustainability assessment</p>
                      </div>
                      
                      <div className="space-y-4">
                        {[
                          "Environmental impact analysis",
                          "Social responsibility metrics", 
                          "Governance framework review",
                          "Sustainability roadmaps",
                          "ESG compliance reports"
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-3 bg-white/50 rounded-xl border border-secondary-200/30">
                            <FiCheckCircle className="w-5 h-5 text-secondary-500 flex-shrink-0" />
                            <span className="text-sm text-neutral-700 font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service 4: Philanthropic Program Assessment - Warm Heart Theme */}
          <div id="service-detail-philanthropic-program-assessment" className="scroll-mt-32">
            <div className="relative">
              {/* Background Elements */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute w-96 h-96 -top-20 -left-20 bg-gradient-to-br from-pink-500/10 to-rose-500/10 rounded-full blur-3xl"></div>
                <div className="absolute w-64 h-64 -bottom-10 -right-10 bg-gradient-to-tr from-rose-500/10 to-pink-500/10 rounded-full blur-2xl"></div>
              </div>
              
              <div className="relative z-10 grid grid-cols-1 xl:grid-cols-5 gap-12 items-stretch">
                {/* Visual Section */}
                <div className="xl:col-span-2 order-2 xl:order-1 flex items-stretch">
                  <div className="relative w-full">
                    <div className="backdrop-blur-md bg-gradient-to-br from-pink-50/80 to-rose-50/80 rounded-3xl p-10 border border-pink-200/50 shadow-2xl h-full flex flex-col justify-center">
                      <div className="text-center mb-8">
                        <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-rose-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                          <FiHeart className="w-12 h-12 text-white" />
                        </div>
                        <h4 className="text-2xl font-bold text-neutral-900 mb-2">Philanthropic Impact</h4>
                        <p className="text-neutral-600">Optimize your giving for maximum benefit</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { label: "Programs Evaluated", value: "150+" },
                          { label: "Efficiency Gain", value: "45%" },
                          { label: "Beneficiaries", value: "50K+" },
                          { label: "ROI Improvement", value: "280%" }
                        ].map((item, idx) => (
                          <div key={idx} className="bg-white/50 rounded-xl p-4 border border-pink-200/30 text-center">
                            <div className="text-xl font-bold text-pink-600 mb-1">{item.value}</div>
                            <div className="text-xs text-neutral-600">{item.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="xl:col-span-3 order-1 xl:order-2 flex flex-col justify-center">
                                      <div className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500/10 to-rose-500/10 backdrop-blur-md border border-pink-400/20 rounded-2xl px-6 py-3 mb-8 w-fit">
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center shadow-lg">
                      <FiHeart className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-pink-700 uppercase tracking-wider block">Service 04</span>
                      <span className="text-sm font-medium text-neutral-600">Philanthropic Assessment</span>
                    </div>
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
                    Philanthropic Program <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-rose-600">Assessment</span>
                  </h3>
                  
                  <p className="responsive-desc text-xl text-neutral-600 mb-8 leading-relaxed">
                    Comprehensive evaluation of philanthropic funds and programs to ensure optimal resource allocation and maximum community benefit. Our systematic approach helps philanthropic organizations enhance their impact and transparency.
                  </p>
                  
                  {/* Assessment Areas */}
                  <div className="space-y-4 mb-10">
                    {[
                      { area: "Grant Effectiveness", desc: "Comprehensive review of grant program outcomes and impact measurement" },
                      { area: "Beneficiary Assessment", desc: "Direct feedback collection and impact evaluation from program beneficiaries" },
                      { area: "Resource Optimization", desc: "Strategic analysis for optimal allocation and maximum community benefit" },
                      { area: "Sustainability Planning", desc: "Long-term program viability and continuous improvement strategies" }
                    ].map((item, idx) => (
                      <div key={idx} className="group relative overflow-hidden">
                        <div className="backdrop-blur-md bg-white/60 hover:bg-white/80 border border-neutral-200/50 hover:border-pink-400/50 rounded-2xl p-6 transition-all duration-300">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg flex-shrink-0">
                              0{idx + 1}
                            </div>
                            <div>
                              <h4 className="font-semibold text-neutral-900 mb-2">{item.area}</h4>
                              <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to="/contact"
                    className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-pink-500/25 transform hover:scale-105 w-fit"
                  >
                    <span>Assess Your Programs</span>
                    <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Service 5: Government Project Evaluation - Professional Neutral Theme */}
          <div id="service-detail-government-project-evaluation" className="scroll-mt-32">
            <div className="relative">
              {/* Background Elements */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute w-96 h-96 -top-20 -right-20 bg-gradient-to-br from-neutral-500/8 to-neutral-600/6 rounded-full blur-3xl"></div>
                <div className="absolute w-64 h-64 -bottom-10 -left-10 bg-gradient-to-tr from-neutral-600/6 to-neutral-500/8 rounded-full blur-2xl"></div>
              </div>
              
              <div className="relative z-10 grid grid-cols-1 xl:grid-cols-5 gap-12 items-stretch">
                {/* Content Section */}
                <div className="xl:col-span-3 flex flex-col justify-center">
                                      <div className="inline-flex items-center gap-3 bg-gradient-to-r from-neutral-500/10 to-neutral-600/8 backdrop-blur-md border border-neutral-400/20 rounded-2xl px-6 py-3 mb-8 w-fit">
                    <div className="w-10 h-10 bg-gradient-to-br from-neutral-600 to-neutral-700 rounded-xl flex items-center justify-center shadow-lg">
                      <FiShield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-neutral-700 uppercase tracking-wider block">Service 05</span>
                      <span className="text-sm font-medium text-neutral-600">Government Evaluation</span>
                    </div>
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
                    Government Project <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-700 to-neutral-800">Evaluation</span>
                  </h3>
                  
                  <p className="responsive-desc text-xl text-neutral-600 mb-8 leading-relaxed">
                    Independent evaluation and analysis of government projects and initiatives to assess effectiveness, efficiency, and social impact. Our objective assessments support evidence-based policy decisions and public accountability.
                  </p>
                  
                  {/* Evaluation Framework */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                    {[
                      { framework: "Performance Analysis", desc: "Project effectiveness and outcome measurement" },
                      { framework: "Cost-Benefit Review", desc: "Economic efficiency and resource utilization" },
                      { framework: "Impact Assessment", desc: "Community and stakeholder impact evaluation" },
                      { framework: "Policy Recommendations", desc: "Evidence-based improvement strategies" }
                    ].map((item, idx) => (
                      <div key={idx} className="group relative overflow-hidden">
                        <div className="backdrop-blur-md bg-white/60 hover:bg-white/80 border border-neutral-200/50 hover:border-neutral-400/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-neutral-500/10">
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-neutral-600 to-neutral-700 mt-2 flex-shrink-0"></div>
                            <div>
                              <h4 className="font-semibold text-neutral-900 mb-2">{item.framework}</h4>
                              <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to="/contact"
                    className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-neutral-700 to-neutral-800 hover:from-neutral-800 hover:to-neutral-900 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-neutral-500/25 transform hover:scale-105 w-fit"
                  >
                    <span>Request Evaluation</span>
                    <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
                
                {/* Visual Section */}
                <div className="xl:col-span-2 flex items-stretch">
                  <div className="relative w-full">
                    <div className="backdrop-blur-md bg-gradient-to-br from-neutral-50/80 to-neutral-100/60 rounded-3xl p-10 border border-neutral-200/50 shadow-2xl h-full flex flex-col justify-center">
                      <div className="text-center mb-8">
                        <div className="w-24 h-24 bg-gradient-to-br from-neutral-600 to-neutral-700 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                          <FiShield className="w-12 h-12 text-white" />
                        </div>
                        <h4 className="text-2xl font-bold text-neutral-900 mb-2">Public Accountability</h4>
                        <p className="text-neutral-600">Independent evaluation for better governance</p>
                      </div>
                      
                      <div className="space-y-4">
                        {[
                          "Project performance evaluation reports",
                          "Cost-benefit analysis frameworks",
                          "Stakeholder impact assessments",
                          "Implementation gap analysis",
                          "Policy recommendation briefs"
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-3 bg-white/50 rounded-xl border border-neutral-200/30">
                            <FiCheckCircle className="w-5 h-5 text-neutral-600 flex-shrink-0" />
                            <span className="text-sm text-neutral-700 font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service 6: Project Management Services - Brand Primary Theme */}
          <div id="service-detail-project-management-services" className="scroll-mt-32">
            <div className="relative">
              {/* Background Elements */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute w-96 h-96 -top-20 -left-20 bg-gradient-to-br from-primary-500/10 to-primary-600/8 rounded-full blur-3xl"></div>
                <div className="absolute w-64 h-64 -bottom-10 -right-10 bg-gradient-to-tr from-primary-600/8 to-primary-500/10 rounded-full blur-2xl"></div>
              </div>
              
              <div className="relative z-10 grid grid-cols-1 xl:grid-cols-5 gap-12 items-stretch">
                {/* Visual Section */}
                <div className="xl:col-span-2 order-2 xl:order-1 flex items-stretch">
                  <div className="relative w-full">
                    <div className="backdrop-blur-md bg-gradient-to-br from-primary-50/80 to-primary-100/60 rounded-3xl p-10 border border-primary-200/50 shadow-2xl h-full flex flex-col justify-center">
                      <div className="text-center mb-8">
                        <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                          <FiSettings className="w-12 h-12 text-white" />
                        </div>
                        <h4 className="text-2xl font-bold text-neutral-900 mb-2">End-to-End Management</h4>
                        <p className="text-neutral-600">From planning to execution and evaluation</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { label: "Projects Managed", value: "200+" },
                          { label: "Success Rate", value: "98%" },
                          { label: "On-Time Delivery", value: "95%" },
                          { label: "Budget Efficiency", value: "92%" }
                        ].map((item, idx) => (
                          <div key={idx} className="bg-white/50 rounded-xl p-4 border border-primary-200/30 text-center">
                            <div className="text-xl font-bold text-primary-600 mb-1">{item.value}</div>
                            <div className="text-xs text-neutral-600">{item.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="xl:col-span-3 order-1 xl:order-2 flex flex-col justify-center">
                                      <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-500/10 to-primary-600/8 backdrop-blur-md border border-primary-400/20 rounded-2xl px-6 py-3 mb-8 w-fit">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg">
                      <FiSettings className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-primary-700 uppercase tracking-wider block">Service 06</span>
                      <span className="text-sm font-medium text-neutral-600">Project Management</span>
                    </div>
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
                    Project Management <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-700">Services</span>
                  </h3>
                  
                  <p className="responsive-desc text-xl text-neutral-600 mb-8 leading-relaxed">
                    We offer end-to-end management for social initiatives, from program design to execution. Our comprehensive approach includes strategic planning, risk management, stakeholder coordination, progress monitoring, and evaluation for timely, within-budget, and effective project completion.
                  </p>
                  
                  {/* Project Lifecycle */}
                  <div className="space-y-4 mb-10">
                    {[
                      { phase: "Strategic Planning", desc: "Comprehensive project design and strategic framework development" },
                      { phase: "Implementation", desc: "Coordinated execution with real-time monitoring and adjustments" },
                      { phase: "Risk Management", desc: "Proactive identification and mitigation of project risks" },
                      { phase: "Stakeholder Coordination", desc: "Effective communication and engagement across all stakeholders" }
                    ].map((item, idx) => (
                      <div key={idx} className="group relative overflow-hidden">
                        <div className="backdrop-blur-md bg-white/60 hover:bg-white/80 border border-neutral-200/50 hover:border-primary-400/50 rounded-2xl p-6 transition-all duration-300">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg flex-shrink-0">
                              0{idx + 1}
                            </div>
                            <div>
                              <h4 className="font-semibold text-neutral-900 mb-2">{item.phase}</h4>
                              <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to="/contact"
                    className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-primary-500/25 transform hover:scale-105 w-fit"
                  >
                    <span>Start Your Project</span>
                    <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Service 7: Monitoring & Evaluation - Brand Secondary Theme */}
          <div id="service-detail-monitoring-evaluation" className="scroll-mt-32">
            <div className="relative">
              {/* Background Elements */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute w-96 h-96 -top-20 -right-20 bg-gradient-to-br from-secondary-500/10 to-secondary-600/8 rounded-full blur-3xl"></div>
                <div className="absolute w-64 h-64 -bottom-10 -left-10 bg-gradient-to-tr from-secondary-600/8 to-secondary-500/10 rounded-full blur-2xl"></div>
              </div>
              
              <div className="relative z-10 grid grid-cols-1 xl:grid-cols-5 gap-12 items-stretch">
                {/* Content Section */}
                <div className="xl:col-span-3 flex flex-col justify-center">
                                      <div className="inline-flex items-center gap-3 bg-gradient-to-r from-secondary-500/10 to-secondary-600/8 backdrop-blur-md border border-secondary-400/20 rounded-2xl px-6 py-3 mb-8 w-fit">
                    <div className="w-10 h-10 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl flex items-center justify-center shadow-lg">
                      <FiTrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-secondary-700 uppercase tracking-wider block">Service 07</span>
                      <span className="text-sm font-medium text-neutral-600">M&E Systems</span>
                    </div>
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
                    Monitoring & <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary-600 to-secondary-700">Evaluation</span>
                  </h3>
                  
                  <p className="responsive-desc text-xl text-neutral-600 mb-8 leading-relaxed">
                    Insocia develops robust monitoring and evaluation frameworks and reporting tools. We support organizations in real-time progress tracking, impact assessment, adjustment for learning, and evidence-based program improvement.
                  </p>
                  
                  {/* M&E Components */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                    {[
                      { component: "Framework Design", desc: "Custom M&E frameworks tailored to your objectives" },
                      { component: "Data Collection", desc: "Systematic data gathering and quality assurance" },
                      { component: "Impact Measurement", desc: "Tools and methodologies for measuring outcomes" },
                      { component: "Progress Tracking", desc: "Real-time dashboards and reporting systems" }
                    ].map((item, idx) => (
                      <div key={idx} className="group relative overflow-hidden">
                        <div className="backdrop-blur-md bg-white/60 hover:bg-white/80 border border-neutral-200/50 hover:border-secondary-400/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-secondary-500/10">
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-secondary-500 to-secondary-600 mt-2 flex-shrink-0"></div>
                            <div>
                              <h4 className="font-semibold text-neutral-900 mb-2">{item.component}</h4>
                              <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to="/contact"
                    className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-secondary-600 to-secondary-700 hover:from-secondary-700 hover:to-secondary-800 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-secondary-500/25 transform hover:scale-105 w-fit"
                  >
                    <span>Design M&E System</span>
                    <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
                
                {/* Visual Section */}
                <div className="xl:col-span-2 flex items-stretch">
                  <div className="relative w-full">
                    <div className="backdrop-blur-md bg-gradient-to-br from-secondary-50/80 to-secondary-100/60 rounded-3xl p-10 border border-secondary-200/50 shadow-2xl h-full flex flex-col justify-center">
                      <div className="text-center mb-8">
                        <div className="w-24 h-24 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                          <FiTrendingUp className="w-12 h-12 text-white" />
                        </div>
                        <h4 className="text-2xl font-bold text-neutral-900 mb-2">Data-Driven Insights</h4>
                        <p className="text-neutral-600">Track progress and measure impact effectively</p>
                      </div>
                      
                      <div className="space-y-4">
                        {[
                          "M&E framework design templates",
                          "Data collection system setup",
                          "Impact measurement toolkits",
                          "Progress tracking dashboards",
                          "Evaluation reports and insights"
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-3 bg-white/50 rounded-xl border border-secondary-200/30">
                            <FiCheckCircle className="w-5 h-5 text-secondary-500 flex-shrink-0" />
                            <span className="text-sm text-neutral-700 font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service 8: Social Impact Research - Brand Primary Theme */}
          <div id="service-detail-social-impact-research" className="scroll-mt-32">
            <div className="relative">
              {/* Background Elements */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute w-96 h-96 -top-20 -left-20 bg-gradient-to-br from-primary-500/10 to-primary-600/8 rounded-full blur-3xl"></div>
                <div className="absolute w-64 h-64 -bottom-10 -right-10 bg-gradient-to-tr from-primary-600/8 to-primary-500/10 rounded-full blur-2xl"></div>
              </div>
              
              <div className="relative z-10 grid grid-cols-1 xl:grid-cols-5 gap-12 items-stretch">
                {/* Visual Section */}
                <div className="xl:col-span-2 order-2 xl:order-1 flex items-stretch">
                  <div className="relative w-full">
                    <div className="backdrop-blur-md bg-gradient-to-br from-primary-50/80 to-primary-100/60 rounded-3xl p-10 border border-primary-200/50 shadow-2xl h-full flex flex-col justify-center">
                      <div className="text-center mb-8">
                        <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                          <FiGlobe className="w-12 h-12 text-white" />
                        </div>
                        <h4 className="text-2xl font-bold text-neutral-900 mb-2">Field Research Excellence</h4>
                        <p className="text-neutral-600">Ground-level insights for authentic understanding</p>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-4">
                        {[
                          { service: "Insocia FR", desc: "Field Research - Immersive community studies" },
                          { service: "Insocia GR", desc: "Ground Research - Grassroots data collection" }
                        ].map((item, idx) => (
                          <div key={idx} className="bg-white/50 rounded-xl p-4 border border-primary-200/30">
                            <div className="font-bold text-primary-600 mb-2">{item.service}</div>
                            <div className="text-sm text-neutral-600">{item.desc}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="xl:col-span-3 order-1 xl:order-2 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-500/10 to-primary-600/8 backdrop-blur-md border border-primary-400/20 rounded-2xl px-6 py-3 mb-8 w-fit">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg">
                      <FiGlobe className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-primary-700 uppercase tracking-wider block">Service 08</span>
                      <span className="text-sm font-medium text-neutral-600">Impact Research</span>
                    </div>
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
                    Social Impact <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-700">Research</span>
                  </h3>
                  
                  <p className="responsive-desc text-xl text-neutral-600 mb-8 leading-relaxed">
                    Rigorous social research and impact measurement services that provide evidence-based insights for informed decision-making. Our specialized methodologies capture authentic community realities and behavioral dynamics.
                  </p>
                  
                  {/* Research Methodologies */}
                  <div className="space-y-6 mb-10">
                    <div className="backdrop-blur-md bg-gradient-to-r from-primary-50/80 to-primary-100/60 rounded-2xl p-6 border border-primary-200/50">
                      <h4 className="text-xl font-bold text-primary-900 mb-3">Insocia FR (Field Research)</h4>
                      <p className="text-sm text-neutral-600 mb-4">Our Insocia FR service specializes in conducting immersive, field-based research across communities and geographies. We design and execute on-the-ground qualitative and quantitative studies to capture nuanced realities.</p>
                    </div>
                    
                    <div className="backdrop-blur-md bg-gradient-to-r from-primary-100/60 to-primary-50/80 rounded-2xl p-6 border border-primary-200/50">
                      <h4 className="text-xl font-bold text-primary-900 mb-3">Insocia GR (Ground Research)</h4>
                      <p className="text-sm text-neutral-600 mb-4">Insocia GR offers comprehensive ground-level research using tailored methodologies adapted to the project context. This service delivers granular data from the grassroots, providing robust, actionable intelligence.</p>
                    </div>
                  </div>
                  
                  <Link 
                    to="/contact"
                    className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-primary-500/25 transform hover:scale-105 w-fit"
                  >
                    <span>Start Research Project</span>
                    <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Service 9: Advocacy & Policy Development - Brand Secondary Theme */}
          <div id="service-detail-advocacy-policy-development" className="scroll-mt-32">
            <div className="relative">
              {/* Background Elements */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute w-96 h-96 -top-20 -right-20 bg-gradient-to-br from-secondary-500/10 to-secondary-600/8 rounded-full blur-3xl"></div>
                <div className="absolute w-64 h-64 -bottom-10 -left-10 bg-gradient-to-tr from-secondary-600/8 to-secondary-500/10 rounded-full blur-2xl"></div>
              </div>
              
              <div className="relative z-10 grid grid-cols-1 xl:grid-cols-5 gap-12 items-stretch">
                {/* Content Section */}
                <div className="xl:col-span-3 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-secondary-500/10 to-secondary-600/8 backdrop-blur-md border border-secondary-400/20 rounded-2xl px-6 py-3 mb-8 w-fit">
                    <div className="w-10 h-10 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl flex items-center justify-center shadow-lg">
                      <FiMic className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-secondary-700 uppercase tracking-wider block">Service 09</span>
                      <span className="text-sm font-medium text-neutral-600">Advocacy & Policy</span>
                    </div>
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
                    Advocacy & Policy <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary-600 to-secondary-700">Development</span>
                  </h3>
                  
                  <p className="responsive-desc text-xl text-neutral-600 mb-8 leading-relaxed">
                    Insocia crafts strategies and campaigns that advance social causes and drive policy reform. We provide advocacy roadmap development, policy briefs, coalition building, stakeholder engagement plans, and execution support for systemic change.
                  </p>
                  
                  {/* Advocacy Services */}
                  <div className="space-y-4 mb-10">
                    {[
                      { service: "Strategy Development", desc: "Comprehensive advocacy roadmaps and campaign design" },
                      { service: "Policy Briefs", desc: "Evidence-based policy documents and position papers" },
                      { service: "Coalition Building", desc: "Stakeholder alliance formation and partnership development" },
                      { service: "Campaign Implementation", desc: "Execution support and systemic change facilitation" }
                    ].map((item, idx) => (
                      <div key={idx} className="group relative overflow-hidden">
                        <div className="backdrop-blur-md bg-white/60 hover:bg-white/80 border border-neutral-200/50 hover:border-secondary-400/50 rounded-2xl p-6 transition-all duration-300">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg flex-shrink-0">
                              0{idx + 1}
                            </div>
                            <div>
                              <h4 className="font-semibold text-neutral-900 mb-2">{item.service}</h4>
                              <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to="/contact"
                    className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-secondary-600 to-secondary-700 hover:from-secondary-700 hover:to-secondary-800 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-secondary-500/25 transform hover:scale-105 w-fit"
                  >
                    <span>Drive Policy Change</span>
                    <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
                
                {/* Visual Section */}
                <div className="xl:col-span-2 flex items-stretch">
                  <div className="relative w-full">
                    <div className="backdrop-blur-md bg-gradient-to-br from-secondary-50/80 to-secondary-100/60 rounded-3xl p-10 border border-secondary-200/50 shadow-2xl h-full flex flex-col justify-center">
                      <div className="text-center mb-8">
                        <div className="w-24 h-24 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                          <FiMic className="w-12 h-12 text-white" />
                        </div>
                        <h4 className="text-2xl font-bold text-neutral-900 mb-2">Systemic Change</h4>
                        <p className="text-neutral-600">Driving policy reform for lasting impact</p>
                      </div>
                      
                      <div className="space-y-4">
                        {[
                          "Advocacy strategy development",
                          "Policy brief creation",
                          "Stakeholder engagement plans",
                          "Campaign design & implementation",
                          "Coalition building support"
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-3 bg-white/50 rounded-xl border border-secondary-200/30">
                            <FiCheckCircle className="w-5 h-5 text-secondary-500 flex-shrink-0" />
                            <span className="text-sm text-neutral-700 font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional services can be added here following the same pattern */}
        </div>
      </SectionLayout>

      {/* Process Section */}
      <SectionLayout bgColor="bg-transparent" id="our-process">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/15 to-secondary-500/15 border border-primary-400/30 rounded-full px-6 py-3 mb-8">
            <FiBarChart2 className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-semibold text-primary-700 uppercase tracking-wider">Our Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-neutral-900 leading-tight">
            A Systematic <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">Approach</span> to Excellence
          </h2>
          <p className="responsive-desc text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
            Our evidence-based methodology ensures rigorous, collaborative, and adaptive approaches to deliver exceptional results for sustainable social impact.
          </p>
        </div>
        <ServiceProcess />
      </SectionLayout>

      {/* Details Section */}
      <SectionLayout bgColor="bg-transparent" id="service-details">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/15 to-secondary-500/15 border border-primary-400/30 rounded-full px-6 py-3 mb-8">
            <FiCheckCircle className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-semibold text-primary-700 uppercase tracking-wider">Service Details</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-neutral-900 leading-tight">
            Tailored <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">Expertise</span> for Your Needs
          </h2>
          <p className="responsive-desc text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
            Each service is designed to address specific development challenges with proven methodologies and collaborative approaches.
          </p>
        </div>
        <ServiceDetails />
      </SectionLayout>

      {/* CTA Section */}
      <SectionLayout bgColor="bg-transparent" id="get-started">
        <ServiceCTA />
      </SectionLayout>
    </>
  );
};

export default ServicesPage; 