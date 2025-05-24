import React from 'react';
import SEO from '../components/SEO';
import SectionLayout from '../components/SectionLayout';
import SectionHeading from '../components/SectionHeading';
import ServicesList from '../components/services/ServicesList';
import ServiceProcess from '../components/services/ServiceProcess';
import ServiceDetails from '../components/services/ServiceDetails';
import ServiceCTA from '../components/services/ServiceCTA';
import { defaultAnimations, getStaggeredAnimation } from '../utils/animations';

const ServicesPage = () => {
  const serviceCategories = [
    {
      title: 'Research & Analysis',
      description: 'Data-driven insights and comprehensive analysis',
      icon: 'fas fa-chart-line'
    },
    {
      title: 'Program Design',
      description: 'Strategic planning and implementation frameworks',
      icon: 'fas fa-pencil-ruler'
    },
    {
      title: 'Capacity Building',
      description: 'Training and development for sustainable impact',
      icon: 'fas fa-users-cog'
    },
    {
      title: 'Monitoring & Evaluation',
      description: 'Impact assessment and performance tracking',
      icon: 'fas fa-clipboard-check'
    }
  ];

  return (
    <>
      <SEO 
        title="Our Services | InSocia Development Consultancy"
        description="Comprehensive development services including research, program design, capacity building, and monitoring & evaluation."
      />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 to-neutral-800">
          <div className="absolute inset-0 grid-pattern"></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary-500/5 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white"
                {...defaultAnimations.fadeIn}
              >
                Comprehensive Development Services
              </h1>
              <p 
                className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto"
                {...defaultAnimations.fadeIn}
              >
                Empowering communities through strategic solutions and sustainable impact
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceCategories.map((category, index) => (
                <div
                  key={category.title}
                  className="group relative"
                  {...getStaggeredAnimation(index)}
                >
                  <div className="relative bg-neutral-800/30 backdrop-blur-sm rounded-xl p-8 border border-neutral-700/30 hover:border-primary-500/30 transition-all duration-300">
                    <div className="w-14 h-14 bg-primary-500/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                      <i className={`${category.icon} text-2xl text-primary-400`}></i>
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-primary-400 transition-colors mb-3">
                      {category.title}
                    </h3>
                    <p className="text-neutral-300">
                      {category.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionLayout>
        <SectionHeading
          title="Our Services"
          description="Comprehensive development services tailored to your needs"
        />
        <ServicesList />
      </SectionLayout>

      <SectionLayout>
        <SectionHeading
          title="Our Process"
          description="A systematic approach to delivering exceptional results"
        />
        <ServiceProcess />
      </SectionLayout>

      <SectionLayout>
        <SectionHeading
          title="Service Details"
          description="Comprehensive services tailored to your development needs"
        />
        <ServiceDetails />
      </SectionLayout>

      <SectionLayout>
        <ServiceCTA />
      </SectionLayout>
    </>
  );
};

export default ServicesPage; 