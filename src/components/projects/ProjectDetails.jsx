import React from 'react';
import { projects } from '../../data/projects';
import SectionLayout from '../../layouts/SectionLayout';

const ProjectDetails = () => {
  return (
    <div className="py-16 bg-neutral-50">
      {projects.map((project) => (
        <div 
          key={project.id} 
          id={`project-${project.id}`} 
          className="py-16 scroll-mt-20"
        >
          <SectionLayout>
            <div className="container mx-auto px-4">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden" data-aos="fade-up">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={`/images/projects/${project.image}`}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1559036376-f4b29c27c0f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-900/60 to-primary-900/30 flex items-center justify-center">
                      <div className="text-center p-8">
                        <span className="px-4 py-2 bg-white/10 backdrop-blur-md text-white text-sm font-medium rounded-full mb-4 inline-block">
                          {project.focusArea}
                        </span>
                        <h2 className="text-3xl font-heading font-bold text-white mt-4">
                          {project.title}
                        </h2>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8 lg:p-12">
                    <div className="flex flex-wrap gap-3 mb-6">
                      <div className="px-3 py-1 bg-primary-50 text-primary-800 text-sm font-medium rounded-full">
                        {project.category}
                      </div>
                      <div className="px-3 py-1 bg-neutral-100 text-neutral-600 text-sm font-medium rounded-full">
                        {project.location}
                      </div>
                      <div className="px-3 py-1 bg-neutral-100 text-neutral-600 text-sm font-medium rounded-full">
                        {project.duration}
                      </div>
                    </div>
                    
                    <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold font-heading mb-4 text-neutral-800">
                        Key Achievements
                      </h3>
                      <ul className="space-y-3">
                        {project.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="flex-shrink-0 h-6 w-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-neutral-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold font-heading mb-4 text-neutral-800">
                        Partners
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.partners.map((partner, idx) => (
                          <span 
                            key={idx} 
                            className="px-4 py-2 bg-neutral-100 text-neutral-700 text-sm font-medium rounded-full"
                          >
                            {partner}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionLayout>
        </div>
      ))}
    </div>
  );
};

export default ProjectDetails; 