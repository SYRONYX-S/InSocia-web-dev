import React from 'react';
import { Helmet } from 'react-helmet';
import SectionLayout from '../layouts/SectionLayout';
import SectionHeading from '../components/common/SectionHeading';
import { Link } from 'react-router-dom';
import { FiBook, FiDatabase, FiSettings, FiLayers, FiUsers, FiDownload, FiEye, FiShare2, FiArrowRight, FiTarget, FiCheckCircle, FiGrid } from 'react-icons/fi';

const ResourcesPage = () => {
  const resourcesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "Organization",
      "name": "InSocia Development Consultancy",
      "url": "https://insocia.org"
    },
    "serviceType": "Knowledge Resources",
    "areaServed": "Global"
  };

  return (
    <>
      <Helmet>
        <title>Resources | InSocia Development Consultancy - Knowledge Center & Development Resources</title>
        <meta 
          name="description" 
          content="Access our comprehensive Knowledge Center featuring research publications, datasets, methodologies, policy innovations, and training resources for development professionals worldwide." 
        />
        <meta 
          name="keywords" 
          content="development resources, knowledge center, research publications, datasets, methodology guides, policy innovation, training materials, development tools" 
        />
        <script type="application/ld+json">
          {JSON.stringify(resourcesSchema)}
        </script>
      </Helmet>

      {/* Premium Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-transparent overflow-hidden pt-24 pb-16">
        {/* Static background effects */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <div className="absolute w-[600px] h-[600px] -top-32 -left-32 bg-gradient-to-br from-primary-500/15 to-secondary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute w-[400px] h-[400px] bottom-0 right-0 bg-gradient-to-tl from-secondary-500/15 to-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary-600/8 to-secondary-600/8 rounded-full blur-2xl"></div>
        </div>

        <div className="w-full px-4 md:px-8 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            {/* Premium badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-400/30 rounded-full px-5 py-2 mb-6">
              <FiTarget className="w-4 h-4 text-primary-400" />
              <span className="text-sm font-semibold text-primary-300 uppercase tracking-wider">Knowledge Hub</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-primary-400 to-secondary-400">Premium Resources</span> for Development Excellence
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-4xl mx-auto">
              Discover our comprehensive collection of research publications, datasets, methodologies, policy innovations, and training materials designed to accelerate your development impact.
            </p>

            {/* Resource highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <div className="w-10 h-10 bg-gradient-to-br from-secondary-500/30 to-primary-500/30 rounded-lg flex items-center justify-center mx-auto mb-3 border border-secondary-400/20">
                  <FiTarget className="w-5 h-5 text-secondary-400" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">Evidence-Based</h3>
                <p className="text-sm text-white/70">Rigorous research and proven methodologies</p>
              </div>
              
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <div className="w-10 h-10 bg-gradient-to-br from-secondary-500/30 to-primary-500/30 rounded-lg flex items-center justify-center mx-auto mb-3 border border-secondary-400/20">
                  <FiCheckCircle className="w-5 h-5 text-secondary-400" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">Practical Tools</h3>
                <p className="text-sm text-white/70">Ready-to-use frameworks and templates</p>
              </div>

              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <div className="w-10 h-10 bg-gradient-to-br from-secondary-500/30 to-primary-500/30 rounded-lg flex items-center justify-center mx-auto mb-3 border border-secondary-400/20">
                  <FiShare2 className="w-5 h-5 text-secondary-400" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">Open Access</h3>
                <p className="text-sm text-white/70">Free resources for development community</p>
              </div>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { number: '150+', label: 'Publications', icon: FiBook },
                { number: '50+', label: 'Datasets', icon: FiDatabase },
                { number: '25+', label: 'Methodologies', icon: FiSettings },
                { number: '10K+', label: 'Downloads', icon: FiDownload }
              ].map((stat, index) => (
                <div key={index} className="backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-xl p-3 text-center group hover:bg-white/15 transition-all duration-300">
                  <stat.icon className="w-4 h-4 text-secondary-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-lg lg:text-xl font-bold text-white mb-1">{stat.number}</p>
                  <p className="text-xs text-white/70 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Hub - Featured Resources */}
      <SectionLayout id="knowledge-hub" bgColor="bg-transparent" className="py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-400/30 rounded-full px-6 py-3 mb-8">
            <FiBook className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-semibold text-primary-300 uppercase tracking-wider">Knowledge Hub</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
            Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400">Publications</span> & Reports
          </h2>
          <p className="text-xl text-neutral-200 max-w-4xl mx-auto leading-relaxed">
            Access our latest research findings, policy analyses, and comprehensive reports that drive evidence-based decision making.
          </p>
        </div>

        {/* Featured Publication - Large Format */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 backdrop-blur-sm rounded-2xl border border-primary-500/20 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-500/20 text-primary-300 rounded-full">Featured Publication</span>
                  <span className="text-sm text-neutral-400">June 2023</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Social Development Indicators Framework
                </h3>
                <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                  A comprehensive framework for measuring and evaluating social development outcomes across multiple sectors and contexts. This publication provides practical tools for development practitioners worldwide.
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-neutral-400">
                    <FiEye className="w-4 h-4" />
                    <span>2.4K views</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-400">
                    <FiDownload className="w-4 h-4" />
                    <span>856 downloads</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors">
                    <FiDownload className="w-4 h-4 mr-2" />
                    Download PDF
                  </button>
                  <button className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-primary-400 border border-primary-400 hover:bg-primary-400 hover:text-white rounded-lg transition-colors">
                    <FiEye className="w-4 h-4 mr-2" />
                    Preview
                  </button>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary-600/20 to-secondary-600/20 rounded-xl p-8 border border-primary-500/30">
                <div className="h-64 bg-gradient-to-br from-primary-500/30 to-secondary-500/30 rounded-lg flex items-center justify-center border border-primary-400/20">
                  <FiBook className="w-16 h-16 text-primary-400/60" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Rural Education Innovation Study",
              type: "Research Report",
              date: "Nov 2022",
              views: "1.8K",
              downloads: "634"
            },
            {
              title: "Climate-Resilient Agriculture Policy",
              type: "Policy Brief",
              date: "Apr 2023",
              views: "1.2K",
              downloads: "423"
            },
            {
              title: "Women's Economic Empowerment",
              type: "Case Study",
              date: "Sep 2022",
              views: "2.1K",
              downloads: "789"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary-400/50 transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-500/20 text-primary-300 rounded-full">
                  {item.type}
                </span>
                <span className="text-xs text-neutral-400">{item.date}</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-primary-300 transition-colors">
                {item.title}
              </h3>
              <div className="flex items-center gap-4 mb-4 text-xs text-neutral-400">
                <div className="flex items-center gap-1">
                  <FiEye className="w-3 h-3" />
                  <span>{item.views}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiDownload className="w-3 h-3" />
                  <span>{item.downloads}</span>
                </div>
              </div>
              <button className="text-primary-400 hover:text-primary-300 text-sm font-medium transition-colors flex items-center">
                Access Resource
                <FiArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </SectionLayout>

      {/* Data Repository - Interactive Section */}
      <SectionLayout id="data-repository" bgColor="bg-transparent" className="py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary-500/20 to-cyan-500/20 border border-secondary-400/30 rounded-full px-6 py-3 mb-8">
            <FiDatabase className="w-4 h-4 text-secondary-400" />
            <span className="text-sm font-semibold text-secondary-300 uppercase tracking-wider">Data Repository</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
            Comprehensive <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary-400 to-cyan-400">Datasets</span> & Analytics
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Interactive Dashboard Preview */}
          <div className="bg-gradient-to-br from-secondary-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-8 border border-secondary-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Interactive Data Dashboards</h3>
            <p className="text-neutral-300 mb-6">
              Explore real-time visualizations of development indicators across regions and sectors.
            </p>
            <div className="bg-gradient-to-br from-secondary-600/20 to-cyan-600/20 rounded-xl p-6 border border-secondary-500/30 mb-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-secondary-400">85%</div>
                  <div className="text-xs text-neutral-400">Health Coverage</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-cyan-400">67%</div>
                  <div className="text-xs text-neutral-400">Education Access</div>
                </div>
              </div>
            </div>
            <button className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-secondary-600 hover:bg-secondary-700 rounded-lg transition-colors">
              Explore Dashboards
              <FiArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>

          {/* Dataset Categories */}
          <div className="space-y-4">
            {[
              { title: "Health Systems Database", desc: "Multi-country health system performance data", icon: "🏥" },
              { title: "Education Indicators", desc: "Access, quality & outcome metrics", icon: "📚" },
              { title: "Gender Equality Metrics", desc: "Real-time gender development indicators", icon: "⚖️" },
              { title: "Environmental Data", desc: "Climate and sustainability indicators", icon: "🌱" }
            ].map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-secondary-400/50 transition-all duration-300 group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">{item.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-secondary-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-neutral-300">{item.desc}</p>
                  </div>
                  <FiArrowRight className="w-5 h-5 text-secondary-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionLayout>

      {/* Methodology Center - Tool Showcase */}
      <SectionLayout id="methodology-center" bgColor="bg-transparent" className="py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-full px-6 py-3 mb-8">
            <FiSettings className="w-4 h-4 text-green-400" />
            <span className="text-sm font-semibold text-green-300 uppercase tracking-wider">Methodology Center</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
            Research <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">Methods</span> & Tools
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "M&E Framework Builder",
              desc: "Interactive tool for creating monitoring frameworks",
              icon: FiTarget,
              color: "green",
              features: ["Template Library", "Custom Indicators", "Logic Models"]
            },
            {
              title: "Research Design Toolkit",
              desc: "Comprehensive guides for study methodology",
              icon: FiGrid,
              color: "emerald",
              features: ["Study Protocols", "Sampling Methods", "Data Collection"]
            },
            {
              title: "Impact Evaluation Guide",
              desc: "Step-by-step evaluation frameworks",
              icon: FiCheckCircle,
              color: "teal",
              features: ["Theory of Change", "Outcome Mapping", "Attribution Analysis"]
            }
          ].map((tool, index) => (
            <div key={index} className={`bg-gradient-to-br from-${tool.color}-500/10 to-${tool.color}-600/5 backdrop-blur-sm rounded-2xl p-8 border border-${tool.color}-500/20 hover:border-${tool.color}-400/40 transition-all duration-300 group`}>
              <div className={`w-12 h-12 bg-gradient-to-br from-${tool.color}-500/30 to-${tool.color}-600/30 rounded-xl flex items-center justify-center mb-6 border border-${tool.color}-400/20`}>
                <tool.icon className={`w-6 h-6 text-${tool.color}-400`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{tool.title}</h3>
              <p className="text-neutral-300 mb-6">{tool.desc}</p>
              <div className="space-y-2 mb-6">
                {tool.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-neutral-400">
                    <div className={`w-1.5 h-1.5 bg-${tool.color}-400 rounded-full`}></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <button className={`text-${tool.color}-400 hover:text-${tool.color}-300 text-sm font-medium transition-colors flex items-center`}>
                Access Toolkit
                <FiArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </SectionLayout>

      {/* Policy Innovation Lab & Training - Combined Section */}
      <SectionLayout bgColor="bg-transparent" className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Policy Innovation Lab */}
          <div id="policy-lab">
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-400/30 rounded-full px-6 py-3 mb-8">
                <FiLayers className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-semibold text-purple-300 uppercase tracking-wider">Policy Innovation Lab</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
                Experimental <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">Policy</span> Space
              </h2>
              <p className="text-lg text-neutral-200 leading-relaxed mb-8">
                Collaborative platform for testing and refining policy innovations through simulation and stakeholder engagement.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
                <h4 className="text-lg font-semibold text-white mb-3">Policy Sandbox</h4>
                <p className="text-sm text-neutral-300 mb-4">Interactive simulation environment for policy testing</p>
                <button className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors">
                  Enter Sandbox →
                </button>
              </div>
              
              <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
                <h4 className="text-lg font-semibold text-white mb-3">Collaboration Workshops</h4>
                <p className="text-sm text-neutral-300 mb-4">Co-creation sessions with government partners</p>
                <button className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors">
                  View Materials →
                </button>
              </div>
            </div>
          </div>

          {/* Training Resources */}
          <div id="training">
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/30 rounded-full px-6 py-3 mb-8">
                <FiUsers className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-semibold text-amber-300 uppercase tracking-wider">Training Resources</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
                Professional <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">Development</span> Hub
              </h2>
              <p className="text-lg text-neutral-200 leading-relaxed mb-8">
                Comprehensive training materials and capacity building resources for development professionals.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-sm rounded-xl p-6 border border-amber-500/20">
                <h4 className="text-lg font-semibold text-white mb-3">Leadership Program</h4>
                <p className="text-sm text-neutral-300 mb-4">Executive development for development sector leaders</p>
                <button className="text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors">
                  Join Program →
                </button>
              </div>
              
              <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-sm rounded-xl p-6 border border-amber-500/20">
                <h4 className="text-lg font-semibold text-white mb-3">NGO Management Toolkit</h4>
                <p className="text-sm text-neutral-300 mb-4">Practical management resources for NGOs</p>
                <button className="text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors">
                  Access Toolkit →
                </button>
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>

      {/* Premium CTA Section */}
      <SectionLayout bgColor="bg-transparent" className="py-16">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 backdrop-blur-sm rounded-2xl border border-primary-500/20"></div>
          <div className="relative p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Unlock the Full <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400">Knowledge</span> Experience
            </h2>
            <p className="text-neutral-300 text-lg mb-8 max-w-3xl mx-auto">
              Join our professional network to access premium content, participate in exclusive workshops, and collaborate with development leaders worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 rounded-lg transition-all duration-200 hover:scale-105"
              >
                Contact Our Team
                <FiArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <button className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-primary-400 border border-primary-400 hover:bg-primary-400 hover:text-white rounded-lg transition-all duration-200">
                Request Custom Resources
              </button>
            </div>
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default ResourcesPage; 