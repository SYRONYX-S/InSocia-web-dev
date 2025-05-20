import React from 'react';
import { Link } from 'react-router-dom';
import SectionLayout from '../../layouts/SectionLayout';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';

const FeaturedProjects = () => {
  // Placeholder images - replace with actual project images
  const projects = [
    {
      id: 'project1',
      title: 'Water and Sanitation of Tea Plantation Workers',
      category: 'Health & Wellbeing',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
      description: 'Improving water access and sanitation facilities for tea plantation communities in rural areas.',
      link: '/projects/water-sanitation-tea-plantation'
    },
    {
      id: 'project2',
      title: 'Rural Women Entrepreneurship Initiative',
      category: 'Gender Equality & Inclusion',
      image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      description: 'Supporting women entrepreneurs in rural areas through training, mentorship, and market access.',
      link: '/projects/rural-women-entrepreneurship'
    },
    {
      id: 'project3',
      title: 'Climate-Resilient Agriculture Program',
      category: 'Environmental Sustainability',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      description: 'Helping farmers adapt to climate change through sustainable agricultural practices and technology.',
      link: '/projects/climate-resilient-agriculture'
    }
  ];
  
  return (
    <SectionLayout bgColor="bg-neutral-50">
      <SectionHeading 
        title="Featured Projects" 
        subtitle="Explore some of our impactful initiatives across different focus areas"
        centered
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index ) => (
          <div 
            key={project.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="text-sm font-medium text-primary-600 mb-2">{project.category}</div>
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-neutral-600 mb-4">{project.description}</p>
              <Link 
                to={project.link} 
                className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center"
              >
                View Project
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
         ))}
      </div>
      
      <div className="text-center mt-12">
        <Button to="/projects" variant="outline">
          View All Projects
        </Button>
      </div>
    </SectionLayout>
  );
};

export default FeaturedProjects; 