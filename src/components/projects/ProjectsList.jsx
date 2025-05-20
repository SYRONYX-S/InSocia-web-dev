import React, { useState } from 'react';
import { projects } from '../../data/projects';
import { Link } from 'react-router-dom';
import SectionLayout from '../../layouts/SectionLayout';
import { motion } from 'framer-motion';

const ProjectsList = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <SectionLayout>
      <div className="container mx-auto px-4">
        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center mb-12" data-aos="fade-up">
          <div className="bg-white rounded-full shadow-md p-1 flex flex-wrap justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  filter === category 
                    ? 'bg-primary-600 text-white shadow-md' 
                    : 'text-neutral-600 hover:text-neutral-800 hover:bg-neutral-100'
                }`}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 h-full flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 to-transparent z-10"></div>
                <img
                  src={`/images/projects/${project.image}`}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1559036376-f4b29c27c0f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
                  }}
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-white/80 backdrop-blur-sm text-primary-700 text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1 bg-secondary-500/90 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-heading font-bold mb-3 text-neutral-800">
                  {project.title}
                </h3>
                
                <div className="flex flex-wrap gap-3 mb-4">
                  <div className="flex items-center text-xs text-neutral-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {project.location}
                  </div>
                  <div className="flex items-center text-xs text-neutral-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {project.duration}
                  </div>
                </div>
                
                <p className="text-neutral-600 mb-5 flex-grow">
                  {project.shortDescription}
                </p>
                
                <div className="mt-auto pt-4 border-t border-neutral-200">
                  <a 
                    href={`#project-${project.id}`} 
                    className="inline-flex items-center font-medium text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    View Details
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold text-neutral-700 mb-2">No projects found</h3>
            <p className="text-neutral-500">Try changing your filter or check back later for new projects.</p>
          </div>
        )}
      </div>
    </SectionLayout>
  );
};

export default ProjectsList; 