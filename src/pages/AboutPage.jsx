import React from 'react';
import SectionLayout from '../layouts/SectionLayout';
import SectionHeading from '../components/common/SectionHeading';
import OurStory from '../components/about/OurStory';
import VisionMission from '../components/about/VisionMission';
import OurValues from '../components/about/OurValues';
import OurTeam from '../components/about/OurTeam';
import SEO from '../utils/seo';

const AboutPage = () => {
  return (
    <>
      <SEO 
        title="About Us | InSocia Development Consultancy"
        description="Learn about InSocia Development Consultancy, our mission, vision, values, and the dedicated team working to create sustainable social impact."
        keywords={[
          'about us',
          'social development organization',
          'development consultancy',
          'mission',
          'vision',
          'values',
          'team'
        ]}
      />
      
      <SectionLayout backgroundColor="bg-transparent" className="pt-28 pb-16">
        <SectionHeading
          subtitle="About Us"
          title="Creating Sustainable Development Impact"
          description="InSocia Development Consultancy is a social development organization focused on research, policy design, and project implementation to address complex social challenges."
          align="center"
        />
      </SectionLayout>

      <OurStory />
      <VisionMission />
      <OurValues />
      <OurTeam />
    </>
  );
};

export default AboutPage; 