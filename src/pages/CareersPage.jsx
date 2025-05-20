import React from 'react';
import MainLayout from '../layouts/MainLayout';
import SectionLayout from '../layouts/SectionLayout';
import SectionHeading from '../components/common/SectionHeading';
import SEO from '../utils/seo';

const CareersPage = () => {
  return (
    <MainLayout>
      <SEO 
        title="Careers"
        description="Explore career opportunities at InSocia Development Consultancy."
        keywords={[
          'careers',
          'jobs',
          'employment',
          'opportunities',
          'development sector',
          'join our team'
        ]}
      />
      
      <SectionLayout backgroundColor="bg-primary-50" className="pt-28 pb-16">
        <SectionHeading
          subtitle="Careers"
          title="Join Our Team"
          description="Explore opportunities to work with us in creating meaningful social impact."
          align="center"
        />
      </SectionLayout>

      {/* More sections will be added here as needed */}
      
    </MainLayout>
  );
};

export default CareersPage; 