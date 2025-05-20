import React from 'react';
import MainLayout from '../layouts/MainLayout';
import SectionLayout from '../layouts/SectionLayout';
import SectionHeading from '../components/common/SectionHeading';
import ServicesList from '../components/services/ServicesList';
import ServiceProcess from '../components/services/ServiceProcess';
import ServiceDetails from '../components/services/ServiceDetails';
import ServiceCTA from '../components/services/ServiceCTA';
import SEO from '../utils/seo';

const ServicesPage = () => {
  return (
    <MainLayout>
      <SEO 
        title="Our Services | InSocia Development Consultancy"
        description="Explore the comprehensive range of professional services offered by InSocia Development Consultancy including research, policy design, program implementation, and more."
        keywords={[
          'development services',
          'policy research',
          'program design',
          'monitoring evaluation',
          'capacity building',
          'strategic planning'
        ]}
      />
      
      <SectionLayout backgroundColor="bg-primary-50" className="pt-28 pb-16">
        <SectionHeading
          subtitle="Our Services"
          title="Professional Development Services"
          description="We offer a comprehensive range of services tailored to the needs of development organizations, governments, and communities."
          align="center"
        />
      </SectionLayout>

      <ServicesList />
      <ServiceProcess />
      <ServiceDetails />
      <ServiceCTA />
    </MainLayout>
  );
};

export default ServicesPage; 