import React from 'react';
import { Helmet } from 'react-helmet';
import SectionLayout from '../layouts/SectionLayout';
import FocusAreasList from '../components/focus-areas/FocusAreasList';
import FocusAreaDetail from '../components/focus-areas/FocusAreaDetail';
import FocusAreaCTA from '../components/focus-areas/FocusAreaCTA';
import { Link } from 'react-router-dom';
import { FiTarget, FiUsers, FiGlobe, FiTrendingUp, FiCheckCircle, FiGrid, FiArrowRight } from 'react-icons/fi';

const FocusAreasPage = () => {
  const focusAreasSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "Organization",
      "name": "InSocia Development Consultancy",
      "url": "https://insocia.org"
    },
    "serviceType": "Development Focus Areas",
    "areaServed": "Global"
  };

  return (
    <>
      <Helmet>
        <title>Focus Areas | InSocia Development Consultancy - Strategic Development Sectors</title>
        <meta 
          name="description" 
          content="Explore our strategic development focus areas including Health & Wellbeing, Education & Skills, Sustainable Livelihoods, Gender Equality, Environmental Sustainability, and Rural Development. Creating lasting impact through targeted expertise." 
        />
        <meta 
          name="keywords" 
          content="focus areas, health wellbeing, education skills, sustainable livelihoods, gender equality, environmental sustainability, rural development, social impact, development sectors" 
        />
        <script type="application/ld+json">
          {JSON.stringify(focusAreasSchema)}
        </script>
      </Helmet>

      {/* Premium Hero Section */}
      <section className="relative bg-transparent overflow-hidden hero-section min-h-screen">
        {/* Static background effects */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <div className="absolute w-[600px] h-[600px] -top-32 -left-32 bg-gradient-to-br from-primary-500/15 to-secondary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute w-[400px] h-[400px] bottom-0 right-0 bg-gradient-to-tl from-secondary-500/15 to-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary-600/8 to-secondary-600/8 rounded-full blur-2xl"></div>
        </div>

        <div className="w-full px-4 md:px-6 relative z-10 flex items-center min-h-screen mt-16 sm:mt-0">
          <div className="max-w-[1500px] mx-auto text-center w-full">
            {/* Premium badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-400/30 rounded-full px-5 py-2 mb-6">
              <FiTarget className="w-4 h-4 text-primary-400" />
              <span className="text-sm font-semibold text-primary-300 uppercase tracking-wider">Six Core Areas</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary-400 via-primary-400 to-secondary-400">Focus Areas</span> for Maximum Impact
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-4xl mx-auto">
              We concentrate our expertise across six strategic development sectors where evidence-based interventions can create the most sustainable and transformative impact for communities worldwide.
            </p>

            {/* Impact highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <div className="w-10 h-10 bg-gradient-to-br from-secondary-500/30 to-primary-500/30 rounded-lg flex items-center justify-center mx-auto mb-3 border border-secondary-400/20">
                  <FiTarget className="w-5 h-5 text-secondary-400" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">Targeted Approach</h3>
                <p className="text-sm text-white/70">Deep sector expertise for maximum impact</p>
              </div>
              
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <div className="w-10 h-10 bg-gradient-to-br from-secondary-500/30 to-primary-500/30 rounded-lg flex items-center justify-center mx-auto mb-3 border border-secondary-400/20">
                  <FiUsers className="w-5 h-5 text-secondary-400" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">Community-Centered</h3>
                <p className="text-sm text-white/70">Solutions designed with and for communities</p>
              </div>

              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <div className="w-10 h-10 bg-gradient-to-br from-secondary-500/30 to-primary-500/30 rounded-lg flex items-center justify-center mx-auto mb-3 border border-secondary-400/20">
                  <FiGlobe className="w-5 h-5 text-secondary-400" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">Global Reach</h3>
                <p className="text-sm text-white/70">Cross-regional expertise and partnerships</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
              <Link 
                to="/services" 
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-gradient-to-r from-secondary-600 to-primary-600 hover:from-secondary-700 hover:to-primary-700 rounded-xl transition-all duration-300 shadow-lg hover:shadow-secondary-500/25"
              >
                Explore Our Services
                <FiArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/30 rounded-xl transition-all duration-300"
              >
                Discuss Your Project
              </Link>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { number: '6', label: 'Focus Areas', icon: FiGrid },
                { number: '18', label: 'Countries', icon: FiGlobe },
                { number: '100+', label: 'Projects', icon: FiCheckCircle },
                { number: '500K+', label: 'Lives Impacted', icon: FiTrendingUp }
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

      {/* Focus Areas List */}
      <SectionLayout bgColor="bg-transparent" id="focus-areas-overview">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary-500/20 to-primary-500/20 border border-secondary-400/30 rounded-full px-6 py-3 mb-8">
            <FiGrid className="w-4 h-4 text-secondary-400" />
            <span className="text-sm font-semibold text-secondary-300 uppercase tracking-wider">Our Focus Areas</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
            Strategic <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary-400 to-primary-400">Development</span> Sectors
          </h2>
          <p className="text-xl text-neutral-200 max-w-4xl mx-auto leading-relaxed">
            Each focus area represents a critical domain where targeted interventions can drive sustainable development and create lasting positive change for communities.
          </p>
        </div>
        <FocusAreasList />
      </SectionLayout>

      {/* Focus Area Details */}
      <SectionLayout bgColor="bg-transparent" id="focus-area-details">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary-500/20 to-primary-500/20 border border-secondary-400/30 rounded-full px-6 py-3 mb-8">
            <FiCheckCircle className="w-4 h-4 text-secondary-400" />
            <span className="text-sm font-semibold text-secondary-300 uppercase tracking-wider">Deep Dive</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
            Sector <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary-400 to-primary-400">Expertise</span> & Approach
          </h2>
          <p className="text-xl text-neutral-200 max-w-4xl mx-auto leading-relaxed">
            Our specialized knowledge and proven methodologies across each development sector ensure effective and sustainable outcomes.
          </p>
        </div>
      <FocusAreaDetail />
      </SectionLayout>

      {/* CTA Section */}
      <SectionLayout bgColor="bg-transparent" id="get-started">
      <FocusAreaCTA />
      </SectionLayout>
    </>
  );
};

export default FocusAreasPage; 