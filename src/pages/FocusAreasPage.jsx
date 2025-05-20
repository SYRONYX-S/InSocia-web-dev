import React from 'react';
import MainLayout from '../layouts/MainLayout';
import SectionLayout from '../layouts/SectionLayout';
import SectionHeading from '../components/common/SectionHeading';
import SEO from '../utils/seo';
import FocusAreasList from '../components/focus-areas/FocusAreasList';
import FocusAreaDetail from '../components/focus-areas/FocusAreaDetail';
import FocusAreaCTA from '../components/focus-areas/FocusAreaCTA';

const FocusAreasPage = () => {
  return (
    <MainLayout>
      <SEO 
        title="Focus Areas | InSocia Development Consultancy"
        description="Explore our key development sectors including Education, Public Health, Climate, Governance, Economic Development and Women Empowerment."
        keywords={[
          'focus areas',
          'education',
          'public health',
          'climate',
          'governance',
          'economic development',
          'women empowerment'
        ]}
      />
      
      <SectionLayout backgroundColor="bg-primary-50" className="pt-28 pb-16">
        <SectionHeading
          subtitle="Focus Areas"
          title="Our Key Development Sectors"
          description="We focus on six key development sectors where we have deep expertise and experience in creating sustainable impact."
          align="center"
        />
      </SectionLayout>

      <FocusAreasList />
      <FocusAreaDetail />
      <FocusAreaCTA />
      
    </MainLayout>
  );
};

export default FocusAreasPage; 