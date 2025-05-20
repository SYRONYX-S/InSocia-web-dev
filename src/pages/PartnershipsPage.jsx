import React from 'react';
import MainLayout from '../layouts/MainLayout';
import SectionLayout from '../layouts/SectionLayout';
import SectionHeading from '../components/common/SectionHeading';
import SEO from '../utils/seo';
import PartnersList from '../components/partnerships/PartnersList';
import PartnersCTA from '../components/partnerships/PartnersCTA';

const PartnershipsPage = () => {
  return (
    <MainLayout>
      <SEO 
        title="Partnerships | InSocia Development Consultancy"
        description="Discover our partnerships with governments, NGOs, international organizations, and private sector entities."
        keywords={[
          'partnerships',
          'collaborations',
          'government partners',
          'NGO partners',
          'international organizations',
          'private sector partnerships'
        ]}
      />
      
      <SectionLayout backgroundColor="bg-primary-50" className="pt-28 pb-16">
        <SectionHeading
          subtitle="Partnerships"
          title="Our Collaborative Network"
          description="We work with a diverse range of partners to maximize impact and create sustainable change."
          align="center"
        />
      </SectionLayout>

      <PartnersList />
      <PartnersCTA />
      
    </MainLayout>
  );
};

export default PartnershipsPage; 