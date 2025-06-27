import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import { FiArrowRight, FiMapPin, FiCalendar, FiTarget, FiTrendingUp } from 'react-icons/fi';

const FeaturedProjects = () => {
  // Get first 3 projects as featured
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/15 to-secondary-500/15 border border-primary-400/30 rounded-full px-6 py-3 mb-6">
          <FiTarget className="w-4 h-4 text-primary-600" />
          <span className="text-sm font-semibold text-primary-700 uppercase tracking-wider">Featured Work</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
          Transforming Communities Through <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">Evidence-Based Action</span>
        </h2>
        <p className="responsive-desc text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
          Explore our impactful projects that demonstrate our commitment to sustainable development and community empowerment across diverse contexts.
        </p>
      </div>

      {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 responsive-grid-small">
        {featuredProjects.map((project, index) => (
          <div
            key={project.id}
            className="group relative overflow-hidden"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {/* Premium Card Design with light theme */}
            <div className="relative backdrop-blur-md bg-white/80 rounded-2xl border border-neutral-200/50 hover:border-primary-400/50 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-primary-200/30 overflow-hidden h-full">
              
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Image Section */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image || "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent"></div>
                
                {/* Project badge */}
                <div className="absolute top-4 right-4 backdrop-blur-md bg-white/90 rounded-lg px-3 py-2 border border-neutral-200/50">
                  <span className="text-xs font-medium text-neutral-700">Project #{project.id}</span>
                </div>
                
                {/* Title overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary-300 transition-colors">
                    {project.title}
                  </h3>
                  {project.focusArea && (
                    <span className="text-xs text-primary-300 font-medium">
                      {project.focusArea}
                    </span>
                  )}
                </div>
              </div>
              
              {/* Content Section */}
              <div className="relative z-10 p-6">
                {/* Description */}
                <p className="text-neutral-600 group-hover:text-neutral-700 transition-colors duration-300 mb-4 leading-relaxed text-sm">
                  {project.shortDescription || project.description?.substring(0, 120) + '...'}
                </p>
                
                {/* Meta Info */}
                <div className="space-y-2 mb-4">
                  {project.location && (
                    <div className="flex items-center gap-2 text-xs text-neutral-500">
                      <FiMapPin className="w-3 h-3 text-primary-600" />
                      <span>{project.location}</span>
                    </div>
                  )}
                  {project.duration && (
                    <div className="flex items-center gap-2 text-xs text-neutral-500">
                      <FiCalendar className="w-3 h-3 text-primary-600" />
                      <span>{project.duration}</span>
                    </div>
                  )}
                </div>
                
                {/* Impact Preview */}
                {project.impact && (
                  <div className="mb-4">
                    <div className="backdrop-blur-sm bg-primary-50/80 rounded-lg p-3 border border-primary-200/50">
                      <div className="flex items-center gap-2 mb-2">
                        <FiTrendingUp className="w-3 h-3 text-primary-600" />
                        <span className="text-xs font-medium text-primary-700 uppercase tracking-wider">Impact</span>
                      </div>
                      <p className="text-xs text-neutral-700 leading-relaxed">
                        {Array.isArray(project.impact) ? project.impact[0] : project.impact}
                      </p>
                    </div>
                  </div>
                )}
                
                {/* CTA */}
                <div className="flex items-center justify-between pt-3 border-t border-neutral-200/50">
                  <Link 
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-all duration-300 font-medium text-sm group/link"
                  >
                    <span>Learn More</span>
                    <FiArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform duration-300" />
                  </Link>
                  
                  {/* Project indicators */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 3 }).map((_, idx) => (
                      <div 
                        key={idx}
                        className="w-1 h-1 rounded-full bg-primary-500/50 group-hover:bg-primary-500/80 transition-colors duration-300"
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Animated border effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/0 via-primary-500/20 to-primary-500/0 blur-sm"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All CTA */}
      <div className="text-center pt-8">
        <Link 
          to="/projects"
          className="primary-btn"
        >
          <span>View All Projects</span>
          <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProjects; 