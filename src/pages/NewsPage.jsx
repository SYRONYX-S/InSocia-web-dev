import React from 'react';
import SectionLayout from '../layouts/SectionLayout';
import SectionHeading from '../components/common/SectionHeading';
import SEO from '../utils/seo';

const NewsPage = () => {
  return (
    <>
      <SEO 
        title="News & Insights"
        description="Latest news, insights, and updates from InSocia Development Consultancy."
        keywords={[
          'news',
          'insights',
          'blog',
          'updates',
          'development sector',
          'events'
        ]}
      />
      
      <SectionLayout backgroundColor="bg-transparent" className="pt-28 pb-16">
        <SectionHeading
          subtitle="News & Insights"
          title="Latest Updates"
          description="Stay informed about our recent activities, insights, and developments in the social sector."
          align="center"
        />
      </SectionLayout>

      {/* More sections will be added here as needed */}
      
    </>
  );
};

export default NewsPage; 