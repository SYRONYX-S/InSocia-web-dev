import React from 'react';
import { Helmet } from 'react-helmet';
import SectionLayout from '../layouts/SectionLayout';
import FocusAreasList from '../components/focus-areas/FocusAreasList';
import FocusAreaDetail from '../components/focus-areas/FocusAreaDetail';
import FocusAreaCTA from '../components/focus-areas/FocusAreaCTA';
import { Link } from 'react-router-dom';
import { FiTarget, FiUsers, FiGlobe, FiTrendingUp, FiCheckCircle, FiGrid, FiArrowRight } from 'react-icons/fi';
import SEO from '../components/SEO';

const FocusAreasPage = () => {
  const focusAreasSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "Organization",
      "name": "Insocia Consultancy",
              "url": "https://insocia.in"
    },
    "serviceType": "Development Focus Areas",
    "areaServed": "Global"
  };

  return (
    <>
      <SEO 
        title="Focus Areas"
        description="Explore our strategic development focus areas including Health, Education, Sustainable Livelihoods, Gender Equality, Environmental Sustainability, and Rural Development."
        keywords="focus areas, health wellbeing, education skills, sustainable livelihoods, gender equality, environmental sustainability, rural development"
      />

      <Helmet>
        <title>Focus Areas | Insocia Consultancy - Strategic Development Sectors</title>
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

      <SectionLayout bgColor="bg-transparent" className="min-h-screen">
        {/* Hero Section */}
        <div className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center mb-16" data-aos="fade-up">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/15 to-secondary-500/15 border border-primary-400/30 rounded-full px-6 py-3 mb-8">
                <FiTarget className="w-4 h-4 text-primary-600" />
                <span className="text-sm font-semibold text-primary-700 uppercase tracking-wider">Six Core Areas</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-neutral-900 leading-tight">
                Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">Focus Areas</span> for Maximum Impact
              </h1>
              <p className="responsive-desc text-xl md:text-2xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
                We concentrate our expertise across six strategic development sectors where evidence-based interventions can create the most sustainable and transformative impact.
              </p>
            </div>

            {/* Impact highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 responsive-grid-small" data-aos="fade-up">
              <div className="backdrop-blur-md bg-white/80 border border-neutral-200/50 rounded-xl p-6 text-center hover:shadow-lg hover:shadow-primary-200/30 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-100/80 to-secondary-100/80 rounded-lg flex items-center justify-center mx-auto mb-4 border border-primary-200/50">
                  <FiTarget className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Targeted Approach</h3>
                <p className="text-neutral-600">Deep sector expertise for maximum impact</p>
              </div>
              
              <div className="backdrop-blur-md bg-white/80 border border-neutral-200/50 rounded-xl p-6 text-center hover:shadow-lg hover:shadow-primary-200/30 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-100/80 to-secondary-100/80 rounded-lg flex items-center justify-center mx-auto mb-4 border border-primary-200/50">
                  <FiUsers className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Community-Centered</h3>
                <p className="text-neutral-600">Solutions designed with and for communities</p>
              </div>

              <div className="backdrop-blur-md bg-white/80 border border-neutral-200/50 rounded-xl p-6 text-center hover:shadow-lg hover:shadow-primary-200/30 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-100/80 to-secondary-100/80 rounded-lg flex items-center justify-center mx-auto mb-4 border border-primary-200/50">
                  <FiGlobe className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Global Reach</h3>
                <p className="text-neutral-600">Cross-regional expertise and partnerships</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16 justify-center" data-aos="fade-up">
              <Link 
                to="/services" 
                className="primary-btn"
              >
                Explore Our Services
                <FiArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-neutral-900 bg-white/90 hover:bg-white backdrop-blur-sm border border-neutral-200/50 hover:border-neutral-300 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Discuss Your Project
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 responsive-grid-small" data-aos="fade-up">
              {[
                { number: '6', label: 'Focus Areas', icon: FiGrid },
                { number: '18', label: 'Countries', icon: FiGlobe },
                { number: '100+', label: 'Projects', icon: FiCheckCircle },
                { number: '500K+', label: 'Lives Impacted', icon: FiTrendingUp }
              ].map((stat, index) => (
                <div key={index} className="backdrop-blur-md bg-white/80 border border-neutral-200/50 rounded-xl p-6 text-center hover:bg-primary-50/50 transition-all duration-300 group">
                  <stat.icon className="w-6 h-6 text-primary-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-2xl font-bold text-neutral-900 mb-2">{stat.number}</p>
                  <p className="text-sm text-neutral-600 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Focus Areas List */}
        <div className="py-16" id="focus-areas-overview">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16" data-aos="fade-up">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/15 to-secondary-500/15 border border-primary-400/30 rounded-full px-6 py-3 mb-8">
                <FiGrid className="w-4 h-4 text-primary-600" />
                <span className="text-sm font-semibold text-primary-700 uppercase tracking-wider">Our Focus Areas</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-neutral-900 leading-tight">
                Strategic <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">Development</span> Sectors
              </h2>
              <p className="responsive-desc text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
                Each focus area represents a critical domain where targeted interventions can drive sustainable development and create lasting positive change for communities.
              </p>
            </div>
            <FocusAreasList />
          </div>
        </div>

        {/* Focus Area Details */}
        <div className="py-16" id="focus-area-details">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16" data-aos="fade-up">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/15 to-secondary-500/15 border border-primary-400/30 rounded-full px-6 py-3 mb-8">
                <FiCheckCircle className="w-4 h-4 text-primary-600" />
                <span className="text-sm font-semibold text-primary-700 uppercase tracking-wider">Deep Dive</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-neutral-900 leading-tight">
                Sector <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">Expertise</span> & Approach
              </h2>
              <p className="responsive-desc text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
                Our specialized knowledge and proven methodologies across each development sector ensure effective and sustainable outcomes.
              </p>
            </div>
            <FocusAreaDetail />
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16" id="get-started">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FocusAreaCTA />
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default FocusAreasPage; 