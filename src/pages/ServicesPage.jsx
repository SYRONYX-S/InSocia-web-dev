import React from 'react';
import { Helmet } from 'react-helmet';
import SectionLayout from '../layouts/SectionLayout';
import ServicesList from '../components/services/ServicesList';
import ServiceProcess from '../components/services/ServiceProcess';
import ServiceDetails from '../components/services/ServiceDetails';
import ServiceCTA from '../components/services/ServiceCTA';
import { Link } from 'react-router-dom';
import { FiUsers, FiBarChart2, FiTrendingUp, FiCheckCircle, FiTarget, FiZap, FiGlobe, FiAward } from 'react-icons/fi';
import SectionHeading from '../components/common/SectionHeading';

const ServicesPage = () => {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "Organization",
      "name": "InSocia Development Consultancy",
      "url": "https://insocia.org"
    },
    "serviceType": "Development Consultancy",
    "areaServed": "Global"
  };

  return (
    <>
      <Helmet>
        <title>Our Services | InSocia Development Consultancy - Evidence-Based Social Impact Solutions</title>
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

      {/* Premium Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-transparent overflow-hidden pt-24 pb-16">
        {/* Enhanced background effects */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <div className="absolute w-[800px] h-[800px] -top-40 -left-40 bg-gradient-to-br from-primary-500/20 to-secondary-500/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute w-[600px] h-[600px] bottom-0 right-0 bg-gradient-to-tl from-secondary-500/20 to-primary-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary-600/10 to-secondary-600/10 rounded-full blur-2xl"></div>
        </div>

        <div className="w-full px-4 md:px-8 relative z-10">
          {/* Centered Content - Full width like other sections */}
          <div className="max-w-6xl mx-auto text-center">
            {/* Premium badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-400/30 rounded-full px-4 py-2 mb-6">
              <FiAward className="w-4 h-4 text-primary-400" />
              <span className="text-xs font-semibold text-primary-300 uppercase tracking-wider">Evidence-Based Solutions</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Transform <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-400 animate-gradient-x">Social Development</span> Through Collaboration
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-4xl mx-auto">
              InSocia bridges the gap between academic research and on-the-ground implementation, transforming social development through collaborative research, innovative policy design, and impact-focused implementation.
            </p>

            {/* Key differentiators */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 max-w-5xl mx-auto">
              <div className="flex items-start gap-3 text-left backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500/30 to-secondary-500/30 rounded-lg flex items-center justify-center border border-primary-400/20">
                  <FiTarget className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1">Evidence-First Approach</h3>
                  <p className="text-sm text-white/70">Rigorous research and data-driven insights in all our work</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 text-left backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500/30 to-secondary-500/30 rounded-lg flex items-center justify-center border border-primary-400/20">
                  <FiUsers className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1">Collaborative Partnership</h3>
                  <p className="text-sm text-white/70">Co-creating solutions with stakeholders at all levels</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-left backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500/30 to-secondary-500/30 rounded-lg flex items-center justify-center border border-primary-400/20">
                  <FiZap className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1">Inclusive Innovation</h3>
                  <p className="text-sm text-white/70">Solutions accessible and beneficial to diverse communities</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-left backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500/30 to-secondary-500/30 rounded-lg flex items-center justify-center border border-primary-400/20">
                  <FiTrendingUp className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1">Sustainable Impact</h3>
                  <p className="text-sm text-white/70">Creating lasting change through systems-level interventions</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 rounded-xl transition-all duration-300 shadow-lg hover:shadow-primary-500/25"
              >
                Partner With Us
              </Link>
              <Link 
                to="/projects" 
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/30 rounded-xl transition-all duration-300"
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
                <div key={index} className="backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-xl p-3 text-center group hover:bg-white/15 transition-all duration-300">
                  <stat.icon className="w-4 h-4 text-primary-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-lg lg:text-xl font-bold text-white mb-1">{stat.number}</p>
                  <p className="text-xs text-white/70 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services List with enhanced heading */}
      <SectionLayout bgColor="bg-transparent" id="services-overview">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-400/30 rounded-full px-6 py-3 mb-8">
            <FiTarget className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-semibold text-primary-300 uppercase tracking-wider">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
            Comprehensive <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400">Solutions</span> for Social Impact
          </h2>
          <p className="text-xl text-neutral-200 max-w-4xl mx-auto leading-relaxed">
            From rigorous research and policy design to implementation support and impact measurement - we provide end-to-end solutions tailored to drive sustainable social change.
          </p>
        </div>
        <ServicesList />
      </SectionLayout>

      {/* Process Section */}
      <SectionLayout bgColor="bg-transparent" id="our-process">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-400/30 rounded-full px-6 py-3 mb-8">
            <FiBarChart2 className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-semibold text-primary-300 uppercase tracking-wider">Our Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
            A Systematic <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400">Approach</span> to Excellence
          </h2>
          <p className="text-xl text-neutral-200 max-w-4xl mx-auto leading-relaxed">
            Our evidence-based methodology ensures rigorous, collaborative, and adaptive approaches to deliver exceptional results for sustainable social impact.
          </p>
        </div>
        <ServiceProcess />
      </SectionLayout>

      {/* Details Section */}
      <SectionLayout bgColor="bg-transparent" id="service-details">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-400/30 rounded-full px-6 py-3 mb-8">
            <FiCheckCircle className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-semibold text-primary-300 uppercase tracking-wider">Service Details</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
            Tailored <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400">Expertise</span> for Your Needs
          </h2>
          <p className="text-xl text-neutral-200 max-w-4xl mx-auto leading-relaxed">
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