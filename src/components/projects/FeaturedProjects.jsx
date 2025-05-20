import React from 'react';
import { projects } from '../../data/projects';
import { motion } from 'framer-motion';
import SectionLayout from '../../layouts/SectionLayout';

const FeaturedProjects = () => {
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <SectionLayout backgroundColor="bg-primary-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-2 rounded-full backdrop-blur-md border border-white/20 text-sm font-semibold text-white/90 mb-4 bg-white/5">
            FEATURED PROJECTS
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white">
            Transformative Impact in Action
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Explore our showcase projects that demonstrate our approach to creating sustainable social impact
          </p>
        </div>
        
        {/* Grid layout for featured projects */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          {featuredProjects.slice(0, 3).map((project, index) => {
            // First project takes full width on mobile, 8 columns on desktop
            if (index === 0) {
              return (
                <motion.div 
                  key={project.id}
                  className="md:col-span-8 relative group rounded-2xl overflow-hidden shadow-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img 
                      src={`/images/projects/${project.image}`} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1559036376-f4b29c27c0f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/60 to-transparent z-10"></div>
                    
                    <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-10">
                      <div className="flex flex-wrap gap-3 mb-4">
                        <span className="px-3 py-1 bg-white/90 text-primary-700 text-xs font-medium rounded-full">
                          {project.category}
                        </span>
                        <span className="px-3 py-1 bg-primary-500/90 text-white text-xs font-medium rounded-full">
                          {project.focusArea}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3 text-white">
                        {project.title}
                      </h3>
                      
                      <p className="text-white/80 mb-5 max-w-2xl">
                        {project.shortDescription}
                      </p>
                      
                      <a 
                        href={`#project-${project.id}`} 
                        className="inline-flex items-center font-semibold text-white hover:text-primary-300 transition-colors"
                      >
                        View Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            }
            
            // Other featured projects take 4 columns each
            return (
              <motion.div 
                key={project.id}
                className="md:col-span-4 relative group rounded-2xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="relative aspect-[9/16] md:aspect-[3/4] overflow-hidden">
                  <img 
                    src={`/images/projects/${project.image}`} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1559036376-f4b29c27c0f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/60 to-transparent z-10"></div>
                  
                  <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                    <div>
                      <span className="px-3 py-1 bg-white/90 text-primary-700 text-xs font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-heading font-bold my-3 text-white">
                      {project.title}
                    </h3>
                    
                    <a 
                      href={`#project-${project.id}`} 
                      className="inline-flex items-center font-semibold text-white hover:text-primary-300 transition-colors"
                    >
                      View Details
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Stats section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8" data-aos="fade-up" data-aos-delay="200">
          <div className="glass-effect rounded-xl p-6 text-center">
            <p className="text-4xl font-bold text-white mb-2">{projects.length}+</p>
            <p className="text-white/70">Projects Completed</p>
          </div>
          <div className="glass-effect rounded-xl p-6 text-center">
            <p className="text-4xl font-bold text-white mb-2">6</p>
            <p className="text-white/70">Focus Areas</p>
          </div>
          <div className="glass-effect rounded-xl p-6 text-center">
            <p className="text-4xl font-bold text-white mb-2">18</p>
            <p className="text-white/70">Countries</p>
          </div>
          <div className="glass-effect rounded-xl p-6 text-center">
            <p className="text-4xl font-bold text-white mb-2">100K+</p>
            <p className="text-white/70">Lives Impacted</p>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default FeaturedProjects; 