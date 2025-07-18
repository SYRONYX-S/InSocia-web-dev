import React from 'react';
import { defaultAnimations, getStaggeredAnimation } from '../../utils/animations';
import { FiSearch, FiEdit3, FiCheckCircle, FiBarChart2 } from 'react-icons/fi';

const ServiceDetails = () => {
  const details = [
    {
      title: 'Research & Analysis',
      description: 'Comprehensive research and data analysis to inform decision-making and strategy development.',
      icon: <FiSearch className="w-6 h-6 text-primary-600" />,
      features: [
        'Needs assessment',
        'Stakeholder analysis',
        'Market research',
        'Impact evaluation'
      ],
      gradient: 'from-blue-500/10 to-primary-500/10'
    },
    {
      title: 'Program Design',
      description: 'Development of evidence-based programs and interventions tailored to specific contexts and needs.',
      icon: <FiEdit3 className="w-6 h-6 text-secondary-600" />,
      features: [
        'Theory of change',
        'Logic framework',
        'Implementation plan',
        'Resource allocation'
      ],
      gradient: 'from-secondary-500/10 to-purple-500/10'
    },
    {
      title: 'Implementation Support',
      description: 'Hands-on support and guidance throughout the implementation process to ensure successful execution.',
      icon: <FiCheckCircle className="w-6 h-6 text-green-600" />,
      features: [
        'Project management',
        'Capacity building',
        'Technical assistance',
        'Quality assurance'
      ],
      gradient: 'from-green-500/10 to-emerald-500/10'
    },
    {
      title: 'Monitoring & Evaluation',
      description: 'Rigorous monitoring and evaluation to measure impact and inform continuous improvement.',
      icon: <FiBarChart2 className="w-6 h-6 text-amber-600" />,
      features: [
        'Performance tracking',
        'Impact assessment',
        'Learning documentation',
        'Recommendations'
      ],
      gradient: 'from-amber-500/10 to-orange-500/10'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {details.map((detail, index) => (
        <div
          key={detail.title}
          className="group relative overflow-hidden"
          {...getStaggeredAnimation(index)}
        >
          {/* Card design with light theme */}
          <div className="relative h-full backdrop-blur-md bg-white/80 rounded-xl border border-neutral-200/50 hover:border-primary-400/50 transition-all duration-300 hover:scale-[1.01] shadow-sm hover:shadow-lg hover:shadow-primary-200/30">
            
            {/* Gradient overlay on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${detail.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`}></div>
            
            <div className="relative z-10 p-6 h-full flex flex-col">
              {/* Icon and title section */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-100/80 to-white/80 rounded-xl flex items-center justify-center group-hover:scale-105 transition-all duration-300 border border-primary-200/50">
                  {detail.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 group-hover:text-primary-700 transition-colors duration-300">
                  {detail.title}
                </h3>
              </div>

              {/* Content */}
              <div className="flex-grow">
                <p className="text-neutral-600 group-hover:text-neutral-700 transition-colors duration-300 mb-4 leading-relaxed text-sm">
                  {detail.description}
                </p>

                {/* Enhanced features list */}
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-primary-600 uppercase tracking-wider mb-2">Key Features</h4>
                  <ul className="space-y-2">
                    {detail.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        className="flex items-start text-neutral-600 group-hover:text-neutral-700 transition-colors duration-300"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 mr-3 group-hover:scale-110 transition-transform duration-300"></div>
                        <span className="text-xs">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-400/20 to-transparent group-hover:via-primary-400/40 transition-all duration-300"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceDetails; 