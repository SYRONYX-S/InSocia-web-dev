import React from 'react';
import SectionLayout from '../layouts/SectionLayout';
import SectionHeading from '../components/common/SectionHeading';
import SEO from '../utils/seo';
import FeaturedProjects from '../components/projects/FeaturedProjects';
import ProjectsList from '../components/projects/ProjectsList';
import ProjectDetails from '../components/projects/ProjectDetails';

const ProjectsPage = () => {
  return (
    <>
      <SEO 
        title="Our Projects | InSocia Development Consultancy"
        description="Explore the impactful development projects implemented by InSocia Development Consultancy."
        keywords={[
          'development projects',
          'social impact',
          'case studies',
          'project portfolio',
          'success stories',
          'development initiatives'
        ]}
      />
      
      <SectionLayout backgroundColor="bg-transparent" className="pt-28 pb-16">
        <SectionHeading
          subtitle="Our Projects"
          title="Creating Sustainable Impact"
          description="Explore our portfolio of projects across various sectors and regions that are creating meaningful change."
          align="center"
        />
      </SectionLayout>

      <FeaturedProjects />
      <ProjectsList />
      <ProjectDetails />
      
    </>
  );
};

export default ProjectsPage; 