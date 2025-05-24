import React from 'react';
import { defaultAnimations, getStaggeredAnimation } from '../../utils/animations';
import { FiMessageSquare, FiTarget, FiSettings, FiBarChart2 } from 'react-icons/fi';

const ServiceProcess = () => {
  const processSteps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'We begin with a thorough understanding of your needs, challenges, and objectives.',
      icon: <FiMessageSquare size={24} className="text-primary-400" />
    },
    {
      number: '02',
      title: 'Strategic Planning',
      description: 'Our team develops a customized strategy aligned with your goals.',
      icon: <FiTarget size={24} className="text-primary-400" />
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'We execute the plan with precision, ensuring quality and efficiency.',
      icon: <FiSettings size={24} className="text-primary-400" />
    },
    {
      number: '04',
      title: 'Monitoring & Evaluation',
      description: 'Continuous assessment and optimization of outcomes.',
      icon: <FiBarChart2 size={24} className="text-primary-400" />
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {processSteps.map((step, index) => (
        <div
          key={step.number}
          className="group relative"
          {...getStaggeredAnimation(index)}
        >
          <div className="relative bg-neutral-900/30 backdrop-blur-sm rounded-xl p-8 border border-neutral-700/30 hover:border-primary-500/30 transition-all duration-300 h-full">
            <div className="w-14 h-14 bg-primary-500/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
              {step.icon}
            </div>
            <div className="text-primary-400 font-bold text-lg mb-2">
              {step.number}
            </div>
            <h3 className="text-xl font-semibold text-white group-hover:text-primary-400 transition-colors mb-4">
              {step.title}
            </h3>
            <p className="text-neutral-300">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceProcess; 