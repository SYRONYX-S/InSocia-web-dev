import React from 'react';
import { defaultAnimations, getStaggeredAnimation } from '../../utils/animations';

const ServiceDetails = () => {
  const details = [
    {
      title: 'Research & Analysis',
      description: 'Comprehensive research and data analysis to inform decision-making and strategy development.',
      icon: 'fas fa-search',
      features: [
        'Needs assessment',
        'Stakeholder analysis',
        'Market research',
        'Impact evaluation'
      ]
    },
    {
      title: 'Program Design',
      description: 'Development of evidence-based programs and interventions tailored to specific contexts and needs.',
      icon: 'fas fa-pencil-ruler',
      features: [
        'Theory of change',
        'Logic framework',
        'Implementation plan',
        'Resource allocation'
      ]
    },
    {
      title: 'Implementation Support',
      description: 'Hands-on support and guidance throughout the implementation process to ensure successful execution.',
      icon: 'fas fa-tasks',
      features: [
        'Project management',
        'Capacity building',
        'Technical assistance',
        'Quality assurance'
      ]
    },
    {
      title: 'Monitoring & Evaluation',
      description: 'Robust monitoring and evaluation systems to track progress and measure impact.',
      icon: 'fas fa-chart-line',
      features: [
        'Performance indicators',
        'Data collection',
        'Impact assessment',
        'Learning systems'
      ]
    }
  ];

  return (
    <section className="py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
            {...defaultAnimations.fadeIn}
          >
            Service Details
          </h2>
          <p 
            className="text-xl text-neutral-300"
            {...defaultAnimations.fadeIn}
          >
            Comprehensive services tailored to your development needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {details.map((detail, index) => (
            <div
              key={detail.title}
              className="group relative"
              {...getStaggeredAnimation(index)}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-neutral-800/50 backdrop-blur-sm rounded-xl p-8 border border-neutral-700/50 group-hover:border-primary-500/50 transition-all duration-300 h-full">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-primary-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <i className={`${detail.icon} text-3xl text-primary-400`}></i>
                    </div>
                    <h3 className="text-2xl font-semibold text-white group-hover:text-primary-400 transition-colors">
                      {detail.title}
                    </h3>
                  </div>
                  
                  <p className="text-neutral-300 mb-8 flex-grow">{detail.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {detail.features.map((feature, featureIndex) => (
                      <div 
                        key={feature}
                        className="flex items-center gap-3 text-neutral-300 group/feature"
                      >
                        <div className="w-6 h-6 rounded-full bg-primary-500/10 flex items-center justify-center group-hover/feature:scale-110 transition-transform duration-300">
                          <i className="fas fa-check text-xs text-primary-400"></i>
                        </div>
                        <span className="group-hover/feature:text-white transition-colors">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails; 