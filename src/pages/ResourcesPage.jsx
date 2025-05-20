import React from 'react';
import SectionLayout from '../layouts/SectionLayout';
import SectionHeading from '../components/common/SectionHeading';
import SEO from '../utils/seo';

const ResourcesPage = () => {
  return (
    <>
      <SEO 
        title="Resources"
        description="Access reports, publications, toolkits, and other valuable resources from InSocia Development Consultancy."
        keywords={[
          'resources',
          'publications',
          'reports',
          'toolkits',
          'development knowledge',
          'policy briefs',
          'case studies'
        ]}
      />
      
      <SectionLayout backgroundColor="bg-transparent" className="pt-28 pb-16">
        <SectionHeading
          subtitle="Resources"
          title="Knowledge Hub"
          description="Access our repository of reports, publications, toolkits, and other resources to support development work."
          align="center"
        />
      </SectionLayout>

      {/* More sections will be added here as needed */}
      
    </>
  );
};

export default ResourcesPage; 